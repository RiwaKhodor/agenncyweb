import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { servicesData } from '../../../mocks/services';

interface RelatedServicesProps {
  currentServiceId: string;
  isGerman: boolean;
}

export default function RelatedServices({ currentServiceId, isGerman }: RelatedServicesProps) {
  const { t } = useTranslation();

  const relatedServices = servicesData
    .filter(service => service.id !== currentServiceId)
    .slice(0, 3);

  if (relatedServices.length === 0) return null;

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-block px-4 py-2 bg-cyan-50 rounded-full mb-6">
            <span className="text-cyan-600 text-sm font-semibold uppercase tracking-wider">
              {t('serviceDetail.related.subtitle')}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('serviceDetail.related.title')}
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {relatedServices.map((service) => (
            <Link
              key={service.id}
              to={`/services/${service.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.heroImage}
                  alt={isGerman ? service.titleDe : service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Icon */}
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <i className={`${service.icon} text-2xl text-[#6B7F39]`}></i>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#6B7F39] transition-colors">
                  {isGerman ? service.titleDe : service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {isGerman ? service.shortDescDe : service.shortDesc}
                </p>
                
                <div className="flex items-center text-[#6B7F39] font-semibold text-sm group-hover:gap-2 transition-all">
                  <span>{t('serviceDetail.related.explore')}</span>
                  <i className="ri-arrow-right-line ml-1 group-hover:translate-x-1 transition-transform"></i>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
