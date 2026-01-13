import { useEffect, useState } from 'react';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';
import AboutHero from './components/AboutHero';
import OurStory from './components/OurStory';
import ValuesSection from './components/ValuesSection';
import ConsultationSection from './components/ConsultationSection';
import CultureSection from './components/CultureSection';
import AboutMapSection from './components/AboutMapSection';
import ConsultationPopup from '../../components/ConsultationPopup';

export default function AboutPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleConsultationClick = () => {
    setIsPopupOpen(true);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <AboutHero />
      <OurStory />
      <ValuesSection />
      <ConsultationSection onConsultationClick={handleConsultationClick} />
      <CultureSection />
      <AboutMapSection />
      <Footer />
      <ConsultationPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
}
