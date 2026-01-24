import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ConsultationPopup from '../../../components/ConsultationPopup';

export default function ContactCTA() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { t } = useTranslation();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <section id="contact" className="mx-3 sm:mx-4 lg:mx-6 mb-6 sm:mb-8 lg:mb-12">
        <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl sm:rounded-3xl overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src="https://readdy.ai/api/search-image?query=Modern%20professional%20business%20team%20collaboration%20meeting%20diverse%20people%20working%20together%20on%20digital%20marketing%20strategy%20laptop%20screens%20charts%20graphs%20bright%20office%20environment%20success%20growth%20teamwork%20concept%20clean%20minimal%20aesthetic&width=1920&height=800&seq=contact-business-team&orientation=landscape"
              alt="Business Collaboration"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-3 sm:mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {t('contact.ready')}
            </h2>
            <div className="mb-6 sm:mb-8">
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white block sm:inline" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {t('contact.create')}{' '}
              </span>
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold italic text-white block sm:inline mt-2 sm:mt-0" style={{ fontFamily: 'Playfair Display, serif' }}>
                {t('contact.story')}
              </span>
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 sm:mb-10 lg:mb-12 max-w-2xl px-4">
              {t('contact.schedule')}
            </p>

            <button
              onClick={scrollToContact}
              className="px-8 sm:px-10 lg:px-12 py-3 sm:py-4 lg:py-5 bg-white text-black rounded-full text-base sm:text-lg font-bold hover:bg-gray-100 transition-all hover:scale-105 flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 whitespace-nowrap cursor-pointer"
            >
              {t('contact.start')}
              <i className="ri-arrow-right-line text-xl sm:text-2xl"></i>
            </button>

            <p className="text-white/80 text-sm sm:text-base lg:text-lg px-4">
              {t('contact.call')}{' '}
              <a href="tel:+493030135316" className="font-bold hover:text-white transition-colors cursor-pointer">
                030 30135316
              </a>
            </p>
          </div>
        </div>
      </section>

      <ConsultationPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
}
