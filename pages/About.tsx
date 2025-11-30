import React from 'react';
import { SKILL_CATEGORIES, CORE_VALUES } from '../constants';
import { BookOpen, User, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="fade-in pt-24 pb-20">
      {/* Bio Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div className="relative order-2 lg:order-1">
             <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-slate-200 shadow-xl">
                <img 
                  src="https://picsum.photos/800/1000?random=20" 
                  alt="Solomon Working" 
                  className="w-full h-full object-cover"
                />
             </div>
             <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white p-6 rounded-lg shadow-xl hidden md:block z-10">
                <div className="h-full border-2 border-gold-500 rounded flex flex-col items-center justify-center text-center">
                  <span className="text-4xl font-heading font-bold text-navy-900">20</span>
                  <span className="text-sm text-slate-500 uppercase tracking-wide">Years Old</span>
                  <span className="w-8 h-1 bg-gold-500 mt-2 mb-2"></span>
                  <span className="text-xs font-bold text-navy-900">Kenyan Talent</span>
                </div>
             </div>
             {/* Decorative dot pattern */}
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-[url('https://www.transparenttextures.com/patterns/dot-pattern.png')] opacity-30 -z-10"></div>
           </div>

           <div className="order-1 lg:order-2">
              <h4 className="text-gold-600 font-bold uppercase tracking-widest text-sm mb-2">About Solomon</h4>
              <h2 className="text-4xl font-heading font-bold text-navy-900 mb-8">Discipline, Tech, and <br/>Efficient Solutions</h2>
              
              <div className="prose prose-lg text-slate-600 mb-8">
                <p>
                  My name is <strong>Solomon Chome Mumba</strong>, a 20-year-old Virtual Assistant from Nairobi, Kenya. 
                  I combine youthful energy with professional discipline to help global clients streamline their operations and scale their businesses.
                </p>
                <p>
                  With a solid educational background in <strong>Business Information Technology</strong> and specialized training from <strong>ALX Africa</strong>, 
                  I bridge the gap between traditional administrative needs and modern technical solutions. I am a problem solver at heart, 
                  dedicated to making your work life simpler, organized, and exponentially more productive.
                </p>
                <p>
                  I don't just follow instructions; I look for ways to optimize. Whether it's automating a repetitive email task or organizing a chaotic calendar, 
                  I treat your business with the same care and attention to detail as my own.
                </p>
              </div>

              <div className="space-y-6">
                 <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-navy-50 rounded-full flex items-center justify-center text-navy-900 mr-4">
                      <BookOpen size={20} />
                    </div>
                    <div>
                      <h5 className="font-bold text-navy-900 text-lg">Education</h5>
                      <ul className="text-sm text-slate-600 mt-1 space-y-1">
                        <li>• Bachelor in Business Information Technology – Cooperative University of Kenya</li>
                        <li>• Virtual Assistant Training – ALX Africa</li>
                      </ul>
                    </div>
                 </div>
                 
                 <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-gold-50 rounded-full flex items-center justify-center text-gold-600 mr-4">
                      <User size={20} />
                    </div>
                    <div>
                      <h5 className="font-bold text-navy-900 text-lg">Personality</h5>
                      <p className="text-sm text-slate-600 mt-1">
                        Disciplined, Organized, Fast Learner, Tech-Savvy, Problem Solver.
                      </p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-navy-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-heading font-bold mb-4">My Core Values</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">The principles that guide my work and professional relationships.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CORE_VALUES.map((value, idx) => (
              <div key={idx} className="bg-white/5 p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center text-navy-900 mb-6">
                  <value.icon size={24} />
                </div>
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-heading font-bold text-navy-900">Technical & Professional Skills</h3>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">A comprehensive toolkit designed to handle your business needs efficiently.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SKILL_CATEGORIES.map((category, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border-t-4 border-gold-500">
                <h4 className="font-bold text-lg text-navy-900 mb-6 flex items-center">
                  <Zap className="w-5 h-5 text-gold-500 mr-2" />
                  {category.title}
                </h4>
                <ul className="space-y-3">
                  {category.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-center text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;