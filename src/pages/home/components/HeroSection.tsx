import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ConsultationPopup from '../../../components/ConsultationPopup';

export default function HeroSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { t } = useTranslation();

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Premium%20abstract%20gradient%20background%20with%20elegant%20flowing%20waves%20smooth%20liquid%20motion%20sophisticated%20holographic%20colors%20deep%20navy%20blue%20turquoise%20cyan%20gold%20accents%20modern%20minimalist%20professional%20corporate%20design%20clean%20aesthetic%20futuristic%20digital%20art%20high%20quality%20luxury%20brand%20visual%20identity%20contemporary%20business%20style%20refined%20elegant&width=1920&height=1080&seq=hero-bg-agency-premium-v2&orientation=landscape')`
          }}
        ></div>

        {/* Professional Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-blue-900/50 to-cyan-900/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

        {/* Subtle Animated Elements */}
        <div className="absolute top-1/4 right-1/4 w-48 h-48 lg:w-96 lg:h-96 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>

        {/* Premium Badge - Lowered */}
        <div className="absolute top-20 sm:top-24 left-1/2 transform -translate-x-1/2 z-10 px-4">
          <div className="px-4 sm:px-6 lg:px-8 py-2 lg:py-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl">
            <div className="flex items-center gap-2 lg:gap-3">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <p className="text-white text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap">{t('hero.badge')}</p>
            </div>
          </div>
        </div>

        {/* Hero Content - Lowered */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 sm:pt-36 pb-12 sm:pb-16">
          <div className="text-center max-w-6xl">
            {/* Main Headline */}
            <div className="mb-3 lg:mb-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-2 tracking-tight leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {t('hero.title1')}
              </h1>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent mb-2 tracking-tight leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {t('hero.title2')}
              </h1>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {t('hero.title3')}
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-white/90 text-sm sm:text-base lg:text-lg font-light max-w-3xl mx-auto mb-5 lg:mb-7 leading-relaxed tracking-wide px-4">
              {t('hero.description')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-10 sm:mb-12">
              <button
                onClick={scrollToServices}
                className="w-full sm:w-auto px-8 sm:px-10 lg:px-12 py-3 sm:py-4 lg:py-5 bg-white text-black rounded-full text-base sm:text-lg font-bold hover:bg-gray-100 transition-all hover:scale-105 flex items-center justify-center gap-2 sm:gap-3 whitespace-nowrap cursor-pointer"
              >
                {t('hero.discover')}
                <i className="ri-arrow-right-line text-xl sm:text-2xl"></i>
              </button>
              <button
                onClick={() => setIsPopupOpen(true)}
                className="w-full sm:w-auto px-8 sm:px-10 lg:px-12 py-3 sm:py-4 lg:py-5 bg-transparent border-2 border-white text-white rounded-full text-base sm:text-lg font-bold hover:bg-white hover:text-black transition-all hover:scale-105 flex items-center justify-center gap-2 sm:gap-3 whitespace-nowrap cursor-pointer"
              >
                {t('hero.schedule')}
                <i className="ri-calendar-line text-xl sm:text-2xl"></i>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12 text-white/80 px-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                  <i className="ri-lightbulb-flash-line text-xl lg:text-2xl text-cyan-400"></i>
                </div>
                <div className="text-left">
                  <p className="text-xs lg:text-sm text-white/70">{t('hero.innovative')}</p>
                </div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/20"></div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                  <i className="ri-shield-check-line text-xl lg:text-2xl text-cyan-400"></i>
                </div>
                <div className="text-left">
                  <p className="text-xs lg:text-sm text-white/70">{t('hero.trusted')}</p>
                </div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/20"></div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                  <i className="ri-rocket-line text-xl lg:text-2xl text-cyan-400"></i>
                </div>
                <div className="text-left">
                  <p className="text-xs lg:text-sm text-white/70">{t('hero.growth')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
}
