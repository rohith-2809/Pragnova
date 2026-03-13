import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Shuffle from '../effects/Shuffle';

const WhyUs = () => {
  const points = [
    "Unmatched AI & Machine Learning Expertise",
    "Agile, Rapid Prototyping and Deployment",
    "Security-First Development Lifecycle",
    "Custom, Pixel-Perfect UI/UX Design",
    "Dedicated Post-Launch Support & Scaling",
    "Transparent Pricing & Direct Communication"
  ];

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="why-us" className="py-20 md:py-32 relative overflow-hidden bg-white/[0.02]">
      <div className="absolute -left-40 top-40 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[120px] animate-pulse"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left mb-12 lg:mb-0"
          >
            <div className="mb-4 inline-block">
              <span className="text-secondary font-semibold tracking-wider uppercase text-sm">Why Choose Us</span>
              <div className="h-1 w-12 bg-secondary rounded mt-1 mx-auto lg:mx-0"></div>
            </div>
            
            <h2 className="text-fluid-h2 font-bold mb-6">
              <Shuffle text="The Pragnova Advantage" duration={0.8} delay={0} shuffleTimes={3} animationMode="random" />
            </h2>
            <p className="text-base sm:text-lg text-foreground-muted mb-8 font-normal leading-relaxed text-center lg:text-justify relative min-h-[100px] text-balance">
              Choosing the right technology partner defines your digital trajectory. We operate not as an external vendor, but as an extension of your core team. Our commitment is absolute clarity, relentless innovation, and measurable ROI.
            </p>

            <motion.ul 
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-4 mb-8 flex flex-col items-center lg:items-start"
            >
              {points.map((point, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5, color: "#fff" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex items-center space-x-3 text-foreground-muted cursor-default"
                >
                  <motion.div whileHover={{ scale: 1.2, rotate: 10 }}>
                    <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                  </motion.div>
                  <span className="transition-colors duration-300">{point}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="glass-card p-8 relative overflow-hidden group hover:shadow-[0_0_40px_rgba(59,130,246,0.1)] transition-all duration-500 hover:-translate-y-2"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              <motion.svg 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="#94A3B8" d="M45.7,-76.1C58.9,-68.9,69.1,-55.4,76.5,-40.7C83.9,-26,88.4,-10,87.6,5.8C86.7,21.5,80.5,37,70.9,49.9C61.3,62.7,48.2,73,33.5,78.5C18.8,84,2.5,84.7,-13.7,82.5C-29.8,80.3,-45.8,75.1,-57.8,64.6C-69.8,54.1,-77.8,38.2,-81.9,21.6C-86,5,-86.3,-12.3,-80.6,-28.3C-74.9,-44.3,-63.3,-58.9,-49,-65.7C-34.7,-72.5,-17.3,-71.5,-1,-70C15.3,-68.5,30.7,-66.4,45.7,-76.1Z" transform="translate(100 100) scale(1.1)" />
              </motion.svg>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to accelerate?</h3>
              <p className="text-foreground-muted mb-8 font-normal">
                Join startups and enterprises who trust Pragnova to build their future.
              </p>
              
              <div className="space-y-6">
                {[
                  { num: "1", color: "primary", title: "Discovery Call", desc: "We map your vision and requirements." },
                  { num: "2", color: "secondary", title: "Architecture & Design", desc: "We create the blueprint for success." },
                  { num: "3", color: "accent", title: "Development & Launch", desc: "We build, test, and deploy seamlessly." }
                ].map((step, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-center space-x-4 cursor-default"
                  >
                    <div className={`w-12 h-12 rounded-full bg-${step.color}/20 flex items-center justify-center text-${step.color} font-bold text-xl ring-2 ring-${step.color}/40 shadow-[0_0_20px_rgba(var(--${step.color}-rgb),0.3)] group-hover:bg-${step.color}/30 transition-all duration-300`}>
                      {step.num}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{step.title}</h4>
                      <p className="text-sm text-foreground-muted group-hover:text-foreground-muted transition-colors">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
