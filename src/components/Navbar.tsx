import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Globe, Phone } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Products', href: '#products' },
    { name: 'Global Presence', href: '#global' },
    { name: 'Sustainability', href: '#sustainability' },
    { name: 'Investors', href: '#investors' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-slate-900 shadow-md py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 bg-amber-500 rounded-sm flex items-center justify-center">
              <span className="text-slate-900 font-black text-2xl tracking-tighter">A</span>
            </div>
            <span className="text-white font-bold text-xl tracking-wide uppercase">
              Atlas<span className="text-amber-500">Steel</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-200 hover:text-amber-500 font-medium text-sm transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-white hover:text-amber-500 transition-colors">
              <Globe className="w-5 h-5" />
            </button>
            <button className="bg-amber-600 hover:bg-amber-500 text-white px-5 py-2 rounded-sm text-sm font-semibold uppercase tracking-wider transition-colors flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-200 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 absolute top-full left-0 right-0 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 text-slate-200 hover:text-amber-500 hover:bg-slate-800 rounded-md font-medium uppercase tracking-wider text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 mt-4 border-t border-slate-800 px-3">
              <button className="w-full bg-amber-600 text-white px-5 py-3 rounded-sm text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
