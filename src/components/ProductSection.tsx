import React from "react";
import { SectionHeader } from "./SectionHeader";
import { BookOpen, PenTool, CheckSquare, LineChart, TrendingUp, RefreshCw } from "lucide-react";

export function ProductSection() {
  const modules = [
    {
      num: "01",
      title: "LEARN",
      desc: "Structured learning and guidance around student goals.",
      icon: <BookOpen className="w-5 h-5 text-accent" strokeWidth={1.5} />,
    },
    {
      num: "02",
      title: "PRACTICE",
      desc: "Topic-wise and difficulty-based practice.",
      icon: <PenTool className="w-5 h-5 text-accent" strokeWidth={1.5} />,
    },
    {
      num: "03",
      title: "TEST",
      desc: "Mock tests and assessment experiences.",
      icon: <CheckSquare className="w-5 h-5 text-accent" strokeWidth={1.5} />,
    },
    {
      num: "04",
      title: "UNDERSTAND",
      desc: "Performance insights that identify strengths and gaps.",
      icon: <LineChart className="w-5 h-5 text-accent" strokeWidth={1.5} />,
    },
    {
      num: "05",
      title: "IMPROVE",
      desc: "Guidance toward areas that need attention.",
      icon: <TrendingUp className="w-5 h-5 text-accent" strokeWidth={1.5} />,
    },
    {
      num: "06",
      title: "REPEAT",
      desc: "Continuous practice and testing until performance improves.",
      icon: <RefreshCw className="w-5 h-5 text-accent" strokeWidth={1.5} />,
    },
  ];

  return (
    <section id="product" className="py-24 md:py-32 border-b border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          label="03 / THE PRODUCT VISION"
          title="Built around the student, not the feature list."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mt-16 md:mt-24">
          {modules.map((mod) => (
            <div key={mod.num} className="group relative p-6 -m-6 rounded-lg transition-all duration-300 hover:bg-surface hover:shadow-lg hover:shadow-accent/5 border border-transparent hover:border-line">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-line">
                <span className="text-xs font-semibold tracking-widest text-muted group-hover:text-accent transition-colors">
                  {mod.num}
                </span>
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {mod.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold tracking-wide text-text mb-3 group-hover:text-accent transition-colors">
                {mod.title}
              </h3>
              <p className="text-muted leading-relaxed">
                {mod.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
