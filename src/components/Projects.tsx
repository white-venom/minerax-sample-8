import { useState } from 'react';
import { Building2, MapPin, ArrowUpRight, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Nordic Trans-Sea Suspension Bridge',
    category: 'infrastructure',
    categoryLabel: 'Infrastructure',
    location: 'Copenhagen, Denmark',
    tonnage: '42,000 MT Steel Girders',
    year: '2024',
    image: '/assets/hero_3.png',
    description: 'Supplied ultra-high strength structural steel plates and cable anchors engineered to withstand arctic sub-zero sea currents.',
  },
  {
    id: 2,
    title: 'Gulf Deepwater Subsea Pipeline',
    category: 'energy',
    categoryLabel: 'Energy & Offshore',
    location: 'Houston, USA / Gulf of Mexico',
    tonnage: '115,000 MT Seamless Pipes',
    year: '2023',
    image: '/assets/division_pipes.png',
    description: 'API 5L X80 grade seamless steel pipe network engineered for 3,000m ocean depth high-pressure sour gas transmission.',
  },
  {
    id: 3,
    title: 'Titan Heavy Machinery Castings',
    category: 'foundry',
    categoryLabel: 'Heavy Foundries',
    location: 'Rotterdam, Netherlands',
    tonnage: '8,500 MT Forged Gear Components',
    year: '2024',
    image: '/assets/division_castings.png',
    description: 'Single-piece 120-ton steel ring castings manufactured for offshore wind turbine installation vessels.',
  },
  {
    id: 4,
    title: 'Trans-European High-Speed Rail Corridor',
    category: 'transit',
    categoryLabel: 'Rail Transit',
    location: 'Frankfurt to Milan',
    tonnage: '88,000 MT Premium Rails',
    year: '2023',
    image: '/assets/hero_2.png',
    description: 'Head-hardened 60E2 steel rail tracks engineered for continuous 320 km/h passenger and freight express operations.',
  },
  {
    id: 5,
    title: 'Global Energy Liquefied Gas Hub',
    category: 'energy',
    categoryLabel: 'Energy & Offshore',
    location: 'Doha, Qatar',
    tonnage: '64,000 MT Alloy Piping',
    year: '2024',
    image: '/assets/hero_1.png',
    description: 'Cryogenic stainless steel and alloy piping systems operating at -162°C for world-scale LNG export terminals.',
  },
  {
    id: 6,
    title: 'Pacific Megacity Transit Viaduct',
    category: 'infrastructure',
    categoryLabel: 'Infrastructure',
    location: 'Tokyo, Japan',
    tonnage: '36,000 MT Seismic Steel Columns',
    year: '2022',
    image: '/assets/factory_facility.jpg',
    description: 'High-yield seismic energy dissipating steel column assemblies for earthquake-resistant elevated highways.',
  },
];

const categories = [
  { id: 'all', label: 'All Flagship Projects' },
  { id: 'infrastructure', label: 'Mega Infrastructure' },
  { id: 'energy', label: 'Oil, Gas & Energy' },
  { id: 'foundry', label: 'Heavy Castings' },
  { id: 'transit', label: 'Rail & Transit' },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-amber-500" />
              <span className="text-slate-600 font-bold tracking-widest uppercase text-sm">
                Case Studies & Portfolio
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Engineering Marvels <br /> Powered by Minerax
            </h2>
          </div>
          <p className="text-slate-600 max-w-md font-light text-sm leading-relaxed">
            From arctic ocean subsea pipelines to high-speed transcontinental railways, explore how our custom steel solutions power mega-projects worldwide.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-slate-200 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group bg-slate-900 rounded-lg overflow-hidden shadow-lg border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-amber-500 text-slate-950 font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded">
                        {project.categoryLabel}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-slate-400 text-xs font-medium mb-3">
                      <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>{project.location}</span>
                      <span className="mx-1">•</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-sm font-light leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-800/80 flex items-center justify-between mt-auto">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {project.tonnage}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-800 text-amber-500 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
