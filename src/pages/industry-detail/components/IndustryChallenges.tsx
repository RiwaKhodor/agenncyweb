import { useTranslation } from 'react-i18next';
import { industriesData } from '../../../mocks/industries';

interface IndustryChallengesProps {
  slug: string;
}

export default function IndustryChallenges({ slug }: IndustryChallengesProps) {
  const { t, i18n } = useTranslation();
  const industry = industriesData.find(ind => ind.slug === slug);

  if (!industry) return null;

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-full mb-6">
            <i className="ri-alert-line text-orange-600 text-lg"></i>
            <span className="text-sm font-semibold text-orange-700 uppercase tracking-wider">
              {t('industry.challenges.badge')}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {t('industry.challenges.heading')}
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('industry.challenges.description')}
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {industry.challenges.map((challenge, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-3 sm:mb-4 flex-shrink-0">
                <i className={`${challenge.icon} text-xl sm:text-2xl text-white`}></i>
              </div>

              <h3 className="text-sm sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                {i18n.language === 'de' ? challenge.titleDe : challenge.title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {i18n.language === 'de' ? challenge.descriptionDe : challenge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
