import { motion, useReducedMotion } from 'framer-motion';
import ClickSpark from '../effects/ClickSpark';

const Products = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="products" className="py-20 md:py-32 relative overflow-hidden bg-background text-foreground">
       <ClickSpark sparkColor="#a78bfa" sparkSize={12} sparkRadius={20} sparkCount={10} duration={600} extraScale={1.5}>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pointer-events-auto">
              <motion.div 
                 initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
                 className="text-center mb-16"
              >
                 <div className="mb-4 inline-flex items-center justify-center space-x-2">
                   <div className="h-[1px] w-8 bg-accent"></div>
                   <span className="text-accent font-semibold tracking-wider uppercase text-sm">Ecosystem Offerings</span>
                   <div className="h-[1px] w-8 bg-accent"></div>
                 </div>
                 <h2 className="text-fluid-h2 font-bold mb-6">Our Core Products</h2>
                 <p className="text-foreground-muted text-lg sm:text-xl font-normal max-w-2xl mx-auto text-balance">
                    Discover our suite of fully managed AI-driven products designed to scale alongside your organization. Click anywhere to spark innovation and interact with the grid!
                 </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                 <motion.div 
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.1, ease: 'easeOut' }}
                 >
                    <div className="bg-background-muted/80 backdrop-blur-md border border-border shadow-subtle rounded-card p-8 group h-full cursor-pointer hover:border-primary/50 transition-all motion-safe:duration-300">
                        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6 ring-1 ring-primary/30 group-hover:scale-110 motion-safe:transition-transform">
                          <span className="text-primary font-bold text-xl">N</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">Nova Predict</h3>
                        <p className="text-foreground-muted font-normal leading-relaxed">High-frequency machine learning forecasting engine for dynamic market trend analytics and predictive budget allocation.</p>
                    </div>
                 </motion.div>

                 <motion.div 
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.2, ease: 'easeOut' }}
                 >
                    <div className="bg-background-muted/80 backdrop-blur-md border border-border shadow-subtle rounded-card p-8 group h-full cursor-pointer hover:border-primary/50 transition-all motion-safe:duration-300">
                        <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-6 ring-1 ring-secondary/30 group-hover:scale-110 motion-safe:transition-transform">
                          <span className="text-secondary font-bold text-xl">C</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-secondary transition-colors">Nexus Cortex</h3>
                        <p className="text-foreground-muted font-normal leading-relaxed">Centralized autonomous data pipeline for unstructured document parsing, entity extraction, and automated knowledge graphs.</p>
                    </div>
                 </motion.div>

                 <motion.div 
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.3, ease: 'easeOut' }}
                 >
                    <div className="bg-background-muted/80 backdrop-blur-md border border-border shadow-subtle rounded-card p-8 group h-full cursor-pointer hover:border-primary/50 transition-all motion-safe:duration-300">
                        <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-6 ring-1 ring-accent/30 group-hover:scale-110 motion-safe:transition-transform">
                          <span className="text-accent-foreground font-bold text-xl">Q</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-accent-foreground transition-colors">Quantum Guard</h3>
                        <p className="text-foreground-muted font-normal leading-relaxed">Behavior-based real-time threat detection framework with automated perimeter defense and security routing logic.</p>
                    </div>
                 </motion.div>
              </div>
          </div>
       </ClickSpark>
    </section>
  )
}

export default Products;
