# Ishraq Ahmed Jamaluddin - Portfolio

A modern, professional portfolio website built with React, TypeScript, Vite, and Material-UI.

## Features

- 🚀 **Modern Tech Stack**: React 18, TypeScript, Vite
- 🎨 **Material-UI**: Latest MUI components with custom theme
- 📱 **Fully Responsive**: Works beautifully on all devices
- ⚡ **Performance Optimized**: Lazy loading for images and videos
- 🎭 **Smooth Animations**: Modern transitions and effects
- 🔥 **Color Scheme**: Maintains the original pink (#e91d63) and dark theme
- 📄 **PDF Resume Viewer**: Integrated PDF viewer
- 🌐 **React Router**: Single Page Application with routing

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Material-UI (MUI)** - Component library
- **React Router** - Navigation
- **Intersection Observer API** - Lazy loading

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open your browser at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

## Project Structure

```
src/
├── components/        # Reusable components
│   ├── Layout.tsx    # Main layout with navigation
│   ├── LazyImage.tsx # Lazy loaded image component
│   ├── LazyVideo.tsx # Lazy loaded video component
│   └── ProjectCards.tsx # Project card grid
├── pages/            # Page components
│   ├── Home.tsx      # About page
│   ├── Projects.tsx  # Projects page
│   └── Resume.tsx    # Resume viewer
├── App.tsx           # Main app component
├── main.tsx          # Entry point
├── theme.ts          # MUI theme configuration
└── index.css         # Global styles
```

## Features in Detail

### Lazy Loading

Images and videos only load when they're about to enter the viewport, improving initial page load time.

### Responsive Design

Fully responsive layout that adapts to mobile, tablet, and desktop screens using Material-UI's responsive breakpoints.

### Custom Theme

Maintains the original color scheme with pink (#e91d63) as primary and dark (#333) as secondary.

### Modern Animations

Smooth hover effects, transitions, and animations throughout the site for a polished feel.

## License

© 2025 Ishraq Ahmed Jamaluddin
