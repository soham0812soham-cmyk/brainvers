import React from "react";

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
        
        {/* Left: Chatbot Placeholder */}
        <div className="relative w-full aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] rounded-xl overflow-hidden border border-line bg-bg flex flex-col items-center justify-center p-8 group shadow-sm">
          <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none"></div>
          
          <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center mb-6 shadow-lg shadow-accent/20">
            <i className="ri-robot-2-line text-3xl"></i>
          </div>
          
          <h3 className="text-lg font-bold tracking-tight text-text mb-2 text-center">AI Tutor Interface</h3>
          <p className="text-sm text-muted text-center max-w-[250px] leading-relaxed">
            The intelligent conversational guidance and doubt resolution interface will be showcased here.
          </p>
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
