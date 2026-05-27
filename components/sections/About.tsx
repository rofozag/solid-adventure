import RevealWrapper from "@/components/ui/RevealWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import GoldLine from "@/components/ui/GoldLine";
 import Image from "next/image";
const SKILLS = ["Photography", "Video Production", "Graphic Design"];

export default function About() {
  return (
    <section
      id="about"
      className="py-[120px] px-8 md:px-12 lg:px-20 bg-surface"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center max-w-[1060px] mx-auto">
        {/* Left */}
        <RevealWrapper>
          <SectionLabel label="03 / About" />
          <h2
            className="font-display font-bold text-text leading-[1.15] mt-2"
            style={{ fontSize: "clamp(28px, 4vw, 42px)" }}
          >
            The Vision
            <br />
            Behind the Lens
          </h2>

          <GoldLine className="my-8" />

          <div className="space-y-5">
            <p className="font-mono font-light text-[12px] leading-[2] text-text-mid">
              5 Years+ based in nigeria. Works globally <br />
               Hi i'm timmy flex visuals TFV. With a deep passion for visual storytelling, I bring ideas to life
              through the lens, the edit suite, and the design canvas. Every
              project begins with a conversation and ends with work that moves
              people.
            </p>
            <p className="font-mono font-light text-[12px] leading-[2] text-text-mid">

              Based in Nigeria, I work with brands, artists, and businesses
              locally and internationally — delivering premium creative output
              that converts audiences into clients. I also manage a premuim youtube channel with over 600,000 views 
            </p>
          </div>
          {/* Skill badges */}
          <div className="flex flex-wrap gap-2 mt-10">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="font-mono text-[8px] tracking-[3px] uppercase
                  border border-border text-gold px-4 py-2"
              >
                {skill}
              </span>
            ))}
          </div>
        </RevealWrapper>

        {/* Right — portrait image */}
        <RevealWrapper delay={0.15}>
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: "3/4" }}>
            {
               <Image src="/portrait.jpg" alt="fv" fill className="object-cover" />
             }
            <div
              className="w-full h-full"
              style={{
                background:
                  "linear-gradient(155deg, #1a120a 0%, #2e1e0e 30%, #4a2e16 60%, #6b4422 100%)",
              }}
            />

            {/* Floating badge */}
            <div
              className="absolute bottom-6 left-6 bg-bg/90 backdrop-blur-sm
                border border-border px-4 py-3"
            >
              <p className="font-mono text-[9px] tracking-[2px] uppercase text-gold">
                5+ years · 50+ projects
              </p>
            </div>

            {/* Corner accents */}
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-gold/30 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-gold/30 pointer-events-none" />
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
