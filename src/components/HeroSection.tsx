import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, PenTool, CheckCircle, BarChart, Target } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-line bg-surface">
      {/* Background dot pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none"></div>
      
      {/* Subtle gradient glow (restrained) */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-accent/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Side */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            PRE-SEED &bull; PRODUCT DEVELOPMENT &bull; INDIA
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-text leading-[1.05] mb-8">
            BUILD. TEST. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-muted">LEARN. REPEAT.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted leading-relaxed mb-6 font-light">
            A student-centered learning & testing ecosystem built around the complete learning journey.
          </p>
          <p className="text-base text-muted mb-10 max-w-lg leading-relaxed">
            BrainVers and TestVers are being built to connect learning, practice, testing, feedback and improvement in one continuous loop.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              href="#problem"
              className="group inline-flex items-center justify-center bg-accent text-white px-8 py-4 text-sm font-medium hover:bg-accent/90 transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5"
            >
              EXPLORE THE VISION
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="mailto:soham0812soham@gmail.com"
              className="inline-flex items-center justify-center border border-line bg-bg text-text px-8 py-4 text-sm font-medium hover:bg-surface hover:border-muted/30 transition-all shadow-sm hover:shadow-md"
            >
              <i className="ri-mail-send-line mr-2 text-lg"></i>
              CONNECT WITH FOUNDER
            </Link>
          </div>

          <p className="text-[11px] text-muted/70 leading-relaxed max-w-lg">
            BrainVers is currently in the early product-building and validation stage. Product capabilities and interfaces shown on this website represent the current product vision and roadmap and may evolve as development progresses.
          </p>
        </div>

        {/* Right Side - Conceptual UI */}
        <div className="relative w-full h-[550px] bg-bg border border-line p-8 flex flex-col justify-center shadow-2xl shadow-accent/5 rounded-sm overflow-hidden group">
          {/* Decorative grid pattern in the conceptual UI */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.15] pointer-events-none"></div>
          
          <div className="absolute top-4 right-4 flex items-center gap-2 z-10 bg-surface/80 backdrop-blur-sm px-3 py-1.5 border border-line rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
            <span className="text-[10px] tracking-widest uppercase text-text font-semibold">
              Conceptual Direction
            </span>
          </div>

          <div className="max-w-md mx-auto w-full space-y-6 relative z-10 transition-transform duration-700 group-hover:scale-[1.02]">
            {/* Learn Block */}
            <div className="flex items-start gap-4 p-5 border border-line bg-surface relative before:content-[''] before:absolute before:-bottom-6 before:left-[42px] before:w-[1px] before:h-6 before:bg-line shadow-sm">
              <div className="w-10 h-10 rounded-full bg-accent-soft flex items-center justify-center shrink-0 border border-accent/10">
                <BookOpen size={16} className="text-accent" />
              </div>
              <div className="w-full">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-sm font-bold text-text">Concept: Vectors</h3>
                  <span className="text-[10px] font-semibold text-muted bg-bg px-2 py-1 rounded-sm border border-line">IN PROGRESS</span>
                </div>
                <div className="w-full h-1.5 bg-line rounded-full overflow-hidden">
                  <div className="w-2/3 h-full bg-accent"></div>
                </div>
              </div>
            </div>

            {/* Practice Block */}
            <div className="flex items-start gap-4 p-5 border border-line bg-surface relative before:content-[''] before:absolute before:-bottom-6 before:left-[42px] before:w-[1px] before:h-6 before:bg-line shadow-sm">
              <div className="w-10 h-10 rounded-full bg-bg border border-line flex items-center justify-center shrink-0">
                <PenTool size={16} className="text-muted" />
              </div>
              <div className="w-full">
                <h3 className="text-sm font-bold text-text mb-3">Adaptive Practice</h3>
                <div className="flex gap-2 mb-2">
                  <div className="flex-1 h-8 border border-line bg-bg rounded-sm flex items-center justify-center text-[10px] text-muted font-medium">Q1</div>
                  <div className="flex-1 h-8 border border-line bg-bg rounded-sm flex items-center justify-center text-[10px] text-muted font-medium">Q2</div>
                  <div className="flex-1 h-8 border border-accent bg-accent-soft rounded-sm flex items-center justify-center text-[10px] text-accent font-bold shadow-inner">Q3</div>
                </div>
              </div>
            </div>

            {/* Insight Block */}
            <div className="flex items-start gap-4 p-5 border-l-4 border-l-accent border-y border-r border-line bg-surface shadow-md relative translate-x-2">
              <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center shrink-0 shadow-lg shadow-accent/20">
                <BarChart size={16} />
              </div>
              <div className="w-full">
                <h3 className="text-sm font-bold text-text mb-1 flex items-center justify-between">
                  Performance Insight
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                </h3>
                <p className="text-xs text-muted leading-relaxed mb-3">
                  Strong in core concepts. Focus needed on time management during application questions.
                </p>
                <div className="inline-flex items-center gap-2 text-[11px] font-bold text-accent bg-accent-soft px-3 py-1.5 rounded-sm">
                  <Target size={12} />
                  <span>ACTION: Speed Drills</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
