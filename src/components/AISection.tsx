import React from "react";
import { SectionHeader } from "./SectionHeader";

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
        <div>
          <SectionHeader
            label="04 / PRODUCT ROADMAP"
            title="AI that helps turn performance into action."
          />
          
          <div className="space-y-4 mb-12">
            {capabilities.map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                <span className="text-text font-medium">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted italic border-l-2 border-line pl-4 py-1">
            * AI capabilities are part of the product roadmap and will be developed progressively as the platform evolves.
          </p>
        </div>

        {/* Conceptual Analytics Interface */}
        <div className="relative border border-line bg-bg p-8 shadow-sm">
          <div className="absolute top-0 right-0 bg-accent text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1">
            Roadmap
          </div>

          <div className="space-y-8 mt-4">
            <div>
              <div className="flex justify-between items-end mb-2">
                <h4 className="text-sm font-semibold">Predicted Score Trajectory</h4>
                <span className="text-xs text-muted">Concept</span>
              </div>
              <div className="h-32 border-b border-l border-line relative flex items-end px-2 pb-2 gap-2">
                {/* Conceptual bars */}
                {[40, 55, 50, 65, 70, 85].map((height, i) => (
                  <div 
                    key={i} 
                    className="flex-1 bg-accent/10 border border-accent/20 rounded-t-sm transition-all"
                    style={{ height: `${height}%` }}
                  />
                ))}
                {/* Overlay trend line (conceptual) */}
                <svg className="absolute top-0 left-0 w-full h-full preserve-3d" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M 5,60 L 22,45 L 39,50 L 56,35 L 73,30 L 90,15" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="4 2" />
                </svg>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="border border-line p-4">
                <p className="text-xs text-muted mb-1 uppercase tracking-wider">Focus Area</p>
                <p className="text-sm font-medium">Advanced Calculus</p>
              </div>
              <div className="border border-line p-4">
                <p className="text-xs text-muted mb-1 uppercase tracking-wider">Suggested Action</p>
                <p className="text-sm font-medium">Review Module 4</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
