import { Link } from 'react-router-dom';
import { BookOpen, Instagram, Twitter, Linkedin, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white pt-24 pb-0 border-t border-white/5">
      <div className="container mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-2 space-y-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-sm transform rotate-45"></div>
              <span className="font-serif text-xl font-bold tracking-tight uppercase text-white">Goldleaf <span className="text-accent">Ghostwriting</span></span>
            </Link>
            <p className="text-gray-400 font-serif italic text-lg max-w-md leading-relaxed">
              Transforming your vision into best-selling manuscripts. We provide the elite penmanship your legacy deserves.
            </p>
            <div className="flex gap-8 text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">
              <a href="#" className="hover:text-gold transition-colors">Instagram</a>
              <a href="#" className="hover:text-gold transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-gold transition-colors">Twitter</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold mb-8">Navigation</h4>
            <ul className="space-y-4 text-xs uppercase tracking-widest text-gray-500 font-medium">
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/packages" className="hover:text-white transition-colors">Packages</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold mb-8">Contact</h4>
            <ul className="space-y-4 text-xs text-gray-500 uppercase tracking-widest leading-relaxed">
              <li>Manhattan, New York</li>
              <li>concierge@goldleaf.agency</li>
              <li>+1 (212) 555-0198</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="h-16 border-t border-white/5 flex items-center bg-transparent">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="text-[10px] font-medium text-gray-600 tracking-wide uppercase">
            &copy; {currentYear} GOLDLEAF PUBLISHING GROUP. ALL RIGHTS RESERVED.
          </div>
          <div className="hidden sm:flex items-center gap-8">
            <div className="text-[10px] font-bold uppercase tracking-widest text-accent flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              Now Accepting Manuscripts
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
