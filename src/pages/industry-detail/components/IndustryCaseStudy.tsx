import { useTranslation } from 'react-i18next';
import { industriesData } from '../../../mocks/industries';

interface IndustryCaseStudyProps {
  slug: string;
}

export default function IndustryCaseStudy({ slug }: IndustryCaseStudyProps) {
  const { t, i18n } = useTranslation();
  const industry = industriesData.find(ind => ind.slug === slug);

  if (!industry || !industry.caseStudy) return null;

  const caseStudy = industry.caseStudy;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 rounded-full mb-6">
            <i className="ri-file-text-line text-violet-600 text-lg"></i>
            <span className="text-sm font-semibold text-violet-700 uppercase tracking-wider">
              {t('industry.case.badge')}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {t('industry.case.heading')}
          </h2>
        </div>

        {/* Case Study Content */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative h-96 lg:h-auto">
              <img
                src={caseStudy.image}
                alt={i18n.language === 'de' ? caseStudy.clientDe : caseStudy.client}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12">
              <div className="mb-6">
                <div className="text-sm font-semibold text-cyan-600 uppercase tracking-wider mb-2">
                  {t('industry.case.client')}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {i18n.language === 'de' ? caseStudy.clientDe : caseStudy.client}
                </h3>
              </div>

              <div className="mb-6">
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  {t('industry.case.challenge')}
                </div>
                <p className="text-base text-gray-700 leading-relaxed">
                  {i18n.language === 'de' ? caseStudy.challengeDe : caseStudy.challenge}
                </p>
              </div>

              <div className="mb-8">
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  {t('industry.case.solution')}
                </div>
                <p className="text-base text-gray-700 leading-relaxed">
                  {i18n.language === 'de' ? caseStudy.solutionDe : caseStudy.solution}
                </p>
              </div>

              {/* Results */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-cyan-600 mb-2">{result.value}</div>
                    <div className="text-sm text-gray-600">
                      {i18n.language === 'de' ? result.labelDe : result.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
