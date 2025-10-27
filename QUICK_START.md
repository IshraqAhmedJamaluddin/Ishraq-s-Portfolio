# Quick Start Guide

Your portfolio website has been successfully rebuilt with modern technologies!

## 🎉 What's New

✅ **React 18** with TypeScript  
✅ **Vite** for lightning-fast builds  
✅ **Material-UI** with custom theme matching your color scheme  
✅ **Lazy loading** for images and videos  
✅ **Responsive design** for all devices  
✅ **Modern animations** and transitions  
✅ **Professional 2025 design**

## 🚀 Run the Website

1. **Start development server:**

   ```bash
   npm run dev
   ```

2. **Open in browser:**
   Go to `http://localhost:3000`

3. **Build for production:**
   ```bash
   npm run build
   ```

## 📁 Project Structure

### Source Files (src/)

- `components/` - Reusable React components
- `pages/` - Page components (Home, Projects, Resume)
- `App.tsx` - Main app with routing
- `theme.ts` - MUI theme with your color scheme

### Public Assets (public/)

- `images/` - All your images
- `vids/` - All your videos
- `files/` - Resume PDF

### Old Files (Preserved)

- Original HTML files (index.html, projects.html, resume.html)
- Original CSS and assets in their original locations

## 🎨 Features

### Lazy Loading

Images and videos only load when they're about to enter the viewport, improving performance.

### Responsive Design

Works beautifully on:

- Mobile phones
- Tablets
- Desktops
- Large screens

### Color Scheme

Maintains your original colors:

- Primary: #e91d63 (Pink)
- Secondary: #333 (Dark)
- Background: #f4f4f4 (Light gray)

## 🔧 Customization

### Theme Colors

Edit `src/theme.ts` to change colors

### Content

Edit the page files in `src/pages/` to update content

### Add Projects

Edit `src/pages/Projects.tsx` to add or modify projects

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

To deploy your portfolio:

1. Build the project:

   ```bash
   npm run build
   ```

2. Upload the `dist` folder to your hosting service

3. Configure your server for SPA routing (redirect all requests to index.html)

## 🎓 Learn More

- React: https://react.dev
- TypeScript: https://www.typescriptlang.org
- Vite: https://vite.dev
- Material-UI: https://mui.com

---

**Happy coding! 🚀**
