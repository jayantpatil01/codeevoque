'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  MessageSquare,
  BarChart3,
  Globe2,
  Clock,
  TrendingUp,
  ShieldCheck,
  Zap,
  Star
} from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#0a0a0c] overflow-hidden flex items-center pt-28 md:pt-20 pb-12">      
      {/* 1. Background Effects - Lower z-index to stay behind Navbar */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[80%] md:w-[50%] h-[50%] bg-red-600/5 rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[50%] md:w-[30%] h-[30%] bg-slate-800/10 rounded-full blur-[80px] md:blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* 2. Left Column: Business Value */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <div className="flex justify-center lg:justify-start items-center gap-2 mb-6">
            <span className="px-3 py-1 rounded-full bg-red-600/10 text-red-500 text-[10px] font-bold tracking-widest uppercase border border-red-600/20">
              Trusted Technology Partner
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6 md:mb-8">
            WE BUILD TOOLS <br />
            THAT <span className="text-red-600">SCALE</span> YOUR <br className="hidden sm:block" />
            BUSINESS.
          </h1>

          <p className="text-slate-400 text-base md:text-xl max-w-lg mx-auto lg:mx-0 mb-8 md:mb-10 leading-relaxed">
            Stop struggling with outdated systems. We create <span className="text-white font-medium">custom software</span> and <span className="text-white font-medium">AI solutions</span> designed to automate your work and increase your revenue.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center lg:justify-start">
            <button className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-red-600 text-white font-bold rounded-sm transition-all hover:bg-red-700 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 shadow-lg shadow-red-600/20">
              GET A FREE PROPOSAL <ChevronRight size={20} />
            </button>
            
            <button className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-white/5 text-white font-bold border border-white/10 rounded-sm hover:bg-white/10 transition-all flex items-center justify-center gap-3"> 
              <MessageSquare size={18} className="text-red-500" /> 
              VIEW OUR WORK 
            </button>
          </div>

          {/* 3. Mobile-Only Feature: Best in Mobile View Only */}
          <div className="lg:hidden grid grid-cols-3 gap-3 mt-12">
            <div className="flex flex-col items-center p-4 bg-white/5 rounded-xl border border-white/10">
              <Zap size={20} className="text-red-500 mb-2" />
              <span className="text-[10px] text-white font-bold uppercase tracking-widest">Speed</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/5 rounded-xl border border-white/10">
              <ShieldCheck size={20} className="text-red-500 mb-2" />
              <span className="text-[10px] text-white font-bold uppercase tracking-widest">Security</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/5 rounded-xl border border-white/10">
              <Star size={20} className="text-red-500 mb-2" />
              <span className="text-[10px] text-white font-bold uppercase tracking-widest">Quality</span>
            </div>
          </div>
        </motion.div>

        {/* 4. Right Column: Business Impact Visual (Desktop Only) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block" 
        >
          <div className="relative bg-[#111114] border border-white/10 rounded-2xl p-8 shadow-2xl overflow-hidden">
            {/* Dashboard Header */}
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-white font-bold flex items-center gap-2">
                <TrendingUp size={18} className="text-red-500" /> Business Performance
              </h3>
              <div className="px-3 py-1 bg-green-500/10 text-green-500 text-[10px] font-bold rounded-full">
                LIVE UPDATES
              </div>
            </div>

            {/* Benefit Cards */}
            <div className="space-y-4">
              {[
                { icon: <Clock size={22} />, title: "Automated Operations", desc: "Saving teams 20+ hours every week." },
                { icon: <BarChart3 size={22} />, title: "Smart Data Insights", desc: "Make decisions based on real-time facts." },
                { icon: <Globe2 size={22} />, title: "Global Scalability", desc: "Built to handle millions of customers." }
              ].map((card, idx) => (
                <div key={idx} className="bg-white/5 p-5 rounded-xl border border-white/10 flex items-center gap-5 group hover:bg-white/[0.08] transition-colors">
                  <div className="p-3 bg-red-600/20 rounded-lg text-red-500 shrink-0">
                    {card.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{card.title}</h4>
                    <p className="text-sm text-slate-500">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Proof Bar */}
            <div className="mt-8 flex justify-around text-center border-t border-white/5 pt-6">
              <div>
                <p className="text-2xl font-black text-white">99%</p>
                <p className="text-[10px] text-slate-500 uppercase">Reliability</p>
              </div>
              <div>
                <p className="text-2xl font-black text-white">24/7</p>
                <p className="text-[10px] text-slate-500 uppercase">Support</p>
              </div>
              <div>
                <p className="text-2xl font-black text-white">Fast</p>
                <p className="text-[10px] text-slate-500 uppercase">Delivery</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;