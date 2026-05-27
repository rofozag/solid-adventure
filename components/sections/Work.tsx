"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealWrapper from "@/components/ui/RevealWrapper";
import { WORKS } from "@/lib/works";
import type { WorkItem } from "@/types";

type Filter = "All" | "Photography" | "Video" | "Design";
const FILTERS: Filter[] = ["All", "Photography", "Video", "Design"];

function WorkCard({ work, index }: { work: WorkItem; index: number }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      layout
      initial={reduced ? {} : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduced ? {} : { opacity: 0 }}
      transition={{
        duration: 0.5,
        delay: reduced ? 0 : index * 0.06,
        ease: [0.16, 1, 0.3, 1],
        layout: { duration: 0.35 },
      }}
      whileHover={reduced ? {} : { scale: 1.02 }}
      className={`relative overflow-hidden group cursor-pointer
        ${work.aspect === "wide" ? "sm:col-span-2 lg:col-span-2" : "col-span-1"}
        ${work.aspect === "tall" ? "h-[500px]" : "h-[380px]"}`}
      style={{ background: work.gradient }}
      role="article"
      aria-label={`${work.title} — ${work.category}`}
    >
      {/* Gradient background (replace with next/image when client provides photos) */}
     

<Image
  src={work.imageSrc}
  alt={work.title}
  fill
  className="object-cover"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
/>

      {/* Subtle noise texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Hover overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100
          transition-opacity duration-400"
        style={{
          background:
            "linear-gradient(to top, rgba(9,8,7,0.96) 0%, rgba(9,8,7,0.4) 50%, transparent 100%)",
        }}
      />

      {/* Corner accent lines */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/10" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/10" />

      {/* Category badge — top left, visible on hover */}
      <div
        className="absolute top-5 left-5 opacity-0 group-hover:opacity-100
          transition-opacity duration-300"
      >
        <span
          className="font-mono text-[8px] tracking-[3px] uppercase text-gold
            border border-gold/40 px-3 py-1.5 bg-bg/60 backdrop-blur-sm"
        >
          {work.category}
        </span>
      </div>

      {/* Year — top right, always visible */}
      <div className="absolute top-5 right-5">
        <span className="font-mono text-[8px] tracking-[2px] text-white/30">
          {work.year}
        </span>
      </div>

      {/* Content — bottom, slides up on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 p-6 translate-y-3
          group-hover:translate-y-0 opacity-0 group-hover:opacity-100
          transition-all duration-400"
      >
        <p className="font-mono text-[9px] tracking-[2px] uppercase text-text-dim mb-2">
          {work.description}
        </p>
        <h3 className="font-display font-bold text-[20px] text-text leading-tight">
          {work.title}
        </h3>
      </div>
    </motion.div>
  );
}

export default function Work() {
  const [active, setActive] = useState<Filter>("All");

  const filtered =
    active === "All" ? WORKS : WORKS.filter((w) => w.category === active);

  return (
    <section id="work" className="py-[120px] px-8 md:px-12 lg:px-20">
      {/* Header */}
      <RevealWrapper className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
        <div>
          <SectionLabel label="02 / Selected Work" />
          <h2
            className="font-display font-bold text-text leading-[1.1]"
            style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
          >
            Creative
            <br />
            <em>Portfolio</em>
          </h2>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter work by category">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              aria-pressed={active === f}
              className={`font-mono text-[9px] tracking-[2px] uppercase px-5 py-2
                border transition-all duration-300
                ${
                  active === f
                    ? "border-gold text-gold bg-gold/[0.06]"
                    : "border-border text-text-dim hover:border-gold/30 hover:text-text-mid"
                }`}
            >
              {f}
            </button>
          ))}
        </div>
      </RevealWrapper>

      {/* Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        style={{ gridAutoFlow: "row dense" }}
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((work, i) => (
            <WorkCard key={work.id} work={work} index={i} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
