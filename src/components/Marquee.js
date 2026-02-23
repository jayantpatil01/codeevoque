'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, SiNodedotjs, SiTailwindcss, SiFlutter, 
  SiMongodb, SiAmazonwebservices, SiDocker, SiTypescript,
  SiPython, SiFigma, SiPostgresql, SiFirebase
} from 'react-icons/si';

const TechMarquee = () => {
  const technologies = [
    { name: "React", icon: <SiReact />, color: "#61DAFB" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
    { name: "Flutter", icon: <SiFlutter />, color: "#02569B" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "AWS", icon: <SiAmazonwebservices />, color: "#FF9900" },
    { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { name: "Python", icon: <SiPython />, color: "#3776AB" },
    { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
    { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
  ];

  // Tripling the array ensures there's never a "gap" on ultra-wide monitors
  const duplicatedTech = [...technologies, ...technologies, ...technologies];

  return (
    <section className="py-16 md:py-24 bg-[#0a0a0c] relative overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex items-center gap-4 justify-center lg:justify-start">
          <div className="h-[1px] w-8 bg-red-600"></div>
          <p className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.4em]">
            Expertise in Modern Tech Stacks
          </p>
        </div>
      </div>

      {/* Optimized Marquee Container */}
      <div className="relative flex overflow-hidden group">
        <motion.div 
          className="flex whitespace-nowrap gap-6 md:gap-8 py-4 will-change-transform"
          animate={{ x: ["0%", "-33.33%"] }} // Only animate 1/3 of the tripled array
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear",
            // This ensures the animation doesn't pause when the tab is inactive, 
            // preventing a "jump" when the user comes back.
            repeatType: "loop" 
          }}
        >
          {duplicatedTech.map((tech, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 px-5 py-3 md:px-6 md:py-4 rounded-xl bg-white/5 border border-white/10 transition-colors duration-300 hover:bg-white/10 hover:border-red-500/30 select-none"
            >
              <span 
                className="text-xl md:text-2xl"
                style={{ color: tech.color }}
              >
                {tech.icon}
              </span>
              <span className="text-base md:text-lg font-bold text-slate-300 tracking-tight">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Side Fades - These use CSS gradients for ultra-smooth edge blending */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#0a0a0c] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#0a0a0c] to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};

export default TechMarquee;