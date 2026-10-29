import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Ticker from "@/components/Ticker";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  GraduationCap,
  Briefcase,
  FolderGit2,
  Code2,
  Database,
  Wrench,
  Sparkles,
  ExternalLink,
  Github,
  Mail,
  Palette,
  Camera,
  Layers,
  BookOpen,
  CheckCircle2,
  Terminal,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#363C47]">
      {/* 1. Ticker strip at very top */}
      <Ticker />

      {/* 2. Sticky Header / Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* =========================================================================
            SECTION: HOME / HERO
           ========================================================================= */}
        <section
          id="home"
          className="relative pt-16 sm:pt-24 lg:pt-32 pb-20 sm:pb-28 border-b border-[#E7EAEF] overflow-hidden"
        >
          {/* Subtle background ambient styling */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FDF2F8] rounded-full blur-3xl -z-10 pointer-events-none opacity-70" />

          <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column (Hero Copy - ~58%) */}
              <div className="lg:col-span-7 space-y-6">
                {/* Eyebrow Pill Label */}
                <div className="inline-flex items-center gap-2 bg-[#FDF2F8] border border-[#FBCFE8] px-3.5 py-1.5 rounded-full text-[#9D174D] font-mono text-[10px] uppercase tracking-[0.16em]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DB2777]" />
                  <span>MY PORTFOLIO // HOME</span>
                </div>

                {/* Subtitle / Role Badge */}
                <p className="text-[14px] sm:text-[15px] font-mono text-[#5B6472] uppercase tracking-[0.12em] font-semibold">
                  Software Engineering Student | Aspiring Software Engineer
                </p>

                {/* Main Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-extrabold text-[#0D1117] tracking-[-0.035em] leading-[1.06]">
                  Hello, I&apos;m Ayuni!
                </h1>

                {/* Lead Paragraphs */}
                <div className="space-y-4 text-[17.5px] sm:text-[19px] text-[#5B6472] leading-[1.72] [text-wrap:pretty]">
                  <p className="font-medium text-[#0D1117]">
                    Welcome to my personal portfolio.
                  </p>
                  <p>
                    I am a Software Engineering student at Universiti Tenaga Nasional (UNITEN), passionate about web development, software design and building practical technology solutions.
                  </p>
                  <p className="text-[#363C47] font-medium">
                    Explore my projects, technical skills and experiences.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    href="#projects"
                    className="inline-flex items-center gap-2 bg-[#DB2777] hover:bg-[#BE185D] text-white text-[15px] font-semibold px-7 py-3.5 rounded-full shadow-raised hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <span>Explore Featured Projects</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="#skills"
                    className="inline-flex items-center gap-2 bg-white hover:bg-[#F7F8FA] border border-[#E7EAEF] text-[#0D1117] text-[15px] font-semibold px-7 py-3.5 rounded-full shadow-sm hover:shadow transition-all duration-200"
                  >
                    <span>Technical Skills &amp; Experience</span>
                  </Link>
                </div>
              </div>

              {/* Right Column (Hero Document & Identity Card - ~42%) */}
              <div className="lg:col-span-5">
                <div className="bg-white border border-[#E7EAEF] rounded-[26px] p-7 sm:p-8 shadow-card relative hover:shadow-raised transition-all duration-300">
                  {/* Card Header Bar */}
                  <div className="flex items-center justify-between pb-6 border-b border-[#E7EAEF]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-3 h-3 rounded-full bg-[#DB2777]" />
                      <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#0D1117] font-semibold">
                        STUDENT PROFILE
                      </span>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.16em] bg-[#FDF2F8] border border-[#FBCFE8] text-[#9D174D] px-2.5 py-1 rounded-full">
                      VERIFIED
                    </span>
                  </div>

                  {/* Card Content Body */}
                  <div className="py-6 space-y-4">
                    <div>
                      <h3 className="text-[20px] font-extrabold text-[#0D1117] tracking-tight">
                        Ayuni
                      </h3>
                      <p className="text-[13.5px] text-[#5B6472] font-mono mt-1">
                        Software Engineering Student | Aspiring Software Engineer
                      </p>
                    </div>

                    {/* Callout Inside Card */}
                    <div className="bg-[#FDF2F8] border border-[#FBCFE8] rounded-[18px] p-4 text-[#9D174D]">
                      <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#DB2777] font-semibold mb-1">
                        INSTITUTION
                      </div>
                      <p className="text-[14px] font-bold text-[#0D1117]">
                        Universiti Tenaga Nasional (UNITEN)
                      </p>
                    </div>

                    <p className="text-[13.5px] text-[#5B6472] leading-relaxed">
                      Passionate about transforming ideas into functional, user-friendly applications with practical technology solutions.
                    </p>
                  </div>

                  {/* Joined Stat Cells with Hairline Gaps */}
                  <div className="bg-[#E7EAEF] border border-[#E7EAEF] rounded-[18px] overflow-hidden grid grid-cols-2 gap-[1px]">
                    <div className="bg-white p-4">
                      <div className="text-[32px] font-extrabold text-[#0D1117] font-mono leading-none">
                        02
                      </div>
                      <div className="text-[11px] font-mono uppercase tracking-[0.12em] text-[#697382] mt-1.5">
                        Internships
                      </div>
                    </div>
                    <div className="bg-white p-4">
                      <div className="text-[32px] font-extrabold text-[#DB2777] font-mono leading-none">
                        03
                      </div>
                      <div className="text-[11px] font-mono uppercase tracking-[0.12em] text-[#697382] mt-1.5">
                        Key Projects
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION: ABOUT ME
           ========================================================================= */}
        <section
          id="about"
          className="py-20 sm:py-28 lg:py-36 bg-[#F7F8FA] border-b border-[#E7EAEF]"
        >
          <div className="max-w-[880px] mx-auto px-5 sm:px-8 lg:px-10 space-y-12">
            {/* Header Stack */}
            <div className="space-y-4 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 bg-[#FDF2F8] border border-[#FBCFE8] px-3.5 py-1.5 rounded-full text-[#9D174D] font-mono text-[10px] uppercase tracking-[0.16em]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DB2777]" />
                <span>PROFILE OVERVIEW // ABOUT ME</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[47px] font-extrabold text-[#0D1117] tracking-[-0.035em] leading-[1.06]">
                ABOUT ME
              </h2>
            </div>

            {/* Headline Card Component (DESIGN.md specification: dark ink panel with 26px radius holding short sentence in large mono type) */}
            <div className="relative bg-[#0D1117] text-[#F9A8D4] rounded-[26px] p-8 sm:p-12 shadow-raised overflow-hidden">
              <div className="absolute inset-0 scanline-pattern opacity-40 pointer-events-none" />
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.16em] text-white/60">
                  <Terminal className="w-3.5 h-3.5 text-[#F9A8D4]" />
                  <span>CORE STATEMENT</span>
                </div>
                <p className="text-xl sm:text-2xl font-mono leading-relaxed text-white">
                  &ldquo;I am a Software Engineering student with a strong interest in frontend development, software engineering and problem-solving.&rdquo;
                </p>
              </div>
            </div>

            {/* Detailed Editorial Callout Card */}
            <div className="bg-white border border-[#E7EAEF] rounded-[18px] p-8 sm:p-10 shadow-card space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-[#E7EAEF]">
                <Sparkles className="w-5 h-5 text-[#DB2777]" />
                <h3 className="text-[17px] font-bold text-[#0D1117]">
                  Philosophy &amp; Focus
                </h3>
              </div>
              <p className="text-[18px] sm:text-[19px] text-[#363C47] leading-[1.72] [text-wrap:pretty]">
                I enjoy transforming ideas into functional, user-friendly applications and continuously improving my technical skills through academic projects and internship experiences.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION: EDUCATION
           ========================================================================= */}
        <section
          id="education"
          className="py-20 sm:py-28 lg:py-36 bg-white border-b border-[#E7EAEF]"
        >
          <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-10 space-y-14">
            {/* Header Stack */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#FDF2F8] border border-[#FBCFE8] px-3.5 py-1.5 rounded-full text-[#9D174D] font-mono text-[10px] uppercase tracking-[0.16em]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DB2777]" />
                <span>ACADEMIC BACKGROUND</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[47px] font-extrabold text-[#0D1117] tracking-[-0.035em] leading-[1.06]">
                EDUCATION
              </h2>
            </div>

            {/* Education Cards Grid (2 Columns from 640px) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Education 1 */}
              <div className="bg-white border border-[#E7EAEF] rounded-[18px] p-8 shadow-card hover:shadow-raised hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 bg-[#FDF2F8] text-[#9D174D] border border-[#FBCFE8] px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-[0.16em] font-semibold">
                      DEGREE
                    </span>
                    <GraduationCap className="w-5 h-5 text-[#DB2777]" />
                  </div>
                  <h3 className="text-[23px] sm:text-[26px] font-extrabold text-[#0D1117] leading-tight">
                    Bachelor of Software Engineering
                  </h3>
                </div>
                <div className="pt-6 mt-6 border-t border-[#E7EAEF]">
                  <p className="text-[16px] font-semibold text-[#5B6472]">
                    Universiti Tenaga Nasional (UNITEN)
                  </p>
                </div>
              </div>

              {/* Education 2 */}
              <div className="bg-white border border-[#E7EAEF] rounded-[18px] p-8 shadow-card hover:shadow-raised hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 bg-[#FDF2F8] text-[#9D174D] border border-[#FBCFE8] px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-[0.16em] font-semibold">
                      DIPLOMA
                    </span>
                    <GraduationCap className="w-5 h-5 text-[#DB2777]" />
                  </div>
                  <h3 className="text-[23px] sm:text-[26px] font-extrabold text-[#0D1117] leading-tight">
                    Diploma in Computer Science
                  </h3>
                </div>
                <div className="pt-6 mt-6 border-t border-[#E7EAEF]">
                  <p className="text-[16px] font-semibold text-[#5B6472]">
                    Kolej Profesional MARA Beranang
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION: TECHNICAL SKILLS
           ========================================================================= */}
        <section
          id="skills"
          className="py-20 sm:py-28 lg:py-36 bg-[#F7F8FA] border-b border-[#E7EAEF]"
        >
          <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-10 space-y-14">
            {/* Header Stack */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#FDF2F8] border border-[#FBCFE8] px-3.5 py-1.5 rounded-full text-[#9D174D] font-mono text-[10px] uppercase tracking-[0.16em]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DB2777]" />
                <span>TOOLKIT &amp; STACK</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[47px] font-extrabold text-[#0D1117] tracking-[-0.035em] leading-[1.06]">
                TECHNICAL SKILLS
              </h2>
            </div>

            {/* Skills Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Category 1: Programming Languages */}
              <div className="bg-white border border-[#E7EAEF] rounded-[18px] p-8 shadow-card flex flex-col justify-between hover:shadow-raised transition-all duration-300">
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-[#E7EAEF]">
                    <div className="w-10 h-10 rounded-xl bg-[#FDF2F8] border border-[#FBCFE8] flex items-center justify-center text-[#DB2777]">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#697382]">
                      07 LANGUAGES
                    </span>
                  </div>

                  <h3 className="text-[20px] font-extrabold text-[#0D1117]">
                    Programming Languages:
                  </h3>

                  <div className="flex flex-wrap gap-2.5">
                    {[
                      "HTML",
                      "CSS",
                      "JavaScript",
                      "PHP",
                      "Python",
                      "Java",
                      "C#",
                    ].map((lang) => (
                      <span
                        key={lang}
                        className="bg-[#F7F8FA] hover:bg-[#FDF2F8] border border-[#E7EAEF] hover:border-[#FBCFE8] text-[#0D1117] hover:text-[#9D174D] font-mono text-[12px] font-medium px-3.5 py-1.5 rounded-full transition-colors"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Category 2: Database */}
              <div className="bg-white border border-[#E7EAEF] rounded-[18px] p-8 shadow-card flex flex-col justify-between hover:shadow-raised transition-all duration-300">
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-[#E7EAEF]">
                    <div className="w-10 h-10 rounded-xl bg-[#FDF2F8] border border-[#FBCFE8] flex items-center justify-center text-[#DB2777]">
                      <Database className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#697382]">
                      STORAGE &amp; DATA
                    </span>
                  </div>

                  <h3 className="text-[20px] font-extrabold text-[#0D1117]">
                    Database:
                  </h3>

                  <div className="flex flex-wrap gap-2.5">
                    {["MySQL"].map((db) => (
                      <span
                        key={db}
                        className="bg-[#FDF2F8] border border-[#FBCFE8] text-[#9D174D] font-mono text-[13px] font-semibold px-4 py-2 rounded-full"
                      >
                        {db}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Category 3: Tools and Technologies */}
              <div className="bg-white border border-[#E7EAEF] rounded-[18px] p-8 shadow-card flex flex-col justify-between hover:shadow-raised transition-all duration-300">
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-[#E7EAEF]">
                    <div className="w-10 h-10 rounded-xl bg-[#FDF2F8] border border-[#FBCFE8] flex items-center justify-center text-[#DB2777]">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#697382]">
                      DEV ENVIRONMENT
                    </span>
                  </div>

                  <h3 className="text-[20px] font-extrabold text-[#0D1117]">
                    Tools and Technologies:
                  </h3>

                  <div className="flex flex-wrap gap-2.5">
                    {[
                      "GitHub",
                      "Visual Studio Code",
                      "Postman",
                      "REST API",
                      "Docker",
                    ].map((tool) => (
                      <span
                        key={tool}
                        className="bg-[#F7F8FA] hover:bg-[#FDF2F8] border border-[#E7EAEF] hover:border-[#FBCFE8] text-[#0D1117] hover:text-[#9D174D] font-mono text-[12px] font-medium px-3.5 py-1.5 rounded-full transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION: INTERNSHIP EXPERIENCE
           ========================================================================= */}
        <section
          id="experience"
          className="py-20 sm:py-28 lg:py-36 bg-white border-b border-[#E7EAEF]"
        >
          <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-10 space-y-16">
            {/* Header Stack */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#FDF2F8] border border-[#FBCFE8] px-3.5 py-1.5 rounded-full text-[#9D174D] font-mono text-[10px] uppercase tracking-[0.16em]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DB2777]" />
                <span>WORK EXPERIENCE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[47px] font-extrabold text-[#0D1117] tracking-[-0.035em] leading-[1.06]">
                INTERNSHIP EXPERIENCE
              </h2>
            </div>

            {/* Timeline Component (DESIGN.md: 2px hairline rail, 10px pink dots, card per event) */}
            <div className="relative pl-6 sm:pl-10 border-l-2 border-[#E7EAEF] space-y-14 ml-3 sm:ml-4">
              {/* Event 1: Frontend Development Intern */}
              <div className="relative group">
                {/* 10px Pink Timeline Dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-[10px] h-[10px] rounded-full bg-[#DB2777] ring-4 ring-white" />

                <div className="bg-white border border-[#E7EAEF] rounded-[18px] p-7 sm:p-9 shadow-card hover:shadow-raised transition-all duration-300 space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#E7EAEF]">
                    <div>
                      <h3 className="text-[22px] sm:text-[25px] font-extrabold text-[#0D1117]">
                        Frontend Development Intern
                      </h3>
                      <p className="text-[16px] font-semibold text-[#DB2777] mt-0.5">
                        Mass Intelligent Provider (MIP) Sdn Bhd
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 self-start sm:self-auto bg-[#FDF2F8] text-[#9D174D] border border-[#FBCFE8] px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-[0.16em] font-semibold">
                      INTERNSHIP
                    </span>
                  </div>

                  <ul className="space-y-3 text-[15px] sm:text-[16px] text-[#363C47]">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DB2777] mt-2 flex-shrink-0" />
                      <span>Designed and developed web-based user interfaces.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DB2777] mt-2 flex-shrink-0" />
                      <span>Worked on dashboard, device management and monitoring pages.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DB2777] mt-2 flex-shrink-0" />
                      <span>Assisted with REST API integration and documentation.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DB2777] mt-2 flex-shrink-0" />
                      <span>Improved UI layouts and responsive designs.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Event 2: IT Helpdesk Intern */}
              <div className="relative group">
                {/* 10px Pink Timeline Dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-[10px] h-[10px] rounded-full bg-[#DB2777] ring-4 ring-white" />

                <div className="bg-white border border-[#E7EAEF] rounded-[18px] p-7 sm:p-9 shadow-card hover:shadow-raised transition-all duration-300 space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#E7EAEF]">
                    <div>
                      <h3 className="text-[22px] sm:text-[25px] font-extrabold text-[#0D1117]">
                        IT Helpdesk Intern
                      </h3>
                      <p className="text-[16px] font-semibold text-[#DB2777] mt-0.5">
                        Bastion Solution
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 self-start sm:self-auto bg-[#FDF2F8] text-[#9D174D] border border-[#FBCFE8] px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-[0.16em] font-semibold">
                      INTERNSHIP
                    </span>
                  </div>

                  <ul className="space-y-3 text-[15px] sm:text-[16px] text-[#363C47]">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DB2777] mt-2 flex-shrink-0" />
                      <span>Provided technical support and troubleshooting.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DB2777] mt-2 flex-shrink-0" />
                      <span>Assisted with software installation and system configuration.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DB2777] mt-2 flex-shrink-0" />
                      <span>Supported hardware, networking and IT maintenance tasks.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION: FEATURED PROJECTS
           ========================================================================= */}
        <section
          id="projects"
          className="py-20 sm:py-28 lg:py-36 bg-[#F7F8FA] border-b border-[#E7EAEF]"
        >
          <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-10 space-y-14">
            {/* Header Stack */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#FDF2F8] border border-[#FBCFE8] px-3.5 py-1.5 rounded-full text-[#9D174D] font-mono text-[10px] uppercase tracking-[0.16em]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DB2777]" />
                <span>TECHNICAL PORTFOLIO</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[47px] font-extrabold text-[#0D1117] tracking-[-0.035em] leading-[1.06]">
                FEATURED PROJECTS
              </h2>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="bg-white border border-[#E7EAEF] rounded-[18px] p-8 shadow-card hover:shadow-raised hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div className="space-y-5">
                  <div className="flex items-center justify-between pb-4 border-b border-[#E7EAEF]">
                    <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#9D174D] bg-[#FDF2F8] border border-[#FBCFE8] px-2.5 py-1 rounded-full font-semibold">
                      PROJECT 01
                    </span>
                    <FolderGit2 className="w-5 h-5 text-[#DB2777]" />
                  </div>

                  <h3 className="text-[21px] font-extrabold text-[#0D1117] leading-snug">
                    1. Smart Parking Vehicle Verification System
                  </h3>

                  <p className="text-[15px] text-[#5B6472] leading-[1.72] [text-wrap:pretty]">
                    A web-based parking management project designed for UNITEN, integrating Automatic Number Plate Recognition (ANPR) and Optical Character Recognition (OCR) to assist security guards in verifying registered vehicles.
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E7EAEF] flex flex-wrap gap-2">
                  <span className="font-mono text-[11px] bg-[#F7F8FA] text-[#5B6472] px-2.5 py-1 rounded-full">
                    UNITEN
                  </span>
                  <span className="font-mono text-[11px] bg-[#F7F8FA] text-[#5B6472] px-2.5 py-1 rounded-full">
                    ANPR &amp; OCR
                  </span>
                  <span className="font-mono text-[11px] bg-[#F7F8FA] text-[#5B6472] px-2.5 py-1 rounded-full">
                    Web-Based
                  </span>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-white border border-[#E7EAEF] rounded-[18px] p-8 shadow-card hover:shadow-raised hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div className="space-y-5">
                  <div className="flex items-center justify-between pb-4 border-b border-[#E7EAEF]">
                    <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#9D174D] bg-[#FDF2F8] border border-[#FBCFE8] px-2.5 py-1 rounded-full font-semibold">
                      PROJECT 02
                    </span>
                    <FolderGit2 className="w-5 h-5 text-[#DB2777]" />
                  </div>

                  <h3 className="text-[21px] font-extrabold text-[#0D1117] leading-snug">
                    2. PawMart Pet Shop Management System
                  </h3>

                  <p className="text-[15px] text-[#5B6472] leading-[1.72] [text-wrap:pretty]">
                    A PHP and MySQL-based pet shop system supporting product management and customer-related functions.
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E7EAEF] flex flex-wrap gap-2">
                  <span className="font-mono text-[11px] bg-[#F7F8FA] text-[#5B6472] px-2.5 py-1 rounded-full">
                    PHP
                  </span>
                  <span className="font-mono text-[11px] bg-[#F7F8FA] text-[#5B6472] px-2.5 py-1 rounded-full">
                    MySQL
                  </span>
                  <span className="font-mono text-[11px] bg-[#F7F8FA] text-[#5B6472] px-2.5 py-1 rounded-full">
                    Management System
                  </span>
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-white border border-[#E7EAEF] rounded-[18px] p-8 shadow-card hover:shadow-raised hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div className="space-y-5">
                  <div className="flex items-center justify-between pb-4 border-b border-[#E7EAEF]">
                    <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#9D174D] bg-[#FDF2F8] border border-[#FBCFE8] px-2.5 py-1 rounded-full font-semibold">
                      PROJECT 03
                    </span>
                    <FolderGit2 className="w-5 h-5 text-[#DB2777]" />
                  </div>

                  <h3 className="text-[21px] font-extrabold text-[#0D1117] leading-snug">
                    3. Active Directory Mini Project
                  </h3>

                  <p className="text-[15px] text-[#5B6472] leading-[1.72] [text-wrap:pretty]">
                    Configured Windows Server Active Directory using VirtualBox, including user management, domain configuration and group policies.
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E7EAEF] flex flex-wrap gap-2">
                  <span className="font-mono text-[11px] bg-[#F7F8FA] text-[#5B6472] px-2.5 py-1 rounded-full">
                    Windows Server
                  </span>
                  <span className="font-mono text-[11px] bg-[#F7F8FA] text-[#5B6472] px-2.5 py-1 rounded-full">
                    Active Directory
                  </span>
                  <span className="font-mono text-[11px] bg-[#F7F8FA] text-[#5B6472] px-2.5 py-1 rounded-full">
                    VirtualBox
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION: MY INTERESTS
           ========================================================================= */}
        <section
          id="interests"
          className="py-20 sm:py-28 lg:py-36 bg-white border-b border-[#E7EAEF]"
        >
          <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-10 space-y-14">
            {/* Header Stack */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#FDF2F8] border border-[#FBCFE8] px-3.5 py-1.5 rounded-full text-[#9D174D] font-mono text-[10px] uppercase tracking-[0.16em]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DB2777]" />
                <span>PASSIONS &amp; PURSUITS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[47px] font-extrabold text-[#0D1117] tracking-[-0.035em] leading-[1.06]">
                MY INTERESTS
              </h2>
            </div>

            {/* Interests Grid (5 items) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { name: "Web Development", icon: Code2, num: "01" },
                { name: "UI/UX Design", icon: Palette, num: "02" },
                { name: "Software Engineering", icon: Layers, num: "03" },
                { name: "Photography", icon: Camera, num: "04" },
                { name: "Continuous Learning", icon: BookOpen, num: "05" },
              ].map((interest) => {
                const IconComponent = interest.icon;
                return (
                  <div
                    key={interest.name}
                    className="bg-white border border-[#E7EAEF] rounded-[18px] p-6 shadow-card hover:shadow-raised hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[11px] text-[#697382]">
                          {interest.num}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-[#FDF2F8] group-hover:bg-[#DB2777] text-[#DB2777] group-hover:text-white flex items-center justify-center transition-colors">
                          <IconComponent className="w-5 h-5" />
                        </div>
                      </div>
                      <h3 className="text-[17px] font-bold text-[#0D1117] group-hover:text-[#DB2777] transition-colors">
                        {interest.name}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION: CONTACT (DESIGN.md: section-dark: ink background #0D1117, white headlines, bright pink labels #F9A8D4, inner panels white 10% opacity)
           ========================================================================= */}
        <section
          id="contact"
          className="py-24 sm:py-36 bg-[#0D1117] text-white relative overflow-hidden"
        >
          {/* Subtle ambient accent */}
          <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#DB2777]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-10 space-y-16 relative z-10">
            {/* Header Stack */}
            <div className="max-w-2xl space-y-5">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-[#F9A8D4]/30 px-3.5 py-1.5 rounded-full text-[#F9A8D4] font-mono text-[10px] uppercase tracking-[0.16em]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F9A8D4]" />
                <span>CONTACT // REACH OUT</span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-[60px] font-extrabold text-white tracking-[-0.035em] leading-[1.06]">
                Let&apos;s Connect!
              </h2>
              <p className="text-[18px] sm:text-[20px] text-white/80 leading-[1.72] [text-wrap:pretty]">
                I am always interested in learning new technologies, collaborating on projects and exploring opportunities in software development.
              </p>
            </div>

            {/* Contact Details Grid (Preserving exact wording from content.txt) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              {/* GitHub Card */}
              <div className="bg-white/[0.08] border border-white/10 hover:border-[#F9A8D4]/50 rounded-[18px] p-8 transition-colors group">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#F9A8D4] group-hover:bg-[#DB2777] group-hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#F9A8D4]">
                    CODE
                  </span>
                </div>
                <div className="pt-5 space-y-2">
                  <h3 className="text-[18px] font-bold text-white">
                    GitHub:
                  </h3>
                  <a
                    href="https://github.com/niknurayuni"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[15px] text-[#F9A8D4] hover:text-white hover:underline font-mono break-all transition-colors group/link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DB2777] rounded"
                  >
                    <span>https://github.com/niknurayuni</span>
                    <ExternalLink className="w-4 h-4 flex-shrink-0 opacity-75 group-hover/link:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white/[0.08] border border-white/10 hover:border-[#F9A8D4]/50 rounded-[18px] p-8 transition-colors group">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#F9A8D4] group-hover:bg-[#DB2777] group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#F9A8D4]">
                    DIRECT
                  </span>
                </div>
                <div className="pt-5 space-y-2">
                  <h3 className="text-[18px] font-bold text-white">
                    Email:
                  </h3>
                  <a
                    href="mailto:ayuneenik@gmail.com"
                    className="inline-flex items-center gap-2 text-[15px] text-[#F9A8D4] hover:text-white hover:underline font-mono break-all transition-colors group/link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DB2777] rounded"
                  >
                    <span>ayuneenik@gmail.com</span>
                    <ExternalLink className="w-4 h-4 flex-shrink-0 opacity-75 group-hover/link:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
}

