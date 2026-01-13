import { useTranslation } from 'react-i18next';

interface ConsultationSectionProps {
  onConsultationClick: () => void;
}

export default function ConsultationSection({ onConsultationClick }: ConsultationSectionProps) {
  const { t } = useTranslation();
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[#6B7F39] via-[#7a9542] to-[#5a6b2f] relative overflow-x-hidden overflow-y-visible">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/30">
            <i className="ri-calendar-check-line text-white"></i>
            <span className="text-sm font-medium text-white">{t('about.consultation.badge')}</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {t('about.consultation.title')}
          </h2>

          {/* Description */}
          <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            {t('about.consultation.desc1')}
          </p>

          <p className="text-lg lg:text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
            {t('about.consultation.desc2')}
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <i className="ri-lightbulb-flash-line text-2xl text-white"></i>
              </div>
              <h3 className="font-bold text-white mb-2">{t('about.consultation.strategy.title')}</h3>
              <p className="text-white/80 text-sm">{t('about.consultation.strategy.desc')}</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <i className="ri-team-line text-2xl text-white"></i>
              </div>
              <h3 className="font-bold text-white mb-2">{t('about.consultation.team.title')}</h3>
              <p className="text-white/80 text-sm">{t('about.consultation.team.desc')}</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <i className="ri-line-chart-line text-2xl text-white"></i>
              </div>
              <h3 className="font-bold text-white mb-2">{t('about.consultation.results.title')}</h3>
              <p className="text-white/80 text-sm">{t('about.consultation.results.desc')}</p>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={onConsultationClick}
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#6B7F39] rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl hover:shadow-white/20"
          >
            <i className="ri-calendar-schedule-line text-xl"></i>
            {t('about.consultation.button')}
            <i className="ri-arrow-right-line text-xl"></i>
          </button>

          <p className="text-white/70 text-sm mt-6">
            {t('about.consultation.footer')}
          </p>
        </div>
      </div>
    </section>
  );
}

