# Getting Started Guide

Welcome to Uzi's Favorite Sport Teams website! This guide will help you set up and run the project.

## 📋 Prerequisites

Before you begin, ensure you have:

- **Node.js** 18.x or higher ([Download here](https://nodejs.org/))
- **npm** (comes with Node.js) or **yarn**
- A code editor (VS Code recommended)
- Git (for version control)

## 🚀 Quick Start

### 1. Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required packages including:
- Next.js 14
- React 18
- Tailwind CSS 3
- TypeScript 5

### 2. Run Development Server

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to:
```
http://localhost:3000
```

You should see the landing page with:
- Hero section with logo
- Favorite teams sections
- Schedules sections
- Highlights sections

### 3. Verify Everything Works

Check that:
- ✅ Navigation menu works and scrolls smoothly
- ✅ Mobile menu (hamburger) works on small screens
- ✅ Logo displays in header and hero
- ✅ All external links open in new tabs
- ✅ Colors are sky blue and yellow
- ✅ Page is responsive on mobile

## 🛠️ Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## 📁 Project Structure

```
uzis-favorite-sport-teams/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx           # Main page
│   ├── globals.css        # Global styles
│   └── sitemap.ts         # SEO sitemap
├── components/
│   ├── layout/            # Header, Footer, Navigation
│   ├── sections/          # Page sections
│   └── ui/                # Reusable UI components
├── public/
│   ├── logo.jpg          # Your logo
│   └── robots.txt        # SEO robots file
├── docs/                  # Documentation
│   ├── architecture.md
│   ├── technical.md
│   ├── prd.md
│   └── status.md
└── tasks/
    └── tasks.md          # Development tasks
```

## 🎨 Customization

### Changing Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    sky: "#0ea5e9",    // Change sky blue
    yellow: "#fbbf24", // Change yellow
  },
}
```

### Adding a New Team

1. Open the relevant section file (e.g., `components/sections/SoccerTeams.tsx`)
2. Add your team to the array:
```typescript
const soccerTeams = [
  // ... existing teams
  { name: "New Team", country: "Country" },
];
```

### Adding a New Section

1. Create a new component in `components/sections/`
2. Import it in `app/page.tsx`
3. Add it to the page layout

## 🐛 Troubleshooting

### Port 3000 Already in Use

Kill the process using port 3000 or use a different port:
```bash
npm run dev -- -p 3001
```

### Dependencies Installation Fails

Try:
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Images Not Loading

- Ensure `public/logo.jpg` exists
- Check image paths are correct
- Verify Next.js Image component usage

### TypeScript Errors

Run type checking:
```bash
npx tsc --noEmit
```

Fix any type errors shown.

### Linting Errors

Fix automatically:
```bash
npm run lint -- --fix
```

## 📱 Testing on Mobile

### Using Your Phone

1. Find your computer's IP address:
   - Windows: `ipconfig`
   - Mac/Linux: `ifconfig`

2. Run dev server:
   ```bash
   npm run dev
   ```

3. On your phone, visit:
   ```
   http://YOUR_IP_ADDRESS:3000
   ```

### Using Browser DevTools

1. Open Chrome DevTools (F12)
2. Click device toolbar icon (Ctrl+Shift+M)
3. Select different device sizes

## 🚢 Ready to Deploy?

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions to Vercel, Netlify, or your own server.

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 🎯 What's Included

This project includes:

### Sports Coverage
- ⚽ Soccer (4 teams/leagues)
- 🏈 Football (1 team)
- 🏀 Basketball (4 teams)

### Features
- 📅 Schedule links to TheSportsDB
- 🎥 Highlight links to YouTube and Google
- 📱 Fully responsive design
- 🎨 Sky blue and yellow theme
- 🔍 SEO optimized
- ⚡ Fast performance

### External Links (28 total)
- 9 schedule links
- 10 highlight links
- 3 "Refresh Online" buttons
- All open in new tabs safely

## ✨ Tips for Success

1. **Use the latest Node.js LTS version** for best compatibility
2. **Keep dependencies updated** with `npm update`
3. **Test on real devices** before deploying
4. **Check browser console** for any errors
5. **Use Lighthouse** in Chrome DevTools to check performance

## 💡 Need Help?

1. Check the documentation in the `docs/` folder
2. Review the PRD for requirements
3. Check the technical documentation
4. Review existing code for patterns

## 🎉 You're All Set!

Your development environment is ready. Start exploring the code and make it your own!

Happy coding! 🚀

