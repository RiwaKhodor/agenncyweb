import { useTranslation } from 'react-i18next';
import { industriesData } from '../../../mocks/industries';

interface IndustrySolutionsProps {
  slug: string;
}

export default function IndustrySolutions({ slug }: IndustrySolutionsProps) {
  const { t, i18n } = useTranslation();
  const industry = industriesData.find(ind => ind.slug === slug);

  if (!industry) return null;

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-full mb-6">
            <i className="ri-lightbulb-line text-cyan-600 text-lg"></i>
            <span className="text-sm font-semibold text-cyan-700 uppercase tracking-wider">
              {t('industry.solutions.badge')}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {t('industry.solutions.heading')}
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('industry.solutions.description')}
          </p>
        </div>

        {/* Solutions List */}
        <div className="space-y-4 sm:space-y-8">
          {industry.solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-start">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center shadow-lg">
                    <i className={`${solution.icon} text-2xl sm:text-3xl text-white`}></i>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                    {i18n.language === 'de' ? solution.titleDe : solution.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                    {i18n.language === 'de' ? solution.descriptionDe : solution.description}
                  </p>

                  {/* Features */}
                  <div className="grid sm:grid-cols-2 gap-2 sm:gap-3">
                    {solution.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-2">
                        <i className="ri-check-line text-cyan-600 text-base sm:text-lg"></i>
                        <span className="text-xs sm:text-sm text-gray-700">
                          {i18n.language === 'de' ? feature.de : feature.en}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
