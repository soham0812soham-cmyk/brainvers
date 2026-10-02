import React from "react";
import Image from "next/image";

export function WhyNowSection() {
  return (
    <section className="py-24 md:py-32 border-b border-line bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Video Thumbnail */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl group cursor-pointer border border-line">
          <Image 
            src="/custom-video.jpg" 
            alt="BrainVers Platform Tour" 
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
              <i className="ri-play-fill text-2xl ml-1"></i>
            </div>
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
