import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import React, { useContext } from 'react';
import { ModalContext } from '../App';
import { ArrowRight, Sparkles } from 'lucide-react';
import StarBorder from '../effects/Star';
import ClickSpark from '../effects/ClickSpark';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);

  const { openModal } = useContext(ModalContext);

  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.2,
        delayChildren: shouldReduceMotion ? 0 : 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "tween", duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden bg-background">
      {/* Premium Aurora Background */}
      <div className="absolute inset-0 mesh-gradient opacity-60"></div>
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cta/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-8 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)] cursor-default hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-shadow duration-300"
        >
          <motion.div
             animate={{ rotate: 360 }}
             transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="text-primary drop-shadow-[0_0_8px_rgba(167,139,250,0.5)]" size={16} />
          </motion.div>
          <span className="text-sm font-medium text-foreground">Intelligent Digital Transformation</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-fluid-h1 md:text-[clamp(4rem,7vw+1rem,6.5rem)] font-bold tracking-tighter mb-6 leading-[1.1] flex flex-col items-center sm:block"
        >
          <motion.span
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-block"
          >
            Future-Driven
          </motion.span>
          <br className="hidden md:block" />
          <motion.span 
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: shouldReduceMotion ? 0 : 0.2, ease: "easeOut" }}
            className="text-gradient drop-shadow-[0_0_20px_rgba(167,139,250,0.2)] inline-block mt-2 md:mt-0"
          >
            Innovation
          </motion.span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-4 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-foreground-muted mb-8 md:mb-10 leading-relaxed font-normal text-left sm:text-center text-balance"
        >
          Our strength lies in unifying your brand, website, and product into a seamless ecosystem—ensuring every touchpoint reflects your future vision and creates meaningful resonance with the audiences you aspire to inspire.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex justify-center items-center z-20 relative pointer-events-auto mt-6"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ClickSpark className="inline-block" sparkColor="#38A6FF" sparkSize={12} sparkRadius={24} sparkCount={12} duration={600}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById('contact-form-section');
                  if (target) {
                    if (window.lenis) {
                       window.lenis.scrollTo(target, { offset: -100, duration: 2 });
                    } else {
                       const y = target.getBoundingClientRect().top + window.scrollY - 80;
                       window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  } else {
                    openModal();
                  }
                }}
                className="premium-cta w-full sm:w-auto group active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cta/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10 flex items-center justify-center font-bold tracking-tight text-lg">
                  Start Your Project <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-500 ease-out text-primary" size={20} />
                </span>
              </button>
            </ClickSpark>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
