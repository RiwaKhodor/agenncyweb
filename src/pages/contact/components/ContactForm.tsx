import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!privacyAccepted) {
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Send to backend API
      // For production: Set VITE_API_URL environment variable to your backend URL
      // For local dev: Falls back to localhost:3001
      const API_URL = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? `http://localhost:3001` : `${window.location.protocol}//${window.location.hostname}`);
      
      let response: Response;
      try {
        response = await fetch(`${API_URL}/api/contact`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            service: formData.service,
            budget: formData.budget,
            message: formData.message,
          }),
        });
      } catch (fetchError) {
        // Network error - server not reachable
        console.error('❌ Network error:', fetchError);
        if (fetchError instanceof TypeError && (fetchError.message.includes('fetch') || fetchError.message.includes('Failed to fetch'))) {
          throw new Error('Unable to connect to server. Please check your connection or contact us directly.');
        }
        throw fetchError;
      }

      // Check if response is ok before parsing JSON
      if (!response.ok) {
        let errorMessage = 'Failed to send email';
        try {
          const errorData = await response.json();
          errorMessage = errorData.error || errorData.details || errorMessage;
        } catch (parseError) {
          // If JSON parsing fails, use status text
          errorMessage = `Server error: ${response.status} ${response.statusText}`;
        }
        throw new Error(errorMessage);
      }

      let data;
      try {
        data = await response.json();
      } catch (parseError) {
        throw new Error('Invalid response from server. Please try again.');
      }

      if (!data.success) {
        throw new Error(data.error || data.details || 'Failed to send email');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', service: '', budget: '', message: '' });
      setPrivacyAccepted(false);
    } catch (error) {
      console.error('Email sending error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          {t('contact.form.title')}
        </h2>
        <p className="text-gray-600">
          {t('contact.form.description')}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            {t('contact.form.name')} *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#6B7F39] focus:ring-2 focus:ring-[#6B7F39]/20 outline-none transition-all"
            placeholder={t('contact.form.name')}
          />
        </div>

        {/* Email & Phone */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              {t('contact.form.email')} *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#6B7F39] focus:ring-2 focus:ring-[#6B7F39]/20 outline-none transition-all"
              placeholder={t('contact.form.email')}
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              {t('contact.form.phone')} *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#6B7F39] focus:ring-2 focus:ring-[#6B7F39]/20 outline-none transition-all"
              placeholder={t('contact.form.phone')}
            />
          </div>
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            {t('contact.form.company')}
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#6B7F39] focus:ring-2 focus:ring-[#6B7F39]/20 outline-none transition-all"
            placeholder={t('contact.form.company')}
          />
        </div>

        {/* Service & Budget */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
              {t('contact.form.service')}
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#6B7F39] focus:ring-2 focus:ring-[#6B7F39]/20 outline-none transition-all"
            >
              <option value="">{t('contact.form.selectService')}</option>
              <option value="seo">SEO Optimization</option>
              <option value="social">Social Media Marketing</option>
              <option value="ppc">Google Ads (PPC)</option>
              <option value="email">Email Marketing</option>
              <option value="analytics">Analytics & Reporting</option>
              <option value="branding">Branding & Design</option>
              <option value="content">Content Marketing</option>
              <option value="web">Web Development</option>
            </select>
          </div>
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
              {t('contact.form.budget')}
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#6B7F39] focus:ring-2 focus:ring-[#6B7F39]/20 outline-none transition-all"
            >
              <option value="">{t('contact.form.selectBudget')}</option>
              <option value="1000-2500">€1,000 - €2,500</option>
              <option value="2500-5000">€2,500 - €5,000</option>
              <option value="5000-10000">€5,000 - €10,000</option>
              <option value="10000+">€10,000+</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            {t('contact.form.message')}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#6B7F39] focus:ring-2 focus:ring-[#6B7F39]/20 outline-none transition-all resize-none"
            placeholder={t('contact.form.message')}
          />
        </div>

        {/* Privacy Policy Checkbox */}
        <div>
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={privacyAccepted}
              onChange={(e) => setPrivacyAccepted(e.target.checked)}
              required
              className="mt-1 w-5 h-5 rounded border-2 border-gray-300 text-[#6B7F39] focus:ring-2 focus:ring-[#6B7F39]/20 cursor-pointer"
            />
            <span className="text-sm text-gray-700 group-hover:text-gray-900">
              {t('contact.form.privacy.accept')}{' '}
              <a 
                href="/privacy" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6B7F39] hover:underline font-medium"
                onClick={(e) => e.stopPropagation()}
              >
                {t('contact.form.privacy.policy')}
              </a>
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-4 bg-gradient-to-br from-[#1A2B4A] to-[#2A3B5A] text-white rounded-full font-medium hover:from-[#2A3B5A] hover:to-[#1A2B4A] transition-all flex items-center justify-center gap-2 whitespace-nowrap shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <i className="ri-loader-4-line animate-spin"></i>
              {t('contact.form.sending') || 'Sending...'}
            </>
          ) : submitStatus === 'success' ? (
            <>
              <i className="ri-check-line"></i>
              {t('contact.form.sent') || 'Message Sent!'}
            </>
          ) : (
            <>
              {t('contact.form.submit')}
              <i className="ri-send-plane-line"></i>
            </>
          )}
        </button>

        {submitStatus === 'error' && (
          <p className="text-sm text-red-600 text-center">
            {t('contact.form.error') || 'Something went wrong. Please try again.'}
          </p>
        )}

        {submitStatus === 'success' && (
          <p className="text-sm text-green-600 text-center">
            {t('contact.form.success') || 'Thank you! We will get back to you soon.'}
          </p>
        )}

        {submitStatus === 'idle' && (
          <p className="text-sm text-gray-500 text-center">
            {t('contact.form.response')}
          </p>
        )}
      </form>
    </div>
  );
}
