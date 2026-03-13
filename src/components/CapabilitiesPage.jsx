import { motion } from 'framer-motion';
import { Layers, Bot, Database, ShieldCheck } from 'lucide-react';

const CapabilitiesPage = () => {
  const categories = [
    {
      title: "AI & Machine Learning",
      icon: <Bot className="w-10 h-10 text-primary" />,
      features: [
        "Large Language Model Integration",
        "Computer Vision & Pattern Recognition",
        "Predictive Analytics & Forecasting",
        "Automated Intelligent Workflows"
      ]
    },
    {
      title: "Product Engineering",
      icon: <Layers className="w-10 h-10 text-secondary" />,
      features: [
        "Full-Stack Web Applications",
        "High-Converted Landing Pages",
        "Interactive UX/UI Systems",
        "Cross-Platform Architecture"
      ]
    },
    {
      title: "Enterprise Solutions",
      icon: <Database className="w-10 h-10 text-accent" />,
      features: [
        "Legacy System Modernization",
        "Microservices & APIs",
        "Scalable Cloud Infrastructure",
        "Real-Time Data Pipelines"
      ]
    },
    {
      title: "Security & Compliance",
      icon: <ShieldCheck className="w-10 h-10 text-primary" />,
      features: [
        "Zero-Trust Architecture Setup",
        "Data Encryption Standards",
        "Behavior-Based Threat Detection",
        "Automated Perimeter Defense"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <div className="pt-32 md:pt-40 pb-20 md:py-32 relative overflow-hidden min-h-screen bg-background text-foreground">
      {/* Background Geometry */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto mb-[90px]"
        >
          <span className="text-secondary font-semibold tracking-wider uppercase text-sm drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">Technical Mastery</span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mt-4 mb-8 leading-tight">
            Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Capabilities</span>
          </h1>
          <p className="text-lg sm:text-xl text-foreground-muted leading-relaxed font-normal text-balance mx-auto">
            From crafting pixel-perfect interfaces to deploying autonomous deep learning pipelines, our capabilities span the entire spectrum of modern digital engineering.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-[45px]"
        >
          {categories.map((category, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass-card p-10 rounded-2xl border border-white/5 relative overflow-hidden group hover:bg-white/5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                {category.icon}
              </div>
              
              <div className="relative z-10">
                <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-500">
                  {category.icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-8 group-hover:text-primary transition-colors">{category.title}</h3>
                
                <ul className="space-y-4">
                  {category.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-foreground-muted">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-3 group-hover:bg-primary transition-colors"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default CapabilitiesPage;
