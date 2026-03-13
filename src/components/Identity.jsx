import { motion } from 'framer-motion';
import { Cpu, Fingerprint, Globe } from 'lucide-react';
import Shuffle from '../effects/Shuffle';

const Identity = () => {
  const identities = [
    {
      icon: <Cpu className="w-10 h-10 text-primary" />,
      title: "Tech Innovators",
      description: "We build advanced systems from the ground up, blending research with real-world application."
    },
    {
      icon: <Fingerprint className="w-10 h-10 text-secondary" />,
      title: "Digital Architects",
      description: "Our solutions are custom-engineered for scale, ensuring long-term resilience and security."
    },
    {
      icon: <Globe className="w-10 h-10 text-accent" />,
      title: "Global Visionaries",
      description: "We are shaping the digital transformation landscape for businesses across the globe."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="identity" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-fluid-h2 font-bold mb-6">
              Who Are <span className="text-gradient">We?</span>
            </h2>
            <div className="text-lg sm:text-xl text-foreground-muted font-normal text-balance relative">
              <Shuffle 
                text="A collective of minds driven by curiosity and absolute technical mastery."
                duration={0.8}
                stagger={0.05}
                shuffleTimes={4}
                animationMode="random"
              />
            </div>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {identities.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className="glass-card p-8 text-center group cursor-default hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-300 flex flex-col items-center"
            >
              <div className="inline-flex items-center justify-center p-5 bg-white/10 rounded-2xl mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.05)] border border-white/5">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
                >
                  {item.icon}
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
              <p className="text-foreground-muted font-normal leading-relaxed group-hover:text-foreground transition-colors duration-300 text-balance">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Identity;
