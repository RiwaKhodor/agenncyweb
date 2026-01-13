import { useTranslation } from 'react-i18next';

interface ServiceBenefitsProps {
  service: any;
  isGerman: boolean;
}

export default function ServiceBenefits({ service, isGerman }: ServiceBenefitsProps) {
  const { t } = useTranslation();

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-block px-4 py-2 bg-white rounded-full mb-6 shadow-sm">
            <span className="text-[#6B7F39] text-sm font-semibold uppercase tracking-wider">
              {t('serviceDetail.benefits.subtitle')}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('serviceDetail.benefits.title')}
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {service.benefits.map((benefit: any, index: number) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-50 to-teal-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className={`${benefit.icon} text-2xl text-[#6B7F39]`}></i>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {isGerman ? benefit.titleDe : benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {isGerman ? benefit.descriptionDe : benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
