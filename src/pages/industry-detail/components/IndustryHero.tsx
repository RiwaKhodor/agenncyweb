
import { useTranslation } from 'react-i18next';
import { industriesData } from '../../../mocks/industries';

interface IndustryHeroProps {
  slug: string;
}

export default function IndustryHero({ slug }: IndustryHeroProps) {
  const { t, i18n } = useTranslation();
  const industry = industriesData.find(ind => ind.slug === slug);

  if (!industry) return null;

  const title = i18n.language === 'de' ? industry.titleDe : industry.title;
  const description = i18n.language === 'de' ? industry.descriptionDe : industry.description;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Animated Blur Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Animated Logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="animate-float-slow opacity-5">
          <img
            src="https://static.readdy.ai/image/78648d2a16546c8a94747f62bf26b938/9ab1c79f260f89c8b0df61a7a1ec1fbb.png"
            alt="Logo Animation"
            className="w-[600px] h-[600px] object-contain animate-spin-slow"
          />
        </div>
      </div>

      {/* Subtle Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-28 lg:py-32">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
          <i className={`${industry.icon} text-white text-lg`}></i>
          <span className="text-sm font-semibold text-white uppercase tracking-wider">
            {t('industry.badge')}
          </span>
        </div>

        {/* Title */}
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {title}
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
          {description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#solutions"
            className="px-8 py-4 bg-white text-gray-900 text-base font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            {t('industry.explore')}
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white text-base font-semibold rounded-full hover:bg-white/20 transition-all duration-300 whitespace-nowrap cursor-pointer border border-white/30"
          >
            {t('industry.contact')}
          </a>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
