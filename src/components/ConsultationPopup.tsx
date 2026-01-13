import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface ConsultationPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationPopup({ isOpen, onClose }: ConsultationPopupProps) {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!privacyAccepted) {
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Send to backend API - use current host with port 3001
      const API_URL = import.meta.env.VITE_API_URL || `${window.location.protocol}//${window.location.hostname}:3001`;
      
      const response = await fetch(`${API_URL}/api/consultation`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      // Check if response is ok before parsing JSON
      if (!response.ok) {
        let errorMessage = 'Failed to send email';
        try {
          const errorData = await response.json();
          errorMessage = errorData.error || errorData.details || errorMessage;
        } catch (e) {
          // If JSON parsing fails, use status text
          errorMessage = `Server error: ${response.status} ${response.statusText}`;
        }
        throw new Error(errorMessage);
      }

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || data.details || 'Failed to send email');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setPrivacyAccepted(false);
      setTimeout(() => {
        onClose();
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      console.error('Email sending error:', error);
      // Check if it's a network error (server not running)
      if (error instanceof TypeError && error.message.includes('fetch')) {
        console.error('❌ Backend server is not running or not reachable');
        console.error('💡 Make sure the backend server is running on port 3001');
      }
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Popup */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scaleIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-all hover:rotate-90 duration-300 z-10 cursor-pointer"
        >
          <i className="ri-close-line text-2xl text-gray-700"></i>
        </button>

        {/* Header with Gradient - Much Smaller */}
        <div className="relative bg-gradient-to-br from-cyan-600 via-teal-600 to-emerald-600 px-8 sm:px-12 pt-8 pb-10 rounded-t-3xl overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full mb-2">
              <i className="ri-calendar-check-line text-white text-sm"></i>
              <span className="text-xs font-semibold text-white uppercase tracking-wider">{t('popup.badge')}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {t('popup.title')}
            </h2>
            <p className="text-sm text-white/90">
              {t('popup.description')}
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-8 sm:px-12 py-10" data-readdy-form>
          <div className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                {t('popup.name.label')}
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center">
                  <i className="ri-user-line text-gray-400 text-lg"></i>
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all text-base"
                  placeholder={t('popup.name.placeholder')}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                {t('popup.email.label')}
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center">
                  <i className="ri-mail-line text-gray-400 text-lg"></i>
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all text-base"
                  placeholder={t('popup.email.placeholder')}
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                {t('popup.phone.label')}
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center">
                  <i className="ri-phone-line text-gray-400 text-lg"></i>
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all text-base"
                  placeholder={t('popup.phone.placeholder')}
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                {t('popup.message.label')}
              </label>
              <div className="relative">
                <div className="absolute left-4 top-4 w-5 h-5 flex items-center justify-center">
                  <i className="ri-message-3-line text-gray-400 text-lg"></i>
                </div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={500}
                  rows={4}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all resize-none text-base"
                  placeholder={t('popup.message.placeholder')}
                ></textarea>
                <div className="text-right mt-1 text-xs text-gray-400">
                  {formData.message.length}/500
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-8 p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border-2 border-gray-200">
            <h3 className="text-sm font-bold text-gray-700 mb-4 uppercase tracking-wider">{t('popup.contact.title')}</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-700 group">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
                  <i className="ri-phone-fill text-cyan-600 text-lg"></i>
                </div>
                <span className="font-semibold">030 40522266</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 group">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
                  <i className="ri-phone-fill text-cyan-600 text-lg"></i>
                </div>
                <span className="font-semibold">0176 72282307</span>
              </div>
              <a href="mailto:mail@agenncy.de" className="flex items-center gap-3 text-gray-700 hover:text-cyan-600 transition-colors group cursor-pointer">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white group-hover:bg-cyan-50 transition-all">
                  <i className="ri-mail-fill text-cyan-600 text-lg"></i>
                </div>
                <span className="font-semibold">mail@agenncy.de</span>
              </a>
            </div>
          </div>

          {/* Privacy Policy Checkbox */}
          <div className="mt-6">
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={privacyAccepted}
                onChange={(e) => setPrivacyAccepted(e.target.checked)}
                required
                className="mt-1 w-5 h-5 rounded border-2 border-gray-300 text-[#6B7F39] focus:ring-2 focus:ring-[#6B7F39]/20 cursor-pointer"
              />
              <span className="text-sm text-gray-700 group-hover:text-gray-900">
                {t('popup.privacy.accept')}{' '}
                <a 
                  href="/privacy" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6B7F39] hover:underline font-medium"
                  onClick={(e) => e.stopPropagation()}
                >
                  {t('popup.privacy.policy')}
                </a>
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-8 px-8 py-5 bg-gradient-to-r from-cyan-600 to-teal-600 text-white text-lg font-bold rounded-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 whitespace-nowrap cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <i className="ri-loader-4-line text-2xl animate-spin"></i>
                {t('popup.sending')}
              </>
            ) : submitStatus === 'success' ? (
              <>
                <i className="ri-check-line text-2xl"></i>
                {t('popup.success')}
              </>
            ) : (
              <>
                {t('popup.submit')}
                <i className="ri-arrow-right-line text-2xl"></i>
              </>
            )}
          </button>

          {submitStatus === 'error' && (
            <p className="mt-4 text-center text-red-600 text-sm">
              {t('popup.error')}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
