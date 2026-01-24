import { useTranslation } from 'react-i18next';

interface ServiceCTAProps {
  service: any;
  isGerman: boolean;
  onOpenPopup: () => void;
}

export default function ServiceCTA({ service, isGerman, onOpenPopup }: ServiceCTAProps) {
  const { t } = useTranslation();

  return (
    <section id="contact" className="mx-3 sm:mx-4 lg:mx-6 mb-6 sm:mb-8 lg:mb-12 py-16 lg:py-24 bg-gradient-to-br from-[#1A2B4A] to-[#2A3B5A] relative overflow-hidden border-t-4 border-white/20 rounded-2xl sm:rounded-3xl">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        {/* Icon */}
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400 to-teal-400 flex items-center justify-center mx-auto mb-8 shadow-xl">
          <i className={`${service.icon} text-3xl text-white`}></i>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          {t('serviceDetail.cta.title')}
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
          {t('serviceDetail.cta.subtitle')}
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button
            onClick={onOpenPopup}
            className="inline-flex items-center justify-center px-10 py-5 bg-white text-[#1A2B4A] rounded-full text-lg font-bold hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl cursor-pointer whitespace-nowrap"
          >
            {t('serviceDetail.cta.button')}
            <i className="ri-calendar-line ml-2 text-xl"></i>
          </button>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-300">
          <span className="text-base">{t('serviceDetail.cta.call')}</span>
          <a href="tel:+493030135316" className="text-lg font-bold text-white flex items-center gap-2 hover:text-cyan-400 transition-colors cursor-pointer">
            <i className="ri-phone-line"></i>
            030 30135316
          </a>
        </div>
      </div>
    </section>
  );
}
