import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { servicesData } from '../../../mocks/services';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Set scrolled state
      setIsScrolled(currentScrollY > 50);
      
      // Show/hide navbar based on scroll direction
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // Scrolling up or near top - show navbar
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px - hide navbar
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        setServicesDropdownOpen(false);
        setIndustriesDropdownOpen(false);
      }
    };

    if (servicesDropdownOpen || industriesDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [servicesDropdownOpen, industriesDropdownOpen]);

  const industries = [
    { name: t('industries.ecommerce'), icon: 'ri-shopping-cart-line', slug: 'ecommerce', descKey: 'industries.ecommerce.desc' },
    { name: t('industries.festivals'), icon: 'ri-music-line', slug: 'festivals-events', descKey: 'industries.festivals.desc' },
    { name: t('industries.finance'), icon: 'ri-bank-line', slug: 'finance-banking', descKey: 'industries.finance.desc' },
    { name: t('industries.health'), icon: 'ri-heart-pulse-line', slug: 'healthcare', descKey: 'industries.health.desc' },
    { name: t('industries.home'), icon: 'ri-home-smile-line', slug: 'home-services', descKey: 'industries.home.desc' },
    { name: t('industries.machines'), icon: 'ri-cpu-line', slug: 'manufacturing', descKey: 'industries.machines.desc' },
    { name: t('industries.food'), icon: 'ri-restaurant-line', slug: 'food-beverage', descKey: 'industries.food.desc' },
    { name: t('industries.education'), icon: 'ri-book-open-line', slug: 'education', descKey: 'industries.education.desc' }
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'de' : 'en';
    i18n.changeLanguage(newLang);
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setIndustriesDropdownOpen(false);
  };

  // DIRECT NAVIGATION: Use window.location.href for mobile
  const handleMobileServiceClick = (slug: string) => {
    setIsMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    // Use direct navigation
    window.location.href = `/services/${slug}`;
  };

  const handleMobileIndustryClick = (slug: string) => {
    setIsMobileMenuOpen(false);
    setIndustriesDropdownOpen(false);
    // Use direct navigation
    window.location.href = `/industries/${slug}`;
  };

  const handleMobileLinkClick = (path: string) => {
    setIsMobileMenuOpen(false);
    // Use direct navigation
    window.location.href = path;
  };

  const handleHomeClick = () => {
    setIsMobileMenuOpen(false);
    window.location.href = '/';
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="w-full max-w-none px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-3 sm:py-4 lg:py-6 flex items-center justify-between gap-2 sm:gap-4">
        {/* Logo */}
        <div onClick={handleHomeClick} className="flex items-center z-50 flex-shrink-0 cursor-pointer">
          <img 
            src="https://static.readdy.ai/image/78648d2a16546c8a94747f62bf26b938/9ab1c79f260f89c8b0df61a7a1ec1fbb.png" 
            alt="Agenncy Logo" 
            className={`w-auto object-contain transition-all duration-300 ${
              isScrolled ? 'h-7 sm:h-8 lg:h-10' : 'h-8 sm:h-10 lg:h-12'
            }`}
            style={{ maxHeight: isScrolled ? '40px' : '48px', objectFit: 'contain' }}
            onError={(e) => {
              // Fallback: try alternative paths
              const target = e.target as HTMLImageElement;
              if (target.src.includes('9ab1c79f260f89c8b0df61a7a1ec1fbb.png')) {
                target.src = "/logo-transparent.png";
              } else if (target.src.includes('logo-transparent.png')) {
                target.src = "/logo-new.png";
              }
            }}
          />
        </div>

        {/* Desktop Navigation Items */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 2xl:gap-12 flex-1 justify-center">
          <div
            onClick={handleHomeClick}
            className={`text-xs xl:text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
              isScrolled ? 'text-gray-800 hover:text-[#6B7F39]' : 'text-white hover:text-[#00D9C0]'
            }`}
          >
            {t('nav.home')}
          </div>

          {/* Services Dropdown (desktop) */}
          <div className="relative dropdown-container">
            <div
              onClick={() => {
                setServicesDropdownOpen(!servicesDropdownOpen);
                setIndustriesDropdownOpen(false);
              }}
              className={`text-xs xl:text-sm font-medium transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1 ${
                isScrolled ? 'text-gray-800 hover:text-[#6B7F39]' : 'text-white hover:text-[#00D9C0]'
              }`}
            >
              {t('nav.services')}
              <i className={`ri-arrow-down-s-line text-sm xl:text-base transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`}></i>
            </div>
            
            {servicesDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[500px] bg-white rounded-none shadow-xl py-4 px-4 border-4 border-gray-100 overflow-hidden">
                {/* Header */}
                <div className="mb-3 pb-3 border-b border-gray-100">
                  <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                    <i className="ri-star-line text-[#6B7F39]"></i>
                    {t('nav.services')}
                  </h3>
                </div>
                
                {/* Services Grid */}
                <div className="grid grid-cols-2 gap-2">
                  {servicesData.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => {
                        setServicesDropdownOpen(false);
                        window.location.href = `/services/${service.slug}`;
                      }}
                      className="group relative flex items-start gap-3 p-3 rounded-lg hover:bg-gradient-to-br hover:from-[#6B7F39]/5 hover:to-[#6B7F39]/10 transition-all border border-transparent hover:border-[#6B7F39]/20 hover:shadow-sm cursor-pointer"
                    >
                      {/* Icon with animated background */}
                      <div className="relative flex-shrink-0">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6B7F39]/10 to-[#6B7F39]/5 flex items-center justify-center group-hover:from-[#6B7F39] group-hover:to-[#5a6b2f] transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                          <i className={`${service.icon} text-[#6B7F39] group-hover:text-white text-base transition-all duration-300`}></i>
                        </div>
                        {/* Animated ring */}
                        <div className="absolute inset-0 rounded-lg border-2 border-[#6B7F39]/20 scale-0 group-hover:scale-125 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-gray-900 group-hover:text-[#6B7F39] transition-colors">
                          {i18n.language === 'de' ? service.titleDe : service.title}
                        </div>
                      </div>
                      
                      {/* Arrow indicator */}
                      <i className="ri-arrow-right-s-line text-gray-300 group-hover:text-[#6B7F39] group-hover:translate-x-1 transition-all text-base flex-shrink-0"></i>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Industries Dropdown (desktop) */}
          <div className="relative dropdown-container">
            <div
              onClick={() => {
                setIndustriesDropdownOpen(!industriesDropdownOpen);
                setServicesDropdownOpen(false);
              }}
              className={`text-xs xl:text-sm font-medium transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1 ${
                isScrolled ? 'text-gray-800 hover:text-[#6B7F39]' : 'text-white hover:text-[#00D9C0]'
              }`}
            >
              {t('nav.industries')}
              <i className={`ri-arrow-down-s-line text-sm xl:text-base transition-transform ${industriesDropdownOpen ? 'rotate-180' : ''}`}></i>
            </div>
            
            {industriesDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[500px] bg-white rounded-none shadow-xl py-4 px-4 border-4 border-gray-100 overflow-hidden">
                {/* Header */}
                <div className="mb-3 pb-3 border-b border-gray-100">
                  <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                    <i className="ri-building-line text-[#6B7F39]"></i>
                    {t('nav.industries')}
                  </h3>
                </div>
                
                {/* Industries Grid */}
                <div className="grid grid-cols-2 gap-2">
                  {industries.map((industry) => (
                    <div
                      key={industry.slug}
                      onClick={() => {
                        setIndustriesDropdownOpen(false);
                        window.location.href = `/industries/${industry.slug}`;
                      }}
                      className="group relative flex items-start gap-3 p-3 rounded-lg hover:bg-gradient-to-br hover:from-[#6B7F39]/5 hover:to-[#6B7F39]/10 transition-all border border-transparent hover:border-[#6B7F39]/20 hover:shadow-sm cursor-pointer text-left"
                    >
                      {/* Icon with animated background */}
                      <div className="relative flex-shrink-0">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6B7F39]/10 to-[#6B7F39]/5 flex items-center justify-center group-hover:from-[#6B7F39] group-hover:to-[#5a6b2f] transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                          <i className={`${industry.icon} text-[#6B7F39] group-hover:text-white text-base transition-all duration-300`}></i>
                        </div>
                        {/* Animated ring */}
                        <div className="absolute inset-0 rounded-lg border-2 border-[#6B7F39]/20 scale-0 group-hover:scale-125 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-gray-900 group-hover:text-[#6B7F39] transition-colors">
                          {industry.name}
                        </div>
                      </div>
                      
                      {/* Arrow indicator */}
                      <i className="ri-arrow-right-s-line text-gray-300 group-hover:text-[#6B7F39] group-hover:translate-x-1 transition-all text-base flex-shrink-0"></i>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div
            onClick={() => window.location.href = '/about'}
            className={`text-xs xl:text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
              isScrolled ? 'text-gray-800 hover:text-[#6B7F39]' : 'text-white hover:text-[#00D9C0]'
            }`}
          >
            {t('nav.about')}
          </div>

          <div
            onClick={() => window.location.href = '/blog'}
            className={`text-xs xl:text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
              isScrolled ? 'text-gray-800 hover:text-[#6B7F39]' : 'text-white hover:text-[#00D9C0]'
            }`}
          >
            {t('nav.blog')}
          </div>

          <div
            onClick={() => window.location.href = '/contact'}
            className={`text-xs xl:text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
              isScrolled ? 'text-gray-800 hover:text-[#6B7F39]' : 'text-white hover:text-[#00D9C0]'
            }`}
          >
            {t('nav.contact')}
          </div>
        </div>

        {/* Desktop Phone Numbers, Language & CTA */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-4 2xl:gap-6 flex-shrink-0">
          <div
            className={`text-xs xl:text-sm font-medium whitespace-nowrap hidden xl:inline-block ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            030 40522266
          </div>
          
          <div
            className={`text-xs xl:text-sm font-medium whitespace-nowrap hidden 2xl:inline-block ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            0176 72282307
          </div>
          
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className={`px-3 xl:px-4 py-2 rounded-full text-xs xl:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
              isScrolled 
                ? 'bg-gray-100 text-gray-800 hover:bg-gray-200' 
                : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
            }`}
          >
            {i18n.language === 'en' ? 'DE' : 'EN'}
          </button>

          <div
            onClick={() => window.location.href = '/contact'}
            className="w-10 h-10 xl:w-12 xl:h-12 rounded-full bg-[#6B7F39] flex items-center justify-center hover:bg-[#5a6b2f] transition-colors cursor-pointer flex-shrink-0"
          >
            <i className="ri-arrow-right-up-line text-white text-lg xl:text-xl"></i>
          </div>
        </div>

        {/* Mobile Language Toggle & Menu Button */}
        <div className="lg:hidden flex items-center gap-2 z-50">
          {/* Mobile Language Toggle - Before Hamburger */}
          <button
            onClick={toggleLanguage}
            className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-semibold transition-all cursor-pointer ${
              isScrolled 
                ? 'bg-[#6B7F39] text-white hover:bg-[#5a6b2f] shadow-md' 
                : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border border-white/30'
            }`}
          >
            {i18n.language === 'en' ? 'DE' : 'EN'}
          </button>

          {/* Mobile Menu Button */}
          <div
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors cursor-pointer ${
              isMobileMenuOpen ? 'text-gray-800' : (isScrolled ? 'text-gray-800' : 'text-white')
            }`}
          >
            {isMobileMenuOpen ? (
              <i className="ri-close-line text-2xl text-gray-800"></i>
            ) : (
              <i className="ri-menu-line text-2xl"></i>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 w-screen h-screen bg-white z-40 overflow-y-auto"
            onClick={(e) => {
              // Close menu when clicking on the overlay
              if (e.target === e.currentTarget) {
                setIsMobileMenuOpen(false);
              }
            }}
          >
            <div className="flex flex-col h-full w-full pt-20 px-6 pb-8">
              {/* Mobile Navigation Items */}
              <div className="flex flex-col gap-6 mb-8">
                <div
                  onClick={handleHomeClick}
                  className="text-2xl font-medium text-gray-800 hover:text-[#6B7F39] transition-colors cursor-pointer"
                >
                  {t('nav.home')}
                </div>

                {/* Mobile Services - Displayed Directly */}
                <div className="flex flex-col gap-3">
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    {t('nav.services')}
                  </div>
                  {servicesData.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => handleMobileServiceClick(service.slug)}
                      className="flex items-center gap-3 text-xl font-medium text-gray-800 hover:text-[#6B7F39] transition-colors cursor-pointer ml-4"
                    >
                      <i className={`${service.icon} text-2xl`}></i>
                      {i18n.language === 'de' ? service.titleDe : service.title}
                    </div>
                  ))}
                </div>

                {/* Mobile Industries - Displayed Directly */}
                <div className="flex flex-col gap-3">
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    {t('nav.industries')}
                  </div>
                  {industries.map((industry) => (
                    <div
                      key={industry.slug}
                      onClick={() => handleMobileIndustryClick(industry.slug)}
                      className="flex items-center gap-3 text-xl font-medium text-gray-800 hover:text-[#6B7F39] transition-colors cursor-pointer ml-4"
                    >
                      <i className={`${industry.icon} text-2xl`}></i>
                      {industry.name}
                    </div>
                  ))}
                </div>

                <div
                  onClick={() => handleMobileLinkClick('/about')}
                  className="text-2xl font-medium text-gray-800 hover:text-[#6B7F39] transition-colors cursor-pointer"
                >
                  {t('nav.about')}
                </div>

                <div
                  onClick={() => handleMobileLinkClick('/blog')}
                  className="text-2xl font-medium text-gray-800 hover:text-[#6B7F39] transition-colors cursor-pointer"
                >
                  {t('nav.blog')}
                </div>

                <div
                  onClick={() => handleMobileLinkClick('/contact')}
                  className="text-2xl font-medium text-gray-800 hover:text-[#6B7F39] transition-colors cursor-pointer"
                >
                  {t('nav.contact')}
                </div>
              </div>

              {/* Mobile Phone Numbers */}
              <div className="flex flex-col gap-4 pt-6 border-t border-gray-200">
                <div className="text-lg font-medium text-gray-800 flex items-center gap-3">
                  <i className="ri-phone-line text-[#6B7F39]"></i>
                  030 40522266
                </div>
                
                <div className="text-lg font-medium text-gray-800 flex items-center gap-3">
                  <i className="ri-phone-line text-[#6B7F39]"></i>
                  0176 72282307
                </div>

                <div
                  onClick={() => handleMobileLinkClick('/contact')}
                  className="px-6 py-3 bg-[#6B7F39] text-white rounded-full text-base font-medium hover:bg-[#5a6b2f] transition-colors cursor-pointer text-center whitespace-nowrap"
                >
                  {t('nav.getStarted')}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}