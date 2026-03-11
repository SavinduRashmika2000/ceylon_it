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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-32 md:pb-16 flex flex-col justify-center h-full">
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            scale: [1, 1.02, 1],
            rotate: [0, 2, -1, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 6, 
            ease: "easeInOut" 
          }}
          className="mb-8 flex justify-center"
        >
          <div className="w-48 h-48 md:w-56 md:h-56 bg-white rounded-3xl p-3 shadow-2xl shadow-primary/20 overflow-hidden flex items-center justify-center transform rotate-3 hover:rotate-0 transition-all duration-300">
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
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
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
          className="mt-4 max-w-2xl mx-auto text-xl text-text-muted leading-relaxed"
        >
          Ceylon IT Solutions provides professional website development, modern web design, and digital solutions to help businesses grow online.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
        >
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-gradient-to-r from-primary to-accent border border-transparent rounded-full overflow-hidden cursor-pointer shadow-[0_0_40px_rgba(14,165,233,0.3)] hover:shadow-[0_0_60px_rgba(14,165,233,0.5)]"
          >
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-bg-dark"></span>
            <span className="relative">Contact Us</span>
          </Link>
          
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-text-main transition-all duration-200 bg-transparent border-2 border-border-color-hover rounded-full hover:bg-surface hover:border-border-color cursor-pointer"
          >
            <span className="relative">View Our Work</span>
          </Link>
        </motion.div>
      </div>

      {/* Decorative scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer text-text-muted hover:text-text-main transition-colors z-20"
      >
        <span className="text-xs tracking-widest uppercase mb-2 opacity-80">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 14, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-current rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
