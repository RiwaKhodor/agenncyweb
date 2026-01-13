import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface WorkCategory {
  title: string;
  description: string;
  image: string;
}

export default function WorkGlimpseSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const workCategories: WorkCategory[] = [
    {
      title: t('work.branding'),
      description: t('work.branding.desc'),
      image: 'https://readdy.ai/api/search-image?query=Modern%20minimalist%20branding%20design%20workspace%20with%20logo%20sketches%20color%20palette%20swatches%20brand%20guidelines%20typography%20samples%20clean%20white%20desk%20professional%20brand%20identity%20materials%20studio%20lighting%20creative%20agency%20aesthetic&width=600&height=400&seq=work-branding-glimpse&orientation=landscape'
    },
    {
      title: t('work.webdesign'),
      description: t('work.webdesign.desc'),
      image: 'https://readdy.ai/api/search-image?query=Modern%20responsive%20website%20design%20mockup%20on%20multiple%20devices%20laptop%20tablet%20smartphone%20showing%20clean%20minimalist%20web%20interface%20user-friendly%20layout%20professional%20web%20design%20studio%20bright%20contemporary%20workspace&width=600&height=400&seq=work-webdesign-glimpse&orientation=landscape'
    },
    {
      title: t('work.social'),
      description: t('work.social.desc'),
      image: 'https://readdy.ai/api/search-image?query=Social%20media%20content%20creation%20workspace%20with%20smartphone%20showing%20Instagram%20feed%20colorful%20engaging%20posts%20creative%20graphics%20content%20calendar%20planning%20materials%20modern%20digital%20marketing%20studio%20vibrant%20aesthetic&width=600&height=400&seq=work-social-glimpse&orientation=landscape'
    },
    {
      title: t('work.results'),
      description: t('work.results.desc'),
      image: 'https://readdy.ai/api/search-image?query=Business%20growth%20analytics%20dashboard%20showing%20upward%20trending%20graphs%20charts%20performance%20metrics%20success%20indicators%20data%20visualization%20modern%20office%20workspace%20professional%20results-driven%20aesthetic%20clean%20minimalist%20design&width=600&height=400&seq=work-results-glimpse&orientation=landscape'
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-100/30 to-teal-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-100/30 to-amber-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-full mb-6">
            <i className="ri-gallery-line text-cyan-600 text-lg"></i>
            <span className="text-sm font-semibold text-cyan-700 uppercase tracking-wider">{t('work.badge')}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {t('work.heading1')}
            <span className="block bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent mt-2">
              {t('work.heading2')}
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('work.description')}
          </p>
        </div>

        {/* Work Categories */}
        <div className="space-y-12 sm:space-y-14 lg:space-y-16">
          {workCategories.map((category, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{
                transitionDelay: `${index * 200}ms`,
                transitionDuration: '800ms',
                transition: 'opacity 800ms, transform 800ms'
              }}
            >
              {/* Image - Reduced Height */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative group w-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-500"></div>
                  <div className="relative overflow-hidden rounded-2xl shadow-xl h-48 sm:h-64 lg:h-80">
                    <div className="w-full h-full">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} flex flex-col justify-center`}>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {category.title}
                </h3>
                
                <div className="inline-block mb-4">
                  <div className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl shadow-lg">
                    <h4 className="text-lg sm:text-xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {category.title === t('work.branding') && t('work.branding.subtitle')}
                      {category.title === t('work.webdesign') && t('work.webdesign.subtitle')}
                      {category.title === t('work.social') && t('work.social.subtitle')}
                      {category.title === t('work.results') && t('work.results.subtitle')}
                    </h4>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">
                  {category.description}
                </p>

                {/* Feature Points */}
                <div className="space-y-2.5">
                  {category.title === t('work.branding') && (
                    <>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex-shrink-0 mt-1">
                          <i className="ri-check-line text-white text-sm"></i>
                        </div>
                        <p className="text-gray-700 text-sm">{t('work.branding.point1')}</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex-shrink-0 mt-1">
                          <i className="ri-check-line text-white text-sm"></i>
                        </div>
                        <p className="text-gray-700 text-sm">{t('work.branding.point2')}</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex-shrink-0 mt-1">
                          <i className="ri-check-line text-white text-sm"></i>
                        </div>
                        <p className="text-gray-700 text-sm">{t('work.branding.point3')}</p>
                      </div>
                    </>
                  )}
                  {category.title === t('work.webdesign') && (
                    <>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex-shrink-0 mt-1">
                          <i className="ri-check-line text-white text-sm"></i>
                        </div>
                        <p className="text-gray-700 text-sm">{t('work.webdesign.point1')}</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex-shrink-0 mt-1">
                          <i className="ri-check-line text-white text-sm"></i>
                        </div>
                        <p className="text-gray-700 text-sm">{t('work.webdesign.point2')}</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex-shrink-0 mt-1">
                          <i className="ri-check-line text-white text-sm"></i>
                        </div>
                        <p className="text-gray-700 text-sm">{t('work.webdesign.point3')}</p>
                      </div>
                    </>
                  )}
                  {category.title === t('work.social') && (
                    <>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex-shrink-0 mt-1">
                          <i className="ri-check-line text-white text-sm"></i>
                        </div>
                        <p className="text-gray-700 text-sm">{t('work.social.point1')}</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex-shrink-0 mt-1">
                          <i className="ri-check-line text-white text-sm"></i>
                        </div>
                        <p className="text-gray-700 text-sm">{t('work.social.point2')}</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex-shrink-0 mt-1">
                          <i className="ri-check-line text-white text-sm"></i>
                        </div>
                        <p className="text-gray-700 text-sm">{t('work.social.point3')}</p>
                      </div>
                    </>
                  )}
                  {category.title === t('work.results') && (
                    <>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex-shrink-0 mt-1">
                          <i className="ri-check-line text-white text-sm"></i>
                        </div>
                        <p className="text-gray-700 text-sm">{t('work.results.point1')}</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex-shrink-0 mt-1">
                          <i className="ri-check-line text-white text-sm"></i>
                        </div>
                        <p className="text-gray-700 text-sm">{t('work.results.point2')}</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex-shrink-0 mt-1">
                          <i className="ri-check-line text-white text-sm"></i>
                        </div>
                        <p className="text-gray-700 text-sm">{t('work.results.point3')}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
