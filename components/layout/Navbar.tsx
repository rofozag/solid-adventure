"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Work", id: "work" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Contact", id: "contact" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id: string) => {
    scrollTo(id);
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between
          px-8 md:px-12 h-[72px] transition-all duration-300
          ${
            scrolled
              ? "bg-bg/90 backdrop-blur-md border-b border-border"
              : "bg-transparent"
          }`}
      >
        {/* Wordmark */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display font-black text-[19px] tracking-wide text-text
            hover:opacity-75 transition-opacity duration-300"
        >
          TF<span className="text-gold">.</span>
          VISUALS
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="relative font-mono text-[10px] tracking-[3px] uppercase
                text-text-mid hover:text-gold transition-colors duration-300 group"
            >
              {link.label}
              <span
                className="absolute bottom-[-2px] left-0 w-0 h-px bg-gold
                  group-hover:w-full transition-all duration-300"
              />
            </button>
          ))}

          <button
            onClick={() => handleNav("contact")}
            className="relative overflow-hidden border border-gold text-gold
              font-mono text-[9px] tracking-[3px] uppercase px-6 py-2.5
              hover:text-bg transition-colors duration-400 group"
          >
            <span
              className="absolute inset-0 bg-gold scale-x-0 origin-left
                group-hover:scale-x-100 transition-transform duration-400"
            />
            <span className="relative z-10">Hire Me</span>
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-text-mid hover:text-gold transition-colors duration-300 p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-[72px] left-0 right-0 z-40 bg-surface
              border-b border-border px-8 py-8 flex flex-col gap-6 md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="font-mono text-[11px] tracking-[3px] uppercase
                  text-text-mid hover:text-gold transition-colors duration-300 text-left"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav("contact")}
              className="border border-gold text-gold font-mono text-[9px]
                tracking-[3px] uppercase px-6 py-3 hover:bg-gold hover:text-bg
                transition-all duration-300 w-fit mt-2"
            >
              Hire Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
