'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  PenTool, 
  CheckCircle, 
  Rocket, 
  Shield, 
  Zap, 
  TrendingUp 
} from 'lucide-react';

const SuccessPath = () => {
  const roadmap = [
    {
      id: "01",
      title: "The Plan",
      desc: "We talk about your idea and create a clear map for the project.",
      value: "Safe & Secure",
      icon: Search,
      valueIcon: Shield
    },
    {
      id: "02",
      title: "The Build",
      desc: "Our team turns the plan into real, working software.",
      value: "Very Fast",
      icon: PenTool,
      valueIcon: Zap
    },
    {
      id: "03",
      title: "The Check",
      desc: "We test everything to make sure it works perfectly for you.",
      value: "Built to Grow",
      icon: CheckCircle,
      valueIcon: TrendingUp
    },
    {
      id: "04",
      title: "The Launch",
      desc: "We go live and stay with you to help your business run smoothly.",
      value: "Always Here",
      icon: Rocket,
      valueIcon: CheckCircle
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#0a0a0c] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 text-center lg:text-left"
        >
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
             <span className="h-[1px] w-8 bg-red-600"></span>
             <h2 className="text-red-600 font-mono text-xs font-bold tracking-[0.4em] uppercase">
                Our Simple Step-by-Step
             </h2>
          </div>
          <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-tight">
            HOW WE TAKE YOU <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
                FROM IDEA TO REALITY.
            </span>
          </h3>
        </motion.div>

        {/* Timeline Component */}
        <div className="relative">
          {/* Horizontal Connecting Line (Visible only on Desktop) */}
          <div className="hidden lg:block absolute top-[28px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {roadmap.map((item, index) => {
              const Icon = item.icon;
              const ValueIcon = item.valueIcon;

              return (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="group"
                >
                  {/* Step Number with Pulse Effect */}
                  <div className="mb-8 flex justify-center lg:justify-start">
                    <div className="w-14 h-14 rounded-full bg-[#0d0d0f] border-2 border-white/10 flex items-center justify-center text-white group-hover:border-red-600 group-hover:shadow-[0_0_20px_rgba(220,38,38,0.3)] transition-all duration-500 relative">
                      <span className="text-lg font-black italic relative z-10">{item.id}</span>
                      
                      {/* Pulse Ring - GPU Optimized */}
                      <div className="absolute inset-0 rounded-full bg-red-600/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="h-full bg-white/[0.02] border border-white/5 p-8 rounded-2xl hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500 flex flex-col">
                    <div className="text-red-500 mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                      <Icon size={32} strokeWidth={1.5} />
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-3 uppercase tracking-tight italic">
                        {item.title}
                    </h4>
                    
                    <p className="text-slate-400 text-sm font-light leading-relaxed mb-8 flex-grow">
                      {item.desc}
                    </p>

                    {/* Value Badge */}
                    <div className="pt-6 border-t border-white/5 flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-red-600/10 text-red-500">
                        <ValueIcon size={16} />
                      </div>
                      <span className="text-[10px] font-bold text-slate-200 uppercase tracking-widest">
                        {item.value}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessPath;