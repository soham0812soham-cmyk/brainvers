import React from "react";
import { SectionHeader } from "./SectionHeader";

export function MarketSection() {
  const focuses = [
    { title: "SCHOOL EDUCATION", current: true },
    { title: "COMPETITIVE EXAMS", current: true },
    { title: "ASSESSMENT & PRACTICE", current: true },
    { title: "FUTURE: SKILLS, TECHNOLOGY & AI", current: false },
  ];

  return (
    <section className="py-24 md:py-32 border-b border-line bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <SectionHeader
            label="06 / INITIAL FOCUS"
            title="Starting with India's student & test-preparation ecosystem."
            subtitle="Begin with student learning and test preparation; expand toward a broader learning and skills ecosystem over time."
          />
        </div>

        <div className="flex flex-col border border-line">
          {focuses.map((item, i) => (
            <div 
              key={i} 
              className={`p-6 md:p-8 border-b last:border-b-0 border-line ${!item.current ? 'bg-bg/50' : 'bg-bg'}`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-2 h-2 rounded-full ${item.current ? 'bg-accent' : 'bg-line'}`} />
                <h3 className={`text-lg font-semibold tracking-wide ${item.current ? 'text-text' : 'text-muted'}`}>
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
