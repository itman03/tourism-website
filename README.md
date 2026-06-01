# Kyrgyz Peaks Adventure - Tourism Website

A modern, responsive tourism website for Kyrgyzstan adventure tours built with React, featuring multi-language support and smooth animations.

## Features

✨ **Modern Design** - Beautiful, responsive UI built with React and Framer Motion
🌍 **Multi-Language Support** - English, Russian, French, and German translations
🎨 **Smooth Animations** - Professional animations using Framer Motion
📱 **Fully Responsive** - Mobile-friendly design that works on all devices
🧗 **Tour Showcase** - Display and filter tours by duration
💬 **WhatsApp Integration** - Direct booking via WhatsApp
🎯 **SEO Friendly** - Clean, semantic HTML structure

## Pages

- **Home** - Landing page with featured tours and why choose us section
- **Tours** - Complete tour catalog with filtering options
- **About** - Company mission, team, values, and why Kyrgyzstan
- **Contact** - Contact information and booking form

## Tech Stack

- **React 18** - Modern UI library
- **React Router v6** - Client-side routing
- **Framer Motion** - Animation library
- **i18next** - Multi-language support
- **React Icons** - Beautiful SVG icons
- **CSS3** - Modern styling with gradients and animations

## Installation

```bash
# Clone the repository
git clone https://github.com/itman03/tourism-website.git

# Navigate to project directory
cd tourism-website

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at `http://localhost:3000`

## Building for Production

```bash
npm run build
```

Builds the app for production to the `build` folder.

## File Structure

```
src/
├── components/          # Reusable React components
│   ├── Navbar.js       # Navigation bar with language switcher
│   ├── Footer.js       # Footer with contact info and team
│   ├── HeroSection.js  # Hero banner with animations
│   └── TourCard.js     # Individual tour card component
├── pages/              # Page components
│   ├── Home.js         # Home page
│   ├── Tours.js        # Tours catalog page
│   ├── About.js        # About page
│   └── Contact.js      # Contact page
├── i18n/               # Internationalization
│   ├── config.js       # i18n configuration
│   └── locales/        # Translation files
│       ├── en.json     # English translations
│       ├── ru.json     # Russian translations
│       ├── fr.json     # French translations
│       └── de.json     # German translations
├── styles/             # CSS files
│   ├── index.css       # Global styles
│   ├── App.css
│   ├── Navbar.css
│   ├── Footer.css
│   ├── HeroSection.css
│   ├── TourCard.css
│   ├── Home.css
│   ├── Tours.css
│   ├── About.css
│   └── Contact.css
├── App.js              # Main app component
└── index.js            # React entry point
```

## Customization

### Adding New Languages

1. Create a new translation file in `src/i18n/locales/` (e.g., `es.json`)
2. Add translations following the same structure as existing files
3. Import and add to the i18n config in `src/i18n/config.js`

### Customizing Tours

Edit the tour data in:
- `src/pages/Home.js` - Featured tours on home page
- `src/pages/Tours.js` - All available tours

### Styling

Color scheme is defined in `src/styles/index.css` using CSS variables:
- `--primary-color` - Main green color
- `--secondary-color` - Accent orange color
- `--accent-color` - Darker green

## Contact Information

📱 **WhatsApp**: +996 706 970 303
📞 **Phone**: +996 706 970 303
📍 **Location**: Bishkek, Kyrgyzstan

## Team

- **Erlan** - Digital Manager
- **Nurlan** - Logistics Manager  
- **Khamza** - Guide Selection Manager

## License

This project is private and owned by KYRGYZ PEAKS ADVENTURE.

## Support

For questions or inquiries about tours, contact us via:
- WhatsApp: https://wa.me/996706970303
- Contact form on the website
