# Uzi's Favorite Sport Teams

A modern, professional landing page showcasing favorite sports teams across Soccer, Football, and Basketball with live schedules and highlights integration.

## 🏆 Overview

This is a Next.js-based web application that displays favorite sports teams, upcoming schedules, and recent highlights with a clean, modern interface.

## 🎨 Design

- **Primary Colors**: Sky blue and yellow background
- **Style**: Professional, elegant, and inviting
- **Logo**: Text-based + image logo
- **Responsive**: Mobile-first design approach

## 🛠️ Technology Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)

## 📋 Features

- Smooth scrolling navigation
- Responsive design for all devices
- Integration with TheSportsDB for schedules
- Direct links to Google Search and YouTube for highlights
- SEO optimized
- Modern UI/UX with Tailwind CSS

## 🚀 Getting Started

### ⚡ Quick Start (3 Steps)

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
# Visit: http://localhost:3000
```

### 📖 Detailed Guides

- **New here?** → Read [START_HERE.md](./START_HERE.md)
- **Quick setup** → Read [QUICK_START.md](./QUICK_START.md)
- **Full guide** → Read [GETTING_STARTED.md](./GETTING_STARTED.md)
- **Deploy it** → Read [DEPLOYMENT.md](./DEPLOYMENT.md)
- **All files** → Read [FILE_INDEX.md](./FILE_INDEX.md)

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── schedules/          # Schedule pages
│   └── highlights/         # Highlights pages
├── components/
│   ├── layout/             # Layout components (Header, Footer, Nav)
│   ├── sections/           # Page sections
│   └── ui/                 # Reusable UI components
├── public/                 # Static assets
├── docs/                   # Documentation
└── tailwind.config.ts      # Tailwind configuration
```

## 🎯 Key Patterns

1. **Component Structure**: Small, single-responsibility components under 300 lines
2. **TypeScript**: Strict typing, no `any` types
3. **Styling**: Tailwind utility classes, responsive design
4. **Navigation**: Smooth scroll behavior with anchor links
5. **External Links**: Open in new tabs with proper rel attributes

## 📖 Documentation

- [Architecture](./docs/architecture.md) - System architecture and component relationships
- [Technical Guide](./docs/technical.md) - Technical specifications and patterns
- [Product Requirements](./docs/prd.md) - Feature requirements and specifications
- [Tasks](./tasks/tasks.md) - Current development tasks

## 🔧 Development

- Keep components under 300 lines
- Use TypeScript strict mode
- Follow existing patterns
- Update status.md with progress
- Run linting before committing

## 📄 License

Private project for personal use.

