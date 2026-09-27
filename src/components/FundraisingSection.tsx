import React from "react";
import { SectionHeader } from "./SectionHeader";
import Link from "next/link";

export function FundraisingSection() {
  const areas = [
    "PRODUCT & ENGINEERING",
    "AI & TECHNOLOGY INFRASTRUCTURE",
    "LEARNING ECOSYSTEM",
    "STUDENT VALIDATION",
    "TEAM BUILDING",
    "EARLY GO-TO-MARKET"
  ];

  return (
    <section className="py-24 md:py-32 border-b border-line bg-accent text-white relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <div className="mb-16 md:mb-24 max-w-3xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-white/50 mb-6">
              10 / PRE-SEED ROUND
            </p>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight mb-6">
              Building the foundation for the next generation of EdTech.
            </h2>
            <div className="text-lg md:text-xl text-white/80 leading-relaxed">
              We are preparing for our pre-seed fundraising round to build the initial product, technology infrastructure, team and early-market validation.
            </div>
          </div>
          
          <Link
            href="mailto:soham0812soham@gmail.com"
            className="inline-flex items-center gap-2 bg-white text-accent px-8 py-4 text-sm font-bold tracking-wider uppercase hover:bg-white/90 transition-colors"
          >
            <i className="ri-mail-send-line text-lg"></i>
            DISCUSS THE OPPORTUNITY
          </Link>
          
          <div className="mt-8 max-w-md">
            <p className="text-[10px] text-white/40 leading-relaxed uppercase tracking-widest">
              Information presented here describes the current company vision, product direction and roadmap and may change as development and validation progress.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {areas.map((area, i) => (
            <div key={i} className="group border border-white/20 bg-white/5 hover:bg-white/10 p-6 flex items-center h-24 transition-colors">
              <span className="text-sm font-semibold tracking-wide group-hover:translate-x-1 transition-transform">{area}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
