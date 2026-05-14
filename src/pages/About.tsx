import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Shield, Users, RotateCcw, TrendingUp, Lock, Heart, 
  CreditCard, Search, Headset, BookOpen, Quote, Sparkles,
  ArrowRight, Award, CheckCircle2
} from 'lucide-react';
import { cn } from '../lib/utils';
import { useRef } from 'react';

const whyChooseUs = [
  {
    title: "Finest Literary Usage",
    desc: "Our team is well-versed with vocabulary and research skills, leading to producing the finest literature for you.",
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    title: "Team Diversity",
    desc: "Goldleaf has a diverse group with experience across various cultural backgrounds to better understand the varying perceptions of clients.",
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "Easy Refunds",
    desc: "If you are not satisfied with our services, that’s fine. During our feedback stage, we process easy refunds.",
    icon: <RotateCcw className="w-6 h-6" />
  },
  {
    title: "Higher Readership",
    desc: "A book stuffed only with words adversely impacts readership. Therefore, we focus on creating stories for higher reader engagement.",
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    title: "Secure Ownership",
    desc: "With Goldleaf, you don't have to worry about ownership issues. We write for you, but you hold 100% ownership and authorization of your book.",
    icon: <Lock className="w-6 h-6" />
  },
  {
    title: "Customer Retention",
    desc: "We believe customer loyalty is priceless. Therefore, it is our responsibility to provide you with the best experience possible.",
    icon: <Heart className="w-6 h-6" />
  },
  {
    title: "Payment Plan",
    desc: "We provide a range of flexible payment options for your ghostwriting requirements, from standard to premium solutions.",
    icon: <CreditCard className="w-6 h-6" />
  },
  {
    title: "Extensive Research",
    desc: "Research improves the quality of any book regardless of genre. Therefore, we invest considerable time in outlining unique and engaging stories.",
    icon: <Search className="w-6 h-6" />
  },
  {
    title: "24/7 Support",
    desc: "With our 24/7 customer support, you have a dedicated representative available to address concerns, offer guidance, and keep you informed.",
    icon: <Headset className="w-6 h-6" />
  }
];

const stats = [
  { label: 'Authors', value: '12,000+', suffix: '' },
  { label: 'Satisfaction', value: '98%', suffix: '' },
  { label: 'Books Published', value: '5,000+', suffix: '' },
  { label: 'Support', value: '24/7', suffix: '' }
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="bg-white min-h-screen">
      {/* Hero About Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: heroY, opacity }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80" 
            alt="Library background" 
            className="w-full h-full object-cover grayscale opacity-40 mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-paper/30 via-transparent to-white" />
        </motion.div>

        {/* Floating 3D-like elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: 0 }}
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ 
                duration: 5 + i, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: i * 0.5 
              }}
              className="absolute bg-primary/10 rounded-lg shadow-2xl skew-x-12"
              style={{
                width: 100 + i * 40,
                height: 140 + i * 60,
                left: `${10 + i * 20}%`,
                top: `${20 + i * 15}%`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="text-[11px] uppercase tracking-[0.5em] font-sans text-accent font-bold mb-8 block px-6 py-2 bg-accent-soft rounded-full inline-block">
              Since 2009
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-primary mb-12 tracking-tight leading-none"
          >
            Crafting Excellence <br /> 
            <span className="italic font-normal text-accent block mt-4">Through Expertise</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto text-xl md:text-2xl text-gray-500 font-serif italic leading-relaxed mb-16"
          >
            Goldleaf Ghostwriting is a team of skilled ghostwriters, marketers, and publishers who have built the foundation of literary prestige.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button className="px-12 py-6 bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-accent transition-all duration-500 shadow-2xl relative group overflow-hidden">
              <span className="relative z-10">Consult Our Collective</span>
              <div className="absolute inset-0 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            </button>
            <div className="flex items-center gap-4 text-primary/40 group cursor-pointer hover:text-accent transition-colors">
              <span className="text-[10px] uppercase font-bold tracking-[0.2em]">Our Methodology</span>
              <div className="w-10 h-[1px] bg-primary/20 group-hover:w-16 group-hover:bg-accent transition-all duration-500" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Content Section */}
      <section className="py-32 bg-paper/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 text-lg md:text-xl text-gray-500 font-serif leading-relaxed"
            >
              <p>
                Our enthusiasts and dedicated professionals have woven our passion for book writing, editing, publishing, and marketing into the fabric of <span className="text-primary font-bold">Goldleaf Ghostwriting</span>. From writing research-based non-fiction books to thought-provoking novels, our journey has been a celebration of literature in all its forms.
              </p>
              <p>
                We believe that every life of impact deserves a narrative that matches its weight. Our professionals hold diverse expertise while catering to challenging tasks and ensuring flawless work.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[11px] uppercase tracking-[0.4em] font-sans text-accent font-bold mb-6 block"
            >
              The Distinction
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-serif font-bold text-primary mb-8"
            >
              Why Goldleaf is a <br /> <span className="italic font-normal">Progressive Agency</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-lg text-gray-400 font-serif italic"
            >
              Your ideas represent the vision you have for your book, but our ghostwriters sprinkle creativity to make it truly immersive.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group p-10 bg-white border border-border-subtle hover:border-accent/40 transition-all duration-500 shadow-sm hover:shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-[100px] translate-x-4 -translate-y-4 group-hover:scale-150 transition-transform duration-700" />
                
                <div className="w-14 h-14 bg-accent-soft rounded-xl flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-serif font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400 font-serif leading-relaxed mb-6">
                  {feature.desc}
                </p>
                <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="w-3 h-3" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Author Community Section */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#0077b6_0%,transparent_50%)]" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-7xl font-serif font-bold text-white mb-20 leading-tight"
          >
            Join a Community of <br /> 
            <span className="italic font-normal text-accent">12,000+ Authors</span>
          </motion.h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="text-5xl md:text-7xl font-serif font-bold text-accent">
                  {stat.value}
                </div>
                <div className="text-[11px] uppercase tracking-[0.4em] font-sans text-white/40 font-bold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-center gap-12"
          >
            <div className="flex items-center gap-4">
              <Award className="w-10 h-10 text-accent" />
              <div className="text-left">
                <div className="text-white font-serif font-bold text-xl">Best-Seller Guarantee</div>
                <div className="text-white/40 text-xs uppercase tracking-widest font-sans">98% Strategic Success Rate</div>
              </div>
            </div>
            <div className="w-px h-12 bg-white/10 hidden md:block" />
            <div className="flex items-center gap-4">
              <CheckCircle2 className="w-10 h-10 text-accent" />
              <div className="text-left">
                <div className="text-white font-serif font-bold text-xl">Elite Certification</div>
                <div className="text-white/40 text-xs uppercase tracking-widest font-sans">Official Publishing Membership</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative space-y-8">
               <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative z-10 aspect-[4/5] overflow-hidden shadow-2xl group"
               >
                  <img 
                    src="https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?auto=format&fit=crop&q=80" 
                    alt="Author writing" 
                    className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
               </motion.div>
               
               {/* Decorative floating element */}
               <motion.div 
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 className="absolute -right-12 -bottom-12 w-64 aspect-video bg-white shadow-2xl p-8 border border-border-subtle z-20 hidden lg:block"
               >
                  <Quote className="w-8 h-8 text-accent mb-4" />
                  <p className="text-sm font-serif italic text-primary">"The approach incorporating creativity into every book brings a unique spark to the narrative."</p>
               </motion.div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2 space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <span className="text-[11px] uppercase tracking-[0.4em] font-sans text-accent font-bold mb-6 block">Strategic Advantage</span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-8 leading-tight">
                  Benefits of Consulting <br /> <span className="italic font-normal">A Ghostwriting Agency</span>
                </h2>
                <div className="space-y-8 text-lg text-gray-500 font-serif leading-relaxed">
                  <p>
                    In the digital age, authors need high-quality content to truly connect with their audience. Readers seek engaging and insightful material that resonates with them.
                  </p>
                  <p>
                    For instance, in a romance novel, your audience may dislike cliché themes and instead expect a fresh take on love stories. Therefore, our approach incorporates creativity into every book, bringing a unique spark to the narrative.
                  </p>
                  <p className="p-8 bg-paper border-l-4 border-accent italic text-primary/80">
                    "Investing in a ghostwriting company for top-tier content is a smart choice for authors focused on their primary operations."
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Ghostwriting Section */}
      <section className="py-32 bg-paper relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative p-12 md:p-24 bg-white border border-border-subtle shadow-2xl rounded-[40px] overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-primary" />
              <Quote className="w-20 h-20 text-accent/10 absolute -top-4 -left-4" />
              
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-12 relative z-10">
                Understanding Ghostwriting <br /> <span className="italic font-normal text-accent">In Our Words</span>
              </h2>
              
              <div className="space-y-8 relative z-10 px-4 md:px-12">
                <p className="text-2xl md:text-3xl font-serif italic text-gray-600 leading-relaxed">
                  "Ghostwriting isn't just about bringing in an agency to pen your book; it's like gaining a partner in narrating your story."
                </p>
                <div className="w-20 h-0.5 bg-accent/30 mx-auto" />
                <p className="text-lg text-gray-400 font-serif">
                  Beyond hiring a writer, you’re tapping into their wealth of ideas, creativity, and experience. It’s a collaboration where their expertise transforms your vision into powerful words.
                </p>
              </div>

              {/* Floating Book Decorations */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-10 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none hidden lg:block"
              >
                <BookOpen className="w-64 h-64 text-primary" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <h3 className="text-3xl font-serif font-bold text-primary mb-8">Ready to Architect Your Legacy?</h3>
            <button className="px-16 py-6 bg-accent text-white text-[10px] uppercase font-bold tracking-[0.4em] hover:bg-primary transition-all duration-500 shadow-2xl">
              Initiate Private Consultation
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
