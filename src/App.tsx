import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrustBar from './components/TrustBar';
import ProblemSection from './components/ProblemSection';
import HowItWorks from './components/HowItWorks';
import FeaturesSection from './components/FeaturesSection';
import ImpactSection from './components/ImpactSection';
import WorkflowSection from './components/WorkflowSection';
import PricingSection from './components/PricingSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <ProblemSection />
      <HowItWorks />
      <FeaturesSection />
      <ImpactSection />
      <WorkflowSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
