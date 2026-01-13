import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function TrustBar() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const commitments = [
    { 
      titleKey: 'trust.commitment.clear.title',
      descKey: 'trust.commitment.clear.desc',
      icon: 'ri-file-list-3-line' 
    },
    { 
      titleKey: 'trust.commitment.custom.title',
      descKey: 'trust.commitment.custom.desc',
      icon: 'ri-palette-line' 
    },
    { 
      titleKey: 'trust.commitment.support.title',
      descKey: 'trust.commitment.support.desc',
      icon: 'ri-customer-service-2-line' 
    },
    { 
      titleKey: 'trust.commitment.fast.title',
      descKey: 'trust.commitment.fast.desc',
      icon: 'ri-time-line' 
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-br from-cyan-100/40 to-teal-100/40 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/3"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-br from-orange-100/40 to-amber-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-full mb-5">
            <i className="ri-shield-check-line text-cyan-600 text-lg"></i>
            <span className="text-sm font-semibold text-cyan-700 uppercase tracking-wider">{t('trust.badge')}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {t('trust.title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('trust.description')}
          </p>
        </div>

        {/* Commitments Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {commitments.map((commitment, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Gradient Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-teal-500/20 to-cyan-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
              
              {/* Content */}
              <div className="relative z-10 text-center">
                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-cyan-100 to-teal-100 rounded-xl mb-6 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <i className={`${commitment.icon} text-3xl bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent`}></i>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-teal-600 group-hover:bg-clip-text transition-all duration-500" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {t(commitment.titleKey)}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t(commitment.descKey)}
                </p>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
            </div>
          ))}
        </div>

        {/* Bottom Badge */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-cyan-50 to-teal-50 rounded-full border border-cyan-100">
            <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full">
              <i className="ri-check-double-line text-xl text-white"></i>
            </div>
            <span className="text-base font-medium text-gray-700">{t('trust.trusted')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
