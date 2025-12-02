import React, { useState } from 'react';
import { SOCIALS, PERSONAL_INFO } from '../constants';
import { Send, MapPin, Phone, Mail, CheckCircle, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp Message
    const whatsappMessage = `*New Inquiry from Website Portfolio*\n\n*Name:* ${formState.name}\n*Email:* ${formState.email}\n\n*Message:*\n${formState.message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const phoneNumber = PERSONAL_INFO.phone.replace(/[^0-9]/g, ''); // Remove spaces and special chars

    // Open WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');

    setStatus('success');
    setFormState({ name: '', email: '', message: '' });
    
    // Reset status after a delay
    setTimeout(() => {
      setStatus('idle');
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <div className="fade-in pt-24 pb-20 bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
           <h1 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 dark:text-white mb-6">Let's Connect</h1>
           <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
             Ready to streamline your workflow? Reach out via the form below or through my social channels.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden">
           
           {/* Contact Info Side */}
           <div className="bg-navy-900 dark:bg-black p-12 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-8 font-heading">Contact Information</h3>
                <div className="space-y-8">
                   <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gold-500">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm uppercase font-semibold mb-1">Phone / WhatsApp</p>
                        <p className="text-lg font-medium hover:text-gold-500 transition-colors">
                          <a href={`https://wa.me/${PERSONAL_INFO.phone.replace(/[^0-9]/g, '')}`}>{PERSONAL_INFO.phone}</a>
                        </p>
                      </div>
                   </div>

                   <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gold-500">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm uppercase font-semibold mb-1">Email</p>
                        <p className="text-lg font-medium hover:text-gold-500 transition-colors">
                           <a href={`mailto:${PERSONAL_INFO.email}`}>{PERSONAL_INFO.email}</a>
                        </p>
                      </div>
                   </div>

                   <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gold-500">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm uppercase font-semibold mb-1">Location</p>
                        <p className="text-lg font-medium">{PERSONAL_INFO.location}</p>
                      </div>
                   </div>
                </div>
              </div>

              <div className="mt-12">
                 <p className="text-slate-400 text-sm uppercase font-semibold mb-4">Follow Me</p>
                 <div className="flex space-x-4">
                    {SOCIALS.map((social) => (
                      <a 
                        key={social.platform} 
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 hover:text-white transition-all"
                      >
                         <social.icon size={18} />
                      </a>
                    ))}
                 </div>
              </div>
           </div>

           {/* Form Side */}
           <div className="p-12">
              <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-6 font-heading">Send a Message via WhatsApp</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-8 text-sm">
                Fill out the form below and it will automatically open WhatsApp with your pre-filled message ready to send.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                 <div>
                   <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Name</label>
                   <input 
                     type="text" 
                     id="name"
                     name="name"
                     value={formState.name}
                     onChange={handleChange}
                     className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500"
                     placeholder="John Doe"
                     required
                   />
                 </div>
                 <div>
                   <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                   <input 
                     type="email" 
                     id="email"
                     name="email"
                     value={formState.email}
                     onChange={handleChange}
                     className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500"
                     placeholder="john@example.com"
                     required
                   />
                 </div>
                 <div>
                   <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                   <textarea 
                     id="message"
                     name="message"
                     value={formState.message}
                     onChange={handleChange}
                     rows={5}
                     className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all resize-none placeholder-slate-400 dark:placeholder-slate-500"
                     placeholder="How can I help you?"
                     required
                   ></textarea>
                 </div>
                 <button 
                   type="submit" 
                   className={`w-full py-4 rounded-lg font-bold text-white flex items-center justify-center transition-all duration-300 ${
                     status === 'success' 
                       ? 'bg-green-600' 
                       : 'bg-[#25D366] hover:bg-[#128C7E]'
                   }`}
                 >
                   {status === 'success' ? (
                     <>
                       <CheckCircle size={18} className="mr-2" />
                       WhatsApp Opened!
                     </>
                   ) : (
                     <>
                       Send to WhatsApp
                       <MessageCircle size={18} className="ml-2" />
                     </>
                   )}
                 </button>
              </form>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;