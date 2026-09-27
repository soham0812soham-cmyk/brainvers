import React from "react";
import { SectionHeader } from "./SectionHeader";

export function ProblemSection() {
  return (
    <section id="problem" className="py-24 md:py-32 border-b border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          label="01 / THE PROBLEM"
          title="Students don't need another isolated EdTech app."
          subtitle={
            <>
              <p className="mb-4 font-medium text-text">
                They need a connected learning journey.
              </p>
              <p>
                Students often move between different platforms for classes, practice
                questions, mock tests, doubt solving, performance analysis and guidance.
                The experience becomes fragmented, and scores alone do not always tell
                students what to improve, how to improve it, or what to do next.
              </p>
            </>
          }
        />

        <div className="mt-16 md:mt-24">
          <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-8">
            The Fragmented Reality
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-between relative">
            {/* Visual Fragmented Journey */}
            
            {[
              { name: "CLASS", icon: "ri-macbook-line", desc: "Disconnected step 1" },
              { name: "PRACTICE", icon: "ri-edit-box-line", desc: "Disconnected step 2" },
              { name: "TEST", icon: "ri-file-list-3-line", desc: "Disconnected step 3" },
              { name: "ANALYSIS", icon: "ri-bar-chart-box-line", desc: "Disconnected step 4" },
              { name: "GUIDANCE", icon: "ri-compass-3-line", desc: "Disconnected step 5" }
            ].map((step, i) => (
              <div key={step.name} className="flex-1 flex flex-col items-center md:items-start relative group">
                {/* Disconnected connecting line for desktop */}
                {i !== 4 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-[1px] border-t border-dashed border-line/60" />
                )}
                
                <div className="w-full bg-surface border border-line p-6 mb-4 h-32 flex flex-col gap-3 items-center justify-center relative z-10 transition-transform group-hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5 cursor-default bg-white">
                  <i className={`${step.icon} text-3xl text-muted group-hover:text-accent transition-colors duration-300`}></i>
                  <span className="text-[11px] font-bold tracking-widest text-text">{step.name}</span>
                </div>
                
                <div className="text-center md:text-left text-xs text-muted/70 px-2">
                  {step.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
