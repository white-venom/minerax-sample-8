import { ArrowRight, Trophy, Users, Globe2, Factory } from 'lucide-react';

const stats = [
  { value: '50+', label: 'Years of Legacy', icon: Trophy },
  { value: '3.5M', label: 'Tons Annual Capacity', icon: Factory },
  { value: '65+', label: 'Countries Exported', icon: Globe2 },
  { value: '12K+', label: 'Global Employees', icon: Users },
];

export default function Legacy() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-amber-500" />
              <span className="text-slate-600 font-bold tracking-widest uppercase text-sm">
                Our Heritage
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              A Legacy of Iron, <br /> Built on Trust.
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed font-light">
              Since 1974, Minerax has been at the forefront of metallurgical innovation. We transform raw materials into the critical components that power global infrastructure, energy, and transportation sectors. Our commitment to scale, quality, and sustainable practices has made us the trusted partner for governments and mega-corporations worldwide.
            </p>
            <button className="text-amber-600 font-bold uppercase tracking-wider flex items-center gap-2 hover:text-amber-700 transition-colors group">
              Read Our Full Story
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="space-y-6">
            <div className="relative rounded-md overflow-hidden shadow-xl border border-slate-200 group">
              <img 
                src="/assets/factory_facility.jpg" 
                alt="Minerax Steel Production Facility" 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-white text-xs font-semibold uppercase tracking-wider">State-of-the-Art Steel Production Hub</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="bg-slate-50 p-6 rounded-sm border border-slate-100 hover:border-amber-300 transition-all duration-300 group shadow-sm hover:shadow"
                >
                  <stat.icon className="w-8 h-8 text-amber-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl font-bold text-slate-900 mb-1 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-slate-500 font-medium uppercase tracking-wider text-xs">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
