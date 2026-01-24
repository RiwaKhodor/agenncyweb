import { useTranslation } from 'react-i18next';

interface ServiceFeaturesProps {
  service: any;
  isGerman: boolean;
}

export default function ServiceFeatures({ service, isGerman }: ServiceFeaturesProps) {
  const { t } = useTranslation();

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-block px-4 py-2 bg-white rounded-full mb-6 shadow-sm">
            <span className="text-[#6B7F39] text-sm font-semibold uppercase tracking-wider">
              {t('serviceDetail.features.subtitle')}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('serviceDetail.features.title')}
          </h2>
        </div>

        {/* Features Grid */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-200">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(isGerman && service.featuresDe ? service.featuresDe : service.features).map((feature: string, index: number) => (
              <div
                key={index}
                className="flex items-start gap-3 group"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-100 to-teal-100 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-check-line text-[#6B7F39] text-sm"></i>
                </div>
                <span className="text-gray-700 text-base leading-relaxed">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6">
            {t('serviceDetail.features.customize')}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#6B7F39] text-white rounded-full text-base font-semibold hover:bg-[#5a6b2f] transition-all shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap"
          >
            {t('serviceDetail.features.discuss')}
            <i className="ri-arrow-right-line ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
