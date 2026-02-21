import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-blue selection:text-white">
      <Hero />
      <TrustBadges />
      <Gallery />
      <Reviews />
      <CTA />
      <Footer />
    </div>
  );
}
