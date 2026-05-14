import { motion } from 'motion/react';
import { 
  Globe, Layout, Smartphone, Database, Lock, 
  Search, Users, MessageSquare, ArrowRight,
  Monitor, Cpu, Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const platformFeatures = [
  { 
    title: 'Author Website Development', 
    desc: 'Bespoke, high-converting websites architected to showcase your portfolio and convert visitors into fans.',
    icon: <Monitor className="w-8 h-8" />
  },
  { 
    title: 'Personal Branding', 
    desc: 'Dynamic visual identity design that establishes your unique voice in the crowded literary marketplace.',
    icon: <Users className="w-8 h-8" />
  },
  { 
    title: 'Landing Pages', 
    desc: 'High-performance funnels for book launches, pre-orders, and lead generation.',
    icon: <Zap className="w-8 h-8" />
  },
  { 
    title: 'Portfolio Design', 
    desc: 'Eloquent digital galleries for your body of work, featuring interactive book previews and reviews.',
    icon: <Layout className="w-8 h-8" />
  },
  { 
    title: 'Blog Integration', 
    desc: 'Powerful content management systems that enable you to share your thoughts and boost SEO rankings.',
    icon: <MessageSquare className="w-8 h-8" />
  },
  { 
    title: 'Email Capture Systems', 
    desc: 'Strategic lead magnets and automated sequences that build your most valuable asset: your reader list.',
    icon: <Database className="w-8 h-8" />
  },
  { 
    title: 'Reader Community Building', 
    desc: 'Integrated social tools and forum capabilities to foster a dedicated following.',
    icon: <Globe className="w-8 h-8" />
  },
  { 
    title: 'SEO Optimization', 
    desc: 'Advanced technical and content SEO to ensure you dominate search results in your genre.',
    icon: <Search className="w-8 h-8" />
  }
];

export default function AuthorPlatforms() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-paper/30">
        {/* Animated Tech Grid Background */}
        <div className="absolute inset-0 z-0 opacity-10">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,119,182,0.1)_0%,transparent_100%)]" />
           <div className="w-full h-full bg-[size:40px_40px] bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="w-full lg:w-3/5 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-8"
              >
                 <span className="text-[10px] uppercase tracking-[0.5em] font-sans text-accent font-bold px-6 py-2 bg-accent-soft rounded-full">
                   Digital Architecture
                 </span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-8xl lg:text-9xl font-serif font-bold text-primary mb-12 tracking-tight leading-[0.9]"
              >
                Build Your Digital <br /> 
                <span className="italic font-normal text-accent block mt-4 tracking-normal">Author Presence</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-xl lg:mx-0 mx-auto text-xl text-gray-500 font-serif italic mb-16 leading-relaxed"
              >
                Create a powerful online platform that connects you with readers worldwide through cutting-edge technology and exquisite design.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8"
              >
                <Link to="/contact">
                  <button className="px-16 py-8 bg-primary text-white text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-accent transition-all duration-500 shadow-3xl flex items-center gap-4">
                    Architect My Platform
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                <div className="flex items-center gap-4 group cursor-pointer">
                   <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent transition-all duration-500">
                      <Cpu className="w-5 h-5 text-accent" />
                   </div>
                   <div className="text-[10px] uppercase font-bold tracking-widest text-primary/40 group-hover:text-primary transition-colors">Technical Spec</div>
                </div>
              </motion.div>
            </div>
            
            <div className="w-full lg:w-2/5 relative">
               <motion.div
                 initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                 animate={{ opacity: 1, scale: 1, rotate: 0 }}
                 transition={{ duration: 1.2 }}
                 className="relative z-10"
               >
                 <div className="bg-white p-4 shadow-3xl rounded-3xl border border-border-subtle overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80" 
                      alt="Digital Platform" 
                      className="w-full h-auto rounded-2xl grayscale hover:grayscale-0 transition-all duration-1000"
                      referrerPolicy="no-referrer"
                    />
                 </div>
                 {/* Floating Badges */}
                 <motion.div 
                   animate={{ y: [0, -10, 0] }}
                   transition={{ duration: 3, repeat: Infinity }}
                   className="absolute -right-10 -bottom-10 bg-accent text-white p-8 rounded-full shadow-2xl z-20"
                 >
                    <Zap className="w-8 h-8" />
                 </motion.div>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why it Matters Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
             <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-8 tracking-tight">
               The Foundation of <br /> <span className="italic font-normal">Modern Authorship</span>
             </h2>
             <p className="text-xl text-gray-400 font-serif italic">
               In today's digital landscape, your platform is your most powerful asset. It's the bridge between your vision and your audience.
             </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
             <div className="space-y-6">
                <div className="text-5xl font-serif font-bold text-accent">01</div>
                <h4 className="text-xl font-serif font-bold text-primary uppercase tracking-widest leading-none">Readership Growth</h4>
                <p className="text-sm text-gray-500 font-serif leading-relaxed italic px-8">Strategic content and SEO architecture drive consistent organic traffic to your work.</p>
             </div>
             <div className="space-y-6 lg:border-x border-paper">
                <div className="text-5xl font-serif font-bold text-accent">02</div>
                <h4 className="text-xl font-serif font-bold text-primary uppercase tracking-widest leading-none">Credibility</h4>
                <p className="text-sm text-gray-500 font-serif leading-relaxed italic px-8">A premium digital presence establishes immediate authority with agents and publishers.</p>
             </div>
             <div className="space-y-6">
                <div className="text-5xl font-serif font-bold text-accent">03</div>
                <div className="text-xl font-serif font-bold text-primary uppercase tracking-widest leading-none">Engagement</div>
                <p className="text-sm text-gray-500 font-serif leading-relaxed italic px-8">Direct interaction tools turn passive readers into advocates and community members.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-paper/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platformFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group p-10 bg-white border border-border-subtle hover:border-accent transition-all duration-500 shadow-sm hover:shadow-2xl rounded-3xl"
              >
                <div className="w-14 h-14 bg-accent-soft rounded-xl flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-primary mb-4 group-hover:text-accent transition-colors">{feature.title}</h3>
                <p className="text-sm text-gray-400 font-serif leading-relaxed italic">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white text-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto p-24 bg-paper border border-border-subtle rounded-[60px] relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
            <h2 className="text-4xl md:text-7xl font-serif font-bold text-primary mb-12">
              Launch Your <br /> <span className="italic font-normal text-accent">Author Brand</span>
            </h2>
            <Link to="/contact">
              <button className="px-20 py-8 bg-primary text-white text-[11px] font-bold uppercase tracking-[0.5em] hover:bg-accent transition-all duration-500 shadow-2xl">
                Start Building Today
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
