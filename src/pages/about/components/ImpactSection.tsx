import { useState, useEffect } from 'react';

export default function ImpactSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const impacts = [
    {
      icon: 'ri-line-chart-line',
      metric: '350%',
      label: 'Average ROI Increase',
      description: 'Our clients see significant returns on their marketing investments'
    },
    {
      icon: 'ri-global-line',
      metric: '5M+',
      label: 'Monthly Website Visitors',
      description: 'Combined traffic generated for our clients across all campaigns'
    },
    {
      icon: 'ri-customer-service-2-line',
      metric: '98%',
      label: 'Client Satisfaction Rate',
      description: 'Clients who would recommend us to others in their industry'
    },
    {
      icon: 'ri-trophy-line',
      metric: '500+',
      label: 'Successful Campaigns',
      description: 'Digital marketing campaigns delivered with measurable results'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % impacts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [impacts.length]);

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-x-hidden overflow-y-visible">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6B7F39]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#6B7F39]/20 backdrop-blur-sm rounded-full mb-6 border border-[#6B7F39]/30">
            <i className="ri-pulse-line text-[#6B7F39]"></i>
            <span className="text-sm font-medium text-white">Our Impact</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Driving Measurable Results
          </h2>

          <p className="text-lg text-gray-300">
            Numbers that speak to our commitment to delivering exceptional value and transformative outcomes for our clients.
          </p>
        </div>

        {/* Impact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 ${
                activeIndex === index
                  ? 'border-[#6B7F39] bg-[#6B7F39]/20 scale-105'
                  : 'border-white/20 hover:border-white/40'
              }`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${
                activeIndex === index ? 'bg-[#6B7F39]' : 'bg-white/10'
              }`}>
                <i className={`${impact.icon} text-2xl ${
                  activeIndex === index ? 'text-white' : 'text-[#6B7F39]'
                }`}></i>
              </div>

              <div className={`text-4xl lg:text-5xl font-bold mb-2 transition-colors ${
                activeIndex === index ? 'text-[#6B7F39]' : 'text-white'
              }`}>
                {impact.metric}
              </div>

              <div className="text-white/90 font-semibold mb-3 text-lg">
                {impact.label}
              </div>

              <p className="text-gray-400 text-sm leading-relaxed">
                {impact.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#6B7F39]/20 backdrop-blur-sm rounded-full border border-[#6B7F39]/30">
            <i className="ri-checkbox-circle-line text-[#6B7F39]"></i>
            <span className="text-white font-medium">Trusted by 200+ companies across Germany and Europe</span>
          </div>
        </div>
      </div>
    </section>
  );
}

