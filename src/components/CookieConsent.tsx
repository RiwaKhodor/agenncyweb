import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function CookieConsent() {
  const { t, i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show banner after a short delay
      setTimeout(() => setIsVisible(true), 1000);
    } else {
      // Load saved preferences
      try {
        const savedData = JSON.parse(cookieConsent);
        // Support both old format (just preferences) and new format (with metadata)
        if (savedData.preferences) {
          setPreferences(savedData.preferences);
        } else {
          // Old format - migrate to new format
          setPreferences(savedData);
        }
      } catch (e) {
        // If parsing fails, show banner again
        setIsVisible(true);
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    const consentData = {
      preferences: allAccepted,
      timestamp: new Date().toISOString(),
      version: '1.0',
    };
    setPreferences(allAccepted);
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    const consentData = {
      preferences: onlyNecessary,
      timestamp: new Date().toISOString(),
      version: '1.0',
    };
    setPreferences(onlyNecessary);
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    const consentData = {
      preferences: preferences,
      timestamp: new Date().toISOString(),
      version: '1.0',
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setIsVisible(false);
  };

  const handleTogglePreference = (key: 'analytics' | 'marketing') => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop Overlay */}
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[9998] animate-fadeIn" />
      
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 animate-slideUp">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl border-4 border-gray-200 overflow-hidden">
        {!showPreferences ? (
          // Main Banner View
          <div className="p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
              {/* Icon and Title */}
              <div className="flex items-start gap-4 flex-1">
                <div className="w-12 h-12 rounded-full bg-[#6B7F39]/10 flex items-center justify-center flex-shrink-0">
                  <i className="ri-cookie-line text-2xl text-[#6B7F39]"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {t('cookies.title')}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-2">
                    {t('cookies.description')}
                  </p>
                  <a 
                    href="/privacy" 
                    className="text-sm text-[#6B7F39] hover:underline font-medium"
                  >
                    {t('cookies.learnMore')}
                  </a>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto lg:flex-shrink-0">
                <button
                  onClick={() => setShowPreferences(true)}
                  className="px-6 py-3 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap"
                >
                  {t('cookies.customize')}
                </button>
                <button
                  onClick={handleRejectAll}
                  className="px-6 py-3 text-sm font-medium text-gray-700 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap"
                >
                  {t('cookies.reject')}
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-3 text-sm font-medium text-white bg-[#6B7F39] rounded-lg hover:bg-[#5a6b2f] transition-colors whitespace-nowrap"
                >
                  {t('cookies.accept')}
                </button>
              </div>
            </div>
          </div>
        ) : (
          // Preferences View
          <div className="p-6 lg:p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {t('cookies.preferences.title')}
              </h3>
              <p className="text-sm text-gray-600">
                {t('cookies.preferences.description')}
              </p>
            </div>

            {/* Cookie Categories */}
            <div className="space-y-4 mb-6">
              {/* Necessary Cookies */}
              <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-bold text-gray-900">
                      {t('cookies.preferences.necessary.title')}
                    </h4>
                    <span className="text-xs px-2 py-1 bg-[#6B7F39]/10 text-[#6B7F39] rounded-full">
                      {t('cookies.preferences.required')}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">
                    {t('cookies.preferences.necessary.description')}
                  </p>
                  <p className="text-xs text-gray-500">
                    {t('cookies.preferences.duration')}: {t('cookies.preferences.duration.session')}
                  </p>
                </div>
                <div className="ml-4">
                  <div className="w-12 h-6 bg-[#6B7F39] rounded-full flex items-center justify-end px-1 cursor-not-allowed opacity-50">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-start justify-between p-4 bg-white border-2 border-gray-200 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 mb-2">
                    {t('cookies.preferences.analytics.title')}
                  </h4>
                  <p className="text-sm text-gray-600 mb-1">
                    {t('cookies.preferences.analytics.description')}
                  </p>
                  <p className="text-xs text-gray-500">
                    {t('cookies.preferences.duration')}: {t('cookies.preferences.duration.oneYear')}
                  </p>
                </div>
                <div className="ml-4">
                  <button
                    onClick={() => handleTogglePreference('analytics')}
                    className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                      preferences.analytics
                        ? 'bg-[#6B7F39] justify-end'
                        : 'bg-gray-300 justify-start'
                    } px-1`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </button>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-start justify-between p-4 bg-white border-2 border-gray-200 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 mb-2">
                    {t('cookies.preferences.marketing.title')}
                  </h4>
                  <p className="text-sm text-gray-600 mb-1">
                    {t('cookies.preferences.marketing.description')}
                  </p>
                  <p className="text-xs text-gray-500">
                    {t('cookies.preferences.duration')}: {t('cookies.preferences.duration.oneYear')}
                  </p>
                </div>
                <div className="ml-4">
                  <button
                    onClick={() => handleTogglePreference('marketing')}
                    className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                      preferences.marketing
                        ? 'bg-[#6B7F39] justify-end'
                        : 'bg-gray-300 justify-start'
                    } px-1`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <button
                onClick={() => setShowPreferences(false)}
                className="px-6 py-3 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                {t('cookies.preferences.cancel')}
              </button>
              <button
                onClick={handleSavePreferences}
                className="px-6 py-3 text-sm font-medium text-white bg-[#6B7F39] rounded-lg hover:bg-[#5a6b2f] transition-colors"
              >
                {t('cookies.preferences.save')}
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
      </div>
    </>
  );
}

