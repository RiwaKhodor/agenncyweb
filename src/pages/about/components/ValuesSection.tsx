import { useTranslation } from 'react-i18next';

export default function ValuesSection() {
  const { t } = useTranslation();

  const values = [
    {
      icon: 'ri-lightbulb-flash-line',
      titleKey: 'about.values.innovation.title',
      descKey: 'about.values.innovation.desc'
    },
    {
      icon: 'ri-shield-check-line',
      titleKey: 'about.values.integrity.title',
      descKey: 'about.values.integrity.desc'
    },
    {
      icon: 'ri-team-line',
      titleKey: 'about.values.collaboration.title',
      descKey: 'about.values.collaboration.desc'
    },
    {
      icon: 'ri-line-chart-line',
      titleKey: 'about.values.results.title',
      descKey: 'about.values.results.desc'
    },
    {
      icon: 'ri-heart-line',
      titleKey: 'about.values.client.title',
      descKey: 'about.values.client.desc'
    },
    {
      icon: 'ri-rocket-line',
      titleKey: 'about.values.growth.title',
      descKey: 'about.values.growth.desc'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
            <i className="ri-compass-line text-[#6B7F39]"></i>
            <span className="text-sm font-medium text-[#6B7F39]">{t('about.values.badge')}</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            {t('about.values.title')}
          </h2>

          <p className="text-lg text-gray-600">
            {t('about.values.description')}
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow group"
            >
              <div className="flex items-center gap-4 mb-3 sm:mb-4 lg:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl bg-[#6B7F39]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#6B7F39] transition-colors">
                  <i className={`${value.icon} text-lg sm:text-xl lg:text-2xl text-[#6B7F39] group-hover:text-white transition-colors`}></i>
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">
                  {t(value.titleKey)}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {t(value.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
