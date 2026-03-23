import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiSend, FiLoader, FiCheckCircle, FiXCircle } from 'react-icons/fi';

const Contact = () => {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // EmailJS config from user requirements
    const serviceId = 'service_4mx9dd8';
    const templateId = 'YOUR_TEMPLATE_ID'; // Update this with your actual template ID
    const publicKey = '5btSdpGwYEeUy0Zkf';

    // Send the message using EmailJS
    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        formRef.current.reset();
        
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      })
      .catch((error) => {
        console.error('Submission failed:', error);
        setIsSubmitting(false);
        setSubmitStatus('error');
      });
  };

  return (
    <section id="contact" className="py-20 bg-bg-card relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-wider uppercase text-sm"
          >
            Get In Touch
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Project</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-muted text-base md:text-lg"
          >
            Ready to transform your digital presence? Send us a message and let's build something exceptional together.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-bg-dark rounded-3xl p-6 md:p-10 lg:p-12 shadow-2xl border border-border-color relative">
            
            {/* Form Glow */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl z-0 opacity-50 blur-sm pointer-events-none"></div>
            
            <form ref={formRef} onSubmit={handleSubmit} className="relative z-10 space-y-6">
              
              {submitStatus === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }} 
                  animate={{ opacity: 1, height: 'auto' }} 
                  className="bg-green-500/10 border border-green-500/50 text-green-400 p-4 rounded-xl flex items-center space-x-3"
                >
                  <FiCheckCircle size={24} />
                  <p>Message sent successfully! We will get back to you soon.</p>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }} 
                  animate={{ opacity: 1, height: 'auto' }} 
                  className="bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded-xl flex items-center space-x-3"
                >
                  <FiXCircle size={24} />
                  <p>Something went wrong. Please try again later or contact us directly.</p>
                </motion.div>
              )}

              <div>
                <label htmlFor="user_name" className="block text-sm font-medium text-text-muted mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  required
                  className="w-full px-5 py-4 bg-surface-dark/50 border border-border-color-hover rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-text-main placeholder-slate-500 transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="user_email" className="block text-sm font-medium text-text-muted mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  required
                  className="w-full px-5 py-4 bg-surface-dark/50 border border-border-color-hover rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-text-main placeholder-slate-500 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-muted mb-2">
                  Project Details
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows="5"
                  className="w-full px-5 py-4 bg-surface-dark/50 border border-border-color-hover rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-text-main placeholder-slate-500 transition-all duration-300 resize-none"
                  placeholder="Tell us about your project, goals, and timeline..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-xl font-bold text-text-main flex items-center justify-center space-x-2 transition-all duration-300 ${
                  isSubmitting 
                  ? 'bg-slate-700 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-primary to-accent hover:shadow-[0_0_30px_rgba(14,165,233,0.4)] hover:-translate-y-1'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <FiLoader className="animate-spin text-xl" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FiSend />
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
