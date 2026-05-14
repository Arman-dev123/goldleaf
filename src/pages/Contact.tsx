// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { motion } from 'motion/react';
// import { Mail, Phone, MapPin, Send, MessageCircle, ArrowUpRight } from 'lucide-react';
// import { toast } from 'sonner';
// import { contactSchema, type ContactFormData, services } from '../lib/validations';
// import { cn } from '../lib/utils';
// import SEO from '../components/SEO';

// // We'll import these once the user accepts Firebase terms
// // import { db } from '../lib/firebase';
// // import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

// export default function Contact() {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors, isSubmitting },
//   } = useForm<ContactFormData>({
//     resolver: zodResolver(contactSchema),
//   });

//   const onSubmit = async (data: ContactFormData) => {
//     try {
//       // Simulating database storage for now, but keeping clean for theme update
//       await new Promise(resolve => setTimeout(resolve, 1500));
      
//       toast.success('Inquiry received. Our concierge will contact you shortly.', {
//         description: 'Thank you for choosing Goldleaf.',
//       });
//       reset();
//     } catch (error) {
//       toast.error('Failed to send inquiry. Please try again or contact us via phone.');
//     }
//   };

//   return (
//     <div className="pt-32 pb-0 bg-paper min-h-screen">
//       <SEO 
//         title="Contact Concierge" 
//         description="Connect with our elite editorial team to discuss your ghostwriting or publishing project."
//       />
//       <div className="container mx-auto px-6">
//         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row border border-border-subtle overflow-hidden">
//           {/* Contact Info (Inverted Style like design cards) */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="w-full lg:w-[40%] bg-ink text-white p-12 lg:p-20 border-r border-border-subtle"
//           >
//             <span className="text-accent font-serif italic text-lg mb-6 block uppercase tracking-[0.2em]">Concierge Desk</span>
//             <h1 className="text-5xl lg:text-7xl font-serif mb-12 leading-tight">
//               Begin Your <br /> <span className="italic font-normal">Literary</span> Journey
//             </h1>
            
//             <div className="space-y-12">
//               <div>
//                 <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-3">Email Our Editors</h4>
//                 <p className="text-xl font-serif text-white/90">concierge@goldleaf.agency</p>
//               </div>
//               <div>
//                 <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-3">Direct Line</h4>
//                 <p className="text-xl font-serif text-white/90">+1 (212) 555-0198</p>
//               </div>
//               <div>
//                 <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-3">Global HQ</h4>
//                 <p className="text-xl font-serif text-white/90">123 Publishing Lane, Manhattan, NY</p>
//               </div>
//             </div>

//             <div className="mt-20 pt-10 border-t border-white/10">
//               <div className="flex items-center gap-2 text-accent animate-pulse text-[10px] font-bold uppercase tracking-widest">
//                 <div className="w-2 h-2 bg-accent rounded-full"></div>
//                 Currently Reviewing Proposals
//               </div>
//             </div>
//           </motion.div>

//           {/* Form Area */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="w-full lg:w-[60%] bg-[#F9F7F2] p-12 lg:p-20 flex flex-col justify-center"
//           >
//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//                 <div className="space-y-3">
//                   <label className="text-[10px] uppercase tracking-widest font-bold text-ink/70">Full Name</label>
//                   <input
//                     {...register('name')}
//                     placeholder="Jane Doe"
//                     className={cn(
//                       "w-full bg-transparent border-b border-border-subtle py-3 focus:outline-none focus:border-gold transition-colors font-serif text-lg",
//                       errors.name && "border-red-400"
//                     )}
//                   />
//                   {errors.name && <p className="text-red-500 text-[10px] font-bold">{errors.name.message}</p>}
//                 </div>
//                 <div className="space-y-3">
//                   <label className="text-[10px] uppercase tracking-widest font-bold text-ink/70">Email Address</label>
//                   <input
//                     {...register('email')}
//                     placeholder="jane@example.com"
//                     className={cn(
//                       "w-full bg-transparent border-b border-border-subtle py-3 focus:outline-none focus:border-gold transition-colors font-serif text-lg",
//                       errors.email && "border-red-400"
//                     )}
//                   />
//                   {errors.email && <p className="text-red-500 text-[10px] font-bold">{errors.email.message}</p>}
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//                 <div className="space-y-3">
//                   <label className="text-[10px] uppercase tracking-widest font-bold text-ink/70">Service Interest</label>
//                   <select
//                     {...register('service')}
//                     className={cn(
//                       "w-full bg-transparent border-b border-border-subtle py-3 focus:outline-none focus:border-gold transition-colors font-serif text-lg appearance-none",
//                       errors.service && "border-red-400"
//                     )}
//                   >
//                     <option value="">Select a Service</option>
//                     {services.map(s => <option key={s} value={s}>{s}</option>)}
//                   </select>
//                 </div>
//                 <div className="space-y-3">
//                   <label className="text-[10px] uppercase tracking-widest font-bold text-ink/70">Project Vision</label>
//                   <input
//                     {...register('phone')}
//                     placeholder="Phone (Optional)"
//                     className="w-full bg-transparent border-b border-border-subtle py-3 focus:outline-none focus:border-gold transition-colors font-serif text-lg"
//                   />
//                 </div>
//               </div>

//               <div className="space-y-3">
//                 <label className="text-[10px] uppercase tracking-widest font-bold text-ink/70">Tell us about your story</label>
//                 <textarea
//                   {...register('message')}
//                   placeholder="Share your vision..."
//                   rows={4}
//                   className={cn(
//                     "w-full bg-transparent border-b border-border-subtle py-3 focus:outline-none focus:border-gold transition-colors font-serif text-lg resize-none",
//                     errors.message && "border-red-400"
//                   )}
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full bg-ink text-white py-6 text-xs font-bold uppercase tracking-widest hover:bg-accent transition-all duration-500 disabled:opacity-50 flex items-center justify-center gap-3"
//               >
//                 {isSubmitting ? "Processing..." : "Request Concierge Review"}
//                 <ArrowUpRight className="w-4 h-4" />
//               </button>
//             </form>
//           </motion.div>
//         </div>
//       </div>
      
//       {/* Decorative Grayscale Map */}
//       <div className="mt-0 h-[300px] w-full border-t border-border-subtle grayscale opacity-50 contrast-125">
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2528082187!2d-74.11976373946229!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1652542456488!5m2!1sen!2sus"
//           width="100%"
//           height="100%"
//           style={{ border: 0 }}
//           allowFullScreen
//           loading="lazy"
//         />
//       </div>
//     </div>
//   );
// }

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'motion/react';
import { Send, ArrowUpRight } from 'lucide-react';
import { toast } from 'sonner';
import { contactSchema, type ContactFormData, services } from '../lib/validations';
import { cn } from '../lib/utils';
import SEO from '../components/SEO';

// Firebase Imports
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    const collectionPath = 'inquiries';
    try {
      // Reference the collection defined in your blueprint
      const inquiriesCol = collection(db, collectionPath);

      // Add the document with the strict requirements from your rules
      await addDoc(inquiriesCol, {
        name: data.name,
        email: data.email,
        service: data.service,
        message: data.message,
        phone: data.phone || "",
        status: 'new',           // Required: request.resource.data.status == 'new'
        createdAt: serverTimestamp(), // Required: request.resource.data.createdAt == request.time
      });
      
      toast.success('Inquiry received. Our concierge will contact you shortly.', {
        description: 'Thank you for choosing Goldleaf.',
      });
      reset();
    } catch (error) {
      // Log errors using your custom utility
      handleFirestoreError(error, OperationType.CREATE, collectionPath);
      toast.error('Failed to send inquiry. Please try again or contact us via phone.');
    }
  };

  return (
    <div className="pt-32 pb-0 bg-paper min-h-screen">
      <SEO 
        title="Contact Concierge" 
        description="Connect with our elite editorial team to discuss your ghostwriting or publishing project."
      />
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row border border-border-subtle overflow-hidden">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[40%] bg-ink text-white p-12 lg:p-20 border-r border-border-subtle"
          >
            <span className="text-accent font-serif italic text-lg mb-6 block uppercase tracking-[0.2em]">Concierge Desk</span>
            <h1 className="text-5xl lg:text-7xl font-serif mb-12 leading-tight">
              Begin Your <br /> <span className="italic font-normal">Literary</span> Journey
            </h1>
            
            <div className="space-y-12">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-3">Email Our Editors</h4>
                <p className="text-xl font-serif text-white/90">concierge@goldleaf.agency</p>
              </div>
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-3">Direct Line</h4>
                <p className="text-xl font-serif text-white/90">+1 (212) 555-0198</p>
              </div>
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-3">Global HQ</h4>
                <p className="text-xl font-serif text-white/90">123 Publishing Lane, Manhattan, NY</p>
              </div>
            </div>

            <div className="mt-20 pt-10 border-t border-white/10">
              <div className="flex items-center gap-2 text-accent animate-pulse text-[10px] font-bold uppercase tracking-widest">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                Currently Reviewing Proposals
              </div>
            </div>
          </motion.div>

          {/* Form Area */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-[60%] bg-[#F9F7F2] p-12 lg:p-20 flex flex-col justify-center"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-ink/70">Full Name</label>
                  <input
                    {...register('name')}
                    placeholder="Jane Doe"
                    className={cn(
                      "w-full bg-transparent border-b border-border-subtle py-3 focus:outline-none focus:border-gold transition-colors font-serif text-lg",
                      errors.name && "border-red-400"
                    )}
                  />
                  {errors.name && <p className="text-red-500 text-[10px] font-bold">{errors.name.message}</p>}
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-ink/70">Email Address</label>
                  <input
                    {...register('email')}
                    placeholder="jane@example.com"
                    className={cn(
                      "w-full bg-transparent border-b border-border-subtle py-3 focus:outline-none focus:border-gold transition-colors font-serif text-lg",
                      errors.email && "border-red-400"
                    )}
                  />
                  {errors.email && <p className="text-red-500 text-[10px] font-bold">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-ink/70">Service Interest</label>
                  <select
                    {...register('service')}
                    className={cn(
                      "w-full bg-transparent border-b border-border-subtle py-3 focus:outline-none focus:border-gold transition-colors font-serif text-lg appearance-none",
                      errors.service && "border-red-400"
                    )}
                  >
                    <option value="">Select a Service</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.service && <p className="text-red-500 text-[10px] font-bold">{errors.service.message}</p>}
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-ink/70">Project Vision</label>
                  <input
                    {...register('phone')}
                    placeholder="Phone (Optional)"
                    className="w-full bg-transparent border-b border-border-subtle py-3 focus:outline-none focus:border-gold transition-colors font-serif text-lg"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest font-bold text-ink/70">Tell us about your story</label>
                <textarea
                  {...register('message')}
                  placeholder="Share your vision..."
                  rows={4}
                  className={cn(
                    "w-full bg-transparent border-b border-border-subtle py-3 focus:outline-none focus:border-gold transition-colors font-serif text-lg resize-none",
                    errors.message && "border-red-400"
                  )}
                />
                {errors.message && <p className="text-red-500 text-[10px] font-bold">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-ink text-white py-6 text-xs font-bold uppercase tracking-widest hover:bg-accent transition-all duration-500 disabled:opacity-50 flex items-center justify-center gap-3"
              >
                {isSubmitting ? "Processing..." : "Request Concierge Review"}
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Grayscale Map */}
      <div className="mt-0 h-[300px] w-full border-t border-border-subtle grayscale opacity-50 contrast-125">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937611493!2d-73.98731968459391!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1625600000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}