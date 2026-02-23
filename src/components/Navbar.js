'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Github, 
  ArrowRight, 
  Package, 
  Layers, 
  Tag, 
  BookOpen 
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Product', href: '/', icon: <Package size={16} /> },
    { name: 'Solutions', href: '/', icon: <Layers size={16} /> },
    { name: 'Pricing', href: '/', icon: <Tag size={16} /> },
    { name: 'Resources', href: '/', icon: <BookOpen size={16} /> },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] h-20 flex items-center transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#0a0a0c]/80 backdrop-blur-xl border-b border-white/10' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      {/* 1. Performance Note: Added passive listener and optimized grain overlay */}
      {isScrolled && (
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none -z-10" />
      )}

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex items-center justify-between">
        
        {/* 2. Logo Section: Fixed fill/sizes warning and added priority */}
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 relative transition-transform duration-300 group-hover:scale-110">
            <Image 
              src='/E.png' 
              alt="CodeEvoque Logo" 
              fill
              sizes="40px"
              className="object-contain" 
              priority
            />
          </div>
          <span className="text-2xl font-bold tracking-tight">
            <span className="text-white">Code</span>
            <span className="text-red-600">Evoque</span>
          </span>
        </Link>

        {/* 3. Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group flex items-center gap-2 text-sm font-mono text-slate-400 hover:text-white transition-colors tracking-widest uppercase"
            >
              <span className="text-slate-500 group-hover:text-red-500 transition-colors">
                {link.icon}
              </span>
              {link.name}
            </Link>
          ))}
        </div>

        {/* 4. Action Buttons */}
        <div className="hidden md:flex items-center gap-5">
          <Link 
            href="https://github.com" 
            target="_blank" 
            className="text-slate-400 hover:text-white transition-all hover:scale-110"
          >
            <Github size={20} />
          </Link>
          <button className="group relative px-6 py-2.5 bg-red-600 text-white font-mono text-xs font-bold rounded-sm transition-all hover:bg-red-700 active:scale-95 flex items-center gap-2 shadow-lg shadow-red-600/10">
            GET STARTED 
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 5. Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 6. Mobile Menu Dropdown: GPU Accelerated with AnimatePresence */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-20 left-0 right-0 md:hidden bg-[#0a0a0c] border-b border-white/10 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6 bg-[#0d0d0f]">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-4 text-lg font-mono text-slate-300 hover:text-red-500 uppercase tracking-tighter"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-red-600">{link.icon}</span>
                  {link.name}
                </Link>
              ))}
              <div className="h-px w-full bg-white/5 my-2" />
              <button className="w-full py-4 bg-red-600 text-white font-bold rounded-sm flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-xl shadow-red-600/20">
                GET STARTED <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;