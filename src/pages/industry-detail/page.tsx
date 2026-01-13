import { useParams } from 'react-router-dom';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';
import IndustryHero from './components/IndustryHero';
import IndustryOverview from './components/IndustryOverview';
import IndustryChallenges from './components/IndustryChallenges';
import IndustrySolutions from './components/IndustrySolutions';
import IndustryBenefits from './components/IndustryBenefits';
import IndustryCTA from './components/IndustryCTA';

export default function IndustryDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <div>Industry not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <IndustryHero slug={slug} />
      <IndustryOverview slug={slug} />
      <IndustryChallenges slug={slug} />
      <IndustrySolutions slug={slug} />
      <IndustryBenefits slug={slug} />
      <IndustryCTA slug={slug} />
      <Footer />
    </div>
  );
}
