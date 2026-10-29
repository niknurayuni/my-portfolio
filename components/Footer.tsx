import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Technical Skills", href: "#skills" },
    { name: "Internship Experience", href: "#experience" },
    { name: "Featured Projects", href: "#projects" },
    { name: "My Interests", href: "#interests" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#F7F8FA] border-t border-[#E7EAEF] py-16 text-[#5B6472]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#E7EAEF]">
          {/* Column 1: Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#DB2777] flex items-center justify-center text-white font-bold text-xs tracking-wider">
                A
              </div>
              <span className="font-extrabold text-[18px] text-[#0D1117] tracking-tight">
                My Portfolio
              </span>
            </div>
            <p className="text-[14px] text-[#5B6472] max-w-sm leading-relaxed">
              Software Engineering Student | Aspiring Software Engineer
            </p>
            <p className="text-[13.5px] text-[#697382]">
              Universiti Tenaga Nasional (UNITEN)
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#0D1117] font-semibold">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-[13.5px]">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-[#DB2777] transition-colors py-1"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Back to top & Info */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end space-y-4">
            <Link
              href="#home"
              className="inline-flex items-center gap-2 text-[13.5px] font-medium text-[#0D1117] hover:text-[#DB2777] bg-white border border-[#E7EAEF] px-4 py-2.5 rounded-full shadow-sm hover:shadow transition-all group"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Bottom Credits Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[13px] text-[#697382] gap-4">
          <p>
            Designed and developed by <span className="text-[#0D1117] font-medium">Ayuni</span>.
          </p>
          <div className="inline-flex items-center gap-2 bg-[#FDF2F8] border border-[#FBCFE8] px-3.5 py-1.5 rounded-full text-[#9D174D] font-mono text-[10px] uppercase tracking-[0.16em]">
            Week 9 Google Antigravity Lab.
          </div>
        </div>
      </div>
    </footer>
  );
}

