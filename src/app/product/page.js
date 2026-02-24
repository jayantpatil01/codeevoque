'use client';

import React, { useState } from 'react';
import { 
  Database, Smartphone, Globe, ArrowRight, Zap, Sparkles, 
  Cpu, ChevronDown, LayoutDashboard, Monitor, CheckCircle2
} from 'lucide-react';

const PRODUCTS = [
  {
    id: 1,
    title: "Generative AI Tools",
    desc: "We build custom AI 'brains' that handle your writing, customer support, or data analysis automatically.",
    icon: <Sparkles size={24} />,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    tag: "AI Intelligence",
    howItWorks: [
      "We integrate smart AI models into your workflow.",
      "The tool learns your specific business style.",
      "It handles complex tasks in seconds, not hours."
    ]
  },
  {
    id: 2,
    title: "Custom ERP & CRM",
    desc: "One central dashboard to manage your entire business—logistics, staff, sales, and customers in one place.",
    icon: <LayoutDashboard size={24} />,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    tag: "Business Control",
    howItWorks: [
      "We map out your current messy spreadsheets.",
      "We build a secure, private hub for your team.",
      "You track every lead and order in real-time."
    ]
  },
  {
    id: 3,
    title: "Mobile Applications",
    desc: "High-performance apps for iPhone and Android. Designed to give your customers the best experience on the go.",
    icon: <Smartphone size={24} />,
    color: "text-green-500",
    bg: "bg-green-500/10",
    tag: "iOS & Android",
    howItWorks: [
      "We design an easy-to-use interface.",
      "We build for both Apple and Google platforms.",
      "We manage the full App Store publishing process."
    ]
  },
  {
    id: 4,
    title: "Desktop Applications",
    desc: "Powerful software for Windows and Mac. Perfect for heavy office work and secure internal management.",
    icon: <Monitor size={24} />,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    tag: "Windows & Mac",
    howItWorks: [
      "Optimized for high-speed local performance.",
      "Works seamlessly with your office hardware.",
      "Built-in security for sensitive company data."
    ]
  },
  {
    id: 5,
    title: "Custom Websites",
    desc: "Premium, ultra-fast websites built to grow your brand and turn simple visitors into loyal clients.",
    icon: <Globe size={24} />,
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
    tag: "High Growth",
    howItWorks: [
      "Custom design that beats your competition.",
      "Optimized to load instantly on slow networks.",
      "Advanced SEO so you show up first on Google."
    ]
  },
  {
    id: 6,
    title: "Automation Scripts",
    desc: "We create 'robots' that handle your boring tasks like data entry, email sorting, and file management.",
    icon: <Zap size={24} />,
    color: "text-red-600",
    bg: "bg-red-600/10",
    tag: "Save Hours",
    howItWorks: [
      "We find the 'busy work' slowing you down.",
      "We write a script to handle it 24/7.",
      "Your team focuses on growth, not paperwork."
    ]
  }
];

const Page = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="bg-[#0a0a0c] min-h-screen pt-24 pb-20 selection:bg-red-600 selection:text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="flex items-center gap-2 mb-4">
             <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
             <span className="text-red-600 font-mono text-[10px] font-bold tracking-[0.3em] uppercase">Engineering Success</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-6">
            WHAT WE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">SERVE.</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed">
            We build custom tools, apps, and AI systems that power modern businesses. 
            High-end engineering explained in simple language.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {PRODUCTS.map((product) => {
            const isExpanded = expandedId === product.id;
            
            return (
              <div 
                key={product.id} 
                className={`group bg-[#111113] border transition-all duration-500 overflow-hidden rounded-[32px] ${
                  isExpanded ? 'border-red-600/50 shadow-[0_0_30px_rgba(220,38,38,0.1)]' : 'border-white/5 hover:border-white/20'
                }`}
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-8">
                    <div className={`w-12 h-12 rounded-2xl ${product.bg} ${product.color} flex items-center justify-center transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white`}>
                      {product.icon}
                    </div>
                    <span className="text-[8px] font-bold text-slate-500 border border-white/10 px-2 py-1 rounded-md uppercase tracking-widest">
                      {product.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 uppercase italic tracking-tight leading-none">
                    {product.title}
                  </h3>
                  <p className="text-slate-500 font-light text-sm leading-relaxed mb-6">
                    {product.desc}
                  </p>

                  {/* Expand Button */}
                  <button 
                    onClick={() => toggleExpand(product.id)}
                    className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest transition-all ${
                      isExpanded ? 'text-red-600' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {isExpanded ? 'Close Process' : 'See How It Works'}
                    <ChevronDown size={14} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                {/* Animated Drawer Section */}
                <div 
                  className={`transition-all duration-500 ease-in-out bg-white/[0.02] border-t border-white/5 ${
                    isExpanded ? 'max-h-[400px] opacity-100 p-8' : 'max-h-0 opacity-0 p-0 overflow-hidden border-none'
                  }`}
                >
                  <p className="text-red-600 text-[9px] uppercase tracking-[0.3em] font-black mb-6">The Roadmap</p>
                  <div className="space-y-5">
                    {product.howItWorks.map((step, idx) => (
                      <div key={idx} className="flex gap-4 items-start">
                        <div className="h-5 w-5 rounded bg-red-600/10 border border-red-600/20 flex items-center justify-center shrink-0 mt-0.5">
                           <span className="text-[10px] font-bold text-red-600">{idx + 1}</span>
                        </div>
                        <p className="text-slate-300 text-sm font-medium leading-snug">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  <button className="mt-8 w-full py-3 bg-red-600 text-white font-black uppercase text-[10px] tracking-widest rounded-xl hover:bg-red-700 transition-all active:scale-95">
                    Start Project
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-20 p-8 md:p-16 bg-white/[0.02] border border-white/5 rounded-[40px] flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent" />
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6">
            READY TO LEVEL UP?
          </h2>
          <button className="px-12 py-5 bg-red-600 text-white font-black uppercase tracking-widest rounded-full hover:bg-red-700 transition-colors shadow-[0_0_30px_rgba(220,38,38,0.2)]">
            Talk to an Expert
          </button>
        </div>

      </div>
    </div>
  );
};

export default Page;