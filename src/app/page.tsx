import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { ProductSection } from "@/components/ProductSection";
import { AISection } from "@/components/AISection";
import { WhyNowSection } from "@/components/WhyNowSection";
import { MarketSection } from "@/components/MarketSection";
import { DifferentiationSection } from "@/components/DifferentiationSection";
import { FounderSection } from "@/components/FounderSection";
import { StageSection } from "@/components/StageSection";
import { FundraisingSection } from "@/components/FundraisingSection";
import { RoadmapSection } from "@/components/RoadmapSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        
        <Reveal><ProblemSection /></Reveal>
        <Reveal><SolutionSection /></Reveal>
        <Reveal><ProductSection /></Reveal>
        <Reveal><AISection /></Reveal>
        <Reveal><WhyNowSection /></Reveal>
        <Reveal><MarketSection /></Reveal>
        <Reveal><DifferentiationSection /></Reveal>
        <Reveal><FounderSection /></Reveal>
        <Reveal><StageSection /></Reveal>
        <Reveal><FundraisingSection /></Reveal>
        <Reveal><RoadmapSection /></Reveal>
        <Reveal><FinalCTA /></Reveal>
      </main>
      <Footer />
    </>
  );
}
