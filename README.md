# Altesa Hotel - Luxury Booking Experience

A pixel-faithful React replica of the Altesa hotel booking UI with subtle enhancements including smooth animations and micro-interactions.

![Altesa Hotel](https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80)

## Features

- **Responsive Navbar** — Transparent to frosted glass transition on scroll
- **Hero Section** — Functional search bar with location input, person dropdown, date pickers
- **Why Choose Us** — Floating review cards with scroll-triggered animations
- **Room Cards** — "Book Now" buttons with loading spinner → success state transitions
- **Video Section** — Ripple animation on play button with modal embed
- **Testimonials** — Auto-advancing carousel with prev/next navigation and dot indicators
- **Footer** — Dark layout with organized links and contact information

## Tech Stack

- **Framework:** React 19 + Vite
- **Styling:** CSS Modules with custom properties (design tokens)
- **Fonts:** DM Serif Display + DM Sans (Google Fonts)
- **Animations:** CSS transitions and keyframe animations

## Design Tokens

All design values are defined as CSS custom properties in `src/styles/global.css`:

- **Colors:** Warm gold (#C9A96E), cream backgrounds, dark brown text
- **Typography:** Serif display font for headings, sans-serif for body
- **Spacing:** Consistent spacing scale (4px increments)
- **Shadows:** Card shadows with hover states
- **Transitions:** Smooth timing functions throughout

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar/          # Fixed header with scroll effects
│   ├── Hero/            # Search bar with interactive fields
│   ├── WhyChooseUs/     # Features + floating review cards
│   ├── Rooms/           # Room grid with booking states
│   ├── VideoSection/    # Video banner with ripple button
│   ├── Testimonials/    # Carousel with auto-advance
│   └── Footer/          # Dark footer layout
├── styles/
│   └── global.css       # Design tokens + base styles
├── App.jsx              # Main app component
└── main.jsx             # Entry point
```

## Enhancements

- Scroll-triggered entrance animations on section entry
- Hover lift + image zoom on room cards
- Ripple animation on video play button
- Smooth CSS transitions throughout (no janky snaps)
- Loading states with spinners on interactive elements
- Success state feedback on booking actions

## Browser Support

Modern browsers with CSS custom properties and backdrop-filter support.

## License

MIT
