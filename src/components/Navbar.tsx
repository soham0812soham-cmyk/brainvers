"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Problem", href: "#problem" },
    { name: "Solution", href: "#solution" },
    { name: "Product", href: "#product" },
    { name: "Vision", href: "#vision" },
    { name: "Founder", href: "#founder" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-surface/90 backdrop-blur-md border-b border-line py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/brainvers-logo.jpg" alt="BrainVers Logo" width={40} height={40} className="rounded-md object-contain mix-blend-multiply" />
          <span className="text-xl font-semibold tracking-tight text-text">BRAINVERS</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-muted hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="mailto:soham0812soham@gmail.com"
            className="flex items-center gap-2 text-sm font-medium border border-line px-5 py-2.5 rounded-full hover:bg-line/50 transition-colors"
          >
            <i className="ri-mail-send-line text-lg"></i>
            Connect
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-text p-2 -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-surface border-b border-line shadow-lg md:hidden p-6 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-text"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="mailto:soham0812soham@gmail.com"
            className="flex items-center gap-2 text-lg font-medium text-accent mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            <i className="ri-mail-send-line"></i>
            Connect with Founder &rarr;
          </Link>
        </div>
      )}
    </header>
  );
}
