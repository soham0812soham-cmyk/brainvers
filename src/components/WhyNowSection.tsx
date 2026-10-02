import React from "react";

export function WhyNowSection() {
  return (
    <section className="py-24 md:py-32 border-b border-line bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Video Thumbnail Placeholder */}
        <div className="relative w-full aspect-video rounded-md overflow-hidden shadow-sm group cursor-pointer border border-line bg-bg flex items-center justify-center">
          <div className="absolute inset-0 bg-accent/5 mix-blend-overlay"></div>
          
          <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
            <i className="ri-play-fill text-2xl ml-1"></i>
          </div>
          
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center px-4 py-2 bg-surface/90 backdrop-blur-sm border border-line rounded-sm">
            <span className="text-xs font-semibold text-text">BrainVers Platform Tour</span>
            <span className="text-[10px] text-muted font-bold tracking-widest uppercase">Coming Soon</span>
          </div>
        </div>

        {/* Right Side: Text & Features */}
        <div>
          <p className="text-xs font-bold tracking-widest uppercase text-accent mb-4">
            INDIA HAS HUNDREDS OF K-12 PLATFORMS, BUT
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-text mb-6">
            Why BrainVers?
          </h2>
          <p className="text-muted leading-relaxed mb-8">
            BrainVers is built for students who want real board exam and competitive results, not just more video content. We combine AI-powered learning, interactive classes, instant doubt support, notes, and practice sets to help students study with more clarity and confidence.
          </p>
          
          <ul className="space-y-4">
            {[
              "AI-based Interactive Learning",
              "Personalised as per Your Pace",
              "Lectures in your Own Language",
              "Extremely Affordable"
            ].map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-text font-medium">
                <i className="ri-arrow-right-double-line text-accent text-xl"></i>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
