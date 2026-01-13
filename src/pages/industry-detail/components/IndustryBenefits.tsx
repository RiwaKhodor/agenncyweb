import { useTranslation } from 'react-i18next';
import { industriesData } from '../../../mocks/industries';

interface IndustryBenefitsProps {
  slug: string;
}

export default function IndustryBenefits({ slug }: IndustryBenefitsProps) {
  const { t, i18n } = useTranslation();
  const industry = industriesData.find(ind => ind.slug === slug);

  if (!industry) return null;

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-full mb-6">
            <i className="ri-trophy-line text-emerald-600 text-lg"></i>
            <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wider">
              {t('industry.benefits.badge')}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {t('industry.benefits.heading')}
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('industry.benefits.description')}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {industry.benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl p-4 sm:p-6 lg:p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mb-3 sm:mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <i className={`${benefit.icon} text-lg sm:text-xl lg:text-2xl text-white`}></i>
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-base lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {i18n.language === 'de' ? benefit.titleDe : benefit.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {i18n.language === 'de' ? benefit.descriptionDe : benefit.description}
                </p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
