import { useTranslation } from 'react-i18next';

export default function ContactHero() {
  const { t } = useTranslation();
  
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center py-28 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full mb-6">
            <i className="ri-customer-service-line text-[#6B7F39]"></i>
            <span className="text-sm font-medium text-gray-800">{t('contact.hero.badge')}</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t('contact.hero.title1')}
            <br />
            <span className="text-white">{t('contact.hero.title2')}</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            {t('contact.hero.description')}
          </p>

          {/* Quick Contact Options */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full">
              <i className="ri-phone-line text-[#6B7F39]"></i>
              <span className="font-medium text-gray-800">030 40522266</span>
            </div>
            <a
              href="mailto:mail@agenncy.de"
              className="flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
            >
              <i className="ri-mail-line text-[#6B7F39]"></i>
              <span className="font-medium text-gray-800">mail@agenncy.de</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
