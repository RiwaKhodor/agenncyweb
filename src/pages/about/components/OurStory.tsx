import { useTranslation } from 'react-i18next';

export default function OurStory() {
  const { t } = useTranslation();

  const milestones = [
    { yearKey: 'about.story.milestone1.year', labelKey: 'about.story.milestone1.label' },
    { yearKey: 'about.story.milestone2.year', labelKey: 'about.story.milestone2.label' },
    { yearKey: 'about.story.milestone3.year', labelKey: 'about.story.milestone3.label' },
    { yearKey: 'about.story.milestone4.year', labelKey: 'about.story.milestone4.label' }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#6B7F39]/10 rounded-full mb-6">
              <i className="ri-book-open-line text-[#6B7F39]"></i>
              <span className="text-sm font-medium text-[#6B7F39]">{t('about.story.badge')}</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {t('about.story.title')}
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                {t('about.story.para1')}
              </p>
              
              <p>
                {t('about.story.para2')}
              </p>
              
              <p>
                {t('about.story.para3')}
              </p>
            </div>

            {/* Milestones */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="border-l-4 border-[#6B7F39] pl-4">
                  <div className="text-2xl font-bold text-gray-900 mb-1">{t(milestone.yearKey)}</div>
                  <div className="text-sm text-gray-600">{t(milestone.labelKey)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
