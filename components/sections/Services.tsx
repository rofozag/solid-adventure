"use client";

import RevealWrapper from "@/components/ui/RevealWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import GoldLine from "@/components/ui/GoldLine";
import { SERVICES } from "@/lib/works";
import type { Service } from "@/types";

function scrollToContact() {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <div
      className="bg-surface border border-border p-10 flex flex-col h-full
        hover:border-gold/40 transition-colors duration-300 group"
    >
      {/* Symbol */}
      <span
        className="font-display text-[32px] text-gold leading-none select-none"
        aria-hidden="true"
      >
        {service.symbol}
      </span>

      {/* Title */}
      <h3 className="font-display font-bold text-[22px] text-text mt-6 mb-4">
        {service.title}
      </h3>

      <GoldLine className="mb-6" />

      {/* Items */}
      <ul className="flex-1 space-y-1">
        {service.items.map((it) => (
          <li
            key={it}
            className="font-mono font-light text-[11px] leading-[2.2] text-text-mid"
          >
            → {it}
          </li>
        ))}
      </ul>

      {/* Enquire CTA */}
      <button
        onClick={scrollToContact}
        className="mt-8 font-mono text-[9px] tracking-[2px] uppercase text-gold
          hover:opacity-60 transition-opacity duration-300 text-left w-fit"
      >
        Enquire →
      </button>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-[120px] px-8 md:px-12 lg:px-20">
      {/* Header */}
      <RevealWrapper className="text-center mb-16">
        <SectionLabel label="04 / Services" center />
        <h2
          className="font-display font-bold text-text mt-4"
          style={{ fontSize: "clamp(28px, 4vw, 42px)" }}
        >
          What I Do
        </h2>
      </RevealWrapper>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1060px] mx-auto">
        {SERVICES.map((service, i) => (
          <RevealWrapper key={service.title} delay={i * 0.1}>
            <ServiceCard service={service} />
          </RevealWrapper>
        ))}
      </div>
    </section>
  );
}
