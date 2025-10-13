# Technical Documentation

## Technology Stack

### Core Framework
- **Next.js 14+**: React framework with App Router
- **React 18+**: UI library
- **TypeScript 5+**: Type safety

### Styling
- **Tailwind CSS 3+**: Utility-first CSS framework
- **PostCSS**: CSS processing
- **Autoprefixer**: Browser compatibility

### Development Tools
- **ESLint**: Code linting
- **Prettier**: Code formatting (if configured)
- **TypeScript Compiler**: Type checking

## Project Setup

### Dependencies

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "autoprefixer": "^10.0.0",
    "postcss": "^8.0.0",
    "tailwindcss": "^3.0.0",
    "typescript": "^5.0.0"
  }
}
```

## Tailwind Configuration

### Color Palette

```typescript
// tailwind.config.ts
colors: {
  primary: {
    sky: '#0ea5e9',  // Sky blue
    yellow: '#fbbf24', // Yellow
  },
  // Use Tailwind's default colors for others
}
```

### Custom Classes

- Responsive utilities for all breakpoints
- Custom gradient combinations for sky-yellow theme
- Smooth scroll behavior

## Component Patterns

### 1. Layout Components

```typescript
// Pattern: Server components by default
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Header content */}
    </header>
  );
}
```

### 2. Section Components

```typescript
// Pattern: Reusable section wrapper
interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, title, children, className }: SectionProps) {
  return (
    <section id={id} className={`py-16 px-4 ${className}`}>
      <h2 className="text-3xl font-bold mb-8">{title}</h2>
      {children}
    </section>
  );
}
```

### 3. Team Card Component

```typescript
// Pattern: Reusable card for team display
interface TeamCardProps {
  name: string;
  link: string;
  type: 'schedule' | 'highlight';
}

export function TeamCard({ name, link, type }: TeamCardProps) {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
    >
      <h3 className="text-xl font-semibold">{name}</h3>
      <span className="text-sm text-gray-600">View {type}</span>
    </a>
  );
}
```

## Styling Patterns

### 1. Responsive Design

```typescript
// Mobile-first approach
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Content */}
</div>
```

### 2. Color Scheme Application

```typescript
// Sky blue and yellow backgrounds
<section className="bg-sky-100">
  {/* Section content */}
</section>

<section className="bg-yellow-50">
  {/* Section content */}
</section>

// Alternating pattern for visual interest
```

### 3. Smooth Scrolling

```typescript
// In global CSS or Tailwind config
html {
  scroll-behavior: smooth;
}

// Navigation links
<a href="#soccer" className="hover:text-sky-600 transition">
  Soccer
</a>
```

## TypeScript Patterns

### 1. Strict Typing

```typescript
// No 'any' types
// Use proper interfaces and types

interface Team {
  name: string;
  scheduleUrl: string;
  highlightUrls: string[];
}

interface SportsCategory {
  title: string;
  teams: Team[];
}
```

### 2. Component Props

```typescript
// Always define prop types
type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
};

export function Button({ children, onClick, variant = 'primary' }: ButtonProps) {
  // Component implementation
}
```

## SEO Implementation

### 1. Metadata

```typescript
// app/layout.tsx
export const metadata = {
  title: "Uzi's Favorite Sport Teams",
  description: "Explore favorite soccer, football, and basketball teams with schedules and highlights",
  keywords: ["sports", "soccer", "football", "basketball", "teams"],
  openGraph: {
    title: "Uzi's Favorite Sport Teams",
    description: "Your hub for favorite sports teams",
    type: "website",
  },
};
```

### 2. Semantic HTML

```typescript
// Use proper heading hierarchy
<main>
  <h1>Uzi's Favorite Sport Teams</h1>
  <section>
    <h2>Favorite Soccer Teams</h2>
    <article>
      <h3>F.C. Maccabi Tel Aviv</h3>
    </article>
  </section>
</main>
```

## External Links Configuration

### TheSportsDB Links
- Open in new tab: `target="_blank"`
- Security: `rel="noopener noreferrer"`
- Purpose: View team schedules

### Google Search Links
- Same security attributes
- Purpose: Find latest highlights

### YouTube Links
- Same security attributes
- Purpose: Watch video highlights

## File Organization

```
components/
├── layout/
│   ├── Header.tsx       # Logo + Navigation
│   ├── Footer.tsx       # Footer content
│   └── Navigation.tsx   # Menu component
├── sections/
│   ├── Hero.tsx         # Hero section
│   ├── SoccerTeams.tsx  # Soccer teams section
│   ├── FootballTeams.tsx
│   ├── BasketballTeams.tsx
│   ├── Schedules.tsx    # All schedules
│   └── Highlights.tsx   # All highlights
└── ui/
    ├── TeamCard.tsx     # Team display card
    ├── Section.tsx      # Section wrapper
    └── ExternalLink.tsx # External link component
```

## Build & Deployment

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

### Deployment (Vercel)
- Connect GitHub repository
- Auto-deploy on push to main
- Environment: Node.js 18+

## Performance Optimization

1. **Image Optimization**: Use Next.js `<Image>` component
2. **Font Optimization**: Use Next.js font optimization
3. **Code Splitting**: Automatic with App Router
4. **CSS Optimization**: Tailwind purges unused CSS
5. **Static Generation**: Pre-render pages when possible

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

