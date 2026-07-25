import { Globe, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-amber-500 rounded-sm flex items-center justify-center">
                <span className="text-slate-900 font-black text-xl tracking-tighter">A</span>
              </div>
              <span className="text-white font-bold text-lg tracking-wide uppercase">
                Minerax<span className="text-amber-500">Steel</span>
              </span>
            </div>
            <p className="text-sm font-light leading-relaxed mb-6">
              Forging the future with Minerax. A global leader committed to quality, sustainability, and industrial excellence since 1974.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-500 hover:text-amber-500 transition-colors">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Corporate Profile</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Investor Relations</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Sustainability Report</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Careers at Minerax</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Media & Newsroom</a></li>
            </ul>
          </div>

          {/* Divisions */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Our Divisions</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Heavy Castings</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Seamless Pipes</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Rail Infrastructure</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Advanced Alloys</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Global Logistics</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Global Headquarters</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0" />
                <span>100 Industrial Parkway,<br />Houston, TX 77002, USA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                <span>+1 (800) 555-STEEL</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                <span>inquiries@minerax.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-light">
          <p>&copy; {new Date().getFullYear()} Minerax Group. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
