# Portfolio Images

Add your work images here. File naming convention:

Photography: photo-1.jpg, photo-2.jpg, photo-3.jpg
Video: video-1.jpg, video-2.jpg, video-3.jpg (thumbnails)
Design: design-1.jpg, design-2.jpg, design-3.jpg
Portrait: portrait.jpg (for the About section)
OG image: /public/og-image.jpg (1200x630px for social sharing)

After adding images, replace the gradient div placeholders in:
- components/sections/Work.tsx (WorkCard)
- components/sections/About.tsx (portrait)

Use next/image with fill + object-cover for best performance.
