import React from "react";
import { SectionHeader } from "./SectionHeader";

export function StageSection() {
  const stages = [
    { num: "01", title: "PRODUCT", desc: "Initial product experience and workflows" },
    { num: "02", title: "TECHNOLOGY", desc: "Core web/app and technology foundation" },
    { num: "03", title: "VALIDATION", desc: "Students, educators, feedback and iteration" },
    { num: "04", title: "TEAM", desc: "Building the founding and execution team" },
  ];

  return (
    <section className="py-24 md:py-32 border-b border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <SectionHeader
            label="09 / WHERE WE ARE"
            title="From vision to product."
            subtitle="We are currently developing the product vision, validating the student problem and preparing the initial product experience."
          />
          <div className="inline-block border border-accent bg-accent-soft text-accent text-sm font-bold tracking-widest uppercase px-6 py-2">
            PRE-SEED
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {stages.map((stage, i) => (
            <div key={i} className="group flex items-start gap-6 border border-transparent hover:border-line hover:bg-bg hover:shadow-sm p-4 -mx-4 rounded-md transition-all duration-300 pb-6 border-b border-b-line last:border-b-transparent hover:last:border-b-line">
              <span className="text-xl font-light text-muted group-hover:text-accent transition-colors">{stage.num}</span>
              <div>
                <h4 className="text-sm font-bold tracking-widest uppercase text-text mb-1 group-hover:text-accent transition-colors">{stage.title}</h4>
                <p className="text-muted">{stage.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
