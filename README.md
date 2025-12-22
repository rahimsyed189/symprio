# Symprio - Robotic Process Automation Landing Page

A modern, animated React-based landing page showcasing Symprio's intelligent automation solutions. Built with React, Framer Motion, and Tailwind CSS.

## Features

✨ **Modern Design**
- Sleek dark theme with gradient accents
- Smooth animations and transitions
- Responsive mobile-first design

🎯 **Key Sections**
- Hero section with animated backgrounds
- Statistics counter with scroll animations
- Services showcase with interactive cards
- Industry footprint grid
- Why choose Symprio section
- Upcoming events display
- Call-to-action section
- Comprehensive footer

🚀 **Performance**
- Optimized animations using Framer Motion
- Intersection Observer for lazy animations
- Smooth scrolling and transitions

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icon library
- **React Intersection Observer** - Scroll animations

## Installation

1. **Clone or extract the project**
```bash
cd symprio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The application will open at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation bar
│   ├── Hero.jsx            # Hero section
│   ├── Stats.jsx           # Statistics counter
│   ├── Services.jsx        # Services showcase
│   ├── Industries.jsx      # Industry footprint
│   ├── WhyChooseSymprio.jsx # About section
│   ├── Events.jsx          # Upcoming events
│   ├── CTA.jsx             # Call-to-action
│   └── Footer.jsx          # Footer
├── App.jsx                 # Main component
├── main.jsx                # Entry point
└── index.css              # Global styles
```

## Customization

### Colors & Gradients
Edit `index.css` to customize the gradient colors:
```css
.gradient-text {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899);
}
```

### Animations
Modify animation speeds in components by adjusting Framer Motion `transition` values:
```jsx
transition={{ duration: 0.6, ease: 'easeOut' }}
```

### Content
Update component content directly:
- Navigation links in `Navbar.jsx`
- Contact information in `CTA.jsx`
- Services list in `Services.jsx`
- Industries in `Industries.jsx`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

1. **Image Optimization** - Use optimized images for faster loading
2. **Code Splitting** - Vite automatically handles code splitting
3. **Lazy Loading** - Components animate when in viewport using Intersection Observer

## SEO Optimization

The page includes:
- Meta descriptions
- Semantic HTML structure
- Proper heading hierarchy
- Mobile viewport configuration

## Deployment

### Build for production
```bash
npm run build
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag and drop 'dist' folder to Netlify
```

## Contact & Support

- **Email:** contact@symprio.com
- **Phone:** +60 13 880 2574
- **LinkedIn:** [Symprio on LinkedIn](https://www.linkedin.com/company/symprio/)

## License

All rights reserved © 2024 Symprio

## Future Enhancements

- [ ] Add testimonials section
- [ ] Implement blog integration
- [ ] Add live chat support
- [ ] Create case studies page
- [ ] Add dark/light mode toggle
- [ ] Implement multi-language support

---

Created with ❤️ for Symprio - Transforming Business Through Intelligent Automation
