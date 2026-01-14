import { useTranslation } from 'react-i18next';

interface ServiceToolsProps {
  service: any;
  isGerman: boolean;
}

export default function ServiceTools({ service, isGerman }: ServiceToolsProps) {
  const { t } = useTranslation();

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-block px-4 py-2 bg-cyan-50 rounded-full mb-6">
            <span className="text-cyan-600 text-sm font-semibold uppercase tracking-wider">
              {t('serviceDetail.tools.subtitle')}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('serviceDetail.tools.title')}
          </h2>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {service.tools.map((tool: any, index: number) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition-all duration-300 border border-gray-200 group"
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <i className={`${tool.icon} text-3xl text-[#6B7F39]`}></i>
              </div>
              <span className="text-sm font-semibold text-gray-700">
                {tool.name}
              </span>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-base sm:text-lg">
            {t('serviceDetail.tools.description')}
          </p>
        </div>
      </div>
    </section>
  );
}
