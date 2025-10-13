# Architecture Documentation

## System Overview

Uzi's Favorite Sport Teams is a Next.js-based single-page application (with up to 3 pages) that displays sports teams information, schedules, and highlights.

## Architecture Principles

1. **Client-Side Rendering**: Most content is static with external links
2. **Responsive Design**: Mobile-first approach using Tailwind CSS
3. **Component-Based**: Modular React components for reusability
4. **Type Safety**: TypeScript for all code

## System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                     Next.js App Router                   │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  ┌─────────────┐  ┌──────────────┐  ┌─────────────┐    │
│  │   Layout    │  │  Navigation  │  │   Footer    │    │
│  │  (Header)   │  │  (Smooth     │  │             │    │
│  │             │  │   Scroll)    │  │             │    │
│  └─────────────┘  └──────────────┘  └─────────────┘    │
│                                                           │
│  ┌─────────────────────────────────────────────────┐    │
│  │              Main Landing Page                   │    │
│  │  ┌─────────────────────────────────────────┐   │    │
│  │  │  Hero Section (Logo + Title)            │   │    │
│  │  └─────────────────────────────────────────┘   │    │
│  │  ┌─────────────────────────────────────────┐   │    │
│  │  │  Favorite Soccer Teams Section          │   │    │
│  │  └─────────────────────────────────────────┘   │    │
│  │  ┌─────────────────────────────────────────┐   │    │
│  │  │  Favorite Football Teams Section        │   │    │
│  │  └─────────────────────────────────────────┘   │    │
│  │  ┌─────────────────────────────────────────┐   │    │
│  │  │  Favorite Basketball Teams Section      │   │    │
│  │  └─────────────────────────────────────────┘   │    │
│  └─────────────────────────────────────────────────┘    │
│                                                           │
│  ┌─────────────────────────────────────────────────┐    │
│  │           Schedules Page (Optional)              │    │
│  │  - Soccer Schedule Section                       │    │
│  │  - Football Schedule Section                     │    │
│  │  - Basketball Schedule Section                   │    │
│  └─────────────────────────────────────────────────┘    │
│                                                           │
│  ┌─────────────────────────────────────────────────┐    │
│  │           Highlights Page (Optional)             │    │
│  │  - Soccer Highlights Section                     │    │
│  │  - Football Highlights Section                   │    │
│  │  - Basketball Highlights Section                 │    │
│  └─────────────────────────────────────────────────┘    │
│                                                           │
└─────────────────────────────────────────────────────────┘
              │                    │
              ▼                    ▼
    ┌──────────────────┐  ┌─────────────────┐
    │  TheSportsDB.com │  │  External Links │
    │   (Schedules)    │  │  (Google/YT)    │
    └──────────────────┘  └─────────────────┘
```

## Component Hierarchy

```
App Layout
├── Header
│   ├── Logo (Text + Image)
│   └── Navigation Menu
│       ├── Home Link
│       ├── Schedules Link (smooth scroll or page)
│       └── Highlights Link (smooth scroll or page)
├── Main Content
│   ├── Hero Section
│   ├── Favorite Teams Sections
│   │   ├── Soccer Teams Section
│   │   ├── Football Teams Section
│   │   └── Basketball Teams Section
│   ├── Schedules Sections
│   │   ├── Soccer Schedule
│   │   ├── Football Schedule
│   │   └── Basketball Schedule
│   └── Highlights Sections
│       ├── Soccer Highlights
│       ├── Football Highlights
│       └── Basketball Highlights
└── Footer
    └── Copyright & Links
```

## Data Flow

1. **Static Content**: Team names, logos, and descriptions are hardcoded
2. **External Links**: 
   - TheSportsDB links open in new tabs for schedules
   - Google Search links open in new tabs for highlights
   - YouTube links open in new tabs for video highlights

## Module Boundaries

### `/app` - Application Pages
- Page routes and layouts
- Server components for initial render
- Client components for interactivity

### `/components/layout` - Layout Components
- Header with logo and navigation
- Footer
- Navigation menu with smooth scrolling

### `/components/sections` - Page Sections
- Hero section
- Team sections (Soccer, Football, Basketball)
- Schedule sections
- Highlights sections

### `/components/ui` - UI Components
- Reusable buttons
- Cards for team display
- Section headers
- External link components

## Key Design Decisions

1. **Single Page vs Multi-Page**: 
   - Primary content on landing page with smooth scroll
   - Optional separate pages for schedules/highlights if content is extensive
   - Maximum 3 pages total

2. **External Integration**:
   - No API calls - direct links to external resources
   - TheSportsDB for schedule data
   - Google Search and YouTube for highlights

3. **Responsive Design**:
   - Mobile-first approach
   - Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
   - Flexible grid layouts

4. **Color Scheme**:
   - Primary: Sky blue (#0ea5e9)
   - Secondary: Yellow (#fbbf24)
   - Gradients and combinations for visual appeal

## SEO Strategy

1. **Metadata**: Proper title, description, and keywords
2. **Semantic HTML**: Header tags (h1, h2, h3) in proper order
3. **Alt Text**: All images have descriptive alt attributes
4. **Open Graph**: Social media preview tags
5. **Sitemap**: Auto-generated sitemap.xml
6. **Robots.txt**: Already present in /public

## Performance Considerations

1. **Image Optimization**: Next.js Image component for logo
2. **Code Splitting**: Automatic with Next.js App Router
3. **Lazy Loading**: Images and components loaded on demand
4. **Minimal Dependencies**: Only essential packages

