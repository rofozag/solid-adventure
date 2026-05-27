import RevealWrapper from "@/components/ui/RevealWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import GoldLine from "@/components/ui/GoldLine";
import { TESTIMONIALS } from "@/lib/works";

export default function Testimonials() {
  return (
    <section className="py-[120px] px-8 md:px-12 lg:px-20 bg-bg">
      {/* Header */}
      <RevealWrapper className="text-center mb-16">
        <SectionLabel label="05 / Kind Words" center />
        <h2
          className="font-display font-bold text-text mt-4"
          style={{ fontSize: "clamp(28px, 4vw, 42px)" }}
        >
          Client Stories
        </h2>
      </RevealWrapper>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1060px] mx-auto">
        {TESTIMONIALS.map((t, i) => (
          <RevealWrapper key={t.name} delay={i * 0.1}>
            <figure className="bg-surface border border-border p-8 flex flex-col h-full">
              {/* Opening quote mark */}
              <div
                aria-hidden="true"
                className="font-display font-black leading-none text-gold/25 select-none"
                style={{ fontSize: "64px", lineHeight: 0.8 }}
              >
                &ldquo;
              </div>

              {/* Quote */}
              <blockquote className="font-display font-normal italic text-[15px] leading-[1.85] text-text-mid flex-1 mt-4">
                {t.text}
              </blockquote>

              <GoldLine className="my-6" />

              {/* Author */}
              <figcaption>
                <p className="font-mono text-[11px] tracking-[2px] uppercase text-text">
                  {t.name}
                </p>
                <p className="font-mono font-light text-[9px] tracking-[1px] text-text-dim mt-1">
                  {t.role}
                </p>
              </figcaption>
            </figure>
          </RevealWrapper>
        ))}
      </div>
    </section>
  );
}
