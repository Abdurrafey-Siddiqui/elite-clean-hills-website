import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import About from './components/About';
import ServiceGrid from './components/ServiceGrid';
import HowItWorks from './components/HowItWorks';
import Packages from './components/Packages';
import CTA from './components/CTA';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import TrustBadges from './components/TrustBadges';
import ServiceAreas from './components/ServiceAreas';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-blue selection:text-white">
      <Navbar />
      <Hero />
      <StatsBar />
      <About />
      <ServiceGrid />
      <HowItWorks />
      <Packages />
      <CTA />
      <Gallery />
      <Reviews />
      <FAQ />
      <ContactForm />
      <TrustBadges />
      <ServiceAreas />
      <Footer />
    </div>
  );
}
