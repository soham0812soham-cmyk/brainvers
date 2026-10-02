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

      <ProductSection />
      <AISection />
    </main>
  );
}
