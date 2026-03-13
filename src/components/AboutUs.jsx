import { motion, useScroll, useTransform } from 'framer-motion';
import { Layers, Rocket, Cpu, BarChart, ShieldCheck } from 'lucide-react';
import { useRef } from 'react';
import ScrollReveal from '../effects/ScrollReveal';
import ScrollStack, { ScrollStackItem } from '../effects/ScrollStack';

const AboutUs = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -40]);

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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 110, damping: 14 }
    }
  };

  const slideUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const offerings = [
    "Custom Web Applications",
    "Scalable Business Platforms",
    "AI-Integrated Web Solutions",
    "ML-Driven Automation",
    "End-to-End Product Development",
    "UX/UI Design & Engineering",
    "Digital Transformation Consulting",
    "Cloud & System Architecture"
  ];

  return (
    <div ref={containerRef} className="py-20 md:py-32 relative overflow-hidden min-h-screen bg-background">
      {/* Background Animated Blobs specific to About Page */}
      <div className="absolute top-1/4 -right-10 w-64 h-64 md:w-96 md:h-96 bg-primary rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-20 animate-blob"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <motion.div variants={itemVariants} className="inline-block mb-4">
               <span className="text-primary font-semibold tracking-wider uppercase text-xs sm:text-sm drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">About Us – Pragnova Technologies</span>
          </motion.div>
          
          <motion.h1 style={{ y: headlineY }} variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-[30px] md:mb-[45px] leading-tight">
            <motion.span 
              animate={{ textShadow: ["0px 0px 0px rgba(255,255,255,0)", "0px 0px 20px rgba(255,255,255,0.3)", "0px 0px 0px rgba(255,255,255,0)"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.5, 1] }}
            >Innovation</motion.span> <span className="text-gradient drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">Engineered</span> for the <motion.span
              animate={{ textShadow: ["0px 0px 0px rgba(255,255,255,0)", "0px 0px 20px rgba(255,255,255,0.3)", "0px 0px 0px rgba(255,255,255,0)"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2, times: [0, 0.5, 1] }}
            >Future</motion.span>
          </motion.h1>
          
          <motion.div 
            variants={slideUpVariants} 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="text-center text-lg sm:text-xl text-foreground-muted leading-relaxed font-normal mb-6 text-balance min-h-[80px] md:min-h-[100px]"
          >
             <ScrollReveal baseOpacity={0} blurStrength={5} rotationEnd="bottom bottom" wordAnimationEnd="bottom bottom">
               Pragnova Technologies is a next-generation tech solutions company focused on building intelligent digital systems, high-performance web applications, and AI-driven products that position businesses ahead of the curve.
             </ScrollReveal>
          </motion.div>
          <motion.div 
            variants={slideUpVariants} 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="text-center text-lg sm:text-xl text-foreground-muted leading-relaxed font-normal text-balance min-h-[60px] md:min-h-[100px]"
          >
             <ScrollReveal baseOpacity={0} blurStrength={5} rotationEnd="bottom bottom" wordAnimationEnd="bottom bottom">
               We combine strategy, design, development, and AI into one unified approach—delivering solutions that are fast, scalable, and built for tomorrow.
             </ScrollReveal>
          </motion.div>
        </motion.div>

        {/* What Makes Us Different - Grid */}
        <div className="mb-32">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="mb-8 md:mb-16 block text-center md:inline-block md:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold relative pb-4 inline-block">
              What Makes Us <span className="text-primary">Different</span>
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary to-transparent"
              />
            </h2>
          </motion.div>

          <ScrollStack 
            useWindowScroll={true} 
            itemStackDistance={40} 
            itemScale={0.05}
            baseScale={0.85}
            blurAmount={4}
            className="mt-8"
          >
            {[
              { Icon: Layers, title: "Purpose-Driven Engineering", desc: "We translate abstract vision into tangible digital experiences, prioritizing scalable architectures and long-term business value over temporary technological trends.", color: "primary" },
              { Icon: Cpu, title: "Human-Centered Design", desc: "Every interface is meticulously crafted. We balance aesthetic brilliance with cognitive ease, ensuring interactions feel deeply intuitive, emotional, and utterly effortless.", color: "secondary" },
              { Icon: Rocket, title: "AI-Powered Solutions", desc: "Propel your business into the next era. From intelligent automation to intricate machine learning pipelines, we weave AI directly into the core fabric of your product.", color: "accent" },
              { Icon: BarChart, title: "Future-Proof Strategy", desc: "We simplify extreme complexity. Through rigorous research and structured roadmaps, we guarantee your software solutions evolve dynamically alongside your shifting market needs.", color: "blue-400" },
              { Icon: ShieldCheck, title: "Scalable Architecture", desc: "Built to withstand the pressure. Engineered for uncompromising data security, zero-downtime reliability, and instantaneous responses under massive enterprise user loads.", color: "emerald-400" }
            ].map((feature, i) => (
              <ScrollStackItem key={i} itemClassName="max-md:mx-auto w-[min(350px,92vw)] md:w-full max-md:aspect-square flex flex-col justify-center">
                <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-8 h-full group text-center md:text-left min-h-0 w-full p-2 md:p-6 pb-6">
                  <div className={`text-${feature.color} relative p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:scale-105 transition-transform duration-500 mb-2 md:mb-0 shrink-0`}>
                     <feature.Icon className="w-12 h-12 md:w-16 md:h-16 drop-shadow-[0_0_15px_currentColor]" />
                  </div>
                  <div className="flex flex-col items-center md:items-start max-md:max-w-[280px]">
                    <h3 className="text-[1.35rem] leading-tight md:text-3xl font-bold mb-3 md:mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">{feature.title}</h3>
                    <p className="text-[0.95rem] md:text-xl text-foreground-muted font-normal leading-relaxed md:leading-relaxed text-balance">{feature.desc}</p>
                  </div>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>

        {/* What We Offer & Why Brands Choose Us */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          {/* Offerings List */}
          <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, margin: "-50px" }}
             variants={containerVariants}
             className="text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 relative pb-4 inline-block">
              What We Offer
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary to-transparent"
              />
            </h2>
            <div className="space-y-4">
              {offerings.map((item, index) => (
                <motion.div 
                  key={index}
                  custom={index}
                  initial={{ opacity: 0, x: -20, rotateX: -15 }}
                  whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
                  viewport={{ once: true, margin: "-10px" }}
                  transition={{ duration: 0.6, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                  whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.05)" }}
                  className="flex items-center space-x-4 p-4 rounded-xl border border-white/5 transition-colors cursor-default"
                >
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-lg text-foreground font-normal">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why Brands Choose Us */}
           <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, margin: "-50px" }}
             variants={containerVariants}
             className="text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 relative pb-4 inline-block">
              Why Brands Choose Us
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary to-transparent"
              />
            </h2>
            <motion.div variants={itemVariants} className="relative glass p-6 md:p-10 rounded-2xl border-l-4 border-l-primary overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-primary/10 rounded-bl-full mix-blend-screen pointer-events-none" />
              <ul className="space-y-6 md:space-y-8 relative z-10">
                <li className="flex flex-col">
                  <span className="text-lg md:text-xl font-medium text-white mb-2">Clear, outcome-focused execution</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-lg md:text-xl font-medium text-white mb-2">Faster delivery without compromising quality</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-lg md:text-xl font-medium text-white mb-2">Products designed to scale and adapt</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-lg md:text-xl font-medium text-white mb-2">Genuine partnership approach—your goals become our goals</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* Our Commitment Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center py-20 border-t border-white/10"
        >
          <h2 className="text-3xl font-bold mb-6 text-white inline-block relative pb-2">
            Our Commitment
            <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"
              />
          </h2>
          <p className="text-xl sm:text-2xl text-foreground-muted font-normal max-w-4xl mx-auto leading-relaxed italic text-center text-balance">
            "We build technology that is functional, intelligent, and emotionally engaging. At Pragnova Technologies, we’re not following digital trends—we’re <span className="text-primary not-italic font-medium">creating the next wave of them</span>."
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default AboutUs;
