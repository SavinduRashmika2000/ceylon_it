import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-bg-card relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-accent/5 rounded-full filter blur-[80px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-wider uppercase text-sm"
          >
            Featured Work
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Projects</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-muted text-lg"
          >
            Explore our latest successful deliveries that combine stunning design with robust functionality.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          <div className="group relative bg-bg-dark rounded-3xl overflow-hidden border border-border-color-hover hover:border-primary/50 transition-all duration-500 shadow-2xl hover:shadow-primary/20">
            <div className="flex flex-col lg:flex-row">
              {/* Project Image/Preview Area */}
              <div className="lg:w-3/5 relative overflow-hidden bg-surface-dark min-h-[300px] lg:min-h-[400px]">
                {/* Simulated Browser Bar */}
                <div className="absolute top-0 w-full h-8 bg-surface-dark flex items-center px-4 space-x-2 z-10">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-4 bg-border-color-hover h-4 rounded w-48 opacity-50"></div>
                </div>
                
                {/* Project Image Mockup (Can replace src with actual screenshot later) */}
                <div className="pt-8 h-full w-full bg-surface-dark flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-700">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-tr from-primary to-accent rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(14,165,233,0.2)]">
                       <span className="text-4xl font-bold text-white">B</span>
                    </div>
                    <h3 className="text-2xl font-bold text-text-main mb-2">Barco Peach</h3>
                    <p className="text-text-muted-dark">Premium E-Commerce Experience</p>
                  </div>
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>

              {/* Project Info Area */}
              <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center relative bg-bg-card">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full pointer-events-none"></div>
                
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider mb-4 border border-primary/20">
                    E-Commerce
                  </span>
                  <h3 className="text-3xl font-bold text-text-main mb-4 group-hover:text-primary transition-colors">
                    Barco Peach
                  </h3>
                  <p className="text-text-muted leading-relaxed">
                    A modern, high-performance web application featuring a sleek dark UI, smooth animations, and an intuitive user experience tailored for a premium brand presentation.
                  </p>
                </div>

                <div className="space-y-4 font-mono text-sm text-text-muted-dark mb-8">
                  <div className="flex items-center">
                    <span className="text-primary mr-2">Client:</span> Barco Peach
                  </div>
                  <div className="flex items-center">
                    <span className="text-primary mr-2">Tech:</span> React, Tailwind CSS, Framer Motion
                  </div>
                </div>

                <div className="mt-auto">
                  <a
                    href="https://barco-peach.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-white text-bg-dark font-bold rounded-lg hover:bg-primary hover:text-text-main transition-colors duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(14,165,233,0.4)]"
                  >
                    View Project <FaExternalLinkAlt className="ml-2" size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
