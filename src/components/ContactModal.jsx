import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle, Loader2, Send, X } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import ClickSpark from '../effects/ClickSpark';
import IconButton from './ui/IconButton';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', quote: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      // Reset form on close
      setTimeout(() => {
        setFormData({ name: '', email: '', quote: '' });
        setErrors({});
        setStatus('idle');
      }, 500);
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.quote.trim() || formData.quote.length < 10) {
      newErrors.quote = 'Quote must be at least 10 characters long';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate network request

      const payload = { ...formData, to: 'rohithvitteamraj@gmail.com' };
      console.log('Valid submission payload:', payload);

      setStatus('success');
      setTimeout(() => {
        onClose();
      }, 4000); // Auto close after showing success animation
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
    exit: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.2 } }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const successVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 200, damping: 20 } }
  };

  const dialogRef = useRef(null);

  useEffect(() => {
     if (isOpen && dialogRef.current && !dialogRef.current.open) {
        dialogRef.current.showModal();
     }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.dialog
          ref={dialogRef}
          onCancel={onClose}
          onClick={(e) => {
             if (e.target === dialogRef.current) onClose();
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-labelledby="modal-title"
          className="fixed inset-0 z-[9999] m-0 p-0 w-full h-full max-w-none max-h-none flex items-center justify-center bg-transparent backdrop:bg-black/80 backdrop:backdrop-blur-sm open:flex"
        >
          {/* Modal Content */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-2xl bg-background-muted border border-border rounded-xl shadow-subtle flex flex-col mx-4 sm:mx-6 my-auto z-10 max-h-[95vh] overflow-y-auto"
          >
            {/* Decorative Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full mix-blend-screen filter blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            {/* Close Button */}
            <div className="absolute top-4 right-4 z-20">
              <IconButton
                onClick={onClose}
                ariaLabel="Close modal"
                className="bg-black/20 hover:bg-black/40 text-foreground-muted hover:text-foreground"
              >
                <X className="w-5 h-5" strokeWidth={1.5} />
              </IconButton>
            </div>

            <div className="p-6 md:p-10 relative z-10">
              <div className="text-center mb-8">
                <h2 id="modal-title" className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
                  Ready to <span className="text-primary">Start?</span>
                </h2>
                <p className="text-foreground-muted text-sm md:text-base">
                  Fill out the details below and we'll get back to you immediately.
                </p>
              </div>

              {status === 'success' ? (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={successVariants}
                  className="flex flex-col items-center justify-center py-12"
                >
                  <div className="relative w-32 h-32 flex items-center justify-center mb-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.2, 1] }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="absolute inset-0 bg-primary/20 rounded-full"
                    />
                    <motion.div
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <svg className="w-16 h-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <motion.path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.3 }} />
                      </svg>
                    </motion.div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Request Sent Successfully!</h3>
                  <p className="text-foreground-muted text-center">We will be in touch with you shortly at {formData.email}.</p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1">
                      <label htmlFor="name" className="block text-sm font-medium text-foreground-muted">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => {
                           setFormData({...formData, name: e.target.value});
                           if (errors.name) setErrors({...errors, name: null});
                        }}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className={`w-full bg-background-subtle border ${errors.name ? 'border-error' : 'border-border'} rounded-lg px-4 py-3 text-foreground placeholder:text-foreground-muted/50 focus:outline-none focus-visible:ring-2 ${errors.name ? 'focus-visible:ring-error' : 'focus-visible:ring-primary'} transition-all`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p id="name-error" className="text-error text-xs mt-1" role="alert">{errors.name}</p>}
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="email" className="block text-sm font-medium text-foreground-muted">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({...formData, email: e.target.value});
                          if (errors.email) setErrors({...errors, email: null});
                        }}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className={`w-full bg-background-subtle border ${errors.email ? 'border-error' : 'border-border'} rounded-lg px-4 py-3 text-foreground placeholder:text-foreground-muted/50 focus:outline-none focus-visible:ring-2 ${errors.email ? 'focus-visible:ring-error' : 'focus-visible:ring-primary'} transition-all`}
                        placeholder="yourmail@gmail.com"
                      />
                      {errors.email && <p id="email-error" className="text-error text-xs mt-1" role="alert">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="quote" className="block text-sm font-medium text-foreground-muted">Project Details *</label>
                    <textarea
                      id="quote"
                      rows="4"
                      value={formData.quote}
                      onChange={(e) => {
                        setFormData({...formData, quote: e.target.value});
                        if (errors.quote) setErrors({...errors, quote: null});
                      }}
                      aria-invalid={!!errors.quote}
                      aria-describedby={errors.quote ? "quote-error" : undefined}
                      className={`w-full bg-background-subtle border ${errors.quote ? 'border-error' : 'border-border'} rounded-lg px-4 py-3 text-foreground placeholder:text-foreground-muted/50 focus:outline-none focus-visible:ring-2 ${errors.quote ? 'focus-visible:ring-error' : 'focus-visible:ring-primary'} transition-all resize-none`}
                      placeholder="Tell us about your goals, timelines, and technical requirements..."
                    ></textarea>
                    {errors.quote && <p id="quote-error" className="text-error text-xs mt-1" role="alert">{errors.quote}</p>}
                  </div>

                  {status === 'error' && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-3 bg-error/10 border border-error/50 rounded-lg flex items-center text-error text-sm" role="alert">
                      <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                      <span>Failed to send request. Try again or email rohithvitteamraj@gmail.com.</span>
                    </motion.div>
                  )}

                  <ClickSpark className="block w-full pt-2" sparkColor="#a78bfa" sparkSize={12} sparkRadius={24} sparkCount={12} duration={600}>
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      aria-label={status === 'submitting' ? "Sending your message" : "Send Request"}
                      className={`w-full py-4 bg-primary text-primary-foreground font-bold rounded-lg transition-all motion-safe:duration-300 transform ${status === 'submitting' ? 'opacity-80 cursor-not-allowed shadow-none scale-100' : 'shadow-subtle hover:scale-[1.02] active:scale-[0.98] outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-primary'} flex justify-center items-center group relative z-10`}
                    >
                      {status === 'submitting' ? (
                        <>Processing <Loader2 className="ml-2 w-5 h-5 animate-spin" aria-hidden="true" /></>
                      ) : (
                        <>Submit Request <Send className="ml-2 w-5 h-5 motion-safe:group-hover:translate-x-1 motion-safe:group-hover:-translate-y-1 transition-transform" aria-hidden="true" /></>
                      )}
                    </button>
                  </ClickSpark>
                </form>
              )}
            </div>
          </motion.div>
        </motion.dialog>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
