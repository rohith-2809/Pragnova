import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/akhadesarang1@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setShowTooltip(true);
        form.reset();
        setTimeout(() => setShowTooltip(false), 4000);
      }
    } catch (error) {
      console.error("Form submission error", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact-form-section"
      className="relative py-20 md:py-32 bg-background border-t border-white/5 text-white text-center overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-90">
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 md:w-[600px] md:h-[600px] bg-primary/10 rounded-full blur-[120px] will-change-transform"
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "circOut" }}
          viewport={{ once: true, amount: 0.1 }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-96 h-96 md:w-[600px] md:h-[600px] bg-cta/5 rounded-full blur-[120px]"
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "circOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.1 }}
        />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 w-full">
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          whileInView={{ scale: 1, opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-surface-100/40 backdrop-blur-xl rounded-3xl p-8 sm:p-12 w-full relative border border-border/50 shadow-2xl mx-auto"
        >
          <div className="space-y-8">
            <div className="text-center pt-2">
              <h2 className="text-fluid-h3 md:text-fluid-h2 font-bold text-gradient pb-2">
                Let's Connect
              </h2>
              <p className="mt-4 text-foreground-muted/90 text-sm md:text-base max-w-lg mx-auto">
                Tell us about your project or idea, and our team will get back to you within 24 hours to schedule a discovery call.
              </p>
            </div>
            {/*
              Native HTML Form converted to AJAX submission to prevent redirection
            */}
            <form
              className="space-y-6 max-w-2xl mx-auto relative z-20"
              onSubmit={handleSubmit}
            >
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="quote for pragnova" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    name: "name",
                    type: "text",
                    placeholder: "Your Full Name",
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    ),
                  },
                  {
                    name: "email",
                    type: "email",
                    placeholder: "your.email@example.com",
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25-2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    ),
                  },
                ].map((field) => (
                  <div key={field.name} className="relative z-30">
                    <label
                      htmlFor={field.name}
                      className="block text-sm font-medium text-foreground/90 mb-2 text-left"
                    >
                      {field.name.charAt(0).toUpperCase() + field.name.slice(1)}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <svg
                          className="w-5 h-5 text-foreground-muted"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.5}
                          viewBox="0 0 24 24"
                        >
                          {field.icon}
                        </svg>
                      </div>
                      <input
                        type={field.type}
                        name={field.name}
                        id={field.name}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary placeholder:text-foreground-muted/90 text-gray-100 transition-all duration-200 text-base focus:bg-white/10 pointer-events-auto"
                        placeholder={field.placeholder}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="relative z-30">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground/90 mb-2 text-left"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  name="message"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary placeholder:text-foreground-muted/90 text-gray-100 transition-all duration-200 text-base focus:bg-white/10 resize-none pointer-events-auto"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>
              <div className="relative">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 mt-4 px-6 bg-primary text-[#020617] rounded-xl font-bold hover:opacity-90 transition-all duration-300 relative overflow-hidden group focus:outline-none focus:ring-4 focus:ring-primary/30 transform hover:scale-[1.01] pointer-events-auto z-30 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  <span className="relative z-10 text-lg">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
                <AnimatePresence>
                  {showTooltip && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 bg-emerald-600 text-white px-6 py-3 rounded-xl shadow-lg font-medium text-sm whitespace-nowrap border border-emerald-400/30"
                    >
                      Submitted, we will approach you soon
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-emerald-600"></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
