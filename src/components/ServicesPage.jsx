import { motion } from 'framer-motion';
import { Globe, Cpu, Cloud, Code, Smartphone, Shield, Zap, Database, Server } from 'lucide-react';

const ServicesPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  const serviceCategories = [
    {
      title: "Web Development",
      description: "We design and build scalable, secure, and high-performance web applications using modern architectures and optimized development practices.",
      icon: <Globe className="w-8 h-8 text-primary" />,
      color: "from-blue-500/20 to-transparent",
      services: [
        { name: "Web Applications", icon: <Code className="w-5 h-5" /> },
        { name: "UI / UX Engineering", icon: <Smartphone className="w-5 h-5" /> },
        { name: "Microservice Architecture", icon: <Database className="w-5 h-5" /> },
        { name: "Scalable Systems", icon: <Cloud className="w-5 h-5" /> },
        { name: "Secure Web Applications", icon: <Shield className="w-5 h-5" /> },
        { name: "Optimized Web Performance", icon: <Zap className="w-5 h-5" /> },
      ]
    },
    {
      title: "Artificial Intelligence",
      description: "We integrate advanced AI capabilities into digital products, including generative AI, machine learning models, and intelligent automation systems.",
      icon: <Cpu className="w-8 h-8 text-secondary" />,
      color: "from-purple-500/20 to-transparent",
      services: [
        { name: "AI Integration", icon: <Cpu className="w-5 h-5" /> },
        { name: "Custom AI Models", icon: <Code className="w-5 h-5" /> },
        { name: "Machine Learning Implementation", icon: <Database className="w-5 h-5" /> },
        { name: "Workflow Automation", icon: <Zap className="w-5 h-5" /> },
        { name: "LLM Integration", icon: <Cloud className="w-5 h-5" /> },
      ]
    },
    {
      title: "Deployment & Infrastructure",
      description: "We deploy production-grade applications with secure infrastructure, scalable architecture, and reliable cloud systems.",
      icon: <Server className="w-8 h-8 text-accent" />,
      color: "from-cyan-500/20 to-transparent",
      services: [
        { name: "SSL / SSH Configuration", icon: <Shield className="w-5 h-5" /> },
        { name: "Secure Web Deployment", icon: <Cloud className="w-5 h-5" /> },
        { name: "Scalability Architecture", icon: <Database className="w-5 h-5" /> },
        { name: "Reliability Engineering", icon: <Server className="w-5 h-5" /> },
      ]
    }
  ];

  return (
    <main className="pt-32 md:pt-40 pb-20 md:py-32 relative min-h-screen bg-background text-foreground">
      {/* Background decorations */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-background to-background pointer-events-none z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="inline-block mb-4">
               <span className="text-primary font-semibold tracking-wider uppercase text-sm drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">What We Do</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground-muted font-normal leading-relaxed text-balance">
            Delivering end-to-end digital solutions through modern engineering, intelligent automation, and scalable cloud infrastructure.
          </p>
        </motion.div>

        {/* Services Categories Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {serviceCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="relative glass-card bg-background-muted/80 flex flex-col h-full rounded-2xl overflow-hidden border border-white/5 transition-all duration-300"
            >
              {/* Card Gradient Background */}
              <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${category.color} opacity-30 pointer-events-none`}></div>
              
              <div className="p-8 flex flex-col h-full z-10">
                <div className="mb-6 p-4 inline-block rounded-xl bg-white/5 backdrop-blur-md border border-white/5 border-b-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                  {category.icon}
                </div>
                
                <h2 className="text-2xl font-bold mb-4">{category.title}</h2>
                <p className="text-foreground-muted font-normal leading-relaxed mb-8 flex-grow">
                  {category.description}
                </p>

                <div className="mt-auto">
                  <h3 className="text-sm font-semibold text-foreground-muted uppercase tracking-widest mb-4">Core Capabilities</h3>
                  <ul className="space-y-3">
                    {category.services.map((service, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-3 group text-foreground">
                        <div className="text-foreground-muted group-hover:text-primary transition-colors">
                          {service.icon}
                        </div>
                        <span className="group-hover:text-white transition-colors text-sm">{service.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
};

export default ServicesPage;
