"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const TITLES = ["Photographer.", "Video Editor.", "Creative Director."];

const STATS = [
  { num: "50+", label: "Projects" },
  { num: "3+", label: "Years" },
  { num: "100%", label: "Satisfaction" },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const id = setInterval(
      () => setTitleIndex((i) => (i + 1) % TITLES.length),
      2800
    );
    return () => clearInterval(id);
  }, [prefersReducedMotion]);

  return (
    <section
      className="relative min-h-screen flex items-center
        px-8 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-5%] top-[10%] w-[45vw] h-[70vh]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(201,169,110,0.05) 0%, transparent 70%)",
        }}
      />

      {/* Bottom hairline */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, #1c1916, transparent)",
        }}
      />

      {/* Vertical side label — desktop only */}
      <p
        aria-hidden="true"
        className="absolute right-10 top-1/2 hidden lg:block font-mono
          text-[8px] tracking-[5px] uppercase text-text-dim whitespace-nowrap"
        style={{ transform: "translateY(-50%) rotate(90deg)" }}
      >
        Portfolio · 2026
      </p>

      {/* Main content */}
      <motion.div
        variants={prefersReducedMotion ? {} : container}
        initial="hidden"
        animate="visible"
        className="max-w-4xl w-full"
      >
        {/* Eyebrow */}
        <motion.p
          variants={prefersReducedMotion ? {} : item}
          className="font-mono text-[10px] tracking-[5px] uppercase text-gold mb-8"
        >
          Available for projects · Nigeria &amp; worldwide
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={prefersReducedMotion ? {} : item}
          className="font-display font-black text-text leading-[1.05] mb-2"
          style={{ fontSize: "clamp(52px, 8vw, 96px)" }}
        >
          {/* [PLACEHOLDER: Replace with client first name] */}
          TFVISUALS
        </motion.h1>

        {/* Animated rotating title */}
        <motion.div
          variants={prefersReducedMotion ? {} : item}
          className="h-[80px] flex items-center overflow-hidden mb-10"
          aria-live="polite"
          aria-atomic="true"
        >
          <AnimatePresence mode="wait">
            <motion.h2
              key={titleIndex}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? {} : { opacity: 0, y: -22 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-normal italic text-gold"
              style={{ fontSize: "clamp(30px, 5vw, 60px)" }}
            >
              {TITLES[titleIndex]}
            </motion.h2>
          </AnimatePresence>
        </motion.div>

        {/* Bio */}
        <motion.p
          variants={prefersReducedMotion ? {} : item}
          className="font-mono font-light text-[12px] leading-[2]
            text-text-mid max-w-[480px] mb-14 tracking-[0.3px]"
        >
          {/* [PLACEHOLDER: Replace with client bio] */}
          I craft visual stories that move people — through photography, film,
          and design. Based in Nigeria, working worldwide.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={prefersReducedMotion ? {} : item}
          className="flex flex-wrap items-center gap-4"
        >
          <button
            onClick={() => scrollTo("work")}
            className="relative overflow-hidden border border-gold text-gold
              font-mono text-[10px] tracking-[3px] uppercase px-10 py-4
              hover:text-bg transition-colors duration-400 group"
          >
            <span
              className="absolute inset-0 bg-gold scale-x-0 origin-left
                group-hover:scale-x-100 transition-transform duration-400"
            />
            <span className="relative z-10">View Work</span>
          </button>

          <button
            onClick={() => scrollTo("contact")}
            className="font-mono text-[10px] tracking-[3px] uppercase
              text-text-mid underline underline-offset-4
              hover:text-gold transition-colors duration-300"
          >
            Get In Touch →
          </button>
        </motion.div>
      </motion.div>

      {/* Stats strip — hidden on mobile */}
      <div className="absolute bottom-12 left-8 md:left-12 lg:left-20 hidden md:flex gap-16">
        {STATS.map(({ num, label }, i) => (
          <motion.div
            key={label}
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: prefersReducedMotion ? 0 : 0.9 + i * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <p className="font-display font-bold text-[28px] text-text leading-none mb-1">
              {num}
            </p>
            <p className="font-mono text-[8px] tracking-[3px] uppercase text-text-dim">
              {label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
