import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';

export default function ContactSection() {
  const [division, setDivision] = useState('castings');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    tonnage: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', tonnage: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Info Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-amber-500" />
              <span className="text-amber-500 font-bold tracking-widest uppercase text-sm">
                Global Commercial Procurement
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              Request a Custom <br /> Industrial RFQ
            </h2>
            <p className="text-slate-300 text-lg font-light leading-relaxed mb-10">
              Direct access to our metallurgical engineers and commercial teams. Receive detailed mill test pricing and production timelines within 24 hours.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/40 border border-slate-800">
                <div className="w-10 h-10 rounded bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Rapid 24-Hour Turnaround</h4>
                  <p className="text-slate-400 text-xs mt-1">Dedicated sales engineers assigned to every corporate inquiry.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/40 border border-slate-800">
                <div className="w-10 h-10 rounded bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Full Quality Compliance</h4>
                  <p className="text-slate-400 text-xs mt-1">Certified for ISO 9001, API Spec Q1, and ASTM international standards.</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-slate-950 border border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Direct Commercial Contacts</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-slate-300">
                  <Phone className="w-4 h-4 text-amber-500" />
                  <span>+1 (800) 555-MINERAX / +1 (713) 555-0199</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Mail className="w-4 h-4 text-amber-500" />
                  <span>commercial@minerax.com</span>
                </div>
                <div className="flex items-start gap-3 text-slate-300">
                  <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
                  <span>100 Industrial Parkway, Houston, TX 77002, USA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive RFQ Form */}
          <div className="lg:col-span-7 bg-slate-800/80 rounded-xl border border-slate-700/80 p-6 md:p-10 shadow-2xl backdrop-blur-md">
            {submitted ? (
              <div className="py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">RFQ Inquiry Submitted!</h3>
                <p className="text-slate-300 max-w-md mx-auto text-sm font-light">
                  Thank you. Our commercial sales engineering team for <span className="text-amber-400 font-semibold">{division.toUpperCase()}</span> will review your specifications and issue a formal quote shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Select Target Industrial Division
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'castings', label: 'Heavy Castings' },
                      { id: 'pipes', label: 'Seamless Pipes' },
                      { id: 'rail', label: 'Rail Transit' },
                      { id: 'alloys', label: 'Advanced Alloys' },
                    ].map((div) => (
                      <button
                        key={div.id}
                        type="button"
                        onClick={() => setDivision(div.id)}
                        className={`py-2.5 px-3 rounded text-xs font-bold uppercase tracking-wider transition-all border ${
                          division === div.id
                            ? 'bg-amber-500 text-slate-950 border-amber-500 shadow'
                            : 'bg-slate-900 text-slate-400 border-slate-700 hover:text-white'
                        }`}
                      >
                        {div.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Robert Vance"
                      className="w-full bg-slate-900 border border-slate-700 rounded p-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="vance@energycorp.com"
                      className="w-full bg-slate-900 border border-slate-700 rounded p-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Global Energy Inc."
                      className="w-full bg-slate-900 border border-slate-700 rounded p-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Estimated Volume / Tonnage
                    </label>
                    <input
                      type="text"
                      value={formData.tonnage}
                      onChange={(e) => setFormData({ ...formData, tonnage: e.target.value })}
                      placeholder="e.g. 5,000 MT"
                      className="w-full bg-slate-900 border border-slate-700 rounded p-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Technical Project Specifications & Scope
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe material grade, outer diameter, pressure rating, or delivery destination..."
                    className="w-full bg-slate-900 border border-slate-700 rounded p-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold uppercase tracking-wider py-4 rounded-sm transition-colors flex items-center justify-center gap-2 shadow-lg shadow-amber-600/20"
                >
                  <Send className="w-4 h-4" />
                  Submit Official RFQ Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
