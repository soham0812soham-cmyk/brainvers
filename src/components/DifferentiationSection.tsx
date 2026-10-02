import React from "react";

export function DifferentiationSection() {
  return (
    <section className="py-24 md:py-32 border-b border-line bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Text Content */}
        <div>
          <p className="text-xs font-bold tracking-widest uppercase text-accent mb-4">
            SOCIAL IMPACT
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-text mb-6">
            Our Mission
          </h2>
          <p className="text-muted leading-relaxed mb-6">
            Millions of students belonging to lower-income segments are constrained to go to local coaching classes available near their homes, because of financial & language constraints. This education is not enough to get the required level of knowledge, especially for competitive exams preparation.
          </p>
          <p className="text-muted leading-relaxed mb-8">
            To solve this problem affecting the careers of millions of students in our country, we are building a highly automated, deeply connected online learning platform to raise the quality of education that they can be proud of, at a price they can afford with a smile.
          </p>
        </div>

        {/* Right: Placeholder */}
        <div className="relative w-full aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] rounded-xl overflow-hidden border border-line bg-surface flex flex-col items-center justify-center p-8 group">
          <div className="absolute inset-0 bg-accent/5 pointer-events-none"></div>
          
          <div className="w-20 h-20 rounded-full bg-accent text-white flex items-center justify-center mb-6 shadow-xl transition-transform duration-500 group-hover:scale-110">
            <i className="ri-smartphone-line text-4xl"></i>
          </div>
          
          <h3 className="text-lg font-bold tracking-tight text-text mb-2 text-center">Mobile Experience</h3>
          <p className="text-sm text-muted text-center max-w-[250px] leading-relaxed">
            A conceptual preview of the mobile application interface will be displayed here.
          </p>
        </div>
        
      </div>
    </section>
  );
}
