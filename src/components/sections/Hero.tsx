import { motion } from 'motion/react';
import { ChevronRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col lg:flex-row bg-paper border-b border-border-subtle overflow-hidden">
      {/* Left Column: Branding & CTA */}
      <div className="w-full lg:w-[45%] p-8 lg:p-24 flex flex-col justify-center border-r border-border-subtle relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-accent font-serif italic text-lg mb-6 block uppercase tracking-[0.2em] animate-in fade-in slide-in-from-left-4 duration-1000 font-bold">
            Elite Publishing Agency
          </span>
          <h1 className="text-6xl lg:text-7xl font-serif leading-[1.05] mb-8 text-primary text-balance font-bold">
            Your Legacy, <br/>
            <span className="italic font-normal">Masterfully</span> <br/>
            Written.
          </h1>
          <p className="text-gray-500 leading-relaxed mb-10 max-w-sm text-sm lg:text-base font-serif italic">
            Professional ghostwriting solutions focused on building author reputation. We transform your vision into best-selling manuscripts.
          </p>
          
          <div className="flex flex-wrap gap-6 items-center">
            <Link
              to="/services"
              className="px-8 py-4 bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-accent transition-all duration-300 shadow-xl"
            >
              View Services
            </Link>
            <Link
              to="/about"
              className="flex items-center gap-3 transition-transform hover:translate-x-1"
            >
              <div className="w-10 h-10 border border-border-subtle rounded-full flex items-center justify-center">
                <ChevronRight className="w-4 h-4 text-accent" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Our Process</span>
            </Link>
          </div>

          {/* Stats Section */}
          <div className="mt-20 pt-10 border-t border-border-subtle flex gap-12 lg:gap-16">
            <div>
              <div className="text-3xl font-serif text-accent font-bold">400+</div>
              <div className="text-[9px] uppercase font-bold tracking-widest text-gray-400 mt-1">Books Published</div>
            </div>
            <div>
              <div className="text-3xl font-serif text-accent font-bold">22</div>
              <div className="text-[9px] uppercase font-bold tracking-widest text-gray-400 mt-1">NYT Bestsellers</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Column: Visual Showcase */}
      <div className="w-full lg:w-[55%] bg-accent-soft/30 relative flex items-center justify-center p-12 overflow-hidden">
        {/* Abstract Accents */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-accent opacity-5 rounded-full pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-accent opacity-5 rounded-full pointer-events-none"></div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="relative z-10 w-full max-w-2xl aspect-[4/5] lg:aspect-auto h-full max-h-[700px]"
        >
          <img
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80"
            alt="Art of Writing"
            className="w-full h-full object-cover shadow-[40px_40px_100px_-20px_rgba(0,0,0,0.15)] grayscale hover:grayscale-0 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
          
          {/* Floating Element */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute -bottom-8 -right-8 lg:-right-16 bg-white p-8 shadow-2xl border border-border-subtle max-w-[280px] hidden md:block"
          >
            <div className="text-accent mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="inline-block w-3 h-3 fill-accent" />
              ))}
            </div>
            <p className="font-serif italic text-lg leading-snug text-primary/80 mb-4">
              "They didn't just write my book; they found my voice."
            </p>
            <div className="text-[9px] uppercase tracking-widest font-bold opacity-50 text-gray-400">
              — International Bestselling Author
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
