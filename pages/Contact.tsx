import React, { useState } from 'react';
import { SOCIALS, PERSONAL_INFO, EMAIL_CONFIG } from '../constants';
import { Send, MapPin, Phone, Mail, Loader2, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Check if keys are configured
      if (EMAIL_CONFIG.SERVICE_ID === "YOUR_SERVICE_ID") {
         throw new Error("Configuration Error: Please update EMAIL_CONFIG in constants.tsx with your actual EmailJS keys.");
      }

      await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        {
          from_name: formState.name,
          from_email: formState.email,
          message: formState.message,
          to_name: PERSONAL_INFO.name,
        },
        EMAIL_CONFIG.PUBLIC_KEY
      );

      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      
      // Reset status after a delay
      setTimeout(() => {
        setStatus('idle');
      }, 5000);

    } catch (error) {
      console.error("EmailJS Error:", error);
      alert(error instanceof Error ? error.message : "Failed to send message. Please try again later or email me directly.");
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <div className="fade-in pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
           <h1 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 mb-6">Let's Connect</h1>
           <p className="text-xl text-slate-600 max-w-2xl mx-auto">
             Ready to streamline your workflow? Reach out via the form below or through my social channels.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">
           
           {/* Contact Info Side */}
           <div className="bg-navy-900 p-12 text-white flex flex-col justify-between">
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
              <h3 className="text-2xl font-bold text-navy-900 mb-6 font-heading">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                 <div>
                   <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                   <input 
                     type="text" 
                     id="name"
                     name="name"
                     value={formState.name}
                     onChange={handleChange}
                     className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all"
                     placeholder="John Doe"
                     required
                     disabled={status === 'sending' || status === 'success'}
                   />
                 </div>
                 <div>
                   <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                   <input 
                     type="email" 
                     id="email"
                     name="email"
                     value={formState.email}
                     onChange={handleChange}
                     className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all"
                     placeholder="john@example.com"
                     required
                     disabled={status === 'sending' || status === 'success'}
                   />
                 </div>
                 <div>
                   <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                   <textarea 
                     id="message"
                     name="message"
                     value={formState.message}
                     onChange={handleChange}
                     rows={5}
                     className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all resize-none"
                     placeholder="How can I help you?"
                     required
                     disabled={status === 'sending' || status === 'success'}
                   ></textarea>
                 </div>
                 <button 
                   type="submit" 
                   disabled={status === 'sending' || status === 'success'}
                   className={`w-full py-4 rounded-lg font-bold text-white flex items-center justify-center transition-all duration-300 ${
                     status === 'success' 
                       ? 'bg-green-600' 
                       : status === 'sending' 
                         ? 'bg-navy-800 cursor-wait' 
                         : 'bg-navy-900 hover:bg-gold-500'
                   }`}
                 >
                   {status === 'sending' && (
                     <>
                       <Loader2 size={18} className="mr-2 animate-spin" />
                       Sending...
                     </>
                   )}
                   {status === 'success' && (
                     <>
                       <CheckCircle size={18} className="mr-2" />
                       Message Sent!
                     </>
                   )}
                   {status === 'idle' && (
                     <>
                       Send Message
                       <Send size={18} className="ml-2" />
                     </>
                   )}
                    {status === 'error' && (
                     <>
                       Try Again
                       <Send size={18} className="ml-2" />
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