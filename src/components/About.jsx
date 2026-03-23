import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-bg-dark relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div>
              <span className="text-primary font-semibold tracking-wider uppercase text-sm block mb-2">
                Who We Are
              </span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">SADIGEN TECH</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-text-muted leading-relaxed">
              <p>
                SADIGEN TECH is a modern web development company focused on creating professional, responsive, and high-performance websites for businesses.
              </p>
              <p>
                Our goal is to help companies establish a strong online presence through clean design and reliable technology. We believe in blending stunning aesthetics with robust engineering to deliver digital experiences that not only look incredible but perform flawlessly across all devices.
              </p>
            </div>

            <div className="pt-4 flex items-center space-x-6">
              <div className="flex flex-col">
                <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  100%
                </span>
                <span className="text-sm text-text-muted-dark mt-1 uppercase tracking-wider font-semibold">
                  Commitment
                </span>
              </div>
              <div className="w-px h-12 bg-slate-700"></div>
              <div className="flex flex-col">
                <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
                  24/7
                </span>
                <span className="text-sm text-text-muted-dark mt-1 uppercase tracking-wider font-semibold">
                  Support
                </span>
              </div>
            </div>
          </motion.div>

          {/* Visual/Image Area */}
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 to-bg-card p-1 shadow-2xl shadow-primary/5 hover:shadow-primary/20 transition-shadow duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-blue-500 opacity-10"></div>
              
              <div className="relative bg-bg-card rounded-3xl min-h-[320px] md:min-h-[380px] lg:h-[400px] flex items-center justify-center overflow-hidden border border-border-color-hover/50">
                {/* Abstract tech representation since no specific about image was provided */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-10 left-10 w-32 h-32 rounded-full border border-primary/20"></div>
                  <div className="absolute top-20 left-20 w-48 h-48 rounded-full border border-accent/20"></div>
                  <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full border border-blue-400/30"></div>
                  
                  {/* Grid overlay */}
                  <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                </div>

                <div className="relative z-10 text-center p-6">
                  <div className="w-24 h-24 md:w-28 md:h-28 mx-auto mb-4 md:mb-6 bg-white rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.1)] overflow-hidden p-1">
                    <img src="https://i.postimg.cc/BQbMxv21/Chat-GPT-Image-Mar-23-2026-09-02-16-AM.png" alt="SADIGEN TECH Logo" className="w-full h-full object-cover rounded-xl" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-widest text-text-main/90">INNOVATION</h3>
                </div>
              </div>
            </div>

            {/* Floating decoration */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-24 h-24 md:w-32 md:h-32 bg-surface rounded-2xl border border-border-color-hover shadow-xl flex items-center justify-center backdrop-blur-md bg-opacity-80 z-20"
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl mb-1">🚀</div>
                <div className="text-[10px] md:text-xs font-bold text-text-muted">Modern Web</div>
              </div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
