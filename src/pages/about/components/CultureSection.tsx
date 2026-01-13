import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function CultureSection() {
  const { t } = useTranslation();

  const perks = [
    {
      icon: 'ri-home-office-line',
      titleKey: 'about.culture.flexible.title',
      descKey: 'about.culture.flexible.desc'
    },
    {
      icon: 'ri-calendar-check-line',
      titleKey: 'about.culture.pto.title',
      descKey: 'about.culture.pto.desc'
    },
    {
      icon: 'ri-graduation-cap-line',
      titleKey: 'about.culture.learning.title',
      descKey: 'about.culture.learning.desc'
    },
    {
      icon: 'ri-heart-pulse-line',
      titleKey: 'about.culture.health.title',
      descKey: 'about.culture.health.desc'
    },
    {
      icon: 'ri-team-line',
      titleKey: 'about.culture.events.title',
      descKey: 'about.culture.events.desc'
    },
    {
      icon: 'ri-rocket-line',
      titleKey: 'about.culture.career.title',
      descKey: 'about.culture.career.desc'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Green Animation - Left on Desktop */}
          <div className="relative h-[500px] flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Main Animated Circle */}
              <div className="relative w-80 h-80">
                {/* Outer pulsing rings */}
                <div className="absolute inset-0 rounded-full border-4 border-[#6B7F39]/30 animate-ping"></div>
                <div className="absolute inset-4 rounded-full border-4 border-[#6B7F39]/40 animate-ping" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute inset-8 rounded-full border-4 border-[#6B7F39]/50 animate-ping" style={{ animationDelay: '1s' }}></div>
                
                {/* Rotating gradient circle */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#6B7F39] via-[#7a9542] to-[#5a6b2f] animate-spin-slow opacity-80"></div>
                
                {/* Inner content circle */}
                <div className="absolute inset-8 rounded-full bg-[#6B7F39] flex items-center justify-center shadow-2xl">
                  <div className="text-center">
                    <i className="ri-team-line text-6xl text-white mb-2"></i>
                    <div className="text-white font-bold text-lg">{t('about.culture.together')}</div>
                  </div>
                </div>
                
                {/* Floating particles */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#6B7F39] rounded-full animate-float-slow shadow-lg"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#7a9542] rounded-full animate-float-slow shadow-lg" style={{ animationDelay: '0.7s' }}></div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#5a6b2f] rounded-full animate-float-slow shadow-lg" style={{ animationDelay: '1.4s' }}></div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#6B7F39] rounded-full animate-float-slow shadow-lg" style={{ animationDelay: '2.1s' }}></div>
              </div>
              
              {/* Orbiting elements - Full visibility */}
              <div 
                className="absolute inset-0" 
                style={{ 
                  animation: 'spin-slow 20s linear infinite',
                  transformOrigin: 'center'
                }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-18 h-18 rounded-full bg-gradient-to-br from-[#6B7F39] to-[#7a9542] flex items-center justify-center shadow-xl">
                  <i className="ri-heart-line text-white text-xl"></i>
                </div>
              </div>
              
              <div 
                className="absolute inset-0" 
                style={{ 
                  animation: 'spin-slow 25s linear infinite reverse',
                  transformOrigin: 'center'
                }}
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-[#7a9542] to-[#5a6b2f] flex items-center justify-center shadow-xl">
                  <i className="ri-lightbulb-flash-line text-white text-lg"></i>
                </div>
              </div>
              
              <div 
                className="absolute inset-0" 
                style={{ 
                  animation: 'spin-slow 30s linear infinite',
                  transformOrigin: 'center'
                }}
              >
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-[#5a6b2f] to-[#6B7F39] flex items-center justify-center shadow-xl">
                  <i className="ri-rocket-line text-white text-lg"></i>
                </div>
              </div>
              
              <div 
                className="absolute inset-0" 
                style={{ 
                  animation: 'spin-slow 35s linear infinite reverse',
                  transformOrigin: 'center'
                }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-[#6B7F39] to-[#7a9542] flex items-center justify-center shadow-xl">
                  <i className="ri-star-line text-white text-base"></i>
                </div>
              </div>

              {/* Additional decorative elements */}
              <div className="absolute top-1/4 right-1/4 w-6 h-6 bg-[#6B7F39]/20 rounded-full animate-pulse"></div>
              <div className="absolute bottom-1/4 left-1/4 w-5 h-5 bg-[#7a9542]/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Content - Right on Desktop */}
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#6B7F39]/10 rounded-full mb-6">
              <i className="ri-heart-line text-[#6B7F39]"></i>
              <span className="text-sm font-medium text-[#6B7F39]">{t('about.culture.badge')}</span>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('about.culture.title')}
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t('about.culture.description')}
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {perks.map((perk, index) => (
                <div key={index} className="flex items-start gap-4 justify-start">
                  <div className="w-12 h-12 rounded-lg bg-[#6B7F39]/10 flex items-center justify-center flex-shrink-0">
                    <i className={`${perk.icon} text-xl text-[#6B7F39]`}></i>
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-gray-900 mb-1">{t(perk.titleKey)}</h3>
                    <p className="text-sm text-gray-600">{t(perk.descKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout - Animation First, Perks Below */}
        <div className="lg:hidden">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#6B7F39]/10 rounded-full mb-6">
              <i className="ri-heart-line text-[#6B7F39]"></i>
              <span className="text-sm font-medium text-[#6B7F39]">{t('about.culture.badge')}</span>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t('about.culture.title')}
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t('about.culture.description')}
            </p>
          </div>

          {/* Animation Above */}
          <div className="relative h-[300px] sm:h-[400px] flex items-center justify-center mb-10">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Main Animated Circle */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64">
                {/* Outer pulsing rings */}
                <div className="absolute inset-0 rounded-full border-2 sm:border-3 border-[#6B7F39]/30 animate-ping"></div>
                <div className="absolute inset-2 sm:inset-3 rounded-full border-2 sm:border-3 border-[#6B7F39]/40 animate-ping" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute inset-4 sm:inset-6 rounded-full border-2 sm:border-3 border-[#6B7F39]/50 animate-ping" style={{ animationDelay: '1s' }}></div>
                
                {/* Rotating gradient circle */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#6B7F39] via-[#7a9542] to-[#5a6b2f] animate-spin-slow opacity-80"></div>
                
                {/* Inner content circle */}
                <div className="absolute inset-4 sm:inset-6 rounded-full bg-[#6B7F39] flex items-center justify-center shadow-2xl">
                  <div className="text-center">
                    <i className="ri-team-line text-3xl sm:text-4xl lg:text-6xl text-white mb-1 sm:mb-2"></i>
                    <div className="text-white font-bold text-xs sm:text-sm lg:text-lg">{t('about.culture.together')}</div>
                  </div>
                </div>
                
                {/* Floating particles */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 bg-[#6B7F39] rounded-full animate-float-slow shadow-lg"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 bg-[#7a9542] rounded-full animate-float-slow shadow-lg" style={{ animationDelay: '0.7s' }}></div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 bg-[#5a6b2f] rounded-full animate-float-slow shadow-lg" style={{ animationDelay: '1.4s' }}></div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 bg-[#6B7F39] rounded-full animate-float-slow shadow-lg" style={{ animationDelay: '2.1s' }}></div>
              </div>
              
              {/* Orbiting elements - Full visibility */}
              <div 
                className="absolute inset-0" 
                style={{ 
                  animation: 'spin-slow 20s linear infinite',
                  transformOrigin: 'center'
                }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#6B7F39] to-[#7a9542] flex items-center justify-center shadow-xl">
                  <i className="ri-heart-line text-white text-base sm:text-lg"></i>
                </div>
              </div>
              
              <div 
                className="absolute inset-0" 
                style={{ 
                  animation: 'spin-slow 25s linear infinite reverse',
                  transformOrigin: 'center'
                }}
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#7a9542] to-[#5a6b2f] flex items-center justify-center shadow-xl">
                  <i className="ri-lightbulb-flash-line text-white text-sm sm:text-base"></i>
                </div>
              </div>
              
              <div 
                className="absolute inset-0" 
                style={{ 
                  animation: 'spin-slow 30s linear infinite',
                  transformOrigin: 'center'
                }}
              >
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-gradient-to-br from-[#5a6b2f] to-[#6B7F39] flex items-center justify-center shadow-xl">
                  <i className="ri-rocket-line text-white text-sm sm:text-base"></i>
                </div>
              </div>
              
              <div 
                className="absolute inset-0" 
                style={{ 
                  animation: 'spin-slow 35s linear infinite reverse',
                  transformOrigin: 'center'
                }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#6B7F39] to-[#7a9542] flex items-center justify-center shadow-xl">
                  <i className="ri-star-line text-white text-xs sm:text-sm"></i>
                </div>
              </div>

              {/* Additional decorative elements */}
              <div className="absolute top-1/4 right-1/4 w-6 h-6 bg-[#6B7F39]/20 rounded-full animate-pulse"></div>
              <div className="absolute bottom-1/4 left-1/4 w-5 h-5 bg-[#7a9542]/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Perks Grid - 2 columns */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {perks.map((perk, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-lg bg-[#6B7F39]/10 flex items-center justify-center flex-shrink-0">
                  <i className={`${perk.icon} text-xl text-[#6B7F39]`}></i>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-gray-900 mb-1 text-sm">{t(perk.titleKey)}</h3>
                  <p className="text-xs text-gray-600 leading-tight">{t(perk.descKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
