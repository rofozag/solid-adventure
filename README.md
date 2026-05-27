# Creative Portfolio — Next.js 14

Premium portfolio for a photographer, video editor & graphic designer.
Built with Next.js 14+, TypeScript, Tailwind CSS, and Framer Motion.

---

## Quick Start

```bash
npm install
cp .env.local.example .env.local
# fill in .env.local values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment Variables   

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | From [resend.com](https://resend.com) — for contact form emails |
| `CONTACT_EMAIL` | The email address that receives enquiries |
| `NEXT_PUBLIC_SITE_URL` | Your live domain e.g. `https://kelechi.com` |

---

## Customisation Checklist

Search for `[PLACEHOLDER]` comments across the codebase:

- [ ] **Client name** — `components/layout/Navbar.tsx`, `components/layout/Footer.tsx`
- [ ] **Bio text** — `components/sections/About.tsx`
- [ ] **Contact details** — `components/sections/Contact.tsx`
- [ ] **Social links** — `components/layout/Footer.tsx`
- [ ] **SEO metadata** — `app/layout.tsx`
- [ ] **Portfolio images** — add to `/public/works/` (see `public/works/README.txt`)
- [ ] **Portrait photo** — `components/sections/About.tsx`

---

## Adding Real Images

1. Place images in `/public/works/`
2. In `components/sections/Work.tsx`, inside `WorkCard`, replace the gradient `div` with:

```tsx
import Image from "next/image";

<Image
  src={work.imageSrc}
  alt={work.title}
  fill
  className="object-cover"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
/>
```

3. In `components/sections/About.tsx`, replace the gradient `div` with:

```tsx
<Image
  src="/portrait.jpg"
  alt="[Client name]"
  fill
  className="object-cover"
  sizes="(max-width: 768px) 100vw, 50vw"
  priority
/>
```

---

## Deploy to Vercel

1. Push repo to GitHub
2. Import on [vercel.com](https://vercel.com/new)
3. Add environment variables in **Settings → Environment Variables**
4. Deploy — Vercel auto-detects Next.js, no build config needed
5. Add your custom domain in **Settings → Domains**

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Email:** Resend
- **Validation:** Zod
- **Icons:** Lucide React
- **Deployment:** Vercel

---

Built by [Rofiozag Dev](https://rofiozag.dev) — AI · Software · Precision
