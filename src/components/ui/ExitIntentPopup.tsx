import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';

const popupSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(5, 'Phone number is required'),
});

type PopupFormData = z.infer<typeof popupSchema>;

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<PopupFormData>({
    resolver: zodResolver(popupSchema),
  });

  useEffect(() => {
    // Check if shown in this session
    const shown = sessionStorage.getItem('exit_popup_shown');
    if (shown) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
      }
    };

    // Mobile trigger: delay
    const mobileTimer = setTimeout(() => {
      if (window.innerWidth < 768 && !hasShown) {
        setIsVisible(true);
      }
    }, 30000); // 30 seconds for mobile

    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(mobileTimer);
    };
  }, [hasShown]);

  const closePopup = () => {
    setIsVisible(false);
    setHasShown(true);
    sessionStorage.setItem('exit_popup_shown', 'true');
  };

  const onSubmit = async (data: PopupFormData) => {
    try {
      console.log('Popup submission:', data);
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Your 85% discount has been sent to your inbox!');
      closePopup();
      reset();
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="absolute inset-0 bg-primary/90 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-white overflow-hidden shadow-2xl border border-border-subtle"
          >
            <button 
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-400 hover:text-primary transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-8 lg:p-12">
              <div className="text-center mb-10">
                <span className="inline-block px-4 py-1 bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest mb-6">
                  Exclusive Offer
                </span>
                <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-4 leading-tight">
                  Don't Leave Yet, <span className="italic font-normal">Wait!</span>
                </h2>
                <h3 className="text-xl font-serif text-accent font-bold mb-4">
                  Save Further 85% Off Coupon — Use Anytime
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Enter your details to have our offer saved and sent straight to your inbox.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="space-y-1">
                  <input
                    {...register('name')}
                    placeholder="Full Name *"
                    className="w-full bg-accent-soft/50 border border-border-subtle px-5 py-4 focus:outline-none focus:border-accent transition-colors font-serif text-lg"
                  />
                  {errors.name && <p className="text-red-500 text-[10px] font-bold ml-1">{errors.name.message}</p>}
                </div>

                <div className="space-y-1">
                  <input
                    {...register('email')}
                    placeholder="Email Address *"
                    className="w-full bg-accent-soft/50 border border-border-subtle px-5 py-4 focus:outline-none focus:border-accent transition-colors font-serif text-lg"
                  />
                  {errors.email && <p className="text-red-500 text-[10px] font-bold ml-1">{errors.email.message}</p>}
                </div>

                <div className="space-y-1">
                  <input
                    {...register('phone')}
                    placeholder="Phone Number *"
                    className="w-full bg-accent-soft/50 border border-border-subtle px-5 py-4 focus:outline-none focus:border-accent transition-colors font-serif text-lg"
                  />
                  {errors.phone && <p className="text-red-500 text-[10px] font-bold ml-1">{errors.phone.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-5 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-all duration-500 flex items-center justify-center gap-3 shadow-xl"
                >
                  {isSubmitting ? 'Processing...' : (
                    <>
                      Claim My Discount
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-center text-[10px] uppercase tracking-widest text-gray-400 font-bold mt-6">
                  We respect your privacy. No spam.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
