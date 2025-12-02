import React, { useState, useEffect } from 'react';
import { PORTFOLIO, TESTIMONIALS, PORTFOLIO_STATS, PROCESS_STEPS } from '../constants';
import { Quote, ArrowRight, X, CheckCircle2, AlertCircle, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Project } from '../types';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const categories = ['All', ...new Set(PORTFOLIO.map(p => p.category))];

  const filteredProjects = filter === 'All' 
    ? PORTFOLIO 
    : PORTFOLIO.filter(p => p.category === filter);

  // Close modal on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <div className="fade-in pt-24 pb-20 bg-gray-50/50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 dark:text-white mb-6">Proven Results</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A showcase of projects where I've helped clients organized their business, save time, and increase productivity.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {PORTFOLIO_STATS.map((stat, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm text-center border border-slate-100 dark:border-slate-700">
              <p className="text-3xl font-heading font-extrabold text-gold-500 mb-2">{stat.value}</p>
              <p className="text-sm font-semibold text-navy-900 dark:text-slate-200 uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === cat 
                ? 'bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-900 shadow-lg' 
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group flex flex-col h-full bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-slate-700">
              <div className="relative h-56 overflow-hidden cursor-pointer" onClick={() => setSelectedProject(project)}>
                <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-navy-900/0 transition-colors z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4 z-20">
                   <span className="px-3 py-1 bg-white/95 backdrop-blur text-navy-900 text-xs font-bold uppercase rounded shadow-sm tracking-wider">
                     {project.category}
                   </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3 group-hover:text-gold-600 dark:group-hover:text-gold-500 transition-colors cursor-pointer" onClick={() => setSelectedProject(project)}>
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="pt-4 border-t border-slate-100 dark:border-slate-700">
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center text-xs font-bold text-navy-900 dark:text-gold-500 uppercase tracking-wide group-hover:translate-x-1 transition-transform cursor-pointer focus:outline-none"
                  >
                    View Details <ArrowRight className="ml-1 w-3 h-3 text-gold-500" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" aria-modal="true" role="dialog">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-navy-900/80 backdrop-blur-sm transition-opacity" 
              onClick={() => setSelectedProject(null)}
            ></div>
            
            {/* Modal Content */}
            <div className="relative bg-white dark:bg-slate-900 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col md:flex-row animate-[fadeIn_0.3s_ease-out]">
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-white/80 dark:bg-slate-800/80 rounded-full hover:bg-white dark:hover:bg-slate-700 text-navy-900 dark:text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              {/* Image Side */}
              <div className="md:w-2/5 h-64 md:h-auto relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-navy-900/10"></div>
                <div className="absolute bottom-6 left-6 z-10">
                   <span className="px-3 py-1 bg-gold-500 text-white text-xs font-bold uppercase rounded shadow-md tracking-wider">
                     {selectedProject.category}
                   </span>
                </div>
              </div>

              {/* Text Side */}
              <div className="md:w-3/5 p-8 md:p-10">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-navy-900 dark:text-white mb-4">{selectedProject.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-8 italic text-lg leading-relaxed border-l-4 border-gold-500 pl-4 bg-slate-50 dark:bg-slate-800 py-2">
                  "{selectedProject.description}"
                </p>

                <div className="space-y-6">
                  {selectedProject.challenge && (
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4 mt-1">
                        <AlertCircle className="text-red-500 w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-navy-900 dark:text-white uppercase text-xs tracking-wider mb-1">The Challenge</h4>
                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{selectedProject.challenge}</p>
                      </div>
                    </div>
                  )}

                  {selectedProject.solution && (
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4 mt-1">
                        <Lightbulb className="text-gold-500 w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-navy-900 dark:text-white uppercase text-xs tracking-wider mb-1">The Solution</h4>
                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{selectedProject.solution}</p>
                      </div>
                    </div>
                  )}

                  {selectedProject.result && (
                    <div className="flex items-start bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-100 dark:border-green-800">
                      <div className="flex-shrink-0 mr-4 mt-1">
                        <CheckCircle2 className="text-green-600 dark:text-green-400 w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-navy-900 dark:text-white uppercase text-xs tracking-wider mb-1">The Result</h4>
                        <p className="text-slate-700 dark:text-slate-200 text-sm leading-relaxed font-medium">{selectedProject.result}</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-10 pt-6 border-t border-slate-100 dark:border-slate-700 flex justify-end">
                   <Link 
                     to="/contact" 
                     className="inline-flex items-center px-6 py-3 bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-900 font-bold rounded-lg hover:bg-gold-500 dark:hover:bg-white transition-colors shadow-lg"
                   >
                     Hire Me for Similar Work <ArrowRight className="ml-2 w-4 h-4" />
                   </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Process / Methodology Section */}
        <div className="bg-navy-900 dark:bg-black text-white rounded-3xl p-8 md:p-16 mb-24 relative overflow-hidden transition-colors duration-300">
           {/* Decorative Background Elements */}
           <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500 rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-10 pointer-events-none"></div>
           
           <div className="relative z-10 text-center mb-16">
             <h2 className="text-3xl font-heading font-bold mb-6">How I Approach Every Project</h2>
             <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
               I follow a proven four-step framework to ensure every project is executed with precision, transparency, and maximum impact.
             </p>
           </div>

           <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {PROCESS_STEPS.map((step, index) => (
               <div key={index} className="relative group">
                 <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300">
                   {/* Step Number */}
                   <div className="absolute -top-4 -right-4 w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center text-navy-900 font-bold shadow-lg text-lg transform group-hover:scale-110 transition-transform">
                     {index + 1}
                   </div>
                   
                   {/* Icon */}
                   <div className="w-14 h-14 bg-navy-800 rounded-lg flex items-center justify-center text-gold-500 mb-6 shadow-inner group-hover:text-white transition-colors">
                     <step.icon size={28} />
                   </div>
                   
                   <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                   <p className="text-slate-400 text-sm leading-relaxed border-t border-white/10 pt-4 mt-4">
                     {step.description}
                   </p>
                 </div>
                 
                 {/* Connector Line (Desktop Only, except last item) */}
                 {index < PROCESS_STEPS.length - 1 && (
                   <div className="hidden lg:block absolute top-1/2 -right-6 w-4 h-0.5 bg-white/20 z-0"></div>
                 )}
               </div>
             ))}
           </div>
        </div>

        {/* Testimonials */}
        <div className="mb-24">
           <div className="text-center mb-12">
             <h2 className="text-3xl font-heading font-bold text-navy-900 dark:text-white">Client Feedback</h2>
             <div className="w-16 h-1 bg-gold-500 mx-auto rounded-full mt-4"></div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((testimonial) => (
                <div key={testimonial.id} className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md border-t-4 border-gold-500 hover:-translate-y-2 transition-transform duration-300">
                   <div className="flex mb-4">
                     {[1,2,3,4,5].map(star => <svg key={star} className="w-4 h-4 text-gold-500 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
                   </div>
                   <Quote className="text-slate-200 dark:text-slate-600 w-10 h-10 mb-4" />
                   <p className="text-slate-600 dark:text-slate-300 mb-6 text-sm leading-relaxed">"{testimonial.content}"</p>
                   <div className="mt-auto">
                     <h4 className="font-bold text-navy-900 dark:text-white text-lg">{testimonial.name}</h4>
                     <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide font-medium">{testimonial.role}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl p-10 md:p-16 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">Ready to be the next success story?</h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
            Whether you need a one-off project or ongoing support, I'm ready to help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="px-8 py-4 bg-navy-900 dark:bg-black text-white font-bold rounded-full hover:bg-white hover:text-navy-900 transition-all duration-300 shadow-lg">
              Start a Project
            </Link>
            <Link to="/services" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-gold-600 transition-all duration-300">
              View Services
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Portfolio;