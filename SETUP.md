# Setup Instructions

## Development

To run the development server:

```bash
npm run dev
```

Then open your browser at `http://localhost:3000`

## Production Build

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## File Structure

### Old Files (Kept for Reference)

The original HTML files and assets are preserved:

- `index.html` (old version - replaced by React app)
- `projects.html` (old version)
- `resume.html` (old version)
- `css/` folder (old styles)
- `images/` folder (original images - copied to `public/images/`)
- `files/` folder (original files - copied to `public/files/`)
- `vids/` folder (original videos - copied to `public/vids/`)

### New React App

- `src/` - React source code
- `public/` - Public assets served by Vite
- `dist/` - Production build output (generated)
- `node_modules/` - Dependencies (generated)

## Notes

- The old HTML files are kept but not used by the new React app
- All assets have been copied to the `public/` folder for Vite to serve
- The React app uses `index.html` in the root as the entry point
- All routing is handled by React Router

## Deployment

To deploy the portfolio:

1. Build for production: `npm run build`
2. Upload the `dist` folder to your hosting service
3. Make sure the server is configured for single-page application routing
