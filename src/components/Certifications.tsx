import { ShieldCheck, Award, FileBadge2, CheckCircle2 } from 'lucide-react';

const certifications = [
  { name: 'ISO 9001:2015', desc: 'Quality Management Systems', icon: ShieldCheck },
  { name: 'ISO 14001:2015', desc: 'Environmental Management', icon: Award },
  { name: 'ISO 45001:2018', desc: 'Occupational Health & Safety', icon: CheckCircle2 },
  { name: 'API Spec Q1', desc: 'American Petroleum Institute', icon: FileBadge2 },
];

export default function Certifications() {
  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Global Quality Standards</h2>
          <p className="text-slate-500 mt-2">Certified by leading international authorities.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {certifications.map((cert, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:border-amber-500 group-hover:bg-amber-50 transition-colors duration-300">
                <cert.icon className="w-10 h-10 text-slate-400 group-hover:text-amber-600 transition-colors" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">{cert.name}</h3>
              <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">{cert.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
