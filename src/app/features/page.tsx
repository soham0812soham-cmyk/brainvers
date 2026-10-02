import React from "react";
import { ProductSection } from "@/components/ProductSection";
import { AISection } from "@/components/AISection";

export const metadata = {
  title: "Features | BrainVers",
  description: "Explore the features and product vision of BrainVers.",
};

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-bg">
      <div className="pt-32 md:pt-48 pb-16 px-6 md:px-12 max-w-7xl mx-auto text-center border-b border-line bg-surface">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-text mb-6">Platform Features</h1>
        <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
          BrainVers is built to provide an end-to-end learning loop. Discover the core features, adaptive tools, and intelligent capabilities we are building to revolutionize student preparation.
        </p>
      </div>

      <ProductSection />
      <AISection />
    </main>
  );
}
