import { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';
import ServiceHero from './components/ServiceHero';
import ServiceOverview from './components/ServiceOverview';
import ServiceBenefits from './components/ServiceBenefits';
import ServiceProcess from './components/ServiceProcess';
import ServiceFeatures from './components/ServiceFeatures';
import ServiceTools from './components/ServiceTools';
import ServiceFAQ from './components/ServiceFAQ';
import ServiceCTA from './components/ServiceCTA';
import RelatedServices from './components/RelatedServices';
import ConsultationPopup from '../../components/ConsultationPopup';
import { servicesData } from '../../mocks/services';

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { i18n } = useTranslation();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const service = servicesData.find(s => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const isGerman = i18n.language === 'de';

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <ServiceHero service={service} isGerman={isGerman} onOpenPopup={() => setIsPopupOpen(true)} />
      <ServiceOverview service={service} isGerman={isGerman} />
      <ServiceBenefits service={service} isGerman={isGerman} />
      <ServiceProcess service={service} isGerman={isGerman} />
      <ServiceFeatures service={service} isGerman={isGerman} />
      <ServiceTools service={service} isGerman={isGerman} />
      <ServiceFAQ service={service} isGerman={isGerman} />
      <RelatedServices currentServiceId={service.id} isGerman={isGerman} />
      <ServiceCTA service={service} isGerman={isGerman} onOpenPopup={() => setIsPopupOpen(true)} />
      
      <Footer />
      
      <ConsultationPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
}
