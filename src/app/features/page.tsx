import React from "react";
import Link from "next/link";
import { ProductSection } from "@/components/ProductSection";
import { AISection } from "@/components/AISection";

export const metadata = {
  title: "Features | BrainVers",
  description: "Explore the features and product vision of BrainVers.",
};

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-bg">
      <div className="pt-32 md:pt-40 pb-16 px-6 md:px-12 max-w-7xl mx-auto border-b border-line bg-surface flex flex-col items-center relative">
        <Link 
          href="/" 
          className="md:absolute top-32 left-6 md:left-12 flex items-center self-start md:self-auto gap-2 text-sm font-semibold text-muted hover:text-accent transition-colors border border-line px-5 py-2.5 rounded-full bg-bg shadow-sm hover:shadow-md mb-8 md:mb-0"
        >
          <i className="ri-arrow-left-line"></i> Back to Home
        </Link>
        
        <div className="text-center w-full mt-4 md:mt-12">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-text mb-6">Platform Features</h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
            BrainVers is built to provide an end-to-end learning loop. Discover the core features, adaptive tools, and intelligent capabilities we are building to revolutionize student preparation.
          </p>
        </div>
      </div>

      {/* BrainVers Section */}
      <div className="py-16 md:py-24 bg-bg border-b border-line">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
            <span className="text-sm font-bold tracking-widest text-accent uppercase">BrainVers</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text">The Learning Ecosystem.</h2>
          <p className="mt-4 text-muted max-w-2xl text-lg">
            A deeply connected environment where students learn, practice, and receive intelligent guidance every step of the way.
          </p>
        </div>
        <ProductSection />
        <AISection />
      </div>

      {/* TestVers Section */}
      <div className="py-24 md:py-32 bg-surface border-b border-line">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
            <span className="text-sm font-bold tracking-widest text-blue-500 uppercase">TestVers</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text">The Assessment Engine.</h2>
          <p className="mt-4 text-muted max-w-2xl text-lg">
            High-fidelity mock tests and rigorous assessments that mirror actual exam environments, giving students the ultimate confidence before test day.
          </p>
        </div>
        
        {/* TestVers Features Grid */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Exam Simulation",
              desc: "Pixel-perfect mock tests simulating real competitive exam interfaces.",
              icon: "ri-macbook-line"
            },
            {
              title: "Performance Analytics",
              desc: "Deep analytical reports highlighting weak chapters and question types.",
              icon: "ri-bar-chart-box-line"
            },
            {
              title: "All-India Ranking",
              desc: "Predictive ranking system comparing scores across the student network.",
              icon: "ri-trophy-line"
            }
          ].map((feature, i) => (
            <div key={i} className="bg-bg border border-line rounded-xl p-8 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center text-2xl mb-6">
                <i className={feature.icon}></i>
              </div>
              <h3 className="text-xl font-bold text-text mb-3">{feature.title}</h3>
              <p className="text-muted leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
