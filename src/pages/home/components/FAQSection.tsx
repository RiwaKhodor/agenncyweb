import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface FAQ {
  questionKey: string;
  answerKey: string;
}

interface FAQSectionProps {
  onConsultationClick: () => void;
}

export default function FAQSection({ onConsultationClick }: FAQSectionProps) {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const faqs: FAQ[] = [
    {
      questionKey: 'faq.q1',
      answerKey: 'faq.a1'
    },
    {
      questionKey: 'faq.q2',
      answerKey: 'faq.a2'
    },
    {
      questionKey: 'faq.q3',
      answerKey: 'faq.a3'
    },
    {
      questionKey: 'faq.q4',
      answerKey: 'faq.a4'
    },
    {
      questionKey: 'faq.q5',
      answerKey: 'faq.a5'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-cyan-200/30 to-teal-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-200/30 to-amber-200/30 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-full mb-6">
              <i className="ri-question-line text-cyan-600 text-lg"></i>
              <span className="text-sm font-semibold text-cyan-700 uppercase tracking-wider">{t('faq.badge')}</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {t('faq.title1')}
              <span className="block bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent mt-2">
                {t('faq.title2')}
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('faq.description')}
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl overflow-hidden transition-all duration-300 border-2 ${
                  openIndex === index 
                    ? 'shadow-xl border-gradient-to-r from-cyan-500 to-teal-500 scale-[1.02]' 
                    : 'shadow-md border-gray-100 hover:border-cyan-200'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 flex items-start justify-between text-left hover:bg-gradient-to-r hover:from-cyan-50/50 hover:to-teal-50/50 transition-all cursor-pointer"
                >
                  <div className="flex items-start gap-3 sm:gap-4 flex-1 pr-3 sm:pr-4">
                    <div className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openIndex === index 
                        ? 'bg-gradient-to-br from-cyan-500 to-teal-500 scale-110' 
                        : 'bg-gray-100 group-hover:bg-gradient-to-br group-hover:from-cyan-100 group-hover:to-teal-100'
                    }`}>
                      <span className={`text-sm sm:text-lg font-bold ${
                        openIndex === index ? 'text-white' : 'text-gray-600'
                      }`}>
                        {index + 1}
                      </span>
                    </div>
                    <h4 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 leading-tight sm:leading-relaxed">
                      {t(faq.questionKey)}
                    </h4>
                  </div>
                  <div className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index 
                      ? 'bg-gradient-to-br from-cyan-500 to-teal-500 rotate-45' 
                      : 'bg-gray-100 group-hover:bg-gradient-to-br group-hover:from-cyan-100 group-hover:to-teal-100'
                  }`}>
                    <i className={`ri-add-line text-xl sm:text-2xl ${
                      openIndex === index ? 'text-white' : 'text-gray-600'
                    }`}></i>
                  </div>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 pl-14 sm:pl-20">
                    <div className="border-l-4 border-gradient-to-b from-cyan-500 to-teal-500 pl-4 sm:pl-6">
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{t(faq.answerKey)}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12 sm:mt-16 px-4">
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{t('faq.stillHaveQuestions')}</p>
            <button 
              onClick={onConsultationClick}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-600 to-teal-600 text-white text-sm sm:text-base font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              {t('faq.contactTeam')}
            </button>
          </div>
        </div>
      </section>

      {/* Import and use ConsultationPopup */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsPopupOpen(false)}></div>
          <div className="relative z-10">
            {/* Popup will be rendered here - we need to import ConsultationPopup */}
          </div>
        </div>
      )}
    </>
  );
}
