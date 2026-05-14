import Hero from '../components/sections/Hero';
import { motion } from 'motion/react';
import { Check, ArrowUpRight, BookOpen, PenTool, Globe, Target, Edit3, MessageSquare, Search, Award, FileText, Layout, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { cn } from '../lib/utils';

const services = [
  {
    title: 'Ghostwriting',
    desc: 'From initial concepts to a completed manuscript, we write in your unique voice.',
    icon: <PenTool className="w-6 h-6" />,
    href: '/services/ghostwriting',
  },
  {
    title: 'Book Editing',
    desc: 'Refining your prose to meet the rigorous standards of premium publishing houses.',
    icon: <Check className="w-6 h-6" />,
    href: '/services/editing',
  },
  {
    title: 'Publishing',
    desc: 'Bespoke publishing strategies including Amazon KDP, print distribution, and ISBN setup.',
    icon: <BookOpen className="w-6 h-6" />,
    href: '/services/publishing',
  },
  {
    title: 'Marketing',
    desc: 'Strategic author branding and book promotion to ensure your legacy is seen.',
    icon: <Globe className="w-6 h-6" />,
    href: '/services/marketing',
  },
];

const genres = [
  { title: 'Fiction', icon: <PenTool className="w-8 h-8" />, desc: 'Engaging plots and immersive worlds.' },
  { title: 'Scientific & Tech', icon: <Monitor className="w-8 h-8 text-primary" /> },
  { title: 'Historical', icon: <History className="w-8 h-8 text-primary" /> },
  { title: 'Non-Fiction', icon: <FileText className="w-8 h-8 text-primary" /> },
  { title: 'Sci-Fi', icon: <Globe className="w-8 h-8 text-primary" /> },
  { title: 'Memoirs', icon: <Users className="w-8 h-8 text-primary" /> },
];

import { Monitor, History } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-paper overflow-hidden">
      <SEO 
        title="Premium Ghostwriting Agency" 
        description="Goldleaf is a professional ghostwriting agency specializing in elite book publishing, editing, and author reputation building."
        schema={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Goldleaf Ghostwriting",
          "url": "https://goldleaf.agency",
          "description": "Professional ghostwriting solutions focused on building author reputation and high-impact manuscripts.",
        }}
      />
      <Hero />

      {/* 2. Professional Solutions Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <span className="text-accent text-[11px] font-bold uppercase tracking-[0.3em] mb-6 block">Building Author Reputation</span>
              <h2 className="text-4xl lg:text-6xl font-serif font-bold text-primary mb-8 leading-tight">
                Professional Ghostwriting Solutions Focused on Building <span className="italic font-normal">Author Reputation</span>
              </h2>
              <p className="text-gray-500 text-lg font-serif italic leading-relaxed mb-10">
                Goldleaf Ghostwriting has a dedicated team committed to debunking the myth that writing a book alone generates sales. Instead, we focus on creating value through a comprehensive process that includes writing, editing, proofreading, publishing, and marketing to ensure the highest level of customer satisfaction.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-10 border-t border-border-subtle">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent-soft rounded-full flex items-center justify-center text-accent">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Value Driven</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent-soft rounded-full flex items-center justify-center text-accent">
                    <Target className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Sales Focused</span>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="aspect-[4/3] bg-primary overflow-hidden shadow-2xl relative z-10 group">
                <img 
                  src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&q=80" 
                  alt="Elite Writing Process"
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 border border-accent opacity-20 rounded-full animate-pulse" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Genres Section */}
      <section className="py-32 bg-accent-soft/30 border-y border-border-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-accent text-[11px] font-bold uppercase tracking-[0.3em] mb-6 block">Genre Specialization</span>
            <h2 className="text-4xl lg:text-7xl font-serif font-bold text-primary mb-10 leading-tight">
              Let Us Initiate Your Book Process — <br/> <span className="italic font-normal">Any Genre You Choose!</span>
            </h2>
            <p className="text-gray-500 text-lg font-serif italic max-w-3xl mx-auto">
              Whether your project is fiction, historical, sci-fi, non-fiction, or any other genre, our team produces the concept to create a distinctive manuscript. Through initial research and outlining, we understand your genre in-depth to frame a story and plot that would engage your readers.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
            {[
              { title: 'Fiction', icon: <PenTool className="w-8 h-8" /> },
              { title: 'Historical', icon: <History className="w-8 h-8" /> },
              { title: 'Sci-Fi', icon: <Globe className="w-8 h-8" /> },
              { title: 'Non-Fiction', icon: <FileText className="w-8 h-8" /> },
              { title: 'Scientific', icon: <Monitor className="w-8 h-8" /> },
              { title: 'Memoirs', icon: <Users className="w-8 h-8" /> },
            ].map((genre, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 text-center border border-border-subtle hover:border-accent hover:shadow-xl transition-all duration-500 group"
              >
                <div className="text-accent group-hover:scale-110 transition-transform duration-500 flex justify-center mb-6">
                  {genre.icon}
                </div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-primary">{genre.title}</h4>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 p-10 lg:p-20 bg-primary text-white border border-white/10 relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-2xl font-serif leading-relaxed italic max-w-3xl">
                "The uniqueness added to your narrative is a <span className="text-accent font-bold not-italic">NOISE</span> that attracts new readers and ultimately grows your book sales."
              </p>
            </div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-5 rounded-full -translate-y-1/2 translate-x-1/2" />
          </div>
        </div>
      </section>

      {/* 4. Goldleaf Book Process Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-24">
            <span className="text-accent text-[11px] font-bold uppercase tracking-[0.4em] mb-6 block">Our Methodology</span>
            <h2 className="text-4xl lg:text-7xl font-serif font-bold text-primary mb-6 leading-tight">Goldleaf Book Process</h2>
            <p className="text-gray-500 font-serif italic text-lg">Become a Best-Seller Author in 4 Simple Steps!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t border-border-subtle">
            {[
              {
                step: '01',
                title: 'Order Placement',
                desc: 'Submit our brief form, detailing your vision, purpose, genre, and idea. Within 48 hours, our representatives will reach out to you.',
                icon: <MessageSquare className="w-8 h-8" />
              },
              {
                step: '02',
                title: 'Sparking Inspiration',
                desc: 'A book begins with a great idea; hence our team ensures to research your topic, and define your target audience.',
                icon: <Search className="w-8 h-8" />
              },
              {
                step: '03',
                title: 'Writing & Editing',
                desc: 'Once your narrative outline is ready, our writers begin with writing. Each chapter is meticulously edited upon completion.',
                icon: <Edit3 className="w-8 h-8" />
              },
              {
                step: '04',
                title: 'Proofreading & Publishing',
                desc: 'Our experienced proofreaders review your manuscript critically to ensure absolute perfection before the publishing stage.',
                icon: <Layout className="w-8 h-8" />
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={cn(
                  "p-12 border-r border-b border-border-subtle hover:bg-accent-soft/30 transition-colors duration-700 group",
                  i === 1 && "bg-white",
                  i === 2 && "bg-accent-soft/10"
                )}
              >
                <div className="flex justify-between items-start mb-12">
                  <div className="text-accent group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <span className="text-4xl font-serif italic text-gray-200 group-hover:text-accent transition-colors duration-500">
                    {item.step}
                  </span>
                </div>
                <h4 className="text-2xl font-serif font-bold text-primary mb-6">{item.title}</h4>
                <p className="text-sm font-serif text-gray-500 leading-relaxed italic">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link 
              to="/contact"
              className="inline-flex py-6 px-16 bg-primary text-white text-xs font-bold uppercase tracking-[0.3em] hover:bg-accent transition-all duration-500 shadow-xl"
            >
              Initiate Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview - Classic Style */}
      <section className="py-32 border-b border-border-subtle bg-accent-soft/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-12 text-center lg:text-left">
            <div className="max-w-2xl">
              <span className="text-accent text-[11px] font-bold uppercase tracking-[0.4em] mb-6 block">Author Care</span>
              <h2 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-primary leading-tight">
                Full Spectrum <br /> <span className="italic font-normal">Manuscript</span> Support
              </h2>
            </div>
            <p className="text-lg text-gray-500 font-serif italic max-w-sm lg:mt-12">
              We offer specialized support services to ensure your manuscript meet international publication standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={cn(
                  "p-8 flex flex-col justify-between transition-all duration-500 bg-white shadow-sm border border-border-subtle",
                  idx === 1 && "bg-primary text-white scale-105 z-10 shadow-2xl border-primary"
                )}
              >
                <div>
                  <span className={cn(
                    "text-[10px] font-bold uppercase mb-6 block",
                    idx === 1 ? "text-accent" : "text-accent"
                  )}>0{idx + 1}. {service.title}</span>
                  <h3 className={cn("text-2xl font-serif mb-4", idx === 1 ? "text-white" : "text-primary")}>
                    {service.title}
                  </h3>
                  <p className={cn("text-xs leading-relaxed mb-10", idx === 1 ? "text-white/60" : "text-gray-500")}>
                    {service.desc}
                  </p>
                </div>
                <Link
                  to={service.href}
                  className={cn(
                    "text-[10px] font-bold uppercase tracking-widest border-b pb-1 transition-all",
                    idx === 1 ? "text-accent border-accent/30 hover:border-accent" : "text-primary border-primary/20 hover:border-primary"
                  )}
                >
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
             <span className="text-accent text-[11px] font-bold uppercase tracking-[0.4em] mb-6 block">The Portfolio</span>
             <h2 className="text-5xl lg:text-7xl font-serif font-bold tracking-tight text-primary mb-6 leading-tight">Elite <span className="italic font-normal">Editions</span></h2>
             <p className="text-gray-500 font-serif italic">A selection of manuscripts crafted for global recognition.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { title: 'The Silent Titan', author: 'Business & Leadership', img: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80' },
              { title: 'Echoes of Silk', author: 'Heritage Memoir', img: 'https://images.unsplash.com/photo-1512820790803-73c7e9698622?auto=format&fit=crop&q=80' },
              { title: 'Narrative Architect', author: 'Contemporary Arts', img: 'https://images.unsplash.com/photo-1532012197367-e3780207d712?auto=format&fit=crop&q=80' },
            ].map((book, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden border border-border-subtle mb-8 shadow-sm grayscale group-hover:grayscale-0 transition-all duration-1000 bg-gray-100">
                  <img src={book.img} alt={book.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h4 className="text-2xl font-serif font-bold mb-2 group-hover:text-accent transition-colors text-primary">{book.title}</h4>
                <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400">{book.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
