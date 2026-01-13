import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface ServiceFAQProps {
  service: any;
  isGerman: boolean;
}

export default function ServiceFAQ({ service, isGerman }: ServiceFAQProps) {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-block px-4 py-2 bg-white rounded-full mb-6 shadow-sm">
            <span className="text-[#6B7F39] text-sm font-semibold uppercase tracking-wider">
              {t('serviceDetail.faq.subtitle')}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('serviceDetail.faq.title')}
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {service.faqs.map((faq: any, index: number) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 lg:px-8 py-6 flex items-center justify-between text-left cursor-pointer"
              >
                <span className="text-lg font-bold text-gray-900 pr-4">
                  {isGerman ? faq.questionDe : faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  <i className="ri-arrow-down-s-line text-xl text-gray-600"></i>
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 lg:px-8 pb-6 text-gray-600 leading-relaxed">
                  {isGerman ? faq.answerDe : faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6 text-lg">
            Still have questions? We're here to help!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#6B7F39] text-white rounded-full text-base font-semibold hover:bg-[#5a6b2f] transition-all shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap"
          >
            Contact Our Team
            <i className="ri-message-3-line ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
