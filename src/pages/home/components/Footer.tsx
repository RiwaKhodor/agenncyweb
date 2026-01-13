import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const [email, setEmail] = useState('');
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert('Thank you for subscribing!');
    setEmail('');
  };

  const quickLinks = [
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.industries'), href: '#industries' },
    { name: t('footer.caseStudies'), href: '#' },
    { name: t('nav.blog'), href: '#blog' },
    { name: t('footer.careers'), href: '#' },
    { name: t('footer.privacy'), href: '#' }
  ];

  return (
    <footer className="bg-[#1A2B4A] mx-3 sm:mx-4 lg:mx-6 mb-3 sm:mb-4 lg:mb-6 rounded-2xl sm:rounded-3xl overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-12 lg:py-16">
        {/* Upper Section */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
          {/* Brand & Mission Column */}
          <div className="md:col-span-4">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-3 sm:mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Agenncy
            </h3>
            <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 leading-relaxed">
              {t('footer.brand.mission')}
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-500">
                <i className="ri-handshake-line text-white text-xl"></i>
              </div>
              <div>
                <p className="text-white font-bold text-base sm:text-lg">Trusted Partner</p>
                <p className="text-gray-400 text-xs sm:text-sm">Successful Projects</p>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3">
            <h4 className="text-white text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 sm:mb-6">{t('footer.quicklinks')}</h4>
            <div className="space-y-3 sm:space-y-4">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-sm sm:text-base text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Location Column */}
          <div className="md:col-span-3">
            <h4 className="text-white text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 sm:mb-6">{t('footer.visit')}</h4>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-400">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 flex-shrink-0">
                  <i className="ri-map-pin-line text-cyan-400 text-lg"></i>
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">{t('footer.office')}</p>
                  <p className="leading-relaxed">
                    {t('footer.address')}
                  </p>
                </div>
              </div>
              
              <div className="pt-3 sm:pt-4">
                <p className="text-xs text-gray-500 mb-2">{t('footer.hours')}</p>
                <p className="text-sm">{t('footer.hours.time')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
            {/* Quick Contact */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 group">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/20 to-teal-500/20">
                  <i className="ri-phone-line text-cyan-400 text-sm"></i>
                </div>
                <span className="text-white text-sm font-medium hidden sm:inline">030 40522266</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 group">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/20 to-teal-500/20">
                  <i className="ri-phone-line text-cyan-400 text-sm"></i>
                </div>
                <span className="text-white text-sm font-medium hidden sm:inline">0176 72282307</span>
              </div>
            </div>

          

            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <a href="/impressum" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm cursor-pointer whitespace-nowrap">
                {t('footer.imprint')}
              </a>
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm cursor-pointer whitespace-nowrap">
                {t('footer.privacy')}
              </a>
              
             
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
