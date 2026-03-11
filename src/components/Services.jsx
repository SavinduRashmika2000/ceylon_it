import { motion } from 'framer-motion';
import { FaCode, FaWordpress, FaBriefcase, FaRocket, FaWrench, FaSearch } from 'react-icons/fa';

const services = [
  {
    title: 'Website Development',
    description: 'Custom, high-performance websites built with modern technologies like React and Tailwind CSS.',
    icon: FaCode,
    color: 'from-blue-500 to-cyan-400'
  },
  {
    title: 'WordPress Website Development',
    description: 'Professional, easy-to-manage WordPress sites tailored to your business needs.',
    icon: FaWordpress,
    color: 'from-blue-600 to-blue-400'
  },
  {
    title: 'Business Websites',
    description: 'Corporate websites designed to establish authority and drive client engagement.',
    icon: FaBriefcase,
    color: 'from-indigo-500 to-blue-500'
  },
  {
    title: 'Landing Page Development',
    description: 'High-converting landing pages optimized for marketing campaigns and lead generation.',
    icon: FaRocket,
    color: 'from-cyan-500 to-teal-400'
  },
  {
    title: 'Website Redesign & Bug Fixes',
    description: 'Breathe new life into your existing site or resolve complex technical issues quickly.',
    icon: FaWrench,
    color: 'from-sky-500 to-indigo-400'
  },
  {
    title: 'SEO-Friendly Websites',
    description: 'Built from the ground up with search engine optimization best practices to improve visibility.',
    icon: FaSearch,
    color: 'from-blue-400 to-cyan-300'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-surface relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full filter blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-wider uppercase text-sm"
          >
            What We Do
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-muted text-lg"
          >
            We deliver comprehensive digital solutions tailored to elevate your brand and accelerate your business growth.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative bg-bg-card border border-border-color rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 pointer-events-none"></div>
                
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl mb-4 md:mb-6 flex items-center justify-center bg-gradient-to-br ${service.color} bg-opacity-10 shadow-lg shadow-black/5`}>
                  <Icon className="text-xl md:text-2xl text-white" />
                </div>
                
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-text-main group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-sm md:text-base text-text-muted leading-relaxed">
                  {service.description}
                </p>
                
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 overflow-hidden rounded-tr-2xl pointer-events-none">
                  <div className="absolute top-0 right-0 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-bl from-primary/10 to-transparent group-hover:from-primary/20 transition-colors duration-300 rounded-bl-full"></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
