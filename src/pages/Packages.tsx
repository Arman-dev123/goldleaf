import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const packages = [
  {
    name: 'Standard Package',
    tier: 'The Essential',
    desc: 'Foundational ghostwriting and publishing for authors ready to start their literary journey.',
    features: [
      'Professional Review & Insights',
      'Outline Discussion & Finalization',
      'Complete Manuscript Writing/Editing',
      'Creative Author Introduction',
      'Professional Formatting & Typesetting',
      'Unlimited Images/Photos',
      'Full Content Ownership',
      'Unlimited Revisions',
      'Team of 3 Experts',
      '2–3 Months Completion',
      'Personalized Online Portal',
      '24/7 Premium Support',
      '100% Money-Back Guarantee',
    ],
    highlight: false,
  },
  {
    name: 'Signature Package',
    tier: 'Most Popular',
    desc: 'Our comprehensive solution for authors seeking high-impact publishing and professional depth.',
    features: [
      'Professional Review & Insights',
      'Outline Discussion & Finalization',
      'Complete Manuscript Writing/Editing',
      'Creative Author Introduction',
      'Professional Formatting & Typesetting',
      'Unlimited Images/Photos',
      'Conceptual Cover Design',
      'Publishing on Major Platforms',
      'eBook, Paperback, & Hardcover',
      'Premium Publishing Benefits',
      'Full Content Ownership',
      'Unlimited Revisions',
      'Team of 5 Experts',
      '2–3 Months Completion',
      'Personalized Online Portal',
      '24/7 Premium Support',
      '100% Money-Back Guarantee',
    ],
    highlight: true,
  },
  {
    name: 'Elite Package',
    tier: 'The Bestseller',
    desc: 'The ultimate literary powerhouse for visionaries demanding market dominance and legacy.',
    features: [
      'Professional Review & Insights',
      'Outline Discussion & Finalization',
      'Complete Manuscript Writing/Editing',
      'Creative Author Introduction',
      'Professional Formatting & Typesetting',
      'Unlimited Images/Photos',
      'Conceptual Cover Design',
      'Publishing on Major Platforms',
      'eBook, Paperback, & Hardcover',
      'Setting Up POD and Free Shipping Worldwide',
      'Full Content Ownership',
      'Strategic Marketing Plan',
      'Interactive Author Website',
      'Social Media Marketing',
      'Video Teasers & Trailers',
      'Book Launch Planning & Strategy',
      'Guaranteed Bestseller',
      'Guaranteed ROI',
      'Unlimited Revisions',
      'Team of 7 Experts',
      'Personalized Online Portal',
      '24/7 Premium Support',
      '100% Money-Back Guarantee',
    ],
    highlight: false,
  },
];

export default function Packages() {
  return (
    <div className="pt-32 pb-24 bg-paper min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-32">
          <span className="text-[11px] uppercase tracking-[0.4em] font-sans text-accent font-bold mb-6 block">Our Solutions</span>
          <h1 className="text-5xl lg:text-8xl font-serif font-bold tracking-tight text-primary mb-10 leading-tight">
            Choose the Perfect <br /> <span className="italic font-normal">Publishing Solution</span>
          </h1>
          <p className="text-xl text-gray-500 font-serif italic max-w-2xl mx-auto leading-relaxed">
            Professional ghostwriting and publishing services tailored to your vision. Every package represents a commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -10 }}
              className={cn(
                "relative flex flex-col p-10 lg:p-14 border border-border-subtle transition-all duration-500 bg-white group",
                pkg.highlight 
                  ? "ring-4 ring-accent/10 border-accent/30 shadow-[0_0_50px_rgba(0,119,182,0.1)]" 
                  : "hover:border-accent/40 shadow-sm hover:shadow-2xl"
              )}
            >
              {pkg.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 py-2 px-8 bg-accent text-white text-[10px] uppercase font-bold tracking-[0.3em] rounded-full shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="mb-10 text-center">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold mb-4 block text-accent">
                  {pkg.tier}
                </span>
                <h3 className="text-3xl font-serif font-bold mb-6 leading-tight text-primary">{pkg.name}</h3>
                <div className="w-12 h-0.5 bg-accent/20 mx-auto mb-6" />
                <p className="text-xs font-serif leading-relaxed text-gray-500 italic h-12">
                  {pkg.desc}
                </p>
              </div>

              <div className="flex-grow space-y-4 mb-12">
                {pkg.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4 group/feature">
                    <div className="w-5 h-5 rounded-full bg-accent-soft flex items-center justify-center shrink-0 mt-0.5 transition-transform group-hover/feature:scale-110">
                      <Check className="w-2.5 h-2.5 text-accent" />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-primary/70">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                state={{ service: pkg.name }}
                className={cn(
                  "w-full py-6 text-[10px] uppercase font-bold tracking-[0.4em] transition-all duration-500 flex items-center justify-center gap-3 shadow-xl",
                  pkg.highlight 
                    ? "bg-primary text-white hover:bg-accent" 
                    : "bg-accent-soft text-primary hover:bg-primary hover:text-white"
                )}
              >
                Request a Quote
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 mb-20 animate-pulse">
          Need a custom publishing solution? <Link to="/contact" className="text-accent hover:underline">Contact our experts</Link> for a personalized quote.
        </p>

        {/* Feature Comparison / Notes */}
        <div className="border border-border-subtle bg-white p-12 lg:p-24 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="text-center max-w-2xl mx-auto mb-20 relative z-10">
            <h2 className="text-3xl lg:text-5xl font-serif font-bold mb-6 text-primary leading-tight italic">What's included in every package?</h2>
            <p className="text-gray-500 text-sm font-serif">The Goldleaf Promise is non-negotiable across all tiers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 relative z-10">
            {[
              { t: 'Nondisclosure Agreements', d: 'Your identity and involvement are protected by law from day one. Absolute silence is our commitment.' },
              { t: 'Full Ownership Rights', d: 'Authors retain 100% of all royalties, copyrights, and adaptation rights. We have no claim to your success.' },
              { t: 'Elite Voice Matching', d: 'Our unique interview process ensures the book sounds exactly like you. We are chameleons of prose.' },
              { t: 'Publication Guaranteed', d: 'We handle the technical hurdles to ensure your book goes live on all platforms with zero friction.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-8 group">
                <div className="w-1 h-20 bg-accent/30 shrink-0 group-hover:bg-accent transition-colors" />
                <div className="space-y-4">
                  <h4 className="font-sans font-bold text-[11px] uppercase tracking-widest text-accent">{item.t}</h4>
                  <p className="text-gray-500 text-sm font-serif italic leading-relaxed">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
