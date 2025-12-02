import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Download, Clock, Zap, Users } from 'lucide-react';
import { SERVICES, PROCESS_STEPS, PERSONAL_INFO, IMAGES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-slate-950 dark:via-navy-900 dark:to-slate-900 overflow-hidden transition-colors duration-300">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-100/50 dark:bg-slate-800/20 skew-x-12 translate-x-32 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-400/5 dark:bg-gold-500/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-navy-50 dark:bg-slate-800 rounded-full border border-navy-100 dark:border-slate-700">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-semibold text-navy-800 dark:text-slate-200 uppercase tracking-wider">Available for new projects</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-navy-900 dark:text-white leading-tight">
              World-Class Virtual Assistant & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-600 to-gold-400">
                Digital Support Specialist
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed">
              Helping individuals, businesses, and organizations work smarter through efficient, reliable, and tech-powered virtual assistance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-900 font-bold rounded-lg hover:bg-gold-500 dark:hover:bg-white transition-all duration-300 shadow-lg hover:shadow-gold-500/25 group">
                Hire Me
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href={PERSONAL_INFO.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-200 dark:border-slate-700 text-navy-900 dark:text-white font-bold rounded-lg hover:border-navy-900 dark:hover:border-gold-500 transition-all duration-300 cursor-pointer"
                download="Solomon_Chome_Resume.pdf"
              >
                Download Resume
                <Download className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="relative">
             <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                <img 
                  src={IMAGES.hero}
                  alt="Solomon Chome Mumba" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-900/90 to-transparent p-8">
                  <p className="text-white font-heading font-bold text-xl">Solomon Chome Mumba</p>
                  <p className="text-gold-400 text-sm">Virtual Assistant • Kenya</p>
                </div>
             </div>
             {/* Decorative Elements */}
             <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold-400 rounded-lg -z-0 opacity-20"></div>
             <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-navy-900 dark:border-slate-500 rounded-full -z-0 opacity-10"></div>
          </div>
        </div>
      </section>

      {/* Stats / Impact Section */}
      <section className="py-12 bg-white dark:bg-navy-950 border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100 dark:divide-slate-800">
            <div>
              <p className="text-3xl font-heading font-bold text-navy-900 dark:text-white">100%</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wide mt-2">Client Satisfaction</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-bold text-navy-900 dark:text-white">20+</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wide mt-2">Projects Completed</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-bold text-navy-900 dark:text-white">24/7</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wide mt-2">Adaptability</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-bold text-navy-900 dark:text-white">500+</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wide mt-2">Hours Saved</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Preview */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-navy-900 dark:text-white mb-4">How I Can Help You</h2>
            <div className="w-20 h-1 bg-gold-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-slate-600 dark:text-slate-400">Streamlining your business operations with precision and care.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.slice(0, 4).map((service) => (
              <div key={service.id} className="p-8 rounded-xl bg-white dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-700 hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 group">
                <div className="w-14 h-14 bg-slate-50 dark:bg-slate-700 rounded-lg flex items-center justify-center text-navy-900 dark:text-white mb-6 shadow-sm group-hover:bg-gold-500 group-hover:text-white transition-colors">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center px-6 py-3 border border-navy-900 dark:border-gold-500 text-navy-900 dark:text-gold-500 font-semibold rounded-full hover:bg-navy-900 dark:hover:bg-gold-500 hover:text-white dark:hover:text-navy-900 transition-all duration-300">
              View All Services <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white dark:bg-navy-950 relative overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h4 className="text-gold-600 font-bold uppercase tracking-widest text-sm mb-2">My Workflow</h4>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 dark:text-white mb-6">A Simple Process for <br/>Maximum Efficiency</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-8 text-lg">
                I don't just complete tasks; I implement systems. My four-step process ensures clear communication and exceptional results from day one.
              </p>
              <div className="space-y-8">
                {PROCESS_STEPS.map((step, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 rounded-full bg-navy-50 dark:bg-slate-800 flex items-center justify-center text-gold-600 font-bold text-xl border border-navy-100 dark:border-slate-700">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-navy-900 dark:text-white mb-1">{step.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gold-500 rounded-3xl transform rotate-3 opacity-10"></div>
              <img 
                src={IMAGES.process} 
                alt="Workflow Process" 
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me Strip */}
      <section className="py-20 bg-navy-900 dark:bg-black text-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
             <div className="p-6 border border-white/10 rounded-xl hover:bg-white/5 transition-colors">
                <div className="text-gold-500 mb-4 flex justify-center"><Clock size={40} /></div>
                <h3 className="text-xl font-bold mb-2">Reliable & Efficient</h3>
                <p className="text-slate-400 text-sm">Consistently delivering high-quality work within deadlines, every time.</p>
             </div>
             <div className="p-6 border border-white/10 rounded-xl hover:bg-white/5 transition-colors">
                <div className="text-gold-500 mb-4 flex justify-center"><Zap size={40} /></div>
                <h3 className="text-xl font-bold mb-2">Tech-Savvy</h3>
                <p className="text-slate-400 text-sm">Proficient in the latest productivity tools to automate and optimize your workflow.</p>
             </div>
             <div className="p-6 border border-white/10 rounded-xl hover:bg-white/5 transition-colors">
                <div className="text-gold-500 mb-4 flex justify-center"><Users size={40} /></div>
                <h3 className="text-xl font-bold mb-2">Client-Centric</h3>
                <p className="text-slate-400 text-sm">Your goals become my goals. I am dedicated to seeing your business thrive.</p>
             </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-slate-50 to-white dark:from-slate-900 dark:to-navy-950 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 dark:text-white mb-6">Ready to Reclaim Your Time?</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10">
            Let's discuss how I can take the administrative burden off your shoulders so you can focus on growing your business.
          </p>
          <Link to="/contact" className="inline-block px-10 py-4 bg-gold-500 text-white font-bold rounded-full shadow-lg hover:bg-navy-900 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Schedule a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;