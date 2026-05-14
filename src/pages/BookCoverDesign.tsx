import { motion } from 'motion/react';
import { 
  Palette, Book, Layers, Type, Sparkles, 
  PenTool, Monitor, CheckCircle2, ArrowRight,
  Eye, Minimize2, Image
} from 'lucide-react';
import { Link } from 'react-router-dom';

const coverServices = [
  { 
    title: 'eBook Cover Design', 
    desc: 'Bespoke digital covers optimized for thumbnail visibility and high conversion on Amazon Kindle and Apple Books.',
    icon: <Monitor className="w-8 h-8" />
  },
  { 
    title: 'Paperback Cover Design', 
    desc: 'Complete wrap-around designs (front, spine, back) meticulously crafted for industry-standard print production.',
    icon: <Book className="w-8 h-8" />
  },
  { 
    title: 'Hardcover Design', 
    desc: 'Premium dust jacket or case-wrap architectures, incorporating elegant foil effects and textured aesthetic choices.',
    icon: <Layers className="w-8 h-8" />
  },
  { 
    title: 'Typography Design', 
    desc: 'Custom-engineered font treatments that speak directly to your genres visual language and mood.',
    icon: <Type className="w-8 h-8" />
  },
  { 
    title: 'Genre-Specific Concepts', 
    desc: 'Strategic design research to ensure your book matches the aesthetic expectations of its target audience.',
    icon: <Sparkles className="w-8 h-8" />
  },
  { 
    title: 'Premium Illustration', 
    desc: 'Exclusive custom artwork or digital painting to create a truly one-of-a-kind visual identity.',
    icon: <Palette className="w-8 h-8" />
  },
  { 
    title: 'Cover Mockups', 
    desc: 'Photorealistic 3D renderings of your book in various environments for high-impact marketing use.',
    icon: <Image className="w-8 h-8" />
  },
  { 
    title: 'Print-Ready Formatting', 
    desc: 'Technical file preparation at extreme precision, ensuring a flawless result from any global printing house.',
    icon: <CheckCircle2 className="w-8 h-8" />
  }
];

export default function BookCoverDesign() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-paper/20">
        <div className="absolute inset-0 z-0 opacity-20">
           <img 
             src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80" 
             alt="Design abstract" 
             className="w-full h-full object-cover grayscale"
             referrerPolicy="no-referrer"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-paper/50 via-transparent to-white" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8"
          >
             <span className="text-[10px] uppercase tracking-[0.5em] font-sans text-accent font-bold px-6 py-2 bg-accent-soft rounded-full">
               Visual Storytelling
             </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-primary mb-12 tracking-tight leading-none"
          >
            Captivating Covers <br /> 
            <span className="italic font-normal text-accent block mt-4">That Sell Stories</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto text-xl md:text-2xl text-gray-500 font-serif italic mb-16 leading-relaxed"
          >
            Creative, cinematic, and market-driven cover designs tailored for every genre. We architect the visual soul of your book.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8"
          >
            <Link to="/contact">
              <button className="px-16 py-8 bg-primary text-white text-[11px] font-bold uppercase tracking-[0.4em] hover:bg-accent transition-all duration-500 shadow-3xl flex items-center gap-4 group">
                Design My Bestseller
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-accent/10 group-hover:rotate-45 transition-all duration-500">
                <Palette className="w-5 h-5 text-accent" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-primary/40 group-hover:text-primary transition-colors">View Portfolio</span>
            </div>
          </motion.div>
        </div>

        {/* 3D Rotating Book Mockup Decoration */}
        <motion.div 
          animate={{ 
            rotateY: [0, 360],
            y: [0, -20, 0]
          }}
          transition={{ 
            rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 blur-sm pointer-events-none hidden lg:block"
        >
           <Book className="w-96 h-[500px] text-primary" />
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coverServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group p-10 bg-white border border-border-subtle hover:border-accent transition-all duration-500 shadow-sm hover:shadow-2xl rounded-[40px] text-center"
              >
                <div className="w-20 h-20 bg-paper rounded-[32px] flex items-center justify-center text-accent mb-8 mx-auto group-hover:bg-accent group-hover:text-white transition-all duration-700 shadow-inner">
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-primary mb-4 group-hover:text-accent transition-colors italic">{service.title}</h3>
                <p className="text-sm text-gray-500 font-serif leading-relaxed line-clamp-3">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-32 bg-paper/30 overflow-hidden text-center">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-7xl font-serif font-bold text-primary mb-24"
          >
            Gallery of <br /> <span className="italic font-normal text-accent">Cinematic Excellence</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {[
               "https://images.unsplash.com/photo-1543005187-a2bc6a040a69?auto=format&fit=crop&q=80",
               "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80",
               "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&q=80"
             ].map((img, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.2 }}
                 viewport={{ once: true }}
                 className="relative group aspect-[2/3] overflow-hidden rounded-2xl shadow-2xl"
               >
                 <img 
                   src={img} 
                   alt={`Cover showcase ${i+1}`} 
                   className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                   referrerPolicy="no-referrer"
                 />
                 <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Minimize2 className="text-white w-12 h-12" />
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
             <div className="mb-12 flex justify-center gap-2">
                <Sparkles className="text-accent" />
                <Sparkles className="text-accent w-4 h-4" />
                <Sparkles className="text-accent w-3 h-3" />
             </div>
             <h2 className="text-5xl md:text-8xl font-serif font-bold text-primary mb-12 tracking-tight">
               Design Your <br /> <span className="italic font-normal text-accent">Bestseller Cover</span>
             </h2>
             <Link to="/contact">
               <button className="px-20 py-10 bg-primary text-white text-[12px] font-bold uppercase tracking-[0.5em] hover:bg-accent transition-all duration-500 shadow-3xl">
                 Launch Project Initiation
               </button>
             </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
