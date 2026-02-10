# GitHub Copilot Instructions for AFURI Restaurant Website

## Project Overview

This is a Next.js restaurant website for AFURI Ramen, featuring a modern UI with multiple sections including Location, Menu, Drinks, Gift Cards, and Booking.

## Development Standards

### Code Style
- Use TypeScript for type safety
- Follow React best practices
- Use functional components with hooks
- Use Tailwind CSS for styling

### Component Structure
- Create reusable components in `src/components/`
- Use meaningful component names
- Keep components focused and single-responsibility

### File Organization
- Pages in `src/app/`
- Components in `src/components/`
- Styles in `src/styles/`
- Configuration in root directory

## Key Features

1. **Navigation** - Responsive header with mobile menu
2. **Hero Section** - Eye-catching banner with CTAs
3. **Food Showcase** - Ramen, Sushi, and more sections
4. **Locations** - Multi-location support with contact info
5. **Menu** - Ramen and drinks with pricing
6. **Gift Cards** - Gift card promotion section
7. **Booking** - Online reservation form
8. **Footer** - Links and contact information

## Deployment

- **GitHub**: ScottLiou1984/website
- **Vercel**: Automatic deployment on git push
- **Environment**: Production-ready Next.js app

## Common Tasks

### Add New Menu Item
1. Edit the appropriate component (Menu.tsx or Drinks.tsx)
2. Add item to the items array
3. Follow existing structure and styling

### Add New Location
1. Edit `src/components/Locations.tsx`
2. Add location object to locations array
3. Update hours if needed

### Modify Colors/Styling
1. Update `tailwind.config.ts` for theme colors
2. Update `src/styles/globals.css` for global styles
3. Use Tailwind utility classes in components

### Deploy Changes
1. Commit and push to GitHub
2. Vercel automatically deploys on git push
3. Check deployment status on Vercel dashboard

## Useful Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```
