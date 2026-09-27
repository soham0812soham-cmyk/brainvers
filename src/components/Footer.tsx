import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-line py-12 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 border-b border-line pb-8">
        <p className="text-[12px] text-muted leading-relaxed max-w-4xl mb-2 font-medium">
          BrainVers is currently in the pre-seed product development stage. Certain product interfaces and capabilities shown on this website are conceptual and represent the planned product direction.
        </p>
        <p className="text-[10px] text-muted/70 leading-relaxed max-w-4xl uppercase tracking-wide">
          Information presented on this website reflects the current product vision and roadmap and may evolve as development and validation progress.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <Link href="/" className="text-xl font-bold tracking-tight text-text mb-2 inline-block">
            BRAINVERS
          </Link>
          <p className="text-sm font-medium text-muted">
            BrainVers &bull; TestVers
          </p>
          <p className="text-xs text-muted/70 mt-1 uppercase tracking-wider">
            Pre-Seed | Product Development
          </p>
        </div>

        <div className="flex flex-col md:items-end gap-6">
          <div className="flex gap-6">
            <Link href="https://www.linkedin.com/in/soham-bhardwaj-380633417/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-muted hover:text-text transition-colors">
              <i className="ri-linkedin-fill text-lg"></i>
              LinkedIn
            </Link>
            <Link href="mailto:soham0812soham@gmail.com" className="flex items-center gap-1.5 text-sm font-medium text-muted hover:text-text transition-colors">
              <i className="ri-mail-fill text-lg"></i>
              Email
            </Link>
          </div>
          <p className="text-xs text-muted/50">
            &copy; 2026 BrainVers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
