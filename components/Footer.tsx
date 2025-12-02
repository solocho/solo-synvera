import React from 'react';
import { SOCIALS, PERSONAL_INFO } from '../constants';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 dark:bg-black text-slate-300 py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
               <span className="font-heading font-bold text-2xl text-white">SOLOMON</span>
               <div className="h-6 w-px bg-slate-700 mx-2"></div>
               <span className="text-xs text-gold-500 font-bold uppercase tracking-widest">Virtual Assistant</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              {PERSONAL_INFO.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-gold-500 transition-colors">About Me</Link></li>
              <li><Link to="/services" className="hover:text-gold-500 transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-gold-500 transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-gold-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
             <h3 className="text-white font-heading font-bold text-lg mb-6">Connect</h3>
             <div className="flex space-x-4 mb-6">
               {SOCIALS.map((social) => (
                 <a 
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all duration-300"
                  aria-label={social.platform}
                 >
                   <social.icon size={18} />
                 </a>
               ))}
             </div>
             <div className="space-y-2">
               <p className="text-sm text-slate-400 hover:text-white transition-colors">
                 <a href={`mailto:${PERSONAL_INFO.email}`}>{PERSONAL_INFO.email}</a>
               </p>
               <p className="text-sm text-slate-400">
                 {PERSONAL_INFO.location}
               </p>
             </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© {currentYear} Solomon Chome Mumba. All rights reserved.</p>
          <div className="mt-2 md:mt-0">
             Professional Virtual Assistance Services
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;