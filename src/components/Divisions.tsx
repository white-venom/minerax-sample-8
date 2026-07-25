import { ArrowRight } from 'lucide-react';

const divisions = [
  {
    title: 'Minerax Heavy Castings',
    description: 'Ultra-large steel castings for mining, shipbuilding, and industrial machinery.',
    image: '/assets/ai_asset_7.jpg',
  },
  {
    title: 'Minerax Seamless Pipes',
    description: 'High-strength seamless steel pipes for oil & gas and petrochemical sectors.',
    image: '/assets/ai_asset_6.jpg',
  },
  {
    title: 'Minerax Rail Infrastructure',
    description: 'Premium quality rails, sleepers, and track components for modern transit.',
    image: '/assets/ai_asset_8.jpg',
  },
  {
    title: 'Minerax Advanced Alloys',
    description: 'Specialty steel and superalloys for aerospace and defense applications.',
    image: '/assets/ai_asset_5.jpg',
  }
];

export default function Divisions() {
  return (
    <section id="products" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-amber-500" />
              <span className="text-slate-600 font-bold tracking-widest uppercase text-sm">
                Group Divisions
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Comprehensive <br /> Industrial Solutions
            </h2>
          </div>
          <button className="hidden md:flex text-slate-900 font-bold uppercase tracking-wider items-center gap-2 hover:text-amber-600 transition-colors group">
            View All Divisions
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {divisions.map((division, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={division.image} 
                  alt={division.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-6 relative">
                <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-1 group-hover:text-amber-600 transition-colors">
                  {division.title}
                </h3>
                <p className="text-slate-600 text-sm mb-6 line-clamp-3 font-light">
                  {division.description}
                </p>
                <button className="text-amber-600 uppercase tracking-wider text-xs font-bold flex items-center gap-2">
                  Explore
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 md:hidden flex justify-center">
          <button className="text-slate-900 font-bold uppercase tracking-wider flex items-center gap-2 hover:text-amber-600 transition-colors">
            View All Divisions
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
