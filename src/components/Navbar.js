'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
      // Using a threshold check to prevent unnecessary re-renders
      const offset = window.scrollY > 20;
      if (isScrolled !== offset) {
        setIsScrolled(offset);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  const navLinks = [
    { name: 'Product', href: '/product', icon: <Package size={16} /> },
    { name: 'Solutions', href: '/', icon: <Layers size={16} /> },
    { name: 'Pricing', href: '/', icon: <Tag size={16} /> },
    { name: 'Resources', href: '/', icon: <BookOpen size={16} /> },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] h-20 flex items-center transition-colors duration-200 ${
        isScrolled 
          ? 'bg-[#0a0a0c] border-b border-white/10' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex items-center justify-between">
        
        {/* Logo Section - Removed hover scaling */}
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 relative">
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

        {/* Desktop Navigation - Simple color transitions only */}
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

        {/* Action Buttons - Removed hover scale/translate */}
        <div className="hidden md:flex items-center gap-5">
          <Link 
            href="https://github.com" 
            target="_blank" 
            className="text-slate-400 hover:text-white transition-colors"
          >
            <Github size={20} />
          </Link>
          <button className="px-6 py-2.5 bg-red-600 text-white font-mono text-xs font-bold rounded-sm hover:bg-red-700 transition-colors flex items-center gap-2">
            GET STARTED 
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown - Swapped motion.div for standard div */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 left-0 right-0 md:hidden bg-[#0d0d0f] border-b border-white/10 shadow-2xl">
          <div className="flex flex-col p-8 gap-6">
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
            <button className="w-full py-4 bg-red-600 text-white font-bold rounded-sm flex items-center justify-center gap-2">
              GET STARTED <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;