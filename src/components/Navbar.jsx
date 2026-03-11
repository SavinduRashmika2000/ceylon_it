import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HiMenu, HiX, HiMoon, HiSun } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'Services', to: 'services' },
    { name: 'Projects', to: 'projects' },
    { name: 'About', to: 'about' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg-dark/80 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-4 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0 cursor-pointer py-1">
            <Link to="home" smooth={true} duration={500}>
              <img 
                src="https://i.postimg.cc/85WMrz6d/Whats-App-Image-2026-03-11-at-11-47-41.jpg" 
                alt="Ceylon IT Solutions" 
                className="h-10 md:h-12 w-auto rounded-xl shadow-lg hover:scale-105 transition-transform duration-300" 
              />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="text-text-main hover:text-accent cursor-pointer transition-colors duration-200 text-sm font-medium uppercase tracking-wider relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              <button 
                onClick={toggleDarkMode} 
                className="text-text-main hover:text-accent transition-colors ml-4 focus:outline-none flex items-center justify-center"
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? <HiSun size={22} /> : <HiMoon size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile menu and theme toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={toggleDarkMode} 
              className="text-text-main hover:text-accent transition-colors focus:outline-none flex items-center justify-center p-1"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <HiSun size={24} /> : <HiMoon size={24} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-main hover:text-accent focus:outline-none p-1"
            >
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 }
        }}
        className="md:hidden overflow-hidden bg-bg-card border-t border-border-color"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
             <Link
             key={link.name}
             to={link.to}
             smooth={true}
             duration={500}
             onClick={() => setIsOpen(false)}
             className="block px-3 py-2 text-base font-medium text-text-main hover:text-accent hover:bg-surface rounded-md cursor-pointer transition-colors"
           >
             {link.name}
           </Link>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
