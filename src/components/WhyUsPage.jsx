import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, TrendingUp } from 'lucide-react';

const WhyUsPage = () => {
  const strengths = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Precision Engineering",
      desc: "Every system we build is meticulously architected to solve specific business challenges with absolute accuracy."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-secondary" />,
      title: "Relentless Innovation",
      desc: "Our culture thrives on pushing boundaries. We don't settle for standard; we engineer the exceptional."
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "True Partnership",
      desc: "We align our goals with yours, operating as a fully integrated extension of your internal teams."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Scalable Growth",
      desc: "We design for the long term. Our architectures seamlessly scale as your user base and ambitions expand."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <div className="pt-[160px] pb-[90px] relative overflow-hidden min-h-screen">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto mb-[90px]"
        >
          <span className="text-secondary font-semibold tracking-wider uppercase text-sm drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]">The Pragnova Standard</span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mt-4 mb-8 leading-tight">
            Why We Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Different</span>
          </h1>
          <p className="text-lg sm:text-xl text-foreground-muted leading-relaxed font-normal text-balance mx-auto">
            At Pragnova Technologies, we don't just write code. We architect solutions that redefine industry standards, combining technical mastery with strategic foresight to ensure your digital product stands out in an increasingly crowded market.
          </p>
        </motion.div>

        {/* Strengths Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-[45px]"
        >
          {strengths.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-10 rounded-3xl border border-white/5 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] transition-all duration-300 group"
            >
              <div className="flex flex-col h-full">
                <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:bg-white/10 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-secondary transition-colors">{item.title}</h3>
                <p className="text-foreground-muted font-normal leading-relaxed flex-grow text-balance">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Value Proposition Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-[90px] relative glass-card border border-white/10 rounded-[3rem] p-12 md:p-20 overflow-hidden text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-50"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Uncompromising Quality</h2>
            <p className="text-xl text-foreground-muted font-normal max-w-3xl mx-auto leading-relaxed">
              We reject the status quo. Our approach is entirely fundamentally rooted in deep research, human-centered design, and robust engineering. When you partner with us, you gain an unstoppable technical ally.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default WhyUsPage;
