import React from "react";

export default function Ticker() {
  const items = [
    "MY PORTFOLIO",
    "SOFTWARE ENGINEERING STUDENT",
    "ASPIRING SOFTWARE ENGINEER",
    "UNIVERSITI TENAGA NASIONAL (UNITEN)",
    "FRONTEND DEVELOPMENT",
    "PROBLEM-SOLVING",
    "FEATURED PROJECTS & EXPERIENCES",
  ];

  return (
    <div
      className="bg-[#FDF2F8] border-b border-[#FBCFE8] py-3 overflow-hidden select-none"
      aria-hidden="true"
    >
      <div className="flex w-max animate-ticker">
        {/* Double list for smooth infinite scrolling */}
        {[...items, ...items].map((text, idx) => (
          <div
            key={idx}
            className="flex items-center text-[10px] font-mono font-medium tracking-[0.16em] uppercase text-[#9D174D] px-5 whitespace-nowrap"
          >
            <span>{text}</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#DB2777] ml-6"></span>
          </div>
        ))}
      </div>
    </div>
  );
}

