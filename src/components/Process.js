'use client';

import React from 'react';
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
    <section className="py-20 md:py-32 bg-[#0a0a0c] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-12 md:mb-24 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
             <span className="h-[1px] w-8 bg-red-600"></span>
             <h2 className="text-red-600 font-mono text-[10px] md:text-xs font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase text-nowrap">
                Our Simple Step-by-Step
             </h2>
          </div>
          <h3 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[1.1]">
            HOW WE TAKE YOU <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
                FROM IDEA TO REALITY.
            </span>
          </h3>
        </div>

        {/* Timeline Component */}
        <div className="relative">
          {/* Desktop Horizontal Line - Untouched */}
          <div className="hidden lg:block absolute top-[28px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

          {/* Grid: 1 column on mobile, 2 on tablet, 4 on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative z-10">
            {roadmap.map((item) => {
              const Icon = item.icon;
              const ValueIcon = item.valueIcon;

              return (
                <div key={item.id} className="group flex flex-col">
                  {/* Step Number - Adjusted for Mobile spacing */}
                  <div className="mb-4 md:mb-8 flex justify-center lg:justify-start">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#0d0d0f] border-2 border-white/10 flex items-center justify-center text-white transition-colors duration-300 group-hover:border-red-600">
                      <span className="text-base md:text-lg font-black italic">{item.id}</span>
                    </div>
                  </div>

                  {/* Content Card - Optimized mobile padding */}
                  <div className="h-full bg-white/[0.03] border border-white/5 p-6 md:p-8 rounded-2xl transition-colors duration-300 group-hover:bg-white/[0.05] group-hover:border-white/10 flex flex-col">
                    <div className="text-red-500 mb-4 md:mb-6">
                      <Icon size={28} className="md:w-8 md:h-8" strokeWidth={1.5} />
                    </div>
                    
                    <h4 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 uppercase tracking-tight italic">
                        {item.title}
                    </h4>
                    
                    <p className="text-slate-400 text-sm font-light leading-relaxed mb-6 md:mb-8 flex-grow">
                      {item.desc}
                    </p>

                    {/* Value Badge */}
                    <div className="pt-4 md:pt-6 border-t border-white/5 flex items-center gap-3">
                      <div className="p-1.5 md:p-2 rounded-lg bg-red-600/10 text-red-500">
                        <ValueIcon size={14} className="md:w-4 md:h-4" />
                      </div>
                      <span className="text-[9px] md:text-[10px] font-bold text-slate-200 uppercase tracking-widest">
                        {item.value}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessPath;