# Ankit Dash - Portfolio Website

A modern, premium portfolio website built with Next.js 16, TypeScript, and custom CSS. Deployed on Cloudflare Pages via OpenNext. Showcasing AI/ML projects, VFX work, and creative content.

## 🚀 Features

- **Premium Dark Theme**: Glassmorphism effects, animated background particles, and smooth scroll-reveal animations
- **Four Main Pages**:
  - **Home**: Hero section, belief quote, featured projects (BentoGrid), and creative showcase
  - **Work**: Complete project showcase split into Completed and Upcoming projects
  - **Creative**: VFX video grid + Instagram Pulse Cuts embeds
  - **About**: Personal timeline / journey
- **Animated Background**: Floating particle system across all pages
- **Scroll Reveal Animations**: Elements animate in as you scroll
- **Tilt Card Effects**: Interactive 3D hover tilt on cards
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **SEO Optimized**: Sitemap, robots.txt, Open Graph, Twitter Cards, and semantic HTML
- **TypeScript**: Type-safe code throughout

## 📋 Prerequisites

- Node.js 22+ installed
- npm package manager

## 🛠️ Installation

1. Navigate to the project directory:
```bash
cd portfolio-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Adding Your Content

### Adding / Editing Projects

Edit `data/projects.ts` to manage your projects. Each project has:

```typescript
{
  id: '1',
  title: 'Project Name',
  description: 'Project description...',
  githubUrl: 'https://github.com/...',
  skills: ['Skill1', 'Skill2'],
  videoUrl: 'https://your-video-url.mp4',  // Optional demo video
  featured: true,   // Show on Home page
  upcoming: true,   // Mark as upcoming (shown in separate section on Work page)
}
```

### Adding VFX Content

Edit `data/vfx.ts` to add VFX videos/images. Place media files in `public/vfx/`:

```typescript
{
  id: 1,
  title: 'Render Title',
  description: 'Description of the VFX work',
  type: 'video',              // 'video' or 'image'
  url: '/vfx/your-file.mp4',  // Path relative to public/
}
```

### Adding Pulse Cuts (Instagram Reels)

Edit `data/cuts.ts` to add Instagram reel embeds:

```typescript
{
  id: 1,
  embedUrl: 'https://www.instagram.com/reel/YOUR_REEL_ID/embed',
  placeholder: 'Pulse Cut 1'
}
```

**How to get Instagram embed URL:**
1. Go to your Instagram reel
2. Click the three dots (...)
3. Click "Embed"
4. Copy the URL from the `src` attribute of the embed code

## 🎨 Customization

### Colors

Edit `app/globals.css` to change the color scheme. Main colors are:
- Primary gradient: `#BB86FC` to `#82A9FF`
- Background: `#0a0a0a` to `#1a1a2e`
- Text: `#E8E8E8`

### Social Links

Edit `components/Footer.tsx` to update social media links.

### Projects

Edit `data/projects.ts` to add/remove/modify projects.

### VFX & Creative Content

Edit `data/vfx.ts` and `data/cuts.ts` to manage creative content.

## 🌐 Deployment

This project is deployed to **Cloudflare Pages** via [OpenNext](https://opennext.js.org/cloudflare).

### Build for Cloudflare Pages:

```bash
npm run pages:build
```

Deployment is handled automatically via GitHub integration with Cloudflare Pages.

### Build for local production preview:

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio-nextjs/
├── app/
│   ├── layout.tsx              # Root layout with nav, footer, animated bg
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles (38KB+)
│   ├── icon.png                # Favicon
│   ├── sitemap.ts              # Dynamic sitemap generation
│   ├── about/
│   │   └── page.tsx            # About / Timeline page
│   ├── work/
│   │   └── page.tsx            # Work page (completed + upcoming)
│   └── creative/
│       └── page.tsx            # Creative page (VFX + Pulse Cuts)
├── components/
│   ├── AnimatedBackground.tsx  # Floating particle background
│   ├── BentoGrid.tsx           # Bento-style project grid (Home)
│   ├── CreativeShowcase.tsx    # Creative content preview (Home)
│   ├── Footer.tsx              # Footer with social links
│   ├── HamburgerMenu.tsx       # Mobile hamburger menu
│   ├── Navigation.tsx          # Top navigation bar
│   ├── ProjectCard.tsx         # Project card with video hover
│   ├── ScrollReveal.tsx        # Scroll-triggered reveal animation
│   ├── TiltCard.tsx            # 3D tilt effect card wrapper
│   └── VFXGrid.tsx             # VFX video/image grid
├── data/
│   ├── projects.ts             # Project data + query helpers
│   ├── vfx.ts                  # VFX items data
│   └── cuts.ts                 # Pulse Cuts (Instagram reels) data
├── public/
│   ├── robots.txt              # Search engine crawl rules
│   └── vfx/                    # VFX media assets
├── package.json
├── tsconfig.json
├── next.config.js
├── wrangler.toml               # Cloudflare Workers config
└── open-next.config.ts         # OpenNext Cloudflare adapter config
```

## 🎯 Key Technologies

- **Next.js 16**: React framework with App Router
- **TypeScript**: Type safety
- **Custom CSS**: Premium dark theme with glassmorphism and animations
- **React 18**: Latest React features
- **OpenNext**: Cloudflare Pages adapter for Next.js
- **Wrangler**: Cloudflare Workers CLI

## 📄 License

Personal portfolio project - Feel free to use as inspiration!

## 🤝 Contact

- LinkedIn: [theankitdash](https://linkedin.com/in/theankitdash)
- GitHub: [theankitdash](https://github.com/theankitdash)
- Email: ankitdash3037@gmail.com

---

Built with ❤️ by Ankit Dash
