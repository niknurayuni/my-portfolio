"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Interests", href: "#interests" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/92 backdrop-blur-md border-b border-[#E7EAEF] h-[72px]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-10 h-full flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="#home"
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DB2777] rounded-full p-1"
        >
          <div className="w-8 h-8 rounded-full bg-[#DB2777] flex items-center justify-center text-white font-bold text-xs tracking-wider group-hover:bg-[#BE185D] transition-colors shadow-sm">
            A
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-[15px] tracking-tight text-[#0D1117] leading-tight">
              MY PORTFOLIO
            </span>
            <span className="text-[10px] font-mono tracking-wider text-[#5B6472] uppercase">
              Ayuni
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[14px] font-medium text-[#5B6472] hover:text-[#0D1117] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#DB2777] after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Header Right Action */}
        <div className="hidden sm:flex items-center gap-4">
          <Link
            href="#contact"
            className="inline-flex items-center gap-1.5 bg-[#0D1117] hover:bg-[#DB2777] text-white text-[13.5px] font-medium px-5 py-[10px] rounded-full transition-all duration-200 shadow-sm hover:shadow-raised hover:-translate-y-0.5"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-4 h-4 opacity-75" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-[#0D1117] hover:bg-[#F7F8FA] focus:outline-none focus:ring-2 focus:ring-[#DB2777]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-lg border-b border-[#E7EAEF] px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[16px] font-medium text-[#363C47] hover:text-[#DB2777] py-2 px-3 rounded-lg hover:bg-[#FDF2F8] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-[#E7EAEF]">
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center flex items-center justify-center gap-2 bg-[#0D1117] hover:bg-[#DB2777] text-white text-[14px] font-semibold py-3 px-5 rounded-full transition-colors"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

