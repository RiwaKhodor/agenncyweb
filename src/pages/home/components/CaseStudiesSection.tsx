
import { useState } from 'react';
import ConsultationPopup from '../../../components/ConsultationPopup';

interface CaseStudy {
  client: string;
  industry: string;
  headline: string;
  description: string;
  metrics: { icon: string; value: string; label: string }[];
  image: string;
}

export default function CaseStudiesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const caseStudies: CaseStudy[] = [
    {
      client: 'Urban Fashion Co.',
      industry: 'E-Commerce',
      headline: '285% increase in conversions',
      description: 'Complete digital transformation with SEO, social media, and conversion optimization strategies.',
      metrics: [
        { icon: 'ri-arrow-up-line', value: '+285%', label: 'Conversions' },
        { icon: 'ri-user-add-line', value: '+450K', label: 'New Visitors' },
        { icon: 'ri-money-euro-circle-line', value: '+€2.3M', label: 'Revenue' }
      ],
      image: 'https://readdy.ai/api/search-image?query=Modern%20fashion%20e-commerce%20website%20interface%20on%20laptop%20screen%20showing%20stylish%20clothing%20products%20clean%20minimalist%20design%20shopping%20cart%20checkout%20process%20professional%20web%20design%20mockup%20bright%20studio%20lighting&width=500&height=350&seq=case-fashion-agenncy&orientation=landscape'
    },
    {
      client: 'TechStart Berlin',
      industry: 'Technology',
      headline: '420% ROI on Google Ads',
      description: 'Strategic Google Ads campaigns with advanced targeting and conversion tracking implementation.',
      metrics: [
        { icon: 'ri-line-chart-line', value: '420%', label: 'ROI' },
        { icon: 'ri-cursor-line', value: '8.5%', label: 'CTR' },
        { icon: 'ri-shopping-bag-line', value: '+12K', label: 'Leads' }
      ],
      image: 'https://readdy.ai/api/search-image?query=Technology%20startup%20office%20workspace%20with%20multiple%20computer%20screens%20showing%20analytics%20dashboards%20graphs%20data%20visualizations%20modern%20tech%20company%20environment%20professional%20business%20photography&width=500&height=350&seq=case-tech-agenncy&orientation=landscape'
    },
    {
      client: 'GreenLife Organics',
      industry: 'Health & Wellness',
      headline: '350% growth in organic traffic',
      description: 'Comprehensive SEO strategy with content marketing and link building for sustainable growth.',
      metrics: [
        { icon: 'ri-search-line', value: '+350%', label: 'Organic Traffic' },
        { icon: 'ri-file-text-line', value: '150+', label: 'Content Pieces' },
        { icon: 'ri-star-line', value: '#1', label: 'Rankings' }
      ],
      image: 'https://readdy.ai/api/search-image?query=Organic%20health%20products%20natural%20wellness%20items%20green%20plants%20fresh%20vegetables%20healthy%20lifestyle%20concept%20clean%20white%20background%20professional%20product%20photography%20studio%20lighting&width=500&height=350&seq=case-health-agenncy&orientation=landscape'
    },
    {
      client: 'EventPro Berlin',
      industry: 'Events',
      headline: '500% increase in ticket sales',
      description: 'Multi-channel marketing campaign with social media advertising and influencer partnerships.',
      metrics: [
        { icon: 'ri-ticket-line', value: '+500%', label: 'Ticket Sales' },
        { icon: 'ri-group-line', value: '250K+', label: 'Reach' },
        { icon: 'ri-heart-line', value: '95%', label: 'Satisfaction' }
      ],
      image: 'https://readdy.ai/api/search-image?query=Vibrant%20event%20marketing%20materials%20concert%20posters%20digital%20screens%20showing%20event%20promotions%20colorful%20festival%20branding%20professional%20event%20photography%20dynamic%20composition&width=500&height=350&seq=case-events-agenncy&orientation=landscape'
    },
    {
      client: 'FinanceHub',
      industry: 'Finance',
      headline: '180% more qualified leads',
      description: 'B2B lead generation strategy with LinkedIn advertising and content marketing.',
      metrics: [
        { icon: 'ri-user-star-line', value: '+180%', label: 'Qualified Leads' },
        { icon: 'ri-percent-line', value: '42%', label: 'Conversion Rate' },
        { icon: 'ri-time-line', value: '-35%', label: 'Cost per Lead' }
      ],
      image: 'https://readdy.ai/api/search-image?query=Professional%20financial%20services%20office%20modern%20banking%20environment%20business%20meeting%20digital%20finance%20technology%20professional%20corporate%20photography%20clean%20contemporary%20design&width=500&height=350&seq=case-finance-agenncy&orientation=landscape'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <>
      <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-cyan-50/30 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-emerald-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Carousel */}
          <div className="relative px-4 sm:px-8 lg:px-16">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {caseStudies.map((study, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-3">
                    <div className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 max-w-4xl mx-auto border border-gray-100">
                      {/* Image */}
                      <div className="relative h-56 sm:h-72 lg:h-96 w-full overflow-hidden">
                        <img
                          src={study.image}
                          alt={study.client}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        
                        {/* Industry Badge */}
                        <div className="absolute top-6 right-6">
                          <span className="px-4 py-2 bg-white/95 backdrop-blur-sm text-gray-900 text-sm font-semibold rounded-full shadow-lg">
                            {study.industry}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8 sm:p-10 lg:p-12">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl">
                            <i className="ri-building-line text-white text-xl"></i>
                          </div>
                          <h4 className="text-2xl sm:text-3xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            {study.client}
                          </h4>
                        </div>

                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          {study.headline}
                        </h3>
                        <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                          {study.description}
                        </p>

                        {/* Metrics */}
                        <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 p-6 bg-gradient-to-br from-gray-50 to-cyan-50/50 rounded-2xl">
                          {study.metrics.map((metric, idx) => (
                            <div key={idx} className="text-center">
                              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center mx-auto mb-3 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl shadow-lg">
                                <i className={`${metric.icon} text-2xl sm:text-3xl text-white`}></i>
                              </div>
                              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                {metric.value}
                              </p>
                              <p className="text-sm sm:text-base text-gray-600 font-medium">{metric.label}</p>
                            </div>
                          ))}
                        </div>

                        <button
                          onClick={() => setIsPopupOpen(true)}
                          className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 cursor-pointer whitespace-nowrap"
                        >
                          <span>Read Full Case Study</span>
                          <i className="ri-arrow-right-line text-xl group-hover:translate-x-1 transition-transform"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white rounded-full shadow-2xl flex items-center justify-center hover:bg-gradient-to-br hover:from-cyan-500 hover:to-teal-500 hover:text-white transition-all duration-300 cursor-pointer group border border-gray-100"
            >
              <i className="ri-arrow-left-line text-2xl text-gray-900 group-hover:text-white"></i>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white rounded-full shadow-2xl flex items-center justify-center hover:bg-gradient-to-br hover:from-cyan-500 hover:to-teal-500 hover:text-white transition-all duration-300 cursor-pointer group border border-gray-100"
            >
              <i className="ri-arrow-right-line text-2xl text-gray-900 group-hover:text-white"></i>
            </button>

            {/* Dots Indicator */}
            <div className="flex items-center justify-center gap-3 mt-10 sm:mt-12">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
                    index === currentIndex 
                      ? 'bg-gradient-to-r from-cyan-500 to-teal-500 w-12 shadow-lg' 
                      : 'bg-gray-300 w-3 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <ConsultationPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
}
