import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrustBar from './components/TrustBar';
import ServicesSection from './components/ServicesSection';
import ProcessTimeline from './components/ProcessTimeline';
import IndustriesSection from './components/IndustriesSection';
import WorkGlimpseSection from './components/WorkGlimpseSection';
import AboutSection from './components/AboutSection';
import FAQSection from './components/FAQSection';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import ConsultationPopup from '../../components/ConsultationPopup';

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleConsultationClick = () => {
    setIsPopupOpen(true);
  };

  return (
    <div className={`min-h-screen bg-white transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      <HeroSection />
      <TrustBar />
      <ServicesSection onConsultationClick={handleConsultationClick} />
      <ProcessTimeline onConsultationClick={handleConsultationClick} />
      <IndustriesSection />
      <WorkGlimpseSection />
      <AboutSection onConsultationClick={handleConsultationClick} />
      <FAQSection onConsultationClick={handleConsultationClick} />
      <ContactCTA />
      <Footer />
      <ConsultationPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
}
