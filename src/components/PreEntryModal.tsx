"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function PreEntryModal() {
  const [isOpen, setIsOpen] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, mounted]);

  // Prevent flash of content on server render
  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-surface/90 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-[560px] bg-bg border border-line shadow-2xl shadow-accent/5 p-8 md:p-10 relative flex flex-col rounded-sm"
          >
            <div className="flex justify-center mb-8">
              <span className="text-[9px] font-bold tracking-widest text-muted uppercase border border-line px-3 py-1 bg-surface">
                INVESTOR DISCLOSURE
              </span>
            </div>

            <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-4 text-center">
              BRAINVERS &bull; PRE-SEED
            </p>
            
            <h2 id="modal-title" className="text-3xl font-medium tracking-tight text-text leading-tight mb-6 text-center">
              A note before you explore
            </h2>
            
            <div className="space-y-5 mb-10">
              <p className="text-sm md:text-base text-muted leading-relaxed text-center font-medium">
                BrainVers is currently in the pre-seed product development and validation stage. Some product interfaces, features and capabilities presented across this website represent our current product vision or planned roadmap and may evolve as development progresses.
              </p>
              <p className="text-sm md:text-base text-muted leading-relaxed text-center">
                This website is intended to provide an overview of the company's vision, product direction and roadmap.
              </p>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="w-full bg-accent text-white py-4 text-sm font-bold tracking-wider uppercase hover:bg-accent/90 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg mb-4"
              autoFocus
            >
              Continue to BrainVers
            </button>

            <p className="text-[10px] text-muted/70 text-center tracking-wide uppercase px-4">
              By continuing, you acknowledge that certain product representations are conceptual or roadmap-based.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
