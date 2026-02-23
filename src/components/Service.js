'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Layout, 
  Smartphone, 
  Monitor, 
  Settings, 
  ArrowRight, 
  Shield, 
  Zap 
} from 'lucide-react';

const Services = () => {
  // Animation Variants for performance (reused across elements)
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section className="py-24 md:py-32 bg-[#0a0a0c] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariant}
          className="grid lg:grid-cols-2 gap-8 items-end mb-16 md:mb-20"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[1px] w-8 bg-red-600"></span>
              <span className="text-red-500 font-mono text-xs font-bold tracking-[0.4em] uppercase">
                What We Build
              </span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter uppercase">
              SMART SOFTWARE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900">
                FOR YOUR BUSINESS.
              </span>
            </h2>
          </div>
          <p className="text-slate-500 text-base md:text-lg font-light leading-relaxed border-l border-white/10 pl-8 lg:max-w-md">
            We help you replace slow manual work with fast, automatic software. Simple to use, but powerful enough to grow your business.
          </p>
        </motion.div>

        {/* The Bento-Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          
          {/* 01. CUSTOM ERP (Priority Feature) */}
          <div className="md:col-span-8 bg-[#0d0d0f] p-8 md:p-12 lg:p-16 relative group overflow-hidden">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-8 md:mb-12">
                  <div className="p-4 bg-red-600/10 rounded-xl text-red-500 border border-red-600/20 group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
                    <Settings size={32} />
                  </div>
                  <span className="text-slate-800/40 font-mono text-4xl md:text-6xl font-bold italic">01</span>
                </div>
                <h3 className="text-2xl md:text-5xl font-bold text-white mb-6 tracking-tight uppercase italic leading-tight">
                  Business Management <br className="hidden md:block" /> Systems (ERP)
                </h3>
                <p className="text-slate-400 text-base md:text-lg max-w-md font-light mb-8">
                  One single place to manage your whole business. We build custom tools that track your sales, staff, and tasks automatically.
                </p>
              </div>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-10">
                {['Automatic Daily Reports', 'Easy Staff Tracking', 'Secure Business Data', 'Inventory Control'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-300 font-mono text-[10px] md:text-xs uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full shrink-0" /> {item}
                  </li>
                ))}
              </ul>

              <button className="flex items-center gap-3 text-white font-bold uppercase tracking-tighter group/btn w-fit">
                Talk to an Expert 
                <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform text-red-600" />
              </button>
            </div>
            {/* Subtle Hover Reveal */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </div>

          {/* 02. MOBILE & 03. WEB (Sidebar Grid) */}
          <div className="md:col-span-4 grid grid-rows-2 gap-px">
            <ServiceCard 
              number="02" 
              icon={<Smartphone />} 
              title="Mobile Apps" 
              desc="Custom apps for iPhone and Android. Easy for your customers to use anywhere." 
            />
            <ServiceCard 
              number="03" 
              icon={<Layout />} 
              title="Websites" 
              desc="Modern, fast-loading websites that help you look professional and get more sales." 
              darker 
            />
          </div>

          {/* Bottom Row */}
          <div className="md:col-span-4 bg-[#111113] p-10 group hover:bg-[#161618] transition-colors border-t border-white/5 md:border-t-0">
             <div className="flex justify-between mb-8">
                <Monitor className="text-red-500 group-hover:scale-110 transition-transform" size={28} />
                <span className="text-slate-800/40 font-mono text-2xl font-bold italic">04</span>
             </div>
             <h4 className="text-xl font-bold text-white uppercase mb-3 italic">Desktop Software</h4>
             <p className="text-slate-500 text-sm font-light leading-relaxed">Private software for your office computers that works even without internet.</p>
          </div>

          {/* Trust Value 1 */}
          <div className="md:col-span-4 bg-[#0d0d0f] p-10 border-y md:border-y-0 md:border-x border-white/5 flex items-center gap-6 group hover:bg-[#111113] transition-colors">
            <div className="p-3 bg-red-600/10 rounded-full text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
              <Shield size={32} />
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-tight italic">Data Security</h4>
              <p className="text-slate-500 text-xs">Your business secrets are safe with us.</p>
            </div>
          </div>

          {/* Trust Value 2 */}
          <div className="md:col-span-4 bg-[#111113] p-10 flex items-center gap-6 group hover:bg-[#161618] transition-colors">
            <div className="p-3 bg-red-600/10 rounded-full text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
              <Zap size={32} />
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-tight italic">Fast Support</h4>
              <p className="text-slate-500 text-xs">Local support team here to help 24/7.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// Sub-component for smaller cards to keep code dry and fast
const ServiceCard = ({ number, icon, title, desc, darker = false }) => (
  <div className={`${darker ? 'bg-[#0d0d0f]' : 'bg-[#111113]'} p-8 md:p-10 hover:bg-[#161618] transition-all duration-300 relative group`}>
    <div className="flex justify-between mb-8">
      <div className="text-red-500 group-hover:scale-110 transition-transform duration-300">
        {React.cloneElement(icon, { size: 28 })}
      </div>
      <span className="text-slate-800/40 font-mono text-2xl font-bold italic">{number}</span>
    </div>
    <h4 className="text-xl font-bold text-white uppercase mb-3 italic">{title}</h4>
    <p className="text-slate-500 text-sm font-light leading-relaxed">{desc}</p>
  </div>
);

export default Services;