import React from 'react';
import { SERVICES, TECH_STACK, FAQS } from '../constants';
import { Link } from 'react-router-dom';
import { Check, Plus, Minus } from 'lucide-react';

const Services: React.FC = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="fade-in pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 mb-6">Premium Services</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Tailored virtual assistance solutions to help you scale your business and reclaim your time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {SERVICES.map((service) => (
            <div key={service.id} className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-125 duration-500">
                <service.icon size={120} className="text-navy-900" />
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-navy-50 rounded-xl flex items-center justify-center text-navy-900 mb-8 group-hover:bg-navy-900 group-hover:text-white transition-colors duration-300">
                  <service.icon size={32} />
                </div>
                
                <h3 className="text-2xl font-heading font-bold text-navy-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-8">
                   <li className="flex items-center text-sm text-slate-500">
                     <Check className="w-4 h-4 text-gold-500 mr-2" /> Professional Quality
                   </li>
                   <li className="flex items-center text-sm text-slate-500">
                     <Check className="w-4 h-4 text-gold-500 mr-2" /> Timely Delivery
                   </li>
                </ul>

                <Link to="/contact" className="inline-block text-sm font-bold text-gold-600 hover:text-navy-900 tracking-wide border-b-2 border-transparent hover:border-navy-900 transition-all">
                  REQUEST THIS SERVICE
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Tools Section */}
        <div className="mb-24 text-center">
           <h2 className="text-2xl font-heading font-bold text-navy-900 mb-10">Tools I Work With</h2>
           <div className="flex flex-wrap justify-center gap-4">
              {TECH_STACK.map((tool, idx) => (
                <span key={idx} className="px-6 py-3 bg-slate-50 text-slate-600 rounded-full font-medium border border-slate-200 shadow-sm hover:border-gold-500 hover:text-navy-900 transition-colors cursor-default">
                  {tool}
                </span>
              ))}
           </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-navy-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-lg bg-white overflow-hidden">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-slate-50 transition-colors focus:outline-none"
                >
                  <span className="font-bold text-navy-900 text-left">{faq.question}</span>
                  {openFaq === index ? <Minus size={20} className="text-gold-500" /> : <Plus size={20} className="text-slate-400" />}
                </button>
                <div 
                  className={`px-6 transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-48 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
                >
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-navy-900 rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
           <div className="relative z-10">
             <h2 className="text-3xl font-heading font-bold text-white mb-6">Need a custom package?</h2>
             <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
               I understand that every business is unique. Let's discuss your specific needs and create a tailored plan just for you.
             </p>
             <Link to="/contact" className="inline-block px-8 py-3 bg-gold-500 text-white font-bold rounded-full hover:bg-white hover:text-navy-900 transition-colors">
               Get a Custom Quote
             </Link>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Services;