import React from "react";
import Image from "next/image";
import { SectionHeader } from "./SectionHeader";

export function SolutionSection() {
  const steps = ["LEARN", "PRACTICE", "TEST", "IDENTIFY", "IMPROVE", "TEST AGAIN"];

  return (
    <section id="solution" className="py-24 md:py-32 border-b border-line bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          label="02 / THE APPROACH"
          title="One ecosystem. One learning loop."
          subtitle="Students don't just finish a course or take a test. The vision is to help them understand where they stand and what they should work on next."
          centered
        />

        <div className="mt-20 max-w-5xl mx-auto">
          {/* Continuous Loop Visual */}
          <div className="relative border border-line p-8 md:p-12 mb-16">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-accent/20"></div>
            
            <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-4 relative z-10">
              {steps.map((step, i) => (
                <React.Fragment key={step}>
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mb-3" />
                    <span className="text-xs font-semibold tracking-widest text-text">{step}</span>
                  </div>
                  {i !== steps.length - 1 && (
                    <div className="hidden md:block flex-1 h-[1px] bg-line mx-4" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line border border-line">
            <div className="bg-bg p-10 md:p-16 relative">
              <div className="absolute top-8 right-8">
                <Image src="/brainvers-logo.jpg" alt="BrainVers Logo" width={60} height={60} className="object-contain mix-blend-multiply opacity-50" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-text">BrainVers</h3>
              <p className="text-sm uppercase tracking-widest text-muted mb-8 font-medium">Learning & Guidance</p>
              <p className="text-muted leading-relaxed">
                The broader learning environment focused on structured classes, conceptual understanding, doubt resolution, and personalized mentorship.
              </p>
            </div>
            <div className="bg-bg p-10 md:p-16 relative">
              <div className="absolute top-8 right-8">
                <Image src="/testvers-logo.jpg" alt="TestVers Logo" width={60} height={60} className="object-contain mix-blend-multiply opacity-50" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-text">TestVers</h3>
              <p className="text-sm uppercase tracking-widest text-muted mb-8 font-medium">Testing & Assessment</p>
              <p className="text-muted leading-relaxed">
                The assessment layer focused on topic-wise practice, rigorous mock testing, and granular performance analytics.
              </p>
            </div>
          </div>

          {/* Mentorship Pillar */}
          <div className="mt-px bg-accent text-white p-10 md:p-12 relative border border-line overflow-hidden group">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/4"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <h3 className="text-2xl font-semibold mb-3 text-white flex items-center gap-3">
                  <i className="ri-team-fill text-white/80"></i>
                  Mentorship
                </h3>
                <p className="text-[10px] uppercase tracking-widest text-white/50 mb-6 font-bold">Planned Capability &bull; Personalized Guidance</p>
                <p className="text-white/80 leading-relaxed text-sm md:text-base">
                  The long-term vision includes targeted mentor support to help students navigate their learning journey, analyze their performance gaps, and maintain consistent progress through structured, human-led guidance.
                </p>
              </div>
              <div className="hidden md:flex shrink-0 w-16 h-16 rounded-full border border-white/20 items-center justify-center bg-white/5 group-hover:bg-white/10 transition-colors">
                <i className="ri-user-star-line text-2xl text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
