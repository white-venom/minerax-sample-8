import { useState } from 'react';
import { Leaf, Zap, RefreshCw, ShieldAlert, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const initiatives = [
  {
    id: 'hydrogen',
    title: 'Green Hydrogen DRI',
    category: 'Clean Energy',
    description: 'Replacing fossil coking coal with 100% green hydrogen in our Direct Reduced Iron (DRI) furnaces, slashing CO2 emissions by up to 95%.',
    stats: [
      { label: 'CO2 Reduction', value: '-95%' },
      { label: 'Energy Source', value: 'Solar & Wind' },
    ],
    image: '/assets/hero_1.png',
  },
  {
    id: 'eaf',
    title: 'Next-Gen Electric Arc Furnaces',
    category: 'Electrification',
    description: 'Ultra-efficient EAF technology powered entirely by renewable microgrids, melting scrap steel with zero direct furnace emissions.',
    stats: [
      { label: 'Scrap Utilization', value: '88%' },
      { label: 'Thermal Efficiency', value: '94%' },
    ],
    image: '/assets/hero_2.png',
  },
  {
    id: 'circular',
    title: 'Closed-Loop Circular Economy',
    category: 'Resource Efficiency',
    description: 'Zero liquid discharge systems and 100% recycling of slag and mill scale into high-value construction aggregates.',
    stats: [
      { label: 'Water Recycled', value: '99.2%' },
      { label: 'Waste Diverted', value: '100%' },
    ],
    image: '/assets/division_castings.png',
  },
];

const metrics = [
  { icon: Leaf, label: 'Carbon Intensity Target', value: '< 0.4 tCO2/t', subtext: 'By 2030 (Global Benchmark)' },
  { icon: Zap, label: 'Clean Hydrogen Supply', value: '120,000 Tons', subtext: 'Annual Renewable Hydrogen' },
  { icon: RefreshCw, label: 'Recycled Steel Input', value: '4.2 Million Tons', subtext: 'Circular Material Stream' },
  { icon: ShieldAlert, label: 'Zero Waste to Landfill', value: 'Certified ISO 14001', subtext: 'Across All 12 Plants' },
];

export default function Sustainability() {
  const [activeTab, setActiveTab] = useState(initiatives[0].id);
  const activeInitiative = initiatives.find((item) => item.id === activeTab) || initiatives[0];

  return (
    <section id="sustainability" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Glow Backdrops */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold uppercase tracking-widest text-xs mb-4">
            <Leaf className="w-4 h-4" />
            ESG & Sustainability Leadership
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Pioneering Green Metallurgy <br /> for a Zero-Carbon World
          </h2>
          <p className="text-slate-300 text-lg font-light leading-relaxed">
            Minerax is transforming industrial steelmaking through green hydrogen DRI, renewable electrification, and 100% circular material loops.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {metrics.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-800/60 border border-slate-700/60 rounded-lg p-6 hover:border-emerald-500/40 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5 text-emerald-400">
                <m.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl font-black text-white tracking-tight mb-1">{m.value}</div>
              <div className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-2">{m.label}</div>
              <div className="text-xs text-slate-400 font-light">{m.subtext}</div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Feature Tabs */}
        <div className="bg-slate-800/40 rounded-xl border border-slate-700/50 p-6 md:p-10 backdrop-blur-md">
          <div className="flex flex-wrap gap-3 mb-10 border-b border-slate-700/60 pb-6">
            {initiatives.map((init) => (
              <button
                key={init.id}
                onClick={() => setActiveTab(init.id)}
                className={`px-6 py-3 rounded-md text-sm font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                  activeTab === init.id
                    ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                }`}
              >
                {init.title}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-2 block">
                {activeInitiative.category} Initiative
              </span>
              <h3 className="text-3xl font-bold text-white mb-4">{activeInitiative.title}</h3>
              <p className="text-slate-300 text-base leading-relaxed mb-8 font-light">
                {activeInitiative.description}
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {activeInitiative.stats.map((s, idx) => (
                  <div key={idx} className="bg-slate-900/80 p-4 rounded-lg border border-slate-700/60">
                    <div className="text-2xl font-black text-emerald-400">{s.value}</div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-1">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Audited & verified by DNV GL Sustainable Standards</span>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-700/80 aspect-[16/10] group">
              <img
                src={activeInitiative.image}
                alt={activeInitiative.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">
                    Green Facility Operation
                  </div>
                  <div className="text-white font-bold text-lg">{activeInitiative.title}</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-bold">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
