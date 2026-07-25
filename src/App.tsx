import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import Legacy from './components/Legacy';
import Divisions from './components/Divisions';
import Projects from './components/Projects';
import SteelCalculator from './components/SteelCalculator';
import Sustainability from './components/Sustainability';
import GlobalPresence from './components/GlobalPresence';
import Certifications from './components/Certifications';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-amber-500 selection:text-slate-950">
      <Navbar />
      
      <main>
        <HeroSlider />
        <Legacy />
        <Divisions />
        <Projects />
        <SteelCalculator />
        <Sustainability />
        <GlobalPresence />
        <Certifications />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
