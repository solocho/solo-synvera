import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 dark:bg-navy-950/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center space-x-2 group">
             <div className="w-10 h-10 bg-navy-900 dark:bg-slate-800 rounded-lg flex items-center justify-center text-gold-500 transition-transform group-hover:scale-110">
                <span className="font-heading font-bold text-xl">S</span>
             </div>
             <div className="flex flex-col">
               <span className={`font-heading font-bold text-lg leading-tight transition-colors ${scrolled ? 'text-navy-900 dark:text-white' : 'text-navy-900 dark:text-white'}`}>SOLOMON</span>
               <span className="text-[0.65rem] tracking-widest uppercase text-gold-600 font-semibold">VA Services</span>
             </div>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => 
                  `text-sm font-medium tracking-wide transition-colors duration-300 hover:text-gold-600 dark:hover:text-gold-500 ${isActive ? 'text-gold-600 dark:text-gold-500' : 'text-slate-600 dark:text-slate-300'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            
            <ThemeToggle />

            <NavLink 
              to="/contact" 
              className="px-6 py-2 bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950 text-sm font-semibold rounded-full hover:bg-gold-500 dark:hover:bg-white hover:text-white dark:hover:text-navy-900 transition-all duration-300 shadow-lg hover:shadow-gold-500/30"
            >
              Hire Me
            </NavLink>
          </div>

          {/* Mobile Buttons */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-navy-900 dark:text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white dark:bg-navy-900 shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => 
                `block px-3 py-3 text-base font-medium transition-colors ${isActive ? 'text-gold-600' : 'text-slate-700 dark:text-slate-300 hover:text-gold-600'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink 
              to="/contact" 
              className="mt-4 px-8 py-3 bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-900 text-sm font-semibold rounded-full hover:bg-gold-500 transition-all w-full text-center"
            >
              Hire Me
            </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;