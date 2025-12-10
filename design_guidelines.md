# Design Guidelines: Hafsa EL AKHDAR Portfolio

## Design Approach
**Reference-Based Modern Portfolio** - Drawing inspiration from Awwwards-winning portfolios, Behance showcases, and Linear's clean aesthetic, adapted for RTL layout and GIS/tech professional context.

## RTL-Specific Adaptations
- All text alignment: right-aligned by default
- Navigation flows right-to-left
- Animations enter from right, exit left
- Progress indicators fill right-to-left
- Card grids maintain RTL reading order (right to left, top to bottom)

## Typography System
**Primary Font**: Inter or Cairo (excellent Arabic/RTL support)
**Secondary Font**: JetBrains Mono for code/tech labels

**Hierarchy**:
- Hero headline: 4xl-6xl (responsive), font-bold
- Section titles: 3xl-4xl, font-bold
- Subsection headers: xl-2xl, font-semibold
- Body text: base-lg, font-normal
- Captions/labels: sm, font-medium

## Layout & Spacing System
**Tailwind units**: Primarily use 4, 6, 8, 12, 16, 20, 24 for consistency
**Section padding**: py-16 md:py-24 lg:py-32
**Container**: max-w-7xl with px-6 md:px-8
**Component gaps**: gap-6 md:gap-8 for grids

## Core Sections Design

### 1. Hero Section
**Layout**: Full viewport height (min-h-screen) with gradient overlay
**Image**: Large, professional tech/workspace background image with subtle parallax
**Content positioning**: Centered vertically, text right-aligned
**Elements**:
- Custom logo (geometric/modern lettermark from "HA")
- Name in hero headline size
- Three profession titles stacked with stagger animation entrance
- Short welcome tagline (lg text)
- Dual CTAs: "استكشف مشاريعي" (primary) + "تواصل معي" (secondary outline)
- Scroll indicator at bottom

### 2. About Section
**Layout**: Two-column (image left, content right in LTR - reverse for RTL)
**Image**: Professional headshot with gradient border treatment
**Content**: Bio in prose format with highlighted journey milestones as timeline dots

### 3. Skills Section
**Layout**: Bento-grid style (asymmetric card sizes)
**Cards**: 3 main categories (SIG, Development, Databases) with hover lift effect
**Each card**: Icon, category name, skill pills/tags
**Tech stack pills**: Small rounded badges with icons

### 4. Technologies Section
**Layout**: Carousel/slider with 4-5 visible items
**Cards**: Icon-top, title, short description, glowing border on hover
**Icons**: Use Font Awesome or Heroicons for tech logos

### 5. Projects Grid
**Layout**: Masonry-style grid (2-3 columns)
**Filter tabs**: Sticky below navbar ("الكل", "SIG", "Full Stack")
**Project cards**: 
- Featured image (16:9 aspect)
- Tech stack badges overlay on image
- Title + description below
- "عرض المشروع" link with arrow

### 6. Activities Timeline
**Layout**: Vertical timeline (line on right side for RTL)
**Items**: Alternating left-side cards with date markers
**Categories**: Color-coded badges (Formation, Certification, Workshop, Project)

### 7. Testimonials
**Layout**: 3-column grid on desktop, horizontal scroll on mobile
**Cards**: Quote, author name, role, optional avatar placeholder
**Styling**: Subtle shadow, quotation marks decoration

### 8. Contact Section
**Layout**: Split 60/40 (form/info)
**Form**: Name, Email, Message with floating labels
**Info side**: Email, social icons (GitHub, LinkedIn, Twitter), optional map embed
**CTA**: Prominent "إرسال" button

### 9. Footer
**Content**: Social links, quick navigation, copyright, "Made with ❤️ in React"

## Component Library

### Navigation
**Sticky navbar**: Backdrop blur, shadow on scroll
**Items**: Logo left (RTL), nav links center, theme toggle + CV download right
**Mobile**: Hamburger transforms to X, full-screen overlay menu

### Buttons
**Primary**: Solid background, white text, rounded-lg, px-6 py-3
**Secondary**: Border outline, transparent bg with backdrop blur
**All buttons**: Smooth hover scale (1.05), active press (0.95)

### Cards
**Base**: Rounded-xl, border, subtle shadow
**Hover**: Lift (translateY -2), enhanced shadow
**Dark mode**: Border glow effect

### Theme Toggle
**Design**: Sun/moon icon switch with smooth rotation transition
**Position**: Top-right navbar, always accessible

## Animations Strategy
**Entrance**: Fade + slide from right (RTL-appropriate)
**Scroll reveals**: Stagger children with 100ms delay
**Hover interactions**: Scale, glow, lift (subtle, 200-300ms duration)
**Page transitions**: Fade between route changes
**Avoid**: Excessive motion, spinning elements, bounce effects

## Images Specification
1. **Hero background**: Modern workspace/tech environment, 1920x1080, subtle blur
2. **About photo**: Professional portrait, 600x600, clean background
3. **Project thumbnails**: 8-10 placeholder images, 800x450, mix of SIG maps and app interfaces
4. Use Unsplash API or similar for high-quality placeholders

## Dark Mode Treatment
**Light theme**: White backgrounds, gray-900 text, gray-200 borders
**Dark theme**: Gray-900 backgrounds, gray-100 text, gray-700 borders, accent glows
**Accent color**: Teal/cyan for tech feel (adjust in theme)
**Smooth transition**: All color properties 200ms ease

## Responsive Breakpoints
**Mobile (<768px)**: Single column, stacked sections, horizontal scrolls for galleries
**Tablet (768-1024px)**: 2-column grids, adjusted spacing
**Desktop (>1024px)**: Full layouts as described, max-width constraints

This design creates a visually striking, professionally polished portfolio that showcases both GIS expertise and development skills while maintaining RTL cultural appropriateness and modern web standards.