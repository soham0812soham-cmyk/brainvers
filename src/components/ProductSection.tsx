import Image from "next/image";
import { SectionHeader } from "./SectionHeader";

export function ProductSection() {
  return (
    <section id="product" className="py-24 md:py-32 border-b border-line bg-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          label="03 / THE PRODUCT VISION"
          title="Built around the student, not the feature list."
          centered
        />

        <div className="mt-16 md:mt-24 w-full">
          <div className="relative w-full aspect-[2/1] rounded-lg overflow-hidden border border-line shadow-sm">
            <Image 
              src="/arivihan-features.png" 
              alt="Platform Features" 
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
