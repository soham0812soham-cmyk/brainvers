import React from "react";

export function SectionHeader({
  label,
  title,
  subtitle,
  centered = false,
}: {
  label?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  centered?: boolean;
}) {
  return (
    <div className={`mb-16 md:mb-24 max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      {label && (
        <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-6">
          {label}
        </p>
      )}
      <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-text leading-tight mb-6">
        {title}
      </h2>
      {subtitle && (
        <div className="text-lg md:text-xl text-muted leading-relaxed">
          {subtitle}
        </div>
      )}
    </div>
  );
}
