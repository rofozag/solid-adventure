import Link from "next/link";
import { Icon } from '@iconify/react';

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { icon: "mdi:youtube", href: "https://youtube.com/@flexeditz_?si=Plq8pDkrUlqp_kUf", label: "YouTube" },
  { icon: "mdi:instagram", href: "https://www.instagram.com/thenameistflex?igsh=bDN6aHV0eXh1bHBz", label: "Instagram" },
  { icon: "ic:baseline-tiktok", href: "https://www.tiktok.com/@tfvisuals_?_r=1&_t=ZS-96ODvBjVMpU", label: "TikTok" },
  { icon: "ic:baseline-whatsapp", href: "https://wa.me/+2349011094879", label: "WhatsApp" },
];

export default function Footer() {
  return (
    <div role="contentinfo" className="bg-bg border-t border-border py-12 px-8 md:px-12 lg:px-20">
      <div className="max-w-[1060px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <a href="#" className="font-display font-black text-[19px] tracking-wide text-text hover:opacity-75 transition-opacity duration-300">
            TF<span className="text-gold">.</span>
          </a>
          <nav className="flex flex-wrap gap-8">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="font-mono text-[10px] tracking-[3px] uppercase text-text-mid hover:text-gold transition-colors duration-300">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex gap-5">
            {SOCIALS.map(({ icon, href, label }) => (
              <Link key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-text-dim hover:text-gold transition-colors duration-300">
                <Icon icon={icon} width={16} height={16} />
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="font-mono text-[9px] tracking-[1px] text-text-dim">
            &copy; 2026 TFvisuals. All rights reserved.
          </p>
          <Link href="https://rofiozag-dev.vercel.app" target="_blank" rel="noopener noreferrer" className="font-mono text-[9px] tracking-[1px] text-text-dim hover:text-gold transition-colors duration-300">
            Built by Rofiozag Dev
          </Link>
        </div>
      </div>
    </div>
  );
}