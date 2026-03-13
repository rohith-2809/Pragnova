import { motion } from 'framer-motion';

const Ecosystem = () => {
  const pillars = [
    { name: "Strategy", angle: 0 },
    { name: "Design", angle: 51.4 },
    { name: "Development", angle: 102.8 },
    { name: "Brand", angle: 154.2 },
    { name: "Website", angle: 205.6 },
    { name: "Product", angle: 257 },
    { name: "AI", angle: 308.4 }
  ];

  return (
    <section id="ecosystem" className="py-20 md:py-32 relative overflow-hidden bg-background">
      {/* Background Grid & Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 will-change-transform transform-gpu"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[80px] pointer-events-none will-change-transform transform-gpu translate-z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="mb-4 inline-block">
              <span className="text-secondary font-semibold tracking-wider uppercase text-sm">Harmonized Forces</span>
              <div className="h-1 w-12 bg-secondary rounded mt-1 mx-auto"></div>
            </div>
            <h2 className="text-fluid-h2 md:text-fluid-h1 font-bold mb-6 tracking-tight">
              A Cohesive <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">Future-Ready</span> Ecosystem
            </h2>
            <p className="text-lg text-foreground-muted font-normal leading-relaxed">
              We unify seven core pillars into a single, synchronized momentum. By aligning strategy with aesthetics, and engineering with intelligence, we shape digital experiences that deliver absolute clarity, consistency, and impact.
            </p>
          </motion.div>
        </div>

        {/* Orbital Animation Container (Desktop/Tablet) */}
        <div className="relative z-0 w-full max-w-3xl mx-auto md:aspect-[3/2] hidden md:flex items-center justify-center mt-20 md:mt-32 mb-20 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full h-full flex items-center justify-center"
          >
            {/* Center Core */}
            <div className="absolute z-20 w-32 h-32 md:w-40 md:h-40 rounded-full border border-white/20 bg-background/80 backdrop-blur-xl flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.3)]">
              <div className="text-center">
                <span className="block font-bold text-xl tracking-tighter text-white">PRAGNOVA</span>
                <span className="block text-[10px] text-foreground-muted font-normal tracking-widest uppercase mt-1">Ecosystem</span>
              </div>
            </div>

            {/* Orbiting Rings */}
            <div className="absolute w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full border border-white/5 border-dashed animate-[spin_40s_linear_infinite]"></div>
            <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full border border-white/10 animate-[spin_60s_linear_infinite_reverse]"></div>
            <div className="absolute w-[450px] h-[450px] md:w-[650px] md:h-[650px] rounded-full border border-white/5 border-dashed animate-[spin_80s_linear_infinite]"></div>

            {/* Pillars positioned in a circle */}
            {pillars.map((pillar, index) => {
              // Calculate positioning based on an ellipse
              const radiusX = 300; 
              const radiusY = 300;
              const angleInRads = (pillar.angle * Math.PI) / 180;
              
              const x = Math.cos(angleInRads) * radiusX;
              const y = Math.sin(angleInRads) * radiusY;

              return (
                <motion.div
                  key={pillar.name}
                  className="absolute z-30"
                  initial={{ x: 0, y: 0, opacity: 0 }}
                  whileInView={{ x, y, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.4 + (index * 0.1),
                    ease: "easeOut"
                  }}
                >
                  <div className="px-6 py-3 rounded-full glass-card border border-white/10 bg-background-muted/80 backdrop-blur-md hover:bg-white/10 hover:border-primary/50 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:-translate-y-1">
                    <span className="font-medium text-foreground text-sm tracking-wide">{pillar.name}</span>
                  </div>
                </motion.div>
              );
            })}
            
            {/* Connecting lines SVG */}
            <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none opacity-20">
               <defs>
                  <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="var(--color-secondary)" stopOpacity="0.5" />
                  </linearGradient>
               </defs>
               {pillars.map((pillar, index) => {
                  const radiusX = 300; 
                  const radiusY = 300;
                 const angleInRads = (pillar.angle * Math.PI) / 180;
                 const x = Math.cos(angleInRads) * radiusX;
                 const y = Math.sin(angleInRads) * radiusY;
                 
                 return (
                   <motion.line 
                     key={`line-${index}`}
                     x1="50%" 
                     y1="50%" 
                     x2={`calc(50% + ${x}px)`} 
                     y2={`calc(50% + ${y}px)`}
                     stroke="url(#line-gradient)" 
                     strokeWidth="1"
                     strokeDasharray="4 4"
                     initial={{ pathLength: 0, opacity: 0 }}
                     whileInView={{ pathLength: 1, opacity: 0.5 }}
                     viewport={{ once: true }}
                     transition={{ duration: 1.5, delay: 0.8 }}
                   />
                 )
               })}
            </svg>
          </motion.div>
        </div>

        {/* Vertical Stack Animation Container (Mobile Fallback) */}
        <div className="relative w-full max-w-sm mx-auto flex flex-col md:hidden items-center justify-center mt-12 space-y-4">
          <div className="z-20 w-24 h-24 mb-6 rounded-full border border-white/20 bg-background/80 backdrop-blur-xl flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)]">
            <div className="text-center">
              <span className="block font-bold text-sm tracking-tighter text-white">PRAGNOVA</span>
              <span className="block text-[8px] text-foreground-muted font-normal tracking-widest uppercase mt-1">Ecosystem</span>
            </div>
          </div>

          <div className="absolute top-12 bottom-12 w-px bg-gradient-to-b from-primary via-purple-500 to-primary opacity-30 z-0"></div>

          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.name}
              className="z-10 w-full"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            >
              <div className="mx-auto w-3/4 px-6 py-4 rounded-xl glass-card border border-white/10 bg-background-muted/80 backdrop-blur-md hover:bg-white/10 text-center transition-all duration-300 shadow-md">
                <span className="font-medium text-foreground text-sm tracking-wide">{pillar.name}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Ecosystem;
