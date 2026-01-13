import { useTranslation } from 'react-i18next';

export default function WhyAgenncySection() {
  const { t } = useTranslation();

  const reasons = [
    {
      icon: 'ri-team-line',
      titleKey: 'blog.why.team.title',
      descKey: 'blog.why.team.desc'
    },
    {
      icon: 'ri-lightbulb-flash-line',
      titleKey: 'blog.why.innovation.title',
      descKey: 'blog.why.innovation.desc'
    },
    {
      icon: 'ri-line-chart-line',
      titleKey: 'blog.why.results.title',
      descKey: 'blog.why.results.desc'
    },
    {
      icon: 'ri-heart-line',
      titleKey: 'blog.why.client.title',
      descKey: 'blog.why.client.desc'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#6B7F39]/10 rounded-full mb-6">
            <i className="ri-question-mark text-[#6B7F39]"></i>
            <span className="text-sm font-medium text-[#6B7F39]">{t('blog.why.badge')}</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            {t('blog.why.title')}
          </h2>

          <p className="text-lg text-gray-600">
            {t('blog.why.description')}
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#6B7F39]/10 flex items-center justify-center mx-auto mb-4">
                <i className={`${reason.icon} text-2xl text-[#6B7F39]`}></i>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t(reason.titleKey)}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {t(reason.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

