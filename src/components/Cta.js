'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone } from 'lucide-react';

const Cta = () => {
  // Animation variants for consistency
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 bg-[#0a0a0c] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Side: Sticky Content */}
          <div className="lg:w-1/2 w-full lg:sticky lg:top-32 h-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
            >
              <h2 className="text-red-600 font-mono text-xs font-bold tracking-[0.4em] uppercase mb-6">
                Contact Us
              </h2>
              <h3 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-8">
                LET'S TALK <br /> 
                <span className="text-white/10 italic">BUSINESS.</span>
              </h3>
              <p className="text-slate-400 text-lg font-light leading-relaxed max-w-md mb-12">
                Have a project in mind? We are ready to help you build it. Send us a message and we will get back to you within 24 hours.
              </p>

              {/* Direct Contact Info */}
              <div className="space-y-6">
                <ContactInfoItem 
                  icon={<Mail size={20} />} 
                  label="Email Us" 
                  value="codeevoque@gmail.com" 
                  href="mailto:codeevoque@gmail.com"
                />
                <ContactInfoItem 
                  icon={<Phone size={20} />} 
                  label="Call Us" 
                  value="+91 7219709493" 
                  href="tel:+917219709493"
                />
              </div>
            </motion.div>
          </div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 w-full"
          >
            <form 
              onSubmit={(e) => e.preventDefault()}
              className="bg-[#111113] border border-white/10 p-8 md:p-12 rounded-[32px] space-y-6 shadow-2xl relative z-10"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-black/40 border border-white/5 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600/20 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-black/40 border border-white/5 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600/20 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Your Message</label>
                <textarea 
                  rows="5"
                  placeholder="Tell us about your project..."
                  className="w-full bg-black/40 border border-white/5 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600/20 transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-red-600 text-white font-black uppercase tracking-widest rounded-xl hover:bg-red-700 transition-all flex items-center justify-center gap-3 active:scale-[0.98] shadow-lg shadow-red-600/20 group"
              >
                Send Message 
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              
              <p className="text-center text-[10px] text-slate-600 uppercase tracking-tighter">
                Secure SSL Encrypted Connection
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

// Internal Sub-component for contact info items
const ContactInfoItem = ({ icon, label, value, href }) => (
  <a href={href} className="flex items-center gap-4 group w-fit">
    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
      {icon}
    </div>
    <div>
      <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest leading-tight">{label}</p>
      <p className="text-white font-medium group-hover:text-red-500 transition-colors">{value}</p>
    </div>
  </a>
);

export default Cta;