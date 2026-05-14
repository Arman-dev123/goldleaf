import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, BookOpen, ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { 
    name: 'Services', 
    href: '/services',
    subLinks: [
      { name: 'Ghostwriting', href: '/services/ghostwriting' },
      { name: 'Editing', href: '/services/editing' },
      { name: 'Publishing', href: '/global-publishing' },
      { name: 'Author Marketing', href: '/author-marketing' },
      { name: 'Author Platforms', href: '/author-platforms' },
      { name: 'Book Cover Design', href: '/book-cover-design' },
      { name: 'Global Publishing', href: '/global-publishing' },
    ]
  },
  { name: 'Portfolio', href: '/book-cover-design' },
  { name: 'Packages', href: '/packages' },
  { name: 'Blog', href: '/blog' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-24 flex items-center border-b border-border-subtle bg-paper/90 backdrop-blur-md px-6 lg:px-12',
        scrolled && 'shadow-sm h-20'
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-sm transform rotate-45 transition-transform duration-500 group-hover:rotate-135 shadow-sm"></div>
          <div className="flex flex-col ml-2">
            <span className="font-serif text-xl font-bold tracking-tight uppercase text-primary">
              Goldleaf <span className="text-accent">Ghostwriting</span>
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-10">
          <div className="flex gap-8 text-[11px] font-semibold tracking-[0.2em] uppercase">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative group/nav"
                onMouseEnter={() => link.subLinks && setServicesOpen(true)}
                onMouseLeave={() => link.subLinks && setServicesOpen(false)}
              >
                <Link
                  to={link.href}
                  className={cn(
                    'transition-colors duration-300 flex items-center gap-1 py-4',
                    location.pathname === link.href ? 'text-accent' : 'text-primary hover:text-accent'
                  )}
                >
                  {link.name}
                </Link>
                
                {link.subLinks && (
                  <div className={cn(
                    "absolute top-full left-0 w-64 bg-white/80 backdrop-blur-xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 opacity-0 invisible translate-y-4 group-hover/nav:opacity-100 group-hover/nav:visible group-hover/nav:translate-y-0 p-2 rounded-2xl",
                  )}>
                    <div className="p-4 space-y-1">
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.href}
                          className="block text-[11px] font-bold tracking-widest text-primary/70 hover:text-accent hover:bg-accent-soft/50 p-3 rounded-xl transition-all duration-300 flex items-center justify-between group/sub"
                        >
                          {sub.name}
                          <ChevronRight className="w-3 h-3 opacity-0 group-hover/sub:opacity-100 transition-opacity" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <Link
            to="/contact"
            className="px-8 py-3 bg-primary text-white text-[11px] font-bold uppercase tracking-widest hover:bg-accent transition-all duration-300 shadow-lg shadow-primary/10"
          >
            Request Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-primary p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-paper z-[60] lg:hidden overflow-y-auto"
          >
            <div className="p-6 flex justify-between items-center bg-white border-b border-border-subtle">
               <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2 group">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-sm transform rotate-45"></div>
                <span className="font-serif text-xl font-bold tracking-tight uppercase text-primary">
                  Goldleaf
                </span>
              </Link>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 text-primary bg-accent-soft rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-10 space-y-12">
              <div className="space-y-8">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-4xl font-serif font-bold text-primary hover:text-accent transition-colors flex items-center justify-between group"
                    >
                      {link.name}
                      <ChevronRight className="w-6 h-6 opacity-20 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                    </Link>
                    {link.subLinks && (
                      <div className="mt-6 flex flex-wrap gap-4 pl-4 border-l-2 border-accent/20">
                        {link.subLinks.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.href}
                            onClick={() => setIsOpen(false)}
                            className="text-[10px] uppercase tracking-widest font-bold text-primary/60 hover:text-accent bg-white px-3 py-2 border border-border-subtle rounded-lg shadow-sm transition-all"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full bg-primary text-white text-center py-6 text-xs uppercase font-bold tracking-[0.3em] shadow-2xl"
              >
                Start Your Journey
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
