import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import StaggeredMenu from '../effects/StaggeredMenu';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', href: '/about', isRoute: true },
    { name: 'Capabilities', href: '/capabilities', isRoute: true },
    { name: 'Services', href: '/services', isRoute: true },
    { name: 'Why Us', href: '/why-us', isRoute: true },
  ];

  const staggeredItems = navLinks.map(link => ({
    label: link.name,
    link: link.href,
    ariaLabel: link.name,
  }));

  const socialItems = [
    { label: 'LinkedIn', link: '#', ariaLabel: 'Follow us on LinkedIn' },
    { label: 'Twitter', link: '#', ariaLabel: 'Follow us on Twitter' },
    { label: 'Instagram', link: '#', ariaLabel: 'Follow us on Instagram' }
  ];

  const handleLinkClick = (href, isRoute) => {
    if (!isRoute && href.startsWith('/#')) {
      const targetId = href.substring(2);
      
      if (location.pathname !== '/') {
         setTimeout(() => {
           const element = document.getElementById(targetId);
           if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
           }
         }, 100);
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <header className="relative z-[100]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <StaggeredMenu 
          items={staggeredItems} 
          socialItems={socialItems}
          isFixed={true} 
          logoUrl={false}
          menuButtonColor="var(--color-foreground-muted)"
          openMenuButtonColor="var(--color-secondary)"
          accentColor="var(--color-secondary)" 
          scrolled={scrolled}
          leftHeaderContent={
            <Link to="/" className="font-bold text-xl md:text-2xl tracking-tighter text-white hover:text-white/80 transition-colors duration-500 ease-out pointer-events-auto flex items-center p-2 -m-2 min-h-[44px]">
              PRAGNOVA<span className="text-primary mr-2">.</span>
              <span className="text-sm font-normal text-foreground-muted tracking-wide hidden sm:inline-block">Technologies</span>
            </Link>
          }
          rightHeaderContent={null}
        />
      </motion.div>
    </header>
  );
};

export default Navbar;
