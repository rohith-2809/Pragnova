import { motion, useReducedMotion } from 'framer-motion';

const Clients = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="clients" className="py-20 md:py-32 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:3rem_3rem]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
           initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 inline-block">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Clients</span>
            <div className="h-1 w-12 bg-primary rounded mt-1 mx-auto"></div>
          </div>
          <h2 className="text-fluid-h2 font-bold mb-12 md:mb-16">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center flex-wrap gap-8"
        >
          {/* Trivento Trade LLP Logo */}
          <div className="group relative flex flex-col items-center justify-center p-8 bg-background-muted border border-border rounded-card w-64 h-48 hover:border-primary/50 transition-all duration-300 filter grayscale hover:grayscale-0 focus-within:grayscale-0 shadow-subtle">
             <img 
               src="/Trivento%20Trade%20LLP.svg"
               alt="Trivento Trade LLP Logo"
               loading="lazy"
               decoding="async"
               width="160"
               height="96"
               className="w-full h-full object-contain"
             />
             <p className="mt-4 text-sm font-bold tracking-wide text-foreground-muted group-hover:text-foreground transition-all duration-300 ease-out">
               TRIVENTO TRADE
             </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
