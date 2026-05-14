import { motion } from 'motion/react';
import { 
  Globe, Book, Rocket, Shield, Search, Layout, 
  Palette, PenTool, CheckCircle2, ArrowRight, 
  ExternalLink, Send, Mail
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const platforms = [
  { name: 'Amazon Kindle', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Barnes & Noble', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Barnes_%26_Noble_logo.svg/2560px-Barnes_%26_Noble_logo.svg.png' },
  { name: 'Kobo', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Kobo_Logo.svg/2560px-Kobo_Logo.svg.png' },
  { name: 'Blurb', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Blurb_Logo.svg/2560px-Blurb_Logo.svg.png' },
  { name: 'Apple Books', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Apple_Books_logo.svg/2560px-Apple_Books_logo.svg.png' },
  { name: 'Google Books', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Google_Play_Books_logo_%282023%29.svg' }
];

const publishingServices = [
  { 
    title: 'eBook Publishing', 
    desc: 'Optimized formatting for all digital readers, ensuring a seamless experience across Kindle, iPad, and Android.',
    icon: <Layout className="w-8 h-8" />
  },
  { 
    title: 'Paperback Publishing', 
    desc: 'Professional interior design and high-quality print production for global paperback distribution.',
    icon: <Book className="w-8 h-8" />
  },
  { 
    title: 'Hardcover Publishing', 
    desc: 'Premium hardcover editions with dust jackets or case-wrap designs for collectors and libraries.',
    icon: <Shield className="w-8 h-8" />
  },
  { 
    title: 'Global Distribution', 
    desc: 'Reach over 40,000 retailers, libraries, and schools worldwide through our elite distribution network.',
    icon: <Globe className="w-8 h-8" />
  },
  { 
    title: 'ISBN Registration', 
    desc: 'Official ISBN assignment and metadata optimization to ensure your book is discoverable globally.',
    icon: <CheckCircle2 className="w-8 h-8" />
  },
  { 
    title: 'Formatting & Typesetting', 
    desc: 'Bespoke interior architecture that matches the aesthetic of traditional publishing houses.',
    icon: <PenTool className="w-8 h-8" />
  },
  { 
    title: 'Cover Design', 
    desc: 'Cinematic book covers designed to stop the scroll and command attention on the shelf.',
    icon: <Palette className="w-8 h-8" />
  },
  { 
    title: 'POD (Print on Demand)', 
    desc: 'Effortless inventory management with global print-on-demand fulfillment near your customers.',
    icon: <Rocket className="w-8 h-8" />
  },
  { 
    title: 'Publishing Consultation', 
    desc: 'One-on-one strategic sessions to navigate the complex world of global book distribution.',
    icon: <Search className="w-8 h-8" />
  }
];

const processSteps = [
  { n: '01', t: 'Manuscript Review', d: 'Our editors conduct a final sanity check and formatting audit to ensure industry compliance.' },
  { n: '02', t: 'Formatting & Design', d: 'We architect the interior and exterior to meet the highest aesthetic and technical standards.' },
  { n: '03', t: 'Publishing Setup', d: 'Secure upload to global networks with optimized categories and keywords for maximum reach.' },
  { n: '04', t: 'Global Distribution', d: 'Your book goes live across Amazon, B&N, and 40,000+ bookstores worldwide.' },
];

export default function GlobalPublishing() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-paper/30">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-white" />
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -right-1/4 -top-1/4 w-full h-full bg-accent/5 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
             <span className="text-[11px] uppercase tracking-[0.5em] font-sans text-accent font-bold px-6 py-2 bg-accent-soft rounded-full">
               International Distribution
             </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-primary mb-12 tracking-tight leading-none"
          >
            Publishing Your <br /> 
            <span className="italic font-normal text-accent block mt-4">Book Made Easy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto text-xl md:text-2xl text-gray-500 font-serif italic leading-relaxed mb-16"
          >
            Take Your Book to the Big Screen With Goldleaf Publishing House. We bring your vision to the global stage.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link to="/contact">
              <button className="px-12 py-6 bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-accent transition-all duration-500 shadow-2xl group flex items-center gap-3">
                Publish Your Book
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link to="/contact">
              <button className="px-12 py-6 border border-primary text-primary text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-500">
                Request Consultation
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary/20 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-accent rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="relative group">
                <div className="absolute inset-x-0 -bottom-10 h-72 bg-accent/5 blur-3xl -z-10 group-hover:bg-accent/10 transition-all duration-700" />
                <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?auto=format&fit=crop&q=80" 
                    alt="Publishing process" 
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Floating Stats */}
                <div className="absolute -right-10 top-20 bg-primary text-white p-8 shadow-2xl rounded-xl hidden md:block">
                   <div className="text-3xl font-serif font-bold text-accent mb-1">5K+</div>
                   <div className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-60">Books Published</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <span className="text-[11px] uppercase tracking-[0.4em] font-sans text-accent font-bold mb-6 block">Contemporary Excellence</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-10 leading-tight">
                Industry-Leading <br /> <span className="italic font-normal">Publishing Alternatives</span>
              </h2>
              <div className="space-y-8 text-lg text-gray-500 font-serif leading-relaxed">
                <p>
                  Have you ever thought about how book publishing evolved from printing books to digital publishing platforms and eventually to global publishing agencies?
                </p>
                <p>
                  Each publishing avenue requires compliance with industry-standard regulations, which makes it challenging for authors to effectively reach their audience.
                </p>
                <p>
                  As a professional publishing agency, <span className="text-primary font-bold">Goldleaf Ghostwriting</span> assists clients in reaching global audiences through major platforms such as Amazon, Barnes & Noble, Blurb, Kobo, and many others.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platform Showcase */}
      <section className="py-32 bg-paper/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Global Reach Platforms</h2>
            <p className="text-gray-400 font-serif italic text-lg">We distribute your vision across the world's most prestigious literary networks.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {platforms.map((platform, i) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 border border-border-subtle flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 shadow-sm hover:shadow-xl rounded-xl group"
              >
                <img 
                  src={platform.logo} 
                  alt={platform.name} 
                  className="max-h-12 w-auto object-contain opacity-40 group-hover:opacity-100 transition-opacity" 
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publishing Services Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-[11px] uppercase tracking-[0.4em] font-sans text-accent font-bold mb-6 block">The Spectrum</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-8">Architecting Your <br /> <span className="italic font-normal">Global Presence</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publishingServices.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="p-10 bg-white border border-border-subtle hover:border-accent shadow-sm hover:shadow-2xl transition-all duration-500 group rounded-2xl overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full translate-x-4 -translate-y-4 group-hover:scale-150 transition-transform duration-700" />
                <div className="w-16 h-16 bg-accent-soft rounded-2xl flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
                <p className="text-sm text-gray-500 font-serif leading-relaxed italic">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="py-32 bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-[11px] uppercase tracking-[0.4em] text-accent font-bold mb-6 block">The Roadmap</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold">The Publishing Journey</h2>
          </div>

          <div className="relative">
            {/* Horizontal Line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 hidden lg:block" />
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-20 relative z-10">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-20 h-20 bg-accent rounded-full mb-8 flex items-center justify-center text-2xl font-serif font-bold shadow-2xl group-hover:scale-110 transition-transform duration-500">
                    {step.n}
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-4 text-accent">{step.t}</h3>
                  <p className="text-white/50 font-serif italic text-sm px-4 group-hover:text-white/70 transition-colors">
                    {step.d}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(0,119,182,0.05)_0%,transparent_70%)]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto space-y-12"
          >
            <h2 className="text-5xl md:text-8xl font-serif font-bold text-primary tracking-tight">
              Ready to Publish Your <br /> <span className="italic font-normal text-accent">Story Worldwide?</span>
            </h2>
            <p className="text-xl text-gray-400 font-serif italic max-w-2xl mx-auto">
              Partner with Goldleaf Ghostwriting and transform your manuscript into a professionally published book available across global platforms.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link to="/contact">
                <button className="px-16 py-8 bg-primary text-white text-[11px] uppercase font-bold tracking-[0.4em] hover:bg-accent transition-all duration-500 shadow-2xl flex items-center gap-4 group">
                  Start Publishing
                  <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-16 py-8 border border-primary text-primary text-[11px] uppercase font-bold tracking-[0.3em] hover:bg-primary hover:text-white transition-all duration-500 flex items-center gap-4">
                  Talk to an Expert
                  <Mail className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
