import React from "react";
import { SectionHeader } from "./SectionHeader";

export function WhyNowSection() {
  return (
    <section className="py-24 md:py-32 border-b border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          label="05 / WHY NOW"
          title="Education is moving from content consumption to measurable outcomes."
          centered
        />

        <div className="mt-16 md:mt-24 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-lg md:text-xl font-medium text-muted tracking-wide text-center">
            <span>CONTENT</span>
            <span className="text-accent">+</span>
            <span>PRACTICE</span>
            <span className="text-accent">+</span>
            <span>ASSESSMENT</span>
            <span className="text-accent">+</span>
            <span>FEEDBACK</span>
          </div>
          
          <div className="my-8 flex justify-center">
            <div className="w-full max-w-md h-[1px] bg-line relative before:absolute before:top-1 before:left-0 before:w-full before:h-[1px] before:bg-line" />
          </div>
          
          <div className="text-center text-2xl md:text-4xl font-semibold tracking-tight text-text">
            CONTINUOUS IMPROVEMENT
          </div>
        </div>
      </div>
    </section>
  );
}
