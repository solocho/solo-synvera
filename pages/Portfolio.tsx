import React, { useState } from 'react';
import { PORTFOLIO, TESTIMONIALS, PORTFOLIO_STATS, PROCESS_STEPS } from '../constants';
import { Quote, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(PORTFOLIO.map(p => p.category))];

  const filteredProjects = filter === 'All' 
    ? PORTFOLIO 
    : PORTFOLIO.filter(p => p.category === filter);

  return (
    <div className="fade-in pt-24 pb-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 mb-6">Proven Results</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A showcase of projects where I've helped clients organized their business, save time, and increase productivity.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {PORTFOLIO_STATS.map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm text-center border border-slate-100">
              <p className="text-3xl font-heading font-extrabold text-gold-500 mb-2">{stat.value}</p>
              <p className="text-sm font-semibold text-navy-900 uppercase tracking-wide">{stat.label}</p>
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
                ? 'bg-navy-900 text-white shadow-lg' 
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100">
              <div className="relative h-56 overflow-hidden">
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
                <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors">{project.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="pt-4 border-t border-slate-100">
                  <span className="inline-flex items-center text-xs font-bold text-navy-900 uppercase tracking-wide group-hover:translate-x-1 transition-transform cursor-pointer">
                    View Details <ArrowRight className="ml-1 w-3 h-3 text-gold-500" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process / Methodology Section */}
        <div className="bg-navy-900 text-white rounded-3xl p-8 md:p-16 mb-24 relative overflow-hidden">
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
             <h2 className="text-3xl font-heading font-bold text-navy-900">Client Feedback</h2>
             <div className="w-16 h-1 bg-gold-500 mx-auto rounded-full mt-4"></div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((testimonial) => (
                <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-md border-t-4 border-gold-500 hover:-translate-y-2 transition-transform duration-300">
                   <div className="flex mb-4">
                     {[1,2,3,4,5].map(star => <svg key={star} className="w-4 h-4 text-gold-500 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
                   </div>
                   <Quote className="text-slate-200 w-10 h-10 mb-4" />
                   <p className="text-slate-600 mb-6 text-sm leading-relaxed">"{testimonial.content}"</p>
                   <div className="mt-auto">
                     <h4 className="font-bold text-navy-900 text-lg">{testimonial.name}</h4>
                     <p className="text-xs text-slate-500 uppercase tracking-wide font-medium">{testimonial.role}</p>
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
            <Link to="/contact" className="px-8 py-4 bg-navy-900 text-white font-bold rounded-full hover:bg-white hover:text-navy-900 transition-all duration-300 shadow-lg">
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