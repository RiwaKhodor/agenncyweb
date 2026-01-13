import { useEffect, useState } from 'react';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';
import BlogHero from './components/BlogHero';
import DescriptionSection from './components/DescriptionSection';
import WhyAgenncySection from './components/WhyAgenncySection';
import ConsultationCTASection from './components/ConsultationCTASection';
import ConsultationPopup from '../../components/ConsultationPopup';

export default function BlogPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleConsultationClick = () => {
    setIsPopupOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <BlogHero />
      <DescriptionSection />
      <WhyAgenncySection />
      <ConsultationCTASection onConsultationClick={handleConsultationClick} />
      <Footer />
      <ConsultationPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
}
