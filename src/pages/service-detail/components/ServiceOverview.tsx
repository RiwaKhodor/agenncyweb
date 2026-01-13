import { useTranslation } from 'react-i18next';

interface ServiceOverviewProps {
  service: any;
  isGerman: boolean;
}

export default function ServiceOverview({ service, isGerman }: ServiceOverviewProps) {
  const { t } = useTranslation();
  
  return (
    <section id="overview" className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-cyan-50/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-emerald-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 rounded-full mb-6">
              <i className="ri-lightbulb-flash-line text-cyan-600 text-lg"></i>
              <span className="text-sm font-semibold text-cyan-700 uppercase tracking-wider">{t('serviceDetail.overview.badge')}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {isGerman && service.overview.titleDe ? service.overview.titleDe : service.overview.title}
            </h2>

            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
              {isGerman && service.overview.descriptionDe ? service.overview.descriptionDe : service.overview.description}
            </p>

            <div className="space-y-4">
              {service.benefits.slice(0, 3).map((benefit: any, index: number) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <i className={`${benefit.icon} text-white text-xl`}></i>
                  </div>
                  <div className="pt-1">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">{isGerman && benefit.titleDe ? benefit.titleDe : benefit.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600">{isGerman && benefit.descriptionDe ? benefit.descriptionDe : benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Animated Visual */}
          <div className="relative h-[400px] sm:h-[450px] lg:h-[600px]">
            {/* Desktop: Animated Floating Cards */}
            <div className="hidden lg:block absolute inset-0 flex items-center justify-center">
              {/* Center Circle */}
              <div className="absolute w-32 h-32 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full shadow-2xl flex items-center justify-center z-20 animate-pulse">
                <i className="ri-rocket-line text-white text-5xl"></i>
              </div>

              {/* Orbiting Cards */}
              <div className="absolute w-full h-full animate-spin-slow">
                {/* Card 1 - Top */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-white rounded-2xl shadow-xl p-4 flex flex-col items-center justify-center border-2 border-cyan-200 hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center mb-2">
                    <i className="ri-line-chart-line text-white text-2xl"></i>
                  </div>
                  <p className="text-sm font-bold text-gray-900 text-center">Growth</p>
                </div>

                {/* Card 2 - Right */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-40 h-40 bg-white rounded-2xl shadow-xl p-4 flex flex-col items-center justify-center border-2 border-teal-200 hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center mb-2">
                    <i className="ri-trophy-line text-white text-2xl"></i>
                  </div>
                  <p className="text-sm font-bold text-gray-900 text-center">Success</p>
                </div>

                {/* Card 3 - Bottom */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-white rounded-2xl shadow-xl p-4 flex flex-col items-center justify-center border-2 border-emerald-200 hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center mb-2">
                    <i className="ri-team-line text-white text-2xl"></i>
                  </div>
                  <p className="text-sm font-bold text-gray-900 text-center">Team</p>
                </div>

                {/* Card 4 - Left */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-40 h-40 bg-white rounded-2xl shadow-xl p-4 flex flex-col items-center justify-center border-2 border-blue-200 hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-2">
                    <i className="ri-lightbulb-line text-white text-2xl"></i>
                  </div>
                  <p className="text-sm font-bold text-gray-900 text-center">Innovation</p>
                </div>
              </div>

              {/* Floating Particles */}
              <div className="absolute top-20 left-20 w-4 h-4 bg-cyan-400 rounded-full animate-float-slow"></div>
              <div className="absolute top-40 right-20 w-3 h-3 bg-teal-400 rounded-full animate-float-medium"></div>
              <div className="absolute bottom-32 left-32 w-5 h-5 bg-emerald-400 rounded-full animate-float-fast"></div>
              <div className="absolute bottom-20 right-32 w-4 h-4 bg-blue-400 rounded-full animate-float-slow"></div>
            </div>

            {/* Mobile: Creative Wave Animation */}
            <div className="lg:hidden relative h-full w-full overflow-hidden">
              {/* Central Pulsing Core */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full shadow-2xl flex items-center justify-center z-10 animate-pulse">
                <i className="ri-rocket-line text-white text-2xl sm:text-3xl"></i>
              </div>

              {/* Flowing Wave Cards */}
              <div className="absolute top-0 left-0 w-full h-full">
                {/* Growth - Top Left, flowing down */}
                <div className="absolute top-8 left-4 w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-xl shadow-lg p-3 flex flex-col items-center justify-center border-2 border-cyan-200 animate-wave-1">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center mb-1">
                    <i className="ri-line-chart-line text-white text-lg"></i>
                  </div>
                  <p className="text-[10px] sm:text-xs font-bold text-gray-900 text-center">Growth</p>
                </div>

                {/* Innovation - Top Right, flowing down */}
                <div className="absolute top-12 right-4 w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-xl shadow-lg p-3 flex flex-col items-center justify-center border-2 border-blue-200 animate-wave-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center mb-1">
                    <i className="ri-lightbulb-line text-white text-lg"></i>
                  </div>
                  <p className="text-[10px] sm:text-xs font-bold text-gray-900 text-center">Innovation</p>
                </div>

                {/* Success - Bottom Left, flowing up */}
                <div className="absolute bottom-12 left-6 w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-xl shadow-lg p-3 flex flex-col items-center justify-center border-2 border-teal-200 animate-wave-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center mb-1">
                    <i className="ri-trophy-line text-white text-lg"></i>
                  </div>
                  <p className="text-[10px] sm:text-xs font-bold text-gray-900 text-center">Success</p>
                </div>

                {/* Team - Bottom Right, flowing up */}
                <div className="absolute bottom-8 right-6 w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-xl shadow-lg p-3 flex flex-col items-center justify-center border-2 border-emerald-200 animate-wave-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center mb-1">
                    <i className="ri-team-line text-white text-lg"></i>
                  </div>
                  <p className="text-[10px] sm:text-xs font-bold text-gray-900 text-center">Team</p>
                </div>
              </div>

              {/* Floating Particles */}
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-float-slow opacity-60"></div>
              <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-teal-400 rounded-full animate-float-medium opacity-60" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-emerald-400 rounded-full animate-float-fast opacity-60" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 right-1/3 w-2.5 h-2.5 bg-blue-400 rounded-full animate-float-slow opacity-60" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-medium {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-30px);
          }
        }

        @keyframes float-fast {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-40px);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-float-slow {
          animation: float-slow 3s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: float-medium 4s ease-in-out infinite;
        }

        .animate-float-fast {
          animation: float-fast 2s ease-in-out infinite;
        }

        @keyframes wave-1 {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(10px, 15px) rotate(5deg);
          }
          50% {
            transform: translate(-5px, 25px) rotate(-3deg);
          }
          75% {
            transform: translate(8px, 20px) rotate(4deg);
          }
        }

        @keyframes wave-2 {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(-12px, 18px) rotate(-4deg);
          }
          50% {
            transform: translate(6px, 30px) rotate(3deg);
          }
          75% {
            transform: translate(-8px, 22px) rotate(-2deg);
          }
        }

        @keyframes wave-3 {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(8px, -15px) rotate(3deg);
          }
          50% {
            transform: translate(-6px, -25px) rotate(-4deg);
          }
          75% {
            transform: translate(10px, -20px) rotate(2deg);
          }
        }

        @keyframes wave-4 {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(-10px, -18px) rotate(-3deg);
          }
          50% {
            transform: translate(7px, -28px) rotate(4deg);
          }
          75% {
            transform: translate(-9px, -22px) rotate(-2deg);
          }
        }

        .animate-wave-1 {
          animation: wave-1 4s ease-in-out infinite;
        }

        .animate-wave-2 {
          animation: wave-2 4.5s ease-in-out infinite;
        }

        .animate-wave-3 {
          animation: wave-3 5s ease-in-out infinite;
        }

        .animate-wave-4 {
          animation: wave-4 4.2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
