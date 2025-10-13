# Product Requirements Document (PRD)
## Uzi's Favorite Sport Teams Landing Page

**Version**: 1.0  
**Last Updated**: October 12, 2025  
**Status**: In Development

---

## 1. Executive Summary

Build a modern, professional landing page showcasing favorite sports teams across three categories (Soccer, Football, Basketball) with integrated schedule and highlight links. The site emphasizes clean design, easy navigation, and quick access to external resources.

---

## 2. Goals & Objectives

### Primary Goals
- Create an attractive, professional landing page for favorite sports teams
- Provide quick access to team schedules via TheSportsDB
- Enable easy access to team highlights via Google Search and YouTube
- Deliver excellent user experience on all devices

### Success Metrics
- Responsive design working on mobile, tablet, and desktop
- All external links functioning correctly
- Fast page load times (<3 seconds)
- Clean, professional visual design
- SEO-optimized for search engines

---

## 3. Target Audience

**Primary User**: The site owner (Uzi) and visitors interested in these specific sports teams

**Use Cases**:
- Quickly check upcoming game schedules
- Find recent game highlights
- Browse favorite teams by sport category
- Access external resources for detailed information

---

## 4. Features & Requirements

### 4.1 Branding & Design

| Feature | Requirement | Priority |
|---------|-------------|----------|
| Color Scheme | Sky blue (#0ea5e9) and yellow (#fbbf24) backgrounds | Must Have |
| Logo | Text-based "Uzi's Favorite Sport Teams" + image logo (logo.jpg) | Must Have |
| Style | Professional, elegant, inviting | Must Have |
| Visual Focus | Strong emphasis on team names and categories | Must Have |
| Responsive | Mobile-first, works on all screen sizes | Must Have |

### 4.2 Navigation

| Feature | Requirement | Priority |
|---------|-------------|----------|
| Main Menu | Smooth scroll to each section | Must Have |
| Sticky Header | Navigation remains accessible while scrolling | Must Have |
| Mobile Menu | Hamburger menu on mobile devices | Must Have |
| Section Links | Jump to Soccer, Football, Basketball, Schedules, Highlights | Must Have |

### 4.3 Content Sections

#### A. Hero Section
- Display logo (text + image)
- Main headline: "Uzi's Favorite Sport Teams"
- Welcoming subheadline

#### B. Favorite Soccer Teams
- **Subheadline**: "Favorite Soccer Teams"
- **Refresh Option**: Link/button to refresh/view online
- **Teams**:
  - F.C. Maccabi Tel Aviv
  - FC Barcelona
  - Premier League England
  - Spanish La Liga

#### C. Favorite Football Teams
- **Subheadline**: "Favorite Football Teams"
- **Refresh Option**: Link/button to refresh/view online
- **Teams**:
  - Dallas Cowboys

#### D. Favorite Basketball Teams
- **Subheadline**: "Favorite Basketball Teams"
- **Refresh Option**: Link/button to refresh/view online
- **Teams**:
  - B.C. Maccabi Tel Aviv
  - Portland Trail Blazers
  - Brooklyn Nets
  - Dallas Mavericks

#### E. Upcoming Soccer Schedule
- **Subheadline**: "Upcoming Soccer Schedule"
- **Content**: Links to TheSportsDB for each team/league
  - F.C. Maccabi Tel Aviv → https://www.thesportsdb.com/team/134315-maccabi-tel-aviv
  - FC Barcelona → https://www.thesportsdb.com/team/133739-barcelona
  - Premier League England → https://www.thesportsdb.com/league/4328-english-premier-league
  - Spanish La Liga → https://www.thesportsdb.com/league/4335-spanish-la-liga

#### F. Upcoming Football Schedule
- **Subheadline**: "Upcoming Football Schedule"
- **Content**: Links to TheSportsDB
  - Dallas Cowboys → https://www.thesportsdb.com/team/134934-dallas-cowboys

#### G. Upcoming Basketball Schedule
- **Subheadline**: "Upcoming Basketball Schedule"
- **Content**: Links to TheSportsDB for each team
  - B.C. Maccabi Tel Aviv → https://www.thesportsdb.com/team/136065-maccabi-tel-aviv-bc
  - Portland Trail Blazers → https://www.thesportsdb.com/team/134888-portland-trail-blazers
  - Brooklyn Nets → https://www.thesportsdb.com/team/134861-brooklyn-nets
  - Dallas Mavericks → https://www.thesportsdb.com/team/134875-dallas-mavericks

#### H. Soccer Teams Highlights
- **Subheadline**: "Soccer Teams Highlights"
- **Content**: Links to YouTube and Google Search for highlights
  - F.C. Maccabi Tel Aviv (YouTube + Google)
  - FC Barcelona (Google)
  - Premier League England (Google)
  - Spanish La Liga (Google)

#### I. Football Teams Highlights
- **Subheadline**: "Football Teams Highlights"
- **Content**: Links to Google Search
  - Dallas Cowboys (Google)

#### J. Basketball Teams Highlights
- **Subheadline**: "Basketball Teams Highlights"
- **Content**: Links to Google Search
  - B.C. Maccabi Tel Aviv (Google)
  - Portland Trail Blazers (Google)
  - Brooklyn Nets (Google)
  - Dallas Mavericks (Google)

### 4.4 Technical Requirements

| Feature | Requirement | Priority |
|---------|-------------|----------|
| Framework | Next.js 14+ with App Router | Must Have |
| Styling | Tailwind CSS | Must Have |
| Language | TypeScript (strict mode) | Must Have |
| Pages | Maximum 3 pages | Must Have |
| SEO | Meta tags, semantic HTML, sitemap | Must Have |
| Performance | Fast loading, optimized images | Must Have |
| External Links | Open in new tabs with security attributes | Must Have |

---

## 5. User Experience (UX)

### 5.1 Navigation Flow
1. User lands on hero section
2. Scrolls or clicks menu to view favorite teams
3. Continues to schedules section
4. Browses highlights section
5. All external links open in new tabs

### 5.2 Design Principles
- **Clarity**: Clear section headers and team names
- **Accessibility**: High contrast, readable fonts
- **Speed**: Fast page loads, minimal external dependencies
- **Simplicity**: Clean layout without clutter
- **Consistency**: Uniform card design for all teams

---

## 6. Technical Architecture

### 6.1 Page Structure
- **Option 1** (Recommended): Single-page with smooth scrolling sections
- **Option 2**: 3 pages (Home, Schedules, Highlights) with navigation

### 6.2 Component Structure
```
Layout
├── Header (Logo + Navigation)
├── Main Content
│   ├── Hero Section
│   ├── Favorite Teams (Soccer, Football, Basketball)
│   ├── Schedules (Soccer, Football, Basketball)
│   └── Highlights (Soccer, Football, Basketball)
└── Footer
```

### 6.3 External Integrations
- **TheSportsDB**: Direct links to team/league pages (no API)
- **Google Search**: Pre-formatted search URLs for highlights
- **YouTube**: Direct channel/search links for video highlights

---

## 7. SEO Requirements

### 7.1 Meta Tags
- Title: "Uzi's Favorite Sport Teams | Soccer, Football & Basketball"
- Description: "Explore favorite sports teams including F.C. Maccabi Tel Aviv, FC Barcelona, Dallas Cowboys, and more. View schedules and highlights."
- Keywords: sports teams, soccer, football, basketball, schedules, highlights

### 7.2 Structured Data
- Organization schema for the website
- SportsTeam schema for each team (if applicable)

### 7.3 Performance
- Lighthouse score target: 90+ for all metrics
- Mobile-friendly test: Pass
- Core Web Vitals: All metrics in "Good" range

---

## 8. Deployment Requirements

### 8.1 Hosting
- **Platform**: Vercel (recommended) or similar
- **Domain**: Custom domain (optional)
- **SSL**: HTTPS enabled

### 8.2 Repository
- **Version Control**: Git
- **Documentation**: README with setup instructions
- **Code Quality**: ESLint configured, TypeScript strict mode

---

## 9. Timeline & Milestones

| Phase | Tasks | Status |
|-------|-------|--------|
| **Phase 1: Setup** | Project initialization, dependencies, documentation | In Progress |
| **Phase 2: Layout** | Header, footer, navigation components | Pending |
| **Phase 3: Content** | Favorite teams sections, schedules, highlights | Pending |
| **Phase 4: Polish** | Responsive design, SEO, performance optimization | Pending |
| **Phase 5: Deploy** | Build production, deploy to hosting | Pending |

---

## 10. Acceptance Criteria

### Must Have
- ✅ All sections display correctly with proper content
- ✅ Navigation menu scrolls smoothly to sections
- ✅ All external links work and open in new tabs
- ✅ Responsive design works on mobile, tablet, desktop
- ✅ Logo displays correctly (text + image)
- ✅ Sky blue and yellow color scheme applied
- ✅ SEO meta tags implemented
- ✅ TypeScript with no errors

### Nice to Have
- Hover animations on team cards
- Fade-in animations on scroll
- Dark mode toggle
- Bookmark/favorite functionality
- Share buttons for social media

---

## 11. Future Enhancements

1. **Live Schedule Integration**: API integration to show live game times
2. **Score Updates**: Real-time score display
3. **News Feed**: Latest news for each team
4. **User Accounts**: Save favorite teams and preferences
5. **Notifications**: Alerts for upcoming games
6. **Mobile App**: Native iOS/Android applications

---

## 12. Risks & Mitigation

| Risk | Impact | Mitigation |
|------|--------|------------|
| External links break | High | Regularly verify links; provide alternative sources |
| Poor mobile experience | High | Test on real devices; use responsive design patterns |
| Slow load times | Medium | Optimize images; minimize dependencies |
| SEO not effective | Low | Follow best practices; use semantic HTML |

---

## 13. Appendix

### Color Codes
- Sky Blue: `#0ea5e9` (Tailwind: `sky-500`)
- Yellow: `#fbbf24` (Tailwind: `yellow-400`)

### Font Recommendations
- Headings: Inter, Poppins, or Montserrat (bold)
- Body: Inter or Open Sans (regular)

### Image Specifications
- Logo: `public/logo.jpg` (optimize for web, max 200KB)
- Responsive sizes: 1x, 2x, 3x for retina displays

