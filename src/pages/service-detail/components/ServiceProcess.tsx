import { useTranslation } from 'react-i18next';

interface ServiceProcessProps {
  service: any;
  isGerman: boolean;
}

export default function ServiceProcess({ service, isGerman }: ServiceProcessProps) {
  const { t } = useTranslation();

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-block px-4 py-2 bg-cyan-50 rounded-full mb-6">
            <span className="text-cyan-600 text-sm font-semibold uppercase tracking-wider">
              {t('serviceDetail.process.subtitle')}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('serviceDetail.process.title')}
          </h2>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Desktop Connection Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-200 via-teal-200 to-cyan-200 transform -translate-x-1/2"></div>

          {/* Mobile Connection Line */}
          <div className="lg:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-200 via-teal-200 to-cyan-200"></div>

          <div className="space-y-8 lg:space-y-16">
            {service.process.map((step: any, index: number) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Mobile: Content aligned to the right of the line */}
                <div className="lg:hidden flex-1 ml-20">
                  <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className="text-3xl font-bold bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent mb-2">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {isGerman && step.titleDe ? step.titleDe : step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {isGerman && step.descriptionDe ? step.descriptionDe : step.description}
                    </p>
                  </div>
                </div>

                {/* Desktop: Content */}
                <div className="hidden lg:block flex-1 lg:text-right" style={{ textAlign: index % 2 === 0 ? 'right' : 'left' }}>
                  <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className="text-5xl font-bold bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent mb-2 drop-shadow-lg" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.15)' }}>
                      {step.step}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {isGerman && step.titleDe ? step.titleDe : step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {isGerman && step.descriptionDe ? step.descriptionDe : step.description}
                    </p>
                  </div>
                </div>

                {/* Center Circle */}
                <div className="relative flex-shrink-0 lg:flex-shrink-0">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center shadow-xl relative z-10">
                    <i className={`${step.icon} text-xl lg:text-3xl text-white`}></i>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-teal-400 blur-xl opacity-50 animate-pulse"></div>
                </div>

                {/* Decorative Blurry Element on the other side - Desktop only */}
                <div className="flex-1 hidden lg:block">
                  <div className="relative h-48 flex items-center justify-center">
                    {/* Main blur circle */}
                    <div 
                      className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-cyan-300/40 to-teal-300/40 blur-3xl animate-pulse"
                      style={{ animationDuration: '3s', animationDelay: `${index * 0.2}s` }}
                    ></div>
                    {/* Secondary blur circle */}
                    <div 
                      className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-teal-400/30 to-cyan-400/30 blur-2xl animate-pulse"
                      style={{ animationDuration: '4s', animationDelay: `${index * 0.3}s` }}
                    ></div>
                    {/* Accent blur circle */}
                    <div 
                      className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-teal-500/20 blur-xl animate-pulse"
                      style={{ animationDuration: '2.5s', animationDelay: `${index * 0.4}s` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
