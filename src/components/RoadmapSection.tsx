import React from "react";
import { SectionHeader } from "./SectionHeader";

export function RoadmapSection() {
  const roadmap = [
    { num: "01", title: "FOUNDATION", items: ["MVP", "Product Architecture", "Testing Engine"] },
    { num: "02", title: "VALIDATION", items: ["Students", "Educators", "Feedback"] },
    { num: "03", title: "INTELLIGENCE", items: ["Analytics", "AI Evaluation", "Personalization"] },
    { num: "04", title: "SCALE", items: ["Multiple Exams", "Academic Learning", "Wider Student Ecosystem"] },
    { num: "05", title: "BEYOND", items: ["Skills", "AI Learning", "Offline Ecosystem", "Mentorship"] },
  ];

  return (
    <section id="vision" className="py-24 md:py-32 border-b border-line bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          label="11 / LONG-TERM ROADMAP"
          title="From learning platform to intelligent learning ecosystem."
        />

        <div className="mt-16 md:mt-24 relative">
          {/* Horizontal Line for Desktop */}
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-[1px] bg-line" />
          
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 relative z-10">
            {roadmap.map((phase, i) => (
              <div key={i} className="flex-1 flex flex-row lg:flex-col gap-6 lg:gap-8">
                {/* Number / Node */}
                <div className="flex-shrink-0 w-12 h-12 lg:w-auto lg:h-auto flex lg:block items-center justify-center lg:pl-0">
                  <div className="hidden lg:block w-3 h-3 rounded-full bg-accent mb-6" />
                  <span className="text-xs font-bold tracking-widest uppercase text-muted lg:hidden bg-bg border border-line px-2 py-1 rounded">
                    {phase.num}
                  </span>
                  <span className="hidden lg:block text-xs font-bold tracking-widest uppercase text-muted">
                    {phase.num}
                  </span>
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-bg border border-line p-6 shadow-sm">
                  <h4 className="text-sm font-semibold tracking-wide text-text mb-4 uppercase">{phase.title}</h4>
                  <ul className="space-y-2">
                    {phase.items.map((item, j) => (
                      <li key={j} className="text-sm text-muted flex items-start gap-2">
                        <span className="text-accent/50 mt-1.5 w-1 h-1 rounded-full bg-current shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
