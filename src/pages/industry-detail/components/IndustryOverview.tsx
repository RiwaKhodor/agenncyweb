
import { useTranslation } from 'react-i18next';
import { industriesData } from '../../../mocks/industries';

interface IndustryOverviewProps {
  slug: string;
}

export default function IndustryOverview({ slug }: IndustryOverviewProps) {
  const { t, i18n } = useTranslation();
  const industry = industriesData.find(ind => ind.slug === slug);

  if (!industry) return null;

  return (
    <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
      {/* Animated Logo Background - Sliding Left to Right */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <img
          src="https://static.readdy.ai/image/78648d2a16546c8a94747f62bf26b938/09b50dcd27a8b516cd301c07c7fe7f09.png"
          alt="Logo"
          className="w-2/3 max-w-2xl opacity-5 animate-slide-left-right"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-full mb-6">
              <i className="ri-information-line text-cyan-600 text-lg"></i>
              <span className="text-sm font-semibold text-cyan-700 uppercase tracking-wider">
                {t('industry.overview.badge')}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {t('industry.overview.heading')}
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {i18n.language === 'de' ? industry.overviewDe : industry.overview}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {industry.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{i18n.language === 'de' ? stat.labelDe : stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
