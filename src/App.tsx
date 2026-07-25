import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import Legacy from './components/Legacy';
import Divisions from './components/Divisions';
import GlobalPresence from './components/GlobalPresence';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-amber-500 selection:text-white">
      <Navbar />
      
      <main>
        <HeroSlider />
        <Legacy />
        <Divisions />
        <GlobalPresence />
        <Certifications />
      </main>

      <Footer />
    </div>
  );
}
