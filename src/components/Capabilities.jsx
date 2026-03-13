import { motion } from 'framer-motion';
import { Shield, Zap, Layers, Server } from 'lucide-react';
import Shuffle from '../effects/shuffle';

const Capabilities = () => {
  const capabilities = [
    {
      title: "Scalable Infrastructure",
      desc: "Cloud-native architectures that grow seamlessly with your user base without compromising performance.",
      icon: <Server className="w-8 h-8 text-primary" />
    },
    {
      title: "Enterprise Security",
      desc: "Bank-grade encryption, zero-trust frameworks, and continuous threat monitoring built-in.",
      icon: <Shield className="w-8 h-8 text-secondary" />
    },
    {
      title: "High-Performance Systems",
      desc: "Optimized backend architectures delivering sub-second response times under heavy load.",
      icon: <Zap className="w-8 h-8 text-accent" />
    },
    {
      title: "Seamless UI/UX",
      desc: "Intuitive, pixel-perfect interfaces designed for maximum engagement and conversion.",
      icon: <Layers className="w-8 h-8 text-primary" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="capabilities" className="py-20 md:py-32 relative overflow-hidden bg-white/5">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:3rem_3rem]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-8 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl mx-auto md:mx-0"
          >
            <div className="mb-4 inline-block">
              <span className="text-secondary font-semibold tracking-wider uppercase text-sm">Capabilities</span>
              <div className="h-1 w-12 bg-secondary rounded mt-1 mx-auto md:mx-0"></div>
            </div>
            <h2 className="text-fluid-h2 font-bold leading-tight">
              Engineering <span className="text-gradient">Excellence</span> <br className="hidden md:block"/> at Every Layer
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-base sm:text-lg text-foreground-muted font-normal max-w-md text-center md:text-justify leading-relaxed">
               We don't just write code; we architect comprehensive digital ecosystems capable of driving massive scale.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className="glass p-8 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors group flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="p-4 bg-white/10 rounded-xl group-hover:scale-110 group-hover:rotate-3 group-hover:bg-secondary/20 transition-all duration-500 border border-white/5 shadow-lg">
                  {cap.icon}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{cap.title}</h3>
                <p className="text-foreground-muted font-normal leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Capabilities;
