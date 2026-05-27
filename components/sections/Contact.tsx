"use client";

import { useState, type ChangeEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import RevealWrapper from "@/components/ui/RevealWrapper";
import SectionLabel from "@/components/ui/SectionLabel";

interface FormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

const INITIAL: FormData = { name: "", email: "", projectType: "", message: "" };
const PROJECT_TYPES = ["Photography", "Video Production", "Graphic Design", "Other"];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const CONTACT_INFO = [
  { icon: Mail,    label: "timmyflex29@gmail.com" }, // [PLACEHOLDER]
  { icon: Phone,   label: "+234 901 109 4879" },    // [PLACEHOLDER]
  { icon: MapPin,  label: "Lagos, Nigeria" },        // [PLACEHOLDER]
];

const inputBase =
  "bg-transparent border-b border-border focus:border-gold text-text " +
  "font-mono text-[11px] pb-3 outline-none placeholder:text-text-dim " +
  "transition-colors duration-300 w-full";

export default function Contact() {
  const [form, setForm]       = useState<FormData>(INITIAL);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError]     = useState("");

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError("");
  };

  const validate = (): string => {
    if (!form.name.trim())        return "Please enter your name.";
    if (!EMAIL_RE.test(form.email)) return "Please enter a valid email address.";
    if (!form.projectType)        return "Please select a project type.";
    if (form.message.trim().length < 10)
      return "Message must be at least 10 characters.";
    return "";
  };

  const handleSubmit = async () => {
    const err = validate();
    if (err) { setError(err); return; }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) { setError(data.error ?? "Something went wrong."); return; }
      setSuccess(true);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-[120px] px-8 md:px-12 lg:px-20 bg-surface"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 max-w-[1060px] mx-auto">
        {/* Left — info */}
        <RevealWrapper>
          <SectionLabel label="06 / Contact" />
          <h2
            className="font-display font-bold text-text mt-4 leading-[1.15]"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            Let&apos;s Create
            <br />
            Something Great
          </h2>
          <p className="font-mono font-light text-[12px] leading-[2] text-text-mid mt-6 max-w-sm">
            Available for projects in photography, video, and design.
            Response within 24 hours.
          </p>

          <address className="not-italic mt-10 flex flex-col gap-5">
            {CONTACT_INFO.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3">
                <Icon size={14} className="text-gold flex-shrink-0" aria-hidden="true" />
                <span className="font-mono text-[11px] text-text-mid">{label}</span>
              </div>
            ))}
          </address>
        </RevealWrapper>

        {/* Right — form */}
        <RevealWrapper delay={0.15}>
          {success ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-center h-full py-16"
            >
              <p className="font-mono text-[9px] tracking-[4px] uppercase text-gold mb-4">
                Message Sent
              </p>
              <p className="font-display font-normal italic text-[24px] text-text leading-[1.6]">
                Thank you. I&apos;ll be in touch
                <br />
                within 24 hours.
              </p>
            </motion.div>
          ) : (
            <div className="flex flex-col gap-8">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="font-mono text-[9px] tracking-[3px] uppercase text-text-dim"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Your full name"
                  autoComplete="name"
                  className={inputBase}
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="font-mono text-[9px] tracking-[3px] uppercase text-text-dim"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="your@email.com"
                  autoComplete="email"
                  className={inputBase}
                />
              </div>

              {/* Project type */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="projectType"
                  className="font-mono text-[9px] tracking-[3px] uppercase text-text-dim"
                >
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={form.projectType}
                  onChange={onChange}
                  className={`${inputBase} cursor-pointer`}
                  style={{ WebkitAppearance: "none", appearance: "none" }}
                >
                  <option value="" disabled className="bg-surface text-text-dim">
                    Select a service
                  </option>
                  {PROJECT_TYPES.map((t) => (
                    <option key={t} value={t} className="bg-surface text-text">
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="font-mono text-[9px] tracking-[3px] uppercase text-text-dim"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  placeholder="Tell me about your project..."
                  rows={4}
                  className={`${inputBase} resize-none`}
                />
              </div>

              {/* Error message */}
              {error && (
                <p
                  role="alert"
                  className="font-mono text-[10px] text-red-400 -mt-2"
                >
                  {error}
                </p>
              )}

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={loading}
                aria-busy={loading}
                className="relative overflow-hidden border border-gold text-gold
                  font-mono text-[10px] tracking-[3px] uppercase py-4 w-full
                  hover:text-bg transition-colors duration-400 group
                  disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span
                  className="absolute inset-0 bg-gold scale-x-0 origin-left
                    group-hover:scale-x-100 transition-transform duration-400
                    group-disabled:!scale-x-0"
                />
                <span className="relative z-10">
                  {loading ? "Sending…" : "Send Message"}
                </span>
              </button>
            </div>
          )}
        </RevealWrapper>
      </div>
    </section>
  );
}
