import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
  {
    title: 'Repairing Hut',
    type: 'Service Platform',
    description: 'A responsive and user-friendly service platform designed to connect customers with professional repair services, featuring integrated booking and service tracking.',
    client: 'Repairing Hut',
    tech: 'React, Tailwind CSS, Vite',
    url: 'https://repairing-hut.vercel.app/',
    logoText: 'R',
    logoColor: 'from-emerald-400 to-teal-500',
    logoShadow: 'shadow-[0_0_30px_rgba(52,211,153,0.2)]',
    buttonStyles: 'border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:shadow-[0_0_20px_rgba(52,211,153,0.4)]',
    tagColor: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
  },
  {
    title: 'Barco Peach',
    type: 'E-Commerce',
    description: 'A modern, high-performance web application featuring a sleek dark UI, smooth animations, and an intuitive user experience tailored for a premium brand presentation.',
    client: 'Barco Peach',
    tech: 'React, Tailwind CSS, Framer Motion',
    url: 'https://barco-peach.vercel.app/',
    logoText: 'B',
    logoColor: 'from-primary to-accent',
    logoShadow: 'shadow-[0_0_30px_rgba(14,165,233,0.2)]',
    buttonStyles: 'border-primary text-primary hover:bg-primary hover:shadow-[0_0_20px_rgba(14,165,233,0.4)]',
    tagColor: 'bg-primary/10 text-primary border-primary/20',
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-bg-card relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-accent/5 rounded-full filter blur-[80px]"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            className="text-3xl md:text-4xl font-bold"
          >
            Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Projects</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-muted text-base md:text-lg"
          >
            Explore our latest successful deliveries that combine stunning design with robust functionality.
          </motion.p>
        </div>

        <div className="space-y-12 md:space-y-20 max-w-5xl mx-auto">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <div className="group relative bg-bg-dark rounded-3xl overflow-hidden border border-border-color-hover hover:border-primary/50 transition-all duration-500 shadow-2xl hover:shadow-primary/20">
                <div className="flex flex-col lg:flex-row">
                  {/* Project Image/Preview Area */}
                  <div className={`lg:w-3/5 relative overflow-hidden bg-surface-dark min-h-[250px] md:min-h-[350px] lg:min-h-[400px] ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                    {/* Simulated Browser Bar */}
                    <div className="absolute top-0 w-full h-8 bg-surface-dark flex items-center px-4 space-x-2 z-10">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                      <div className="ml-3 bg-border-color-hover h-3.5 rounded w-32 md:w-48 opacity-50"></div>
                    </div>
                    
                    {/* Project Image Mockup */}
                    <div className="pt-8 h-full w-full bg-surface-dark flex items-center justify-center p-6 md:p-8 group-hover:scale-105 transition-transform duration-700">
                      <div className="text-center">
                        <div className={`w-20 h-20 md:w-24 md:h-24 mx-auto mb-3 md:mb-4 bg-gradient-to-tr ${project.logoColor} rounded-xl flex items-center justify-center ${project.logoShadow}`}>
                          <span className="text-3xl md:text-4xl font-bold text-white">{project.logoText}</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-text-main mb-1 md:mb-2">{project.title}</h3>
                        <p className="text-xs md:text-sm text-text-muted-dark">{project.type}</p>
                      </div>
                    </div>

                    {/* Overlay on hover */}
                    <div className={`absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
                  </div>

                  {/* Project Info Area */}
                  <div className={`lg:w-2/5 p-6 md:p-8 lg:p-12 flex flex-col justify-center relative bg-bg-card ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                    <div className={`absolute top-0 ${index % 2 !== 0 ? 'left-0 rounded-br-full' : 'right-0 rounded-bl-full'} w-24 h-24 md:w-32 md:h-32 bg-primary/10 pointer-events-none`}></div>
                    
                    <div className="mb-4 md:mb-6">
                      <span className={`inline-block px-3 py-1 rounded-full text-[10px] md:text-xs font-semibold tracking-wider mb-3 md:mb-4 border ${project.tagColor}`}>
                        {project.type}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-text-main mb-3 md:mb-4 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm md:text-base text-text-muted leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="space-y-3 md:space-y-4 font-mono text-xs md:text-sm text-text-muted-dark mb-6 md:mb-8">
                      <div className="flex items-center">
                        <span className="text-primary mr-2">Client:</span> {project.client}
                      </div>
                      <div className="flex items-center">
                        <span className="text-primary mr-2">Tech:</span> {project.tech}
                      </div>
                    </div>

                    <div className="mt-auto">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center px-6 py-2.5 bg-transparent border-2 font-bold rounded-lg transition-all duration-300 shadow-sm hover:text-white ${project.buttonStyles}`}
                      >
                        View Project <FaExternalLinkAlt className="ml-2" size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
