# Olkowitz Website

Official website for Olkowitz z. s. (Non-profit Organization) - www.olkowitz.cz

## About Olkowitz z. s.

**ICO:** 21617694

Olkowitz is a Czech non-profit organization ("spolek") dedicated to:
- 🌍 **Nature protection** and environmental improvement
- 🏘️ **Community beautification** of Oleksovice and surroundings
- 👥 **Public events and volunteer activities**
- 🤝 **Civil society support** and community building

## Project Structure

```
olkowitz/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx         # Navigation header with mobile menu
│   │   ├── Navigation.css
│   │   ├── Footer.jsx             # Footer with contact info & newsletter
│   │   ├── Footer.css
│   │   ├── Events.jsx             # Events calendar component
│   │   ├── Events.css
│   │   ├── NewsletterForm.jsx      # Newsletter signup form
│   │   └── NewsletterForm.css
│   ├── pages/
│   │   ├── Homepage.jsx           # Main landing page
│   │   ├── Homepage.css
│   │   ├── About.jsx              # About organization page
│   │   ├── About.css
│   │   ├── Contact.jsx            # Contact form page
│   │   ├── Contact.css
│   │   ├── EventsPage.jsx         # Events listing page
│   │   └── EventsPage.css
│   ├── App.jsx                    # Main app with routing
│   ├── App.css                    # Global styles
│   ├── main.jsx                   # React entry point
│   └── index.css                  # Base styles
├── public/
│   ├── index.html                 # HTML template
│   └── assets/
│       ├── images/                # Images (placeholder)
│       └── fonts/                 # Custom fonts (if needed)
├── package.json                   # Dependencies
├── vite.config.js                 # Vite configuration
├── .gitignore                     # Git ignore rules
├── .env.example                   # Environment variables template
└── README.md                      # This file
```

## Features

### Pages
- ✅ **Homepage** - Mission, goals, and newsletter signup
- ✅ **About** - Organization description and team
- ✅ **Events** - Calendar of upcoming activities
- ✅ **Contact** - Contact form and organization details

### Components
- ✅ **Navigation** - Responsive header with mobile menu
- ✅ **Footer** - Contact info, links, and newsletter
- ✅ **Events Calendar** - Display and manage events
- ✅ **Newsletter Form** - Email subscription

## Getting Started

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   The site will open at http://localhost:3000

### Development

- **Run dev server:** `npm run dev`
- **Build for production:** `npm run build`
- **Preview production build:** `npm run preview`

### Deployment

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## Design & Branding

- **Primary Color:** #2596be (Cyan)
- **Dark Variant:** #1a7398
- **Light Variant:** #3da5ce
- **Language:** Czech
- **Responsive:** Mobile-first design

## Technologies

- **React 18** - UI Framework
- **Vite** - Build tool with HMR
- **CSS3** - Styling with CSS variables
- **Hash-based Routing** - Simple client-side routing

## Configuration

### Environment Variables

Copy `.env.example` to `.env` and update as needed:

```
VITE_API_URL=https://api.olkowitz.cz
NODE_ENV=development
```

## Content to Update

Placeholders that need to be replaced with actual content:

- [ ] Organization address and phone number
- [ ] Team member names and roles
- [ ] Event details (dates, descriptions, images)
- [ ] Organization logo and images
- [ ] Social media links
- [ ] Map embedding (Contact page)
- [ ] Newsletter backend integration

## Contact

📧 Email: info@olkowitz.cz  
📍 Location: Oleksovice, Czech Republic

---

**Built with ❤️ for the Olkowitz community**
