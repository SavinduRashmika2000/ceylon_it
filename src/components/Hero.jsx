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
          animate={{ 
            opacity: 1, 
            scale: 1, 
            rotate: 3,
            y: [0, -10, 0] // Continuous floating animation
          }}
          transition={{ 
            opacity: { duration: 1, ease: "easeOut" },
            scale: { duration: 1, ease: "easeOut", type: "spring", stiffness: 100 },
            rotate: { duration: 1, ease: "easeOut", type: "spring", stiffness: 100 },
            y: { repeat: Infinity, duration: 4, ease: "easeInOut" } // Infinite transition
          }}
          className="mb-4 md:mb-8 flex justify-center"
        >
          <div className="w-36 h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 bg-white rounded-[2rem] p-3 shadow-2xl shadow-primary/30 overflow-hidden flex items-center justify-center transform rotate-3 hover:rotate-0 transition-all duration-500">
             <img 
               src="https://i.postimg.cc/85WMrz6d/Whats-App-Image-2026-03-11-at-11-47-41.jpg" 
               alt="Ceylon IT Solutions Logo" 
               className="w-full h-full object-cover rounded-[1.5rem]"
             />
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3 md:mb-5 leading-[1.2]"
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
          className="mt-1 md:mt-2 max-w-xl mx-auto text-xs md:text-sm text-text-muted leading-relaxed px-4 opacity-90"
        >
          Ceylon IT Solutions provides professional website development, modern web design, and digital solutions to help businesses grow online.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 md:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
        >
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="group relative px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-black rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(14,165,233,0.3)] cursor-pointer text-center transition-all duration-300 hover:shadow-primary/60 hover:-translate-y-1 active:scale-95 flex items-center justify-center text-base md:text-lg uppercase tracking-widest"
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/30 opacity-40 group-hover:animate-shine"></div>
            <span className="relative z-10 transition-transform duration-300 group-hover:scale-105 inline-block drop-shadow-md">View Our Work</span>
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="group px-8 py-4 bg-white text-black font-black rounded-2xl border-2 border-white/50 hover:bg-white/90 hover:border-primary/40 transition-all duration-300 cursor-pointer text-center shadow-xl hover:-translate-y-1 active:scale-95 flex items-center justify-center text-base md:text-lg uppercase tracking-widest"
          >
            <span className="relative z-10 transition-transform duration-300 group-hover:scale-105 inline-block">Start a Project</span>
          </Link>
        </motion.div>
      </div>

      {/* Decorative scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer text-text-muted hover:text-text-main transition-colors z-20"
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
