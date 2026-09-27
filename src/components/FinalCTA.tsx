import React from "react";
import Link from "next/link";

export function FinalCTA() {
  return (
    <section id="connect" className="py-32 md:py-48 bg-bg text-center">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-text leading-tight mb-4">
          The future of learning shouldn't end with a test score.
        </h2>
        <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-muted leading-tight mb-16">
          It should begin with understanding what comes next.
        </h3>
        
        <div className="mb-12">
          <p className="text-lg font-bold tracking-widest text-text uppercase mb-2">
            BRAINVERS + TESTVERS
          </p>
          <p className="text-sm tracking-widest text-muted uppercase">
            Learn. Practice. Test. Improve.
          </p>
        </div>

        <Link
          href="mailto:soham0812soham@gmail.com"
          className="inline-flex items-center gap-2 border border-line bg-surface text-text px-10 py-5 text-sm font-bold tracking-wider uppercase hover:bg-line/30 transition-colors"
        >
          <i className="ri-mail-send-line text-xl"></i>
          CONNECT WITH FOUNDER
        </Link>
      </div>
    </section>
  );
}
