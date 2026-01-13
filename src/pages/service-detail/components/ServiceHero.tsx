import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

interface ServiceHeroProps {
  service: any;
  isGerman: boolean;
  onOpenPopup: () => void;
}

export default function ServiceHero({ service, isGerman, onOpenPopup }: ServiceHeroProps) {
  const { t } = useTranslation();

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dark Navy to Blue Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"></div>
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        {/* Animated Logo */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="animate-float-slow opacity-5">
            <img 
              src="https://static.readdy.ai/image/78648d2a16546c8a94747f62bf26b938/9ab1c79f260f89c8b0df61a7a1ec1fbb.png"
              alt="Logo Animation"
              className="w-[600px] h-[600px] object-contain animate-spin-slow"
            />
          </div>
        </div>

        {/* Subtle Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-28 lg:py-32">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <i className={`${service.icon} text-white text-lg`}></i>
            <span className="text-white text-sm font-medium">{t('serviceDetail.hero.badge')}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            {isGerman ? service.titleDe : service.title}
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
            {isGerman ? service.shortDescDe : service.shortDesc}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                const overviewSection = document.getElementById('overview');
                if (overviewSection) {
                  overviewSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-full text-base font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap"
            >
              {t('serviceDetail.hero.cta')}
              <i className="ri-arrow-right-line ml-2 text-lg"></i>
            </button>
            <button
              onClick={onOpenPopup}
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full text-base font-semibold hover:bg-white/20 transition-all border border-white/30 cursor-pointer whitespace-nowrap shadow-sm"
            >
              {t('serviceDetail.hero.consultation')}
              <i className="ri-phone-line ml-2 text-lg"></i>
            </button>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
      </section>
    </>
  );
}
