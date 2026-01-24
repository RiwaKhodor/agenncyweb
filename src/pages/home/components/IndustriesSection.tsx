import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import ConsultationPopup from '../../../components/ConsultationPopup';

interface Industry {
  name: string;
  description: string;
  icon: string;
  color: string;
  bgGradient: string;
  slug: string;
}

export default function IndustriesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set visibility based on whether element is intersecting
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const industries: Industry[] = [
    {
      name: t('industries.ecommerce'),
      description: t('industries.ecommerce.desc'),
      icon: 'ri-shopping-cart-line',
      color: 'from-cyan-500 to-teal-500',
      bgGradient: 'from-cyan-50 to-teal-50',
      slug: 'ecommerce'
    },
    {
      name: t('industries.festivals'),
      description: t('industries.festivals.desc'),
      icon: 'ri-music-line',
      color: 'from-emerald-500 to-green-600',
      bgGradient: 'from-emerald-50 to-green-50',
      slug: 'festivals-events'
    },
    {
      name: t('industries.finance'),
      description: t('industries.finance.desc'),
      icon: 'ri-building-line',
      color: 'from-orange-500 to-amber-500',
      bgGradient: 'from-orange-50 to-amber-50',
      slug: 'finance-banking'
    },
    {
      name: t('industries.health'),
      description: t('industries.health.desc'),
      icon: 'ri-heart-pulse-line',
      color: 'from-sky-500 to-cyan-500',
      bgGradient: 'from-sky-50 to-cyan-50',
      slug: 'healthcare'
    },
    {
      name: t('industries.home'),
      description: t('industries.home.desc'),
      icon: 'ri-home-smile-line',
      color: 'from-violet-500 to-fuchsia-500',
      bgGradient: 'from-violet-50 to-fuchsia-50',
      slug: 'home-services'
    },
    {
      name: t('industries.machines'),
      description: t('industries.machines.desc'),
      icon: 'ri-cpu-line',
      color: 'from-teal-500 to-cyan-600',
      bgGradient: 'from-teal-50 to-cyan-50',
      slug: 'manufacturing'
    },
    {
      name: t('industries.food'),
      description: t('industries.food.desc'),
      icon: 'ri-restaurant-line',
      color: 'from-amber-500 to-orange-600',
      bgGradient: 'from-amber-50 to-orange-50',
      slug: 'food-beverage'
    },
    {
      name: t('industries.education'),
      description: t('industries.education.desc'),
      icon: 'ri-book-open-line',
      color: 'from-rose-500 to-pink-500',
      bgGradient: 'from-rose-50 to-pink-50',
      slug: 'education'
    }
  ];

  const handleIndustryClick = (slug: string) => {
    navigate(`/industries/${slug}`);
  };

  return (
    <>
      <section id="industries" ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-orange-200/20 to-amber-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-full mb-4 sm:mb-6">
              <i className="ri-briefcase-line text-cyan-600 text-base sm:text-lg"></i>
              <span className="text-xs sm:text-sm font-semibold text-cyan-700 uppercase tracking-wider">{t('industries.badge')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {t('industries.heading1')}
              <span className="block bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent mt-2">
                {t('industries.heading2')}
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              {t('industries.description')}
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                onClick={() => handleIndustryClick(industry.slug)}
                className={`group relative bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`,
                  transitionDuration: '800ms'
                }}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Animated Border Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="absolute inset-[2px] bg-white rounded-xl sm:rounded-2xl group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-gray-50/50 transition-all duration-500"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 flex items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br ${industry.color} mb-3 sm:mb-4 lg:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <i className={`${industry.icon} text-xl sm:text-2xl lg:text-3xl text-white`}></i>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4 group-hover:text-gray-900 transition-colors duration-300 leading-tight">
                    {industry.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 line-clamp-3">
                    {industry.description}
                  </p>

                  {/* Hover Arrow */}
                  <div className="mt-3 sm:mt-4 lg:mt-6 flex items-center gap-2 text-transparent bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                    <span className="text-xs sm:text-sm font-semibold">{t('industries.learn')}</span>
                    <i className="ri-arrow-right-line text-base sm:text-lg"></i>
                  </div>
                </div>

                {/* Decorative Corner Element */}
                <div className={`absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-500`}></div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12 sm:mt-16 px-4">
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-4 sm:mb-6">{t('industries.custom')}</p>
            <button 
              onClick={() => setIsPopupOpen(true)}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-600 to-teal-600 text-white text-sm sm:text-base font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              {t('industries.discuss')}
            </button>
          </div>
        </div>
      </section>

      <ConsultationPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
}
