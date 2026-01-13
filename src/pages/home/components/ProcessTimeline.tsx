import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface TimelineStep {
  number: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  gradient: string;
}

interface ProcessTimelineProps {
  onConsultationClick: () => void;
}

export default function ProcessTimeline({ onConsultationClick }: ProcessTimelineProps) {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [lineProgress, setLineProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const { t } = useTranslation();

  const steps: TimelineStep[] = [
    {
      number: '01',
      title: t('process.step1'),
      description: t('process.step1.desc'),
      icon: 'ri-search-2-line',
      color: 'from-cyan-500 to-teal-500',
      gradient: 'from-cyan-50 to-teal-50'
    },
    {
      number: '02',
      title: t('process.step2'),
      description: t('process.step2.desc'),
      icon: 'ri-lightbulb-line',
      color: 'from-emerald-500 to-green-500',
      gradient: 'from-emerald-50 to-green-50'
    },
    {
      number: '03',
      title: t('process.step3'),
      description: t('process.step3.desc'),
      icon: 'ri-palette-line',
      color: 'from-orange-500 to-amber-500',
      gradient: 'from-orange-50 to-amber-50'
    },
    {
      number: '04',
      title: t('process.step4'),
      description: t('process.step4.desc'),
      icon: 'ri-rocket-line',
      color: 'from-teal-500 to-cyan-600',
      gradient: 'from-teal-50 to-cyan-50'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = stepsRef.current.indexOf(entry.target as HTMLDivElement);
          if (entry.isIntersecting && index !== -1) {
            setTimeout(() => {
              setVisibleSteps((prev) => {
                if (!prev.includes(index)) {
                  return [...prev, index].sort((a, b) => a - b);
                }
                return prev;
              });
            }, index * 200);
          }
        });
      },
      { threshold: 0.1 }
    );

    stepsRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const scrollProgress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight / 2)));
      
      setLineProgress(scrollProgress * 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-orange-200/20 to-amber-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-full mb-4 sm:mb-6">
            <i className="ri-route-line text-cyan-600 text-base sm:text-lg"></i>
            <span className="text-xs sm:text-sm font-semibold text-cyan-700 uppercase tracking-wider">{t('process.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {t('process.heading1')}
            <span className="block bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent mt-2">
              {t('process.heading2')}
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            {t('process.description')}
          </p>
        </div>

        {/* Timeline Container - Desktop */}
        <div className="hidden lg:block relative">
          {/* Horizontal Line */}
          <div className="absolute top-24 left-0 right-0 h-1 bg-gray-200 rounded-full">
            <div 
              className="h-full bg-gradient-to-r from-cyan-500 via-emerald-500 via-orange-500 to-teal-500 rounded-full transition-all duration-700 ease-out"
              style={{ width: `${lineProgress}%` }}
            ></div>
          </div>

          {/* Timeline Steps */}
          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => (stepsRef.current[index] = el)}
                className="relative transition-all duration-700 opacity-100 translate-y-0"
              >
                {/* Icon Circle */}
                <div className="flex justify-center mb-8">
                  <div className={`relative w-48 h-48 flex items-center justify-center rounded-full bg-gradient-to-br ${step.color} shadow-2xl transform transition-all duration-500 scale-100 rotate-0`}>
                    {/* Pulse Animation */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} animate-ping opacity-20`}></div>
                    
                    {/* Icon */}
                    <i className={`${step.icon} text-6xl text-white relative z-10`}></i>
                    
                    {/* Number Badge */}
                    <div className="absolute -top-2 -right-2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <span className={`text-lg font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent`}>
                        {step.number}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 translate-y-0">
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Container - Mobile & Tablet */}
        <div className="lg:hidden relative">
          {/* Vertical Line */}
          <div className="absolute left-8 sm:left-12 top-0 bottom-0 w-1 bg-gray-200 rounded-full">
            <div 
              className="w-full bg-gradient-to-b from-cyan-500 via-emerald-500 via-orange-500 to-teal-500 rounded-full transition-all duration-700 ease-out"
              style={{ height: `${lineProgress}%` }}
            ></div>
          </div>

          {/* Timeline Steps */}
          <div className="space-y-12 sm:space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => (stepsRef.current[index] = el)}
                className="relative flex gap-6 sm:gap-8 transition-all duration-700 opacity-100 translate-x-0"
              >
                {/* Icon Circle */}
                <div className="flex-shrink-0">
                  <div className={`relative w-16 h-16 sm:w-24 sm:h-24 flex items-center justify-center rounded-full bg-gradient-to-br ${step.color} shadow-xl transform transition-all duration-500 scale-100 rotate-0`}>
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} animate-ping opacity-20`}></div>
                    <i className={`${step.icon} text-2xl sm:text-4xl text-white relative z-10`}></i>
                    
                    {/* Number Badge */}
                    <div className="absolute -top-1 -right-1 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <span className={`text-xs sm:text-sm font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent`}>
                        {step.number}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 translate-x-0">
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl`}></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20 px-4">
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{t('process.ready')}</p>
          <button 
            onClick={onConsultationClick}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-600 to-teal-600 text-white text-sm sm:text-base font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            {t('process.begin')}
          </button>
        </div>
      </div>
    </section>
  );
}
