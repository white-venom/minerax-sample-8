import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { cn } from '../lib/utils';

const slides = [
  {
    id: 1,
    image: '/assets/ai_asset_9.jpg',
    subtitle: 'Forging the Future',
    title: 'Global Leaders in Steel Casting',
    description: "Decades of heritage, precision engineering, and uncompromising quality for the world's most demanding industries.",
  },
  {
    id: 2,
    image: '/assets/ai_asset_9.jpg',
    subtitle: 'Uncompromising Quality',
    title: 'Precision in Every Pour',
    description: 'State-of-the-art foundries delivering high-grade steel products to exacting international standards.',
  },
  {
    id: 3,
    image: '/assets/ai_asset_9.jpg',
    subtitle: 'Global Footprint',
    title: 'Powering Infrastructure Worldwide',
    description: 'From pipelines to structural girders, our steel builds the backbone of modern civilization.',
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative h-screen min-h-[600px] w-full overflow-hidden bg-slate-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent" />
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
              <div className="max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="flex items-center gap-4 mb-4"
                >
                  <div className="h-[2px] w-12 bg-amber-500" />
                  <span className="text-amber-500 font-bold tracking-widest uppercase text-sm">
                    {slides[current].subtitle}
                  </span>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
                >
                  {slides[current].title}
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl font-light"
                >
                  {slides[current].description}
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.8 }}
                  className="flex flex-wrap gap-4"
                >
                  <button className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider transition-colors flex items-center gap-2 group">
                    Explore Capabilities
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider transition-colors">
                    Corporate Video
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Controls */}
      <div className="absolute bottom-10 right-10 flex items-center gap-4 z-20">
        <div className="flex gap-2 mr-6">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={cn(
                "w-12 h-1 transition-all",
                current === idx ? "bg-amber-500" : "bg-white/30 hover:bg-white/50"
              )}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        <button 
          onClick={prevSlide}
          className="w-12 h-12 flex items-center justify-center border border-white/30 hover:bg-white/10 text-white rounded-sm transition-colors backdrop-blur-sm"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="w-12 h-12 flex items-center justify-center border border-white/30 hover:bg-white/10 text-white rounded-sm transition-colors backdrop-blur-sm"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
