import { FaWhatsapp, FaYoutube, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-bg-dark border-t border-border-color pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* Brand Info */}
          <div className="space-y-4 sm:text-left text-center flex flex-col items-center sm:items-start">
            <Link to="home" smooth={true} duration={500} className="inline-block cursor-pointer">
              <img 
                src="https://i.postimg.cc/85WMrz6d/Whats-App-Image-2026-03-11-at-11-47-41.jpg" 
                alt="Ceylon IT Solutions Logo" 
                className="h-12 md:h-14 lg:h-16 w-auto rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
              Building Modern Websites for Growing Businesses. Professional web development and digital solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="sm:text-left text-center">
            <h4 className="text-text-main font-semibold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    className="text-text-muted hover:text-accent cursor-pointer transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="sm:text-left text-center">
            <h4 className="text-text-main font-semibold mb-4 uppercase tracking-wider text-sm">Connect</h4>
            <div className="flex space-x-4 -ml-2 justify-center sm:justify-start">
              <a
                href="https://youtube.com/@ceylonitsolution-x4o?si=FUMhWzbvPVLAjAVR"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-text-main hover:bg-[#FF0000] hover:text-white transition-all duration-300"
                aria-label="Ceylon IT Solutions on YouTube"
              >
                <FaYoutube size={20} />
              </a>
              <a
                href="https://wa.me/94724816258"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-text-main hover:bg-[#25D366] hover:text-white transition-all duration-300"
                aria-label="Contact us on WhatsApp"
              >
                <FaWhatsapp size={20} />
              </a>
              <div 
                className="relative group w-10 h-10 rounded-full bg-surface flex items-center justify-center text-text-muted cursor-not-allowed"
                aria-label="LinkedIn (Coming Soon)"
                role="button"
                tabIndex="0"
              >
                <FaLinkedin size={20} />
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-bg-dark text-xs text-text-main px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 shadow-lg border border-border-color">
                  Coming Soon
                </span>
              </div>
              <a
                href="https://www.facebook.com/share/1TLA8MJGBa/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-text-main hover:bg-[#1877F2] hover:text-white transition-all duration-300"
                aria-label="Ceylon IT Solutions on Facebook"
              >
                <FaFacebook size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="sm:text-left text-center">
            <h4 className="text-text-main font-semibold mb-4 uppercase tracking-wider text-sm">Contact Info</h4>
            <ul className="space-y-2 text-sm text-text-muted">
              <li>Email: ceylonitsolutionlk@gmail.com</li>
              <li>Phone: +94 72 481 6258</li>
              <li>Sri Lanka</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border-color mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-text-muted">
          <p>&copy; 2026 Ceylon IT Solutions. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <span className="hover:text-text-main cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-text-main cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
