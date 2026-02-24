'use client';

import React from 'react';
import Image from 'next/image';
import { SiLinkedin, SiGithub, SiX, SiInstagram } from 'react-icons/si';

const FOOTER_DATA = {
  brand: {
    firstPart: "CODE",
    secondPart: "EVOQUE",
    tagline: "Premium Software Engineering",
    logoPath: '/E.png'
  },
  socials: [
    { id: 1, icon: <SiLinkedin size={18} />, link: "https://linkedin.com/in/codeevoque", label: "LinkedIn" },
    { id: 2, icon: <SiX size={18} />, link: "https://x.com/codeevoque", label: "X" },
    { id: 3, icon: <SiGithub size={18} />, link: "https://github.com/codeevoque", label: "GitHub" },
    { id: 4, icon: <SiInstagram size={18} />, link: "https://instagram.com/codeevoque", label: "Instagram" }
  ],
  legal: {
    year: 2026, 
    status: "Built for Growth"
  }
};

const Footer = () => {
  const { brand, socials, legal } = FOOTER_DATA;

  return (
    <footer className="relative bg-[#0a0a0c] border-t border-white/5 py-12 md:py-16 overflow-hidden">
      
      {/* 1. Static Background Watermark - Removed transition and scale */}
      <div className="absolute -bottom-10 -left-10 opacity-[0.03] pointer-events-none select-none">
        <Image 
          src={brand.logoPath} 
          alt="Watermark" 
          width={256} 
          height={256} 
          style={{ width: 'auto', height: 'auto' }} 
          className="grayscale"
          priority={false}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          
          {/* 2. Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="group cursor-default">
              <span className="text-white font-black tracking-tighter uppercase text-2xl">
                {brand.firstPart}
                <span className="text-red-600 italic group-hover:text-red-500 transition-colors duration-200">
                  {brand.secondPart}
                </span>
              </span>
            </div>
            <p className="text-[9px] font-mono text-slate-500 uppercase tracking-[0.3em]">
              {brand.tagline}
            </p>
          </div>

          {/* 3. Socials & Legal */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-6 md:gap-8">
              {socials.map((social) => (
                <a 
                  key={social.id}
                  href={social.link} 
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-red-600 transition-colors duration-200 p-2 md:p-0"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            <div className="h-px w-12 bg-white/10 hidden md:block" />

            <p className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.2em] text-center md:text-right">
              © {legal.year} {brand.firstPart}{brand.secondPart.toLowerCase()} 
              <span className="mx-2 text-red-900">•</span> {legal.status}
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;