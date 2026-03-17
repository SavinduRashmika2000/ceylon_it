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
      className={`fixed left-0 right-0 z-50 flex justify-center transition-all duration-500`}
    >
      <div 
        className={`transition-all duration-500 ease-in-out flex items-center justify-between ${
          scrolled 
            ? 'mt-4 w-[92%] max-w-6xl bg-bg-dark/40 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl py-3 px-4 md:px-8' 
            : 'w-full bg-transparent py-4 px-4 sm:px-6 lg:px-8'
        }`}
      >
        <div className="flex-shrink-0 cursor-pointer py-1">
          <Link to="home" smooth={true} duration={500}>
            <img 
              src="https://i.postimg.cc/85WMrz6d/Whats-App-Image-2026-03-11-at-11-47-41.jpg" 
              alt="Ceylon IT Solutions" 
              className={`transition-all duration-300 rounded-xl shadow-lg hover:scale-105 ${
                scrolled ? 'h-8 md:h-10' : 'h-10 md:h-12'
              }`} 
            />
          </Link>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:block">
          <div className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                className="text-text-main hover:text-accent cursor-pointer transition-colors duration-200 text-sm font-bold uppercase tracking-wider relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <button 
              onClick={toggleDarkMode} 
              className="text-text-main hover:text-accent transition-colors ml-4 focus:outline-none flex items-center justify-center p-2 rounded-full hover:bg-white/5"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <HiSun size={20} /> : <HiMoon size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu and theme toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <button 
            onClick={toggleDarkMode} 
            className="text-text-main hover:text-accent transition-colors focus:outline-none flex items-center justify-center p-2 rounded-full hover:bg-white/5"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <HiSun size={22} /> : <HiMoon size={22} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-text-main hover:text-accent focus:outline-none p-2 rounded-full hover:bg-white/5"
            aria-label="Toggle Menu"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto", marginTop: "1rem" },
          closed: { opacity: 0, height: 0, marginTop: 0 }
        }}
        className={`absolute top-full left-1/2 -translate-x-1/2 w-[92%] md:hidden overflow-hidden bg-bg-dark/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl z-40`}
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
             <Link
             key={link.name}
             to={link.to}
             smooth={true}
             duration={500}
             onClick={() => setIsOpen(false)}
             className="block px-3 py-2 text-lg font-bold text-text-main hover:text-accent hover:bg-white/5 rounded-xl cursor-pointer transition-all border border-transparent hover:border-white/5"
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
