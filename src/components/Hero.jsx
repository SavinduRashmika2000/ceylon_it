import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Gradients/Animations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-primary-dark/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-bg-dark/80 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-12 md:pb-8 flex flex-col justify-center h-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 3 }}
          transition={{ 
            duration: 1, 
            ease: "easeOut",
            type: "spring",
            stiffness: 100 
          }}
          className="mb-4 md:mb-6 flex justify-center"
        >
          <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-3xl p-2.5 shadow-2xl shadow-primary/20 overflow-hidden flex items-center justify-center transform rotate-3 hover:rotate-0 transition-all duration-300">
             <img 
               src="https://i.postimg.cc/85WMrz6d/Whats-App-Image-2026-03-11-at-11-47-41.jpg" 
               alt="Ceylon IT Solutions Logo" 
               className="w-full h-full object-cover rounded-2xl"
             />
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-3 md:mb-4"
        >
          Building Modern Websites <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-primary via-accent to-blue-300 bg-clip-text text-transparent">
            for Growing Businesses
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-1 md:mt-2 max-w-xl mx-auto text-base md:text-lg text-text-muted leading-relaxed px-4 opacity-90"
        >
          Ceylon IT Solutions provides professional website development, modern web design, and digital solutions to help businesses grow online.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 md:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
        >
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="group relative px-7 py-3.5 bg-gradient-to-r from-primary to-accent text-text-main font-bold rounded-xl overflow-hidden shadow-lg shadow-primary/20 cursor-pointer text-center transition-all duration-300 hover:shadow-primary/40 hover:-translate-y-0.5 active:scale-95"
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/20 opacity-40 group-hover:animate-shine"></div>
            <span className="relative z-10 transition-transform duration-300 group-hover:scale-105 inline-block">View Our Work</span>
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="group px-7 py-3.5 bg-surface-dark/40 border border-white/10 text-white font-bold rounded-xl hover:border-primary/50 transition-all duration-300 cursor-pointer text-center backdrop-blur-md hover:bg-surface-dark/60 hover:-translate-y-0.5 active:scale-95"
          >
            <span className="group-hover:text-primary transition-colors duration-300">Start a Project</span>
          </Link>
        </motion.div>
      </div>

      {/* Decorative scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer text-text-muted hover:text-text-main transition-colors z-20"
      >
        <span className="text-[10px] md:text-xs tracking-widest uppercase mb-1 md:mb-2 opacity-80">Scroll Down</span>
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-current rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1 h-1 md:w-1.5 md:h-1.5 bg-current rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
