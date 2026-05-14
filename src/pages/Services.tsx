import { motion } from 'motion/react';
import { PenTool, Search, BookOpen, Globe, Palette, Monitor, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const services = [
  {
    id: 'ghostwriting',
    title: 'Expert Ghostwriting',
    desc: 'From high-concept fiction to legacy memoirs. We provide the elite penmanship to bring your raw vision to life.',
    icon: <PenTool className="w-8 h-8" />,
    features: ['Fiction & Non-fiction', 'Biographies & Memoirs', 'Business & Leadership', 'Expert Interviews'],
    color: 'bg-accent-soft',
    href: '/services/ghostwriting'
  },
  {
    id: 'editing',
    title: 'Elite Book Editing',
    desc: 'Meticulous refinement of your manuscript. Our editors have background from the world’s leading publishing houses.',
    icon: <Search className="w-8 h-8" />,
    features: ['Developmental Editing', 'Manuscript Critique', 'Copy Editing', 'Proofreading'],
    color: 'bg-primary/5',
    href: '/services/editing'
  },
  {
    id: 'publishing',
    title: 'Global Publishing',
    desc: 'Bespoke distribution strategies. We handle the technical complexities of global reach and platform placement.',
    icon: <BookOpen className="w-8 h-8" />,
    features: ['Amazon KDP Setup', 'ISBN & Meta-data', 'IngramSpark Distribution', 'Library & Bookshop Reach'],
    color: 'bg-accent-soft',
    href: '/global-publishing'
  },
  {
    id: 'marketing',
    title: 'Author Marketing',
    desc: 'Strategic brand architecture. We ensure your book doesn’t just exist—it dominates its category.',
    icon: <Globe className="w-8 h-8" />,
    features: ['PR Campaigns', 'Amazon Ranking', 'Email Marketing', 'Social Architecture'],
    color: 'bg-primary/5',
    href: '/author-marketing'
  },
  {
    id: 'book-covers',
    title: 'Book Cover Design',
    desc: 'Visual poetry for your masterpiece. Custom artwork and typography that commands immediate shelf attention.',
    icon: <Palette className="w-8 h-8" />,
    features: ['Hardcover & Paperback', 'Elite Aesthetics', '3D Visual Mockups', 'Genre-targeted Design'],
    color: 'bg-accent-soft',
    href: '/book-cover-design'
  },
  {
    id: 'author-website',
    title: 'Author Platforms',
    desc: 'A digital home for your legacy. Premium website design focused on conversion and personal brand building.',
    icon: <Monitor className="w-8 h-8" />,
    features: ['SEO Optimized', 'Newsletter Sync', 'Book Showcase', 'Blogging System'],
    color: 'bg-primary/5',
    href: '/author-platforms'
  }
];

export default function Services() {
  return (
    <div className="pt-32 pb-24 bg-paper min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-32 border-b border-border-subtle pb-20">
          <span className="text-[11px] uppercase tracking-[0.4em] font-sans text-accent font-bold mb-6 block">The Full Spectrum</span>
          <h1 className="text-5xl lg:text-8xl font-serif font-bold tracking-tight text-primary mb-10 leading-tight">
            Elite Literary <br /> <span className="italic font-normal">Architecture</span>
          </h1>
          <p className="text-xl text-gray-500 font-serif italic max-w-2xl mx-auto leading-relaxed">
            From the first inkling of an idea to a global best-selling debut, we provide the expert support required for literary distinction.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border-subtle mb-32">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "group p-12 lg:p-16 border-r border-b border-border-subtle transition-all duration-700",
                [1, 3, 5].includes(idx) ? "bg-white" : "bg-accent-soft/30",
                idx === 1 && "bg-primary text-white"
              )}
            >
              <div className={cn(
                "text-[10px] font-bold uppercase tracking-[0.3em] mb-8 block",
                idx === 1 ? "text-accent" : "text-accent"
              )}>
                0{idx + 1}. {service.title}
              </div>
              <h3 className={cn("text-3xl font-serif mb-6 leading-tight", idx === 1 ? "text-white" : "text-primary")}>
                {service.title}
              </h3>
              <p className={cn("text-sm leading-relaxed mb-10 font-serif italic", idx === 1 ? "text-white/60" : "text-gray-500")}>
                {service.desc}
              </p>
              
              <ul className="space-y-4 mb-16">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-center text-[10px] uppercase tracking-[0.2em] font-bold opacity-60">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-4" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                to={service.href}
                className={cn(
                  "text-[10px] font-bold uppercase tracking-widest border-b pb-1 transition-all",
                  idx === 1 ? "text-accent border-accent/30 hover:border-accent" : "text-primary border-primary/20 hover:border-primary"
                )}
              >
                In-depth Details
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <div className="border border-border-subtle flex flex-col lg:flex-row bg-primary text-white overflow-hidden shadow-2xl">
          <div className="w-full lg:w-1/2 p-12 lg:p-24 border-r border-white/10">
            <span className="text-[11px] uppercase tracking-[0.4em] font-sans text-accent font-bold mb-6 block">The Workflow</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-12 leading-tight">
              How We Draft <br /> Your <span className="text-accent italic font-normal">Future</span>
            </h2>
            <p className="text-white/60 text-lg font-serif italic mb-12 leading-relaxed max-w-md">
              Our approach is meticulous, collaborative, and entirely private. We move at the speed of your life, ensuring the narrative is polished to perfection.
            </p>
            <Link
              to="/contact"
              className="px-10 py-5 border border-accent text-accent text-[11px] uppercase font-bold tracking-widest hover:bg-accent hover:text-white transition-all duration-300 shadow-lg shadow-accent/20"
            >
              Start the Audit
            </Link>
          </div>

          <div className="w-full lg:w-1/2 p-12 lg:p-24 bg-white/5 space-y-16">
            {[
              { n: '01', t: 'Vision Discovery', d: 'An intensive interview series to capture your voice, tone, and specific goals.' },
              { n: '02', t: 'Narrative Mapping', d: 'Drafting a comprehensive outline and chapter breakdown for your prior approval.' },
              { n: '03', t: 'Elite Penmanship', d: 'Meticulous writing of each chapter, with ongoing feedback loops.' },
              { n: '04', t: 'Production & Launch', d: 'Design, editing, and distribution handled by our in-house publishing team.' },
            ].map((step, i) => (
              <div key={i} className="flex gap-10 group">
                <div className="text-4xl font-serif italic text-accent/20 group-hover:text-accent transition-colors duration-500">
                  {step.n}
                </div>
                <div>
                  <h4 className="text-2xl font-serif font-bold mb-3">{step.t}</h4>
                  <p className="text-white/40 text-sm font-serif italic leading-relaxed max-w-sm group-hover:text-white/60 transition-colors">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
