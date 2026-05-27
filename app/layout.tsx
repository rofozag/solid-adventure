import type { Metadata } from "next";
import { Playfair_Display, DM_Mono } from "next/font/google";
import "./globals.css"; 
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";


const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TF-VISUALS — Photographer · Video Editor · Designer",
  description:
    "Premium photography, video production, and graphic design services in Nigeria and worldwide. Available for commercial, editorial, and brand projects.",
  icons:{
    icon: "/favicon.jpg"
  },
    keywords: [
    "photographer Nigeria",
    "video editor Lagos",
    "graphic designer Nigeria",
    "brand photography",
    "commercial video production",
    "creative portfolio Nigeria",
  ],
  openGraph: {
    title: "TF-VISUALS — Photographer · Video Editor · Designer",
    description:
      "Premium photography, video production, and graphic design services in Nigeria and worldwide.",
    type: "website",
    images: [
      {
        url: "/og-image2.jpg",
        width: 1200,
        height: 630,
        alt: "TF-VISUALS Creative Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TF-VISUALS — Photographer · Video Editor · Designer",
    description:
      "Premium photography, video production, and graphic design services in Nigeria and worldwide.",
  },
};

const GRAIN_SVG =
  "data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmMono.variable}`}
      style={{ backgroundColor: "#090807" }}
    >
      <body className="bg-bg text-text font-mono antialiased overflow-x-hidden">
        {/* Grain overlay */}
        <div
          aria-hidden="true"
          className="grain-overlay"
          style={{
            position: "fixed",
            top: "-50%",
            left: "-50%",
            width: "200%",
            height: "200%",
            pointerEvents: "none",
            zIndex: 9999,
            opacity: 0.035,
            backgroundImage: `url("${GRAIN_SVG}")`,
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
