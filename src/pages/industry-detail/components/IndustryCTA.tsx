import { useTranslation } from 'react-i18next';
import { industriesData } from '../../../mocks/industries';
import { useState } from 'react';
import ConsultationPopup from '../../../components/ConsultationPopup';

interface IndustryCTAProps {
  slug: string;
}

export default function IndustryCTA({ slug }: IndustryCTAProps) {
  const { t, i18n } = useTranslation();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const isGerman = i18n.language === 'de';

  const industry = industriesData.find((ind) => ind.slug === slug);

  if (!industry) {
    return null;
  }

  const industryName = isGerman ? industry.titleDe : industry.title;

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="contact" className="mx-3 sm:mx-4 lg:mx-6 mb-6 sm:mb-8 lg:mb-12 py-16 lg:py-24 bg-gradient-to-br from-[#1A2B4A] to-[#2A3B5A] relative overflow-hidden border-t-4 border-white/20 rounded-2xl sm:rounded-3xl">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          {/* Icon */}
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400 to-teal-400 flex items-center justify-center mx-auto mb-8 shadow-xl">
            <i className={`${industry.icon} text-3xl text-white`}></i>
          </div>

          {/* Industry Name */}
          <p className="text-lg sm:text-xl lg:text-2xl text-cyan-400 font-semibold mb-4">
            {industryName}
          </p>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {t('industry.cta.heading')}
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            {t('industry.cta.description')}
          </p>

          {/* CTA Button */}
          <button
            onClick={() => setIsPopupOpen(true)}
            className="inline-flex items-center gap-3 px-8 sm:px-10 lg:px-12 py-4 sm:py-5 bg-white text-gray-900 rounded-full text-base sm:text-lg font-bold hover:bg-gray-100 hover:shadow-2xl transition-all hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            <span>{t('industry.cta.button')}</span>
            <i className="ri-arrow-right-line text-xl sm:text-2xl"></i>
          </button>

          {/* Contact Info */}
          <div className="mt-10 pt-8 border-t border-white/20">
            <p className="text-white/80 text-sm sm:text-base lg:text-lg mb-4">
              {t('industry.cta.orCall')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <a href="tel:+493030135316" className="text-white font-bold text-lg sm:text-xl flex items-center gap-2 hover:text-cyan-400 transition-colors cursor-pointer">
                <i className="ri-phone-fill"></i>
                030 30135316
              </a>
            </div>
          </div>
        </div>
      </section>

      <ConsultationPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
}
