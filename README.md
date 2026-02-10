# AFURI Ramen Restaurant Website

This is a modern, responsive website for AFURI Ramen restaurant built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern UI Design** - Clean, professional design inspired by the original AFURI website
- **Responsive Layout** - Works seamlessly on desktop, tablet, and mobile devices
- **Multiple Sections**:
  - Navigation with smooth scrolling
  - Hero section with call-to-action
  - Food showcase (Ramen, Sushi, More)
  - Locations with contact info
  - Menu with pricing
  - Drinks menu
  - Gift cards section
  - Online booking system
  - Footer with links

- **Interactive Features**:
  - Mobile-responsive navigation menu
  - Reservation booking form
  - Smooth scrolling navigation
  - Hover effects and transitions

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js 18+ and npm installed

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── components/       # React components
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── FoodShowcase.tsx
│   │   ├── Locations.tsx
│   │   ├── Menu.tsx
│   │   ├── Drinks.tsx
│   │   ├── GiftCards.tsx
│   │   ├── Booking.tsx
│   │   └── Footer.tsx
│   ├── styles/
│   │   └── globals.css
│   └── lib/              # Utilities
├── public/               # Static assets
│   └── images/
├── next.config.js        # Next.js configuration
├── tailwind.config.ts    # Tailwind configuration
└── tsconfig.json         # TypeScript configuration
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub (`ScottLiou1984/website`)
2. Go to [Vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Click "Deploy"

Vercel will automatically:
- Install dependencies
- Build the project
- Deploy to a live URL

### Environment Variables

Add any required environment variables in Vercel dashboard under Project Settings > Environment Variables.

## Features to Add

- [ ] Menu filtering and search
- [ ] Image gallery for dishes
- [ ] Online ordering integration
- [ ] Customer testimonials/reviews
- [ ] Special events section
- [ ] Blog/news section
- [ ] Social media integration
- [ ] Newsletter signup
- [ ] Accessibility improvements

## License

This project is proprietary and confidential.

## Support

For questions or issues, please contact the development team.
