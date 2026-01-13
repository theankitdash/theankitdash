# Ankit Dash - Portfolio Website

A modern, premium portfolio website built with Next.js 15, TypeScript, and custom CSS. Showcasing AI/ML projects and creative work.

## 🚀 Features

- **Premium Dark Theme**: Glassmorphism effects with smooth animations
- **Three Main Pages**:
  - **Home**: Personal bio + 3 featured projects
  - **Work**: Complete project showcase with video demos on hover
  - **Creative**: Instagram video integration
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **SEO Optimized**: Proper metadata and semantic HTML
- **TypeScript**: Type-safe code throughout

## 📋 Prerequisites

- Node.js 22+ installed
- npm or yarn package manager

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

### Adding Project Videos

Edit `data/projects.ts` and add video URLs to the `videoUrl` field:

```typescript
{
  id: '1',
  title: 'Your Project',
  // ... other fields
  videoUrl: 'https://your-video-url.mp4', // Add your video URL here
}
```

### Adding Instagram Videos

Edit `app/creative/page.tsx` and add Instagram embed URLs:

```typescript
const [instagramVideos] = useState([
  {
    id: 1,
    embedUrl: 'https://www.instagram.com/reel/YOUR_REEL_ID/embed',
    placeholder: 'Instagram Video 1'
  },
  // ... add more videos
]);
```

**How to get Instagram embed URL:**
1. Go to your Instagram post/reel
2. Click the three dots (...)
3. Click "Embed"
4. Copy the embed code and extract the URL from the `src` attribute

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

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

This project can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any platform supporting Next.js

### Deploy to Vercel:

```bash
npm install -g vercel
vercel
```

## 📁 Project Structure

```
portfolio-nextjs/
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── work/
│   │   └── page.tsx        # Work page
│   └── creative/
│       └── page.tsx        # Creative page
├── components/
│   ├── Navigation.tsx      # Navigation component
│   ├── Footer.tsx          # Footer component
│   └── ProjectCard.tsx     # Project card component
├── data/
│   └── projects.ts         # Project data
├── public/                 # Static files
├── package.json
├── tsconfig.json
└── next.config.js
```

## 🎯 Key Technologies

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type safety
- **Custom CSS**: Premium dark theme with animations
- **React 18**: Latest React features

## 📄 License

Personal portfolio project - Feel free to use as inspiration!

## 🤝 Contact

- LinkedIn: [theankitdash](https://linkedin.com/in/theankitdash)
- GitHub: [theankitdash](https://github.com/theankitdash)
- Email: ankitdash3037@gmail.com

---

Built with ❤️ by Ankit Dash
