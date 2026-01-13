import { useTranslation } from 'react-i18next';

interface AboutSectionProps {
  onConsultationClick: () => void;
}

export default function AboutSection({ onConsultationClick }: AboutSectionProps) {
  const { t } = useTranslation();

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-orange-200/20 to-amber-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-full mb-6">
            <i className="ri-team-line text-cyan-600 text-lg"></i>
            <span className="text-sm font-semibold text-cyan-700 uppercase tracking-wider">{t('about.badge')}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {t('about.heading1')}
            <span className="block bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent mt-2">
              {t('about.heading2')}
            </span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed text-center mb-12 sm:mb-16">
            {t('about.description')}
          </p>

          {/* CTA Button */}
          <div className="text-center">
            <button 
              onClick={onConsultationClick}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              <span>{t('about.team')}</span>
              <i className="ri-arrow-right-line text-xl group-hover:translate-x-1 transition-transform duration-300"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
