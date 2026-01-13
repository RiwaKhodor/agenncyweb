import { useTranslation } from 'react-i18next';

interface ConsultationCTASectionProps {
  onConsultationClick: () => void;
}

export default function ConsultationCTASection({ onConsultationClick }: ConsultationCTASectionProps) {
  const { t } = useTranslation();

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-br from-[#6B7F39] to-[#5a6b2f] rounded-2xl p-12 lg:p-16">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
            <i className="ri-calendar-check-line text-3xl text-white"></i>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {t('blog.cta.title')}
          </h2>

          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            {t('blog.cta.description')}
          </p>

          <button
            onClick={onConsultationClick}
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#6B7F39] rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
          >
            <i className="ri-calendar-schedule-line text-xl"></i>
            {t('blog.cta.button')}
            <i className="ri-arrow-right-line text-xl"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

