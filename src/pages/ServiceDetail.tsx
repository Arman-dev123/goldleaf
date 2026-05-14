import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Check, Send } from 'lucide-react';

const serviceData: Record<string, any> = {
  ghostwriting: {
    title: 'Ghostwriting',
    fullDesc: 'The gold standard of collaborative writing. Whether you’re an entrepreneur with a disruptive idea, a celebrity with a story to tell, or a novelist with a plot but no time, our award-winning ghostwriters provide the professional penmanship required to create a world-class book.',
    features: [
      'Memoirs & Autobiographies',
      'Business & Leadership Books',
      'Fiction (All Genres)',
      'Articles & Op-Eds',
      'Speeches & Keynotes'
    ],
    process: [
      'Initial interview & voice discovery',
      'Outline & character development',
      'Chapter-by-chapter drafting',
      'Ongoing feedback & revisions',
      'Final manuscript delivery'
    ]
  },
  editing: {
    title: 'Book Editing',
    fullDesc: 'Refining your manuscript into a polished masterpiece. Our editing process focuses on narrative arc, character development, and prose elegance, ensuring your book meets the rigorous standards of premium publishing houses.',
    features: [
      'Developmental Editing',
      'Substantive Review',
      'Copy Editing',
      'Proofreading',
      'Manuscript Assessment'
    ],
    process: [
      'Comprehensive read-through',
      'Detailed feedback report',
      'Macro & Micro level refinements',
      'Technical proofreading',
      'Final polished manuscript'
    ]
  },
  // Add more as needed...
};

export default function ServiceDetail() {
  const { id } = useParams();
  const service = serviceData[id || 'ghostwriting'] || serviceData.ghostwriting;

  return (
    <div className="pt-32 pb-24 bg-paper min-h-screen">
      <div className="container mx-auto px-6">
        <Link 
          to="/services" 
          className="inline-flex items-center text-[10px] uppercase tracking-widest font-bold text-ink/40 hover:text-accent mb-12 transition-colors border-b border-transparent hover:border-accent pb-1"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to all services
        </Link>
        
        <div className="border border-border-subtle bg-white overflow-hidden flex flex-col lg:flex-row">
          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-[55%] p-12 lg:p-20 border-r border-border-subtle"
          >
            <span className="text-[11px] uppercase tracking-[0.4em] font-sans text-accent font-bold mb-6 block">Our Expertise</span>
            <h1 className="text-5xl lg:text-7xl font-serif font-bold tracking-tight text-ink mb-10 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-gray-500 font-serif italic mb-12 leading-relaxed">
              {service.fullDesc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-border-subtle">
              <div className="space-y-6">
                <h4 className="text-[11px] font-sans font-bold uppercase tracking-widest text-accent mb-4">Capabilities</h4>
                {service.features.map((f: string) => (
                  <div key={f} className="flex items-center space-x-4 group">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
                    <span className="text-sm font-serif italic text-ink/70">{f}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                <h4 className="text-[11px] font-sans font-bold uppercase tracking-widest text-accent mb-4">The Journey</h4>
                {service.process.map((p: string, i: number) => (
                  <div key={p} className="flex items-start space-x-4">
                    <span className="text-[10px] text-accent font-bold mt-1">0{i + 1}.</span>
                    <span className="text-sm font-serif italic text-ink/70">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Visual / CTA side */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full lg:w-[45%] bg-[#F9F7F2] flex flex-col"
          >
            <div className="aspect-[4/3] w-full border-b border-border-subtle overflow-hidden relative">
              <img 
                src={`https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80`} 
                alt={service.title} 
                className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-accent/5" />
            </div>

            <div className="p-12 lg:p-20 flex-grow flex flex-col justify-center">
              <h3 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-ink">Request a Professional Audit</h3>
              <p className="text-gray-500 font-serif italic mb-10 leading-relaxed">
                Is your {service.title.toLowerCase()} project ready for the Goldleaf treatment? Submit your details for an initial confidential review.
              </p>
              <Link
                to="/contact"
                state={{ service: service.title }}
                className="inline-flex items-center justify-center p-6 bg-primary text-white text-[11px] uppercase font-bold tracking-[0.3em] hover:bg-accent transition-all duration-500 group"
              >
                Inquire Professionally
                <Send className="ml-4 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Footnote */}
        <div className="mt-20 text-center">
           <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-300">Absolute Confidentiality Guaranteed by Default</p>
        </div>
      </div>
    </div>
  );
}
