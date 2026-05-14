import { motion } from 'motion/react';
import { 
  Megaphone, Share2, Target, Mail, FileText, 
  TrendingUp, Users, Search, ArrowRight, 
  BarChart3, Globe, LineChart
} from 'lucide-react';
import { Link } from 'react-router-dom';

const marketingServices = [
  { 
    title: 'Social Media Marketing', 
    desc: 'Bespoke social media strategies that build community and drive consistent engagement across all major platforms.',
    icon: <Share2 className="w-8 h-8" />
  },
  { 
    title: 'Amazon Book Marketing', 
    desc: 'Optimized Amazon advertising and SEO to ensure your book appears at the top of relevant search results.',
    icon: <Target className="w-8 h-8" />
  },
  { 
    title: 'Author Branding', 
    desc: 'Developing a unique visual and narrative identity that makes you stand out as a thought leader in your genre.',
    icon: <Users className="w-8 h-8" />
  },
  { 
    title: 'Email Marketing Campaigns', 
    desc: 'Lead generation and newsletter strategies to turn casual readers into loyal, lifelong fans.',
    icon: <Mail className="w-8 h-8" />
  },
  { 
    title: 'Press Releases', 
    desc: 'Professional PR outreach to major media outlets, literary blogs, and news platforms to boost credibility.',
    icon: <FileText className="w-8 h-8" />
  },
  { 
    title: 'Paid Advertising Campaigns', 
    desc: 'Data-driven Meta and Google Ads campaigns designed for maximum ROI and audience growth.',
    icon: <BarChart3 className="w-8 h-8" />
  },
  { 
    title: 'Book Launch Strategy', 
    desc: 'A comprehensive, multi-channel roadmap for a successful and high-impact launch week.',
    icon: <TrendingUp className="w-8 h-8" />
  },
  { 
    title: 'Influencer Outreach', 
    desc: 'Connecting you with powerful voices in the literary community to amplify your message.',
    icon: <Globe className="w-8 h-8" />
  }
];

export default function AuthorMarketing() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-paper/20">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0 opacity-30">
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"
          />
          <motion.div 
            animate={{ 
              y: [0, 20, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 2 }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px]"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 inline-block"
          >
             <span className="text-[10px] uppercase tracking-[0.6em] font-sans text-accent font-bold px-6 py-2 bg-accent-soft/50 rounded-full border border-accent/10 backdrop-blur-sm">
               Strategic Growth
             </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl lg:text-9xl font-serif font-bold text-primary mb-10 tracking-tight leading-[0.9]"
          >
            Grow Your Audience & <br /> 
            <span className="italic font-normal text-accent block mt-4 tracking-normal">Maximize Visibility</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-gray-500 font-serif italic mb-12"
          >
            Strategic marketing solutions designed to elevate your author brand and increase book sales worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link to="/contact">
              <button className="px-12 py-6 bg-primary text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-accent transition-all duration-500 shadow-2xl shadow-primary/20 flex items-center gap-3">
                Elevate My Brand
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <motion.div 
              whileHover={{ rotate: 10 }}
              className="w-16 h-16 rounded-full border border-primary/10 flex items-center justify-center cursor-pointer hover:border-accent transition-colors"
            >
              <Megaphone className="w-6 h-6 text-accent" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketingServices.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group p-10 bg-white border border-border-subtle hover:border-accent/40 shadow-sm hover:shadow-xl transition-all duration-500 rounded-3xl"
              >
                <div className="w-14 h-14 bg-accent-soft rounded-2xl flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-400 font-serif leading-relaxed italic">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Analytics Mockup Section */}
      <section className="py-32 bg-paper/40 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="w-full lg:w-1/2 space-y-8">
               <span className="text-[10px] uppercase tracking-[0.4em] font-sans text-accent font-bold">Data-Driven Success</span>
               <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary leading-tight">
                 Real-Time Insight <br /> <span className="italic font-normal">Into Your Growth</span>
               </h2>
               <p className="text-lg text-gray-500 font-serif italic">
                 We don't just guess; we analyze. Our marketing engine provides deep metrics into reader behavior, enabling us to pivot strategies for maximum impact.
               </p>
               <div className="grid grid-cols-2 gap-8 pt-8">
                 <div className="p-6 bg-white border border-border-subtle rounded-2xl">
                    <LineChart className="w-8 h-8 text-accent mb-4" />
                    <div className="text-2xl font-serif font-bold text-primary">245%</div>
                    <div className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Avg. ROI</div>
                 </div>
                 <div className="p-6 bg-white border border-border-subtle rounded-2xl">
                    <Users className="w-8 h-8 text-accent mb-4" />
                    <div className="text-2xl font-serif font-bold text-primary">1.2M</div>
                    <div className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Monthly Impressions</div>
                 </div>
               </div>
            </div>
            <div className="w-full lg:w-1/2 relative">
               <motion.div
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 className="relative z-10 bg-white p-4 shadow-3xl rounded-[40px] border border-border-subtle"
               >
                 <img 
                   src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" 
                   alt="Analytics dashboard" 
                   className="w-full h-auto rounded-[32px] grayscale hover:grayscale-0 transition-all duration-1000"
                   referrerPolicy="no-referrer"
                 />
                 <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-10" />
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white text-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto p-20 bg-primary rounded-[50px] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,119,182,0.2),transparent)]" />
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 relative z-10">
              Promote Your Book <br /> <span className="italic font-normal text-accent">Like a Bestseller</span>
            </h2>
            <Link to="/contact">
              <button className="px-16 py-8 bg-accent text-white text-[11px] font-bold uppercase tracking-[0.5em] hover:bg-white hover:text-primary transition-all duration-500 shadow-2xl relative z-10">
                Start Marketing Now
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
