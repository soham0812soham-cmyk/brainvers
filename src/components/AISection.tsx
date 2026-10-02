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
        
        {/* Left: Chatbot Mockup (HTML/CSS) */}
        <div className="relative w-full aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] rounded-xl overflow-hidden border border-line bg-surface shadow-md flex flex-col group">
          {/* Top Bar */}
          <div className="bg-bg border-b border-line px-4 py-3 flex items-center justify-between z-10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center overflow-hidden border border-accent/20 shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/ai-teacher.jpg" 
                  alt="AI Teacher Avatar" 
                  className="w-full h-full object-cover scale-110 object-top"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-text leading-tight">BrainVers AI Tutor</p>
                <p className="text-[10px] text-accent font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                  Online
                </p>
              </div>
            </div>
            <i className="ri-more-2-fill text-muted"></i>
          </div>

          {/* Chat Area */}
          <div className="flex-1 p-4 flex flex-col gap-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-dot-pattern opacity-[0.03] pointer-events-none"></div>
            
            {/* User message */}
            <div className="self-end max-w-[85%] bg-bg border border-line rounded-2xl rounded-tr-sm px-4 py-2.5 shadow-sm z-10 transform transition-transform duration-500 group-hover:-translate-x-1">
              <p className="text-sm text-text">What is a pseudo force? Can you explain with an example?</p>
              <p className="text-[9px] text-muted text-right mt-1">10:42 AM</p>
            </div>

            {/* AI message */}
            <div className="self-start max-w-[85%] bg-accent-soft rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm z-10 transform transition-transform duration-500 group-hover:translate-x-1">
              <p className="text-sm text-text leading-relaxed">
                A <strong>pseudo force</strong> (also known as a fictitious force) is an apparent force that acts on all masses whose motion is described using a non-inertial frame of reference.
              </p>
              <div className="mt-2 p-2 bg-white rounded-md border border-accent/10">
                <p className="text-xs text-muted leading-relaxed">
                  <span className="font-bold text-accent">Example:</span> When a car accelerates forward, you feel pushed back into your seat. There is no real force pushing you back, it&apos;s just your body&apos;s inertia resisting the acceleration!
                </p>
              </div>
              <div className="flex items-center gap-3 mt-2 pt-2 border-t border-accent/10">
                <button className="text-xs text-muted hover:text-accent transition-colors"><i className="ri-thumb-up-line"></i></button>
                <button className="text-xs text-muted hover:text-accent transition-colors"><i className="ri-thumb-down-line"></i></button>
                <span className="text-[9px] text-muted ml-auto">10:42 AM</span>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="bg-bg border-t border-line p-3 z-10">
            <div className="w-full bg-surface border border-line rounded-full px-4 py-2.5 flex items-center justify-between text-muted shadow-inner group-hover:border-accent/30 transition-colors">
              <span className="text-xs opacity-70">Type your doubt here...</span>
              <div className="flex gap-3">
                <i className="ri-mic-line hover:text-accent cursor-pointer transition-colors"></i>
                <i className="ri-send-plane-fill text-accent hover:text-accent/80 cursor-pointer transition-colors"></i>
              </div>
            </div>
          </div>
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
