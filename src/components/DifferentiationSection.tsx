import React from "react";
import { SectionHeader } from "./SectionHeader";

export function DifferentiationSection() {
  return (
    <section className="py-24 md:py-32 border-b border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          label="07 / PRODUCT PHILOSOPHY"
          title="Not another content library."
          subtitle="The core idea is to connect the pieces into a continuous student feedback loop."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 md:mt-24">
          {/* Left: Fragmented */}
          <div className="border border-line bg-surface p-8 md:p-12">
            <h3 className="text-sm font-semibold tracking-widest text-muted uppercase mb-10">
              Fragmented Journey
            </h3>
            
            <div className="flex flex-col gap-4 mb-10">
              {["Classes", "Practice", "Tests", "Analytics", "Guidance"].map((item, i) => (
                <div key={i} className="bg-bg border border-line border-dashed p-4 text-center text-muted">
                  {item}
                </div>
              ))}
            </div>
            <p className="text-center text-sm font-medium text-muted">Disconnected experiences.</p>
          </div>

          {/* Right: Connected */}
          <div className="border border-accent bg-accent-soft/30 p-8 md:p-12 relative">
            <h3 className="text-sm font-semibold tracking-widest text-accent uppercase mb-10">
              Connected Learning Loop
            </h3>
            
            <div className="flex flex-col gap-0 mb-10 relative">
              <div className="absolute left-6 top-6 bottom-6 w-[2px] bg-accent/20 z-0" />
              {["Learn", "Practice", "Test", "Identify", "Improve"].map((item, i) => (
                <div key={i} className="bg-bg border border-line p-4 pl-14 relative z-10 my-2 shadow-sm">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 w-3 h-3 bg-accent rounded-full border-2 border-bg" />
                  <span className="font-medium text-text">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-sm font-medium text-accent">Connected student feedback loop.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
