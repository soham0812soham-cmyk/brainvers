import React from "react";
import Image from "next/image";
import { SectionHeader } from "./SectionHeader";

export function FounderSection() {
  return (
    <section id="founder" className="py-24 md:py-32 border-b border-line bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">
        {/* Left: Portrait */}
        <div className="w-full relative overflow-hidden border border-line shadow-md group">
          <div className="absolute inset-0 bg-accent/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
          <Image 
            src="/founder-portrait.jpg" 
            alt="Soham Bhardwaj - Founder" 
            width={800} 
            height={600} 
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Right: Details */}
        <div>
          <SectionHeader
            label="08 / THE FOUNDER"
            title="Built from the student side of the problem."
          />

          <div className="mb-10">
            <h3 className="text-2xl font-bold tracking-tight text-text uppercase mb-1">
              Soham Bhardwaj
            </h3>
            <p className="text-accent font-medium mb-4">Founder — BrainVers & TestVers</p>
            <p className="text-sm text-muted font-medium tracking-wide">
              MCA Graduate | Product & Business | MERN Stack | AI & Gen AI
            </p>
          </div>

          <div className="prose prose-lg text-muted mb-12 border-l-2 border-line pl-6">
            <p>
              "I spent years preparing for competitive examinations and experienced the Indian EdTech ecosystem from the student side.
            </p>
            <p>
              That journey exposed a recurring problem: students can find classes, practice platforms, tests, doubt support and guidance — but these experiences are often disconnected.
            </p>
            <p>
              BrainVers is my attempt to build the kind of connected learning journey I wanted as a student."
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {["PRODUCT VISION", "STUDENT UNDERSTANDING", "TECHNOLOGY-ENABLED EXECUTION"].map((tag, i) => (
              <span key={i} className="text-[10px] font-bold tracking-widest uppercase border border-line px-3 py-1.5 bg-bg text-text">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
