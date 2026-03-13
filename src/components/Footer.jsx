import { Twitter, Linkedin, Github, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Footer = () => {
  const [tooltipText, setTooltipText] = useState("");
  const [activeTooltip, setActiveTooltip] = useState(null);

  const handleSocialClick = (e, platform) => {
    e.preventDefault();
    setTooltipText("We are coming soon");
    setActiveTooltip(platform);
    setTimeout(() => setActiveTooltip(null), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <footer className="border-t border-white/5 bg-background py-20 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"
        >
          <motion.div variants={itemVariants} className="md:col-span-2">
            <a href="#" className="font-bold text-fluid-h3 tracking-tighter text-white inline-block mb-6 hover:text-foreground transition-colors">
              PRAGNOVA<span className="text-cta">.</span>
            </a>
            <p className="text-foreground-muted font-normal max-w-sm mb-6 leading-relaxed">
              Engineering the future through scalable, secure, and aesthetically powerful AI-integrated platforms 
              and advanced digital solutions.
            </p>
            <div className="flex space-x-4 relative">
              <div className="relative">
                <a href="#" onClick={(e) => handleSocialClick(e, 'twitter')} className="block p-3 -m-1 bg-white/5 rounded-full hover:bg-cta/20 hover:text-cta text-foreground-muted transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(56,166,255,0.3)] border border-transparent hover:border-cta/30 min-w-[44px] min-h-[44px] flex items-center justify-center">
                  <Twitter className="w-5 h-5" />
                </a>
                <AnimatePresence>
                  {activeTooltip === 'twitter' && (
                    <motion.div initial={{ opacity: 0, y: 10, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-primary text-white text-xs px-2 py-1 rounded shadow-lg pointer-events-none border border-white/10">
                      {tooltipText}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-primary"></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="relative">
                <a href="#" onClick={(e) => handleSocialClick(e, 'linkedin')} className="block p-3 -m-1 bg-white/5 rounded-full hover:bg-cta/20 hover:text-cta text-foreground-muted transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(56,166,255,0.3)] border border-transparent hover:border-cta/30 min-w-[44px] min-h-[44px] flex items-center justify-center">
                  <Linkedin className="w-5 h-5" />
                </a>
                <AnimatePresence>
                  {activeTooltip === 'linkedin' && (
                    <motion.div initial={{ opacity: 0, y: 10, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-primary text-white text-xs px-2 py-1 rounded shadow-lg pointer-events-none border border-white/10">
                      {tooltipText}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-primary"></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="relative">
                <a href="#" onClick={(e) => handleSocialClick(e, 'github')} className="block p-3 -m-1 bg-white/5 rounded-full hover:bg-cta/20 hover:text-cta text-foreground-muted transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(56,166,255,0.3)] border border-transparent hover:border-cta/30 min-w-[44px] min-h-[44px] flex items-center justify-center">
                  <Github className="w-5 h-5" />
                </a>
                <AnimatePresence>
                  {activeTooltip === 'github' && (
                    <motion.div initial={{ opacity: 0, y: 10, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-primary text-white text-xs px-2 py-1 rounded shadow-lg pointer-events-none border border-white/10">
                      {tooltipText}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-primary"></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById('about');
                  if (target) {
                    if (window.lenis) window.lenis.scrollTo(target, { offset: -80 });
                    else window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
                  }
                }} className="text-foreground-muted hover:text-primary transition-colors text-sm hover:translate-x-1 inline-block duration-300">About Us</a>
              </li>
              <li>
                <a href="#identity" onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById('identity');
                  if (target) {
                    if (window.lenis) window.lenis.scrollTo(target, { offset: -80 });
                    else window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
                  }
                }} className="text-foreground-muted hover:text-primary transition-colors text-sm hover:translate-x-1 inline-block duration-300">Who We Are</a>
              </li>
              <li>
                <a href="#capabilities" onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById('capabilities');
                  if (target) {
                    if (window.lenis) window.lenis.scrollTo(target, { offset: -80 });
                    else window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
                  }
                }} className="text-foreground-muted hover:text-primary transition-colors text-sm hover:translate-x-1 inline-block duration-300">Capabilities</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById('services');
                  if (target) {
                    if (window.lenis) window.lenis.scrollTo(target, { offset: -80 });
                    else window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
                  }
                }} className="text-foreground-muted hover:text-primary transition-colors text-sm hover:translate-x-1 inline-block duration-300">Services</a>
              </li>
              <li>
                <a href="#why-us" onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById('why-us');
                  if (target) {
                    if (window.lenis) window.lenis.scrollTo(target, { offset: -80 });
                    else window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
                  }
                }} className="text-foreground-muted hover:text-primary transition-colors text-sm hover:translate-x-1 inline-block duration-300">Why Choose Us</a>
              </li>
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-foreground-muted text-sm group cursor-pointer hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>pragnova2728@gmail.com</span>
              </li>
              <li className="text-foreground-muted text-sm mt-4 pl-8 border-l border-white/10 hover:border-primary transition-colors duration-300">
                Hyderabad, Telangana, India
              </li>
            </ul>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-foreground-muted"
        >
          <p>&copy; {new Date().getFullYear()} Pragnova Technologies. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
