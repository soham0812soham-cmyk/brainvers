import React from "react";
import Image from "next/image";

export function AISection() {
  const capabilities = [
    "AI Test Evaluation",
    "Personalized Insights",
    "Adaptive Practice",
    "Learning Analytics",
    "AI Guidance",
  ];

  return (
    <section className="py-24 md:py-32 border-b border-line bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: AI Teacher Image */}
        <div className="relative w-full aspect-[4/3] md:aspect-[4/5] lg:aspect-[4/3] rounded-xl overflow-hidden group border border-line shadow-sm">
          <Image 
            src="/ai-teacher.jpg" 
            alt="AI Teacher Concept" 
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Right: Text Content */}
        <div>
          <p className="text-xs font-bold tracking-widest uppercase text-accent mb-4">
            INNOVATION IS THE KEY!
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-text mb-6">
            How we do it?
          </h2>
          <p className="text-muted leading-relaxed mb-6">
            Focusing on a scalable and affordable approach, BrainVers aims to build a fully automated online learning platform. Whether it&apos;s interaction, confirmations by tutors, or question answering during lectures, our AI approach will provide end-to-end guidance just like a live human tutor.
          </p>
          <p className="text-muted leading-relaxed mb-8">
            Our long-term vision includes utilizing advanced large language models to generate texts for solutions, validate long answers, and provide students with detailed analysis of their weaker and stronger areas.
          </p>

          <div className="space-y-4 mb-8">
            {capabilities.map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                <span className="text-text font-medium">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted italic border-l-2 border-accent pl-4 py-1">
            * AI capabilities are part of the product roadmap and will be developed progressively as the platform evolves.
          </p>
        </div>
      </div>
    </section>
  );
}
