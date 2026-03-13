import { motion } from 'framer-motion';
import { Code, Bot, BrainCircuit, LineChart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Web Applications",
      description: "Complex, data-intensive web apps built on modern stacks like React, Node.js, and Next.js.",
      icon: <Code className="w-8 h-8 text-primary" />
    },
    {
      title: "AI Integrations",
      description: "Embed state-of-the-art LLMs, generative AI, and computer vision models into your products.",
      icon: <Bot className="w-8 h-8 text-secondary" />
    },
    {
      title: "ML Platforms",
      description: "End-to-end MLOps pipelines, custom model training, and predictive analytics dashboards.",
      icon: <BrainCircuit className="w-8 h-8 text-accent" />
    },
    {
      title: "Digital Strategy",
      description: "Data-driven consulting to map your technological roadmap and accelerate innovation.",
      icon: <LineChart className="w-8 h-8 text-primary" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  return (
    <section id="services" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-fluid-h2 font-bold mb-6">
              What We <span className="text-gradient">Offer</span>
            </h2>
            <p className="text-lg sm:text-xl text-foreground-muted font-normal max-w-2xl mx-auto text-balance">
              End-to-end digital product design, engineering, and AI consulting.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
              className="relative group p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent overflow-visible"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur"></div>
              
              <div className="relative h-full glass-card p-8 z-10 bg-background-muted/90 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300">
                <div className="mb-6 p-4 bg-white/10 rounded-2xl inline-block group-hover:scale-110 group-hover:-rotate-3 group-hover:bg-primary/20 transition-all duration-500 border border-white/5">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300 text-center">{service.title}</h3>
                <p className="text-foreground-muted font-normal text-sm leading-relaxed text-balance text-center">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
