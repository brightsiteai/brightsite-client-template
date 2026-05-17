# Brightsite Client Template

This is the verified starting point for every new client website built by Brightsite. It is pre-configured with a stable stack of React 19, Vite 8, and Tailwind v3 to ensure high performance and immersive 3D experiences.

## How to Use This Template

When starting a new client project, do NOT clone this repository directly into their new repo. Instead:

1. Create a new repository in the `brightsiteai` organization.
2. Name it using the convention: `brightsite-client-[client-name]` (e.g., `brightsite-client-acme`).
3. Clone the new (empty) repo locally.
4. Copy the contents of this template into the new local directory.
5. Run `npm install`.
6. Run `npm run build` to verify the baseline works.

## Project Structure

- `src/main.tsx`: Entry point with React 19 and React Router v7.
- `src/App.tsx`: Main routing and layout.
- `src/pages/Templates.tsx`: A showcase of available components and layouts.
- `src/index.css`: Tailwind CSS entry point (v3).
- `netlify.toml`: Deployment configuration for Netlify.
- `tailwind.config.js` & `postcss.config.cjs`: Standard styling configuration.

## Deployment to Netlify

1. Log in to the Brightsite Netlify account.
2. Click "Add new site" -> "Import an existing project".
3. Select the GitHub repository you created for the client.
4. Netlify will automatically detect the settings from `netlify.toml`.
5. Ensure the "Build command" is `npm run build` and "Publish directory" is `dist`.

## Important Restrictions

To maintain build stability across the agency:

- **DO NOT** upgrade Tailwind CSS to v4. This template uses v3 for compatibility with specific 3D animation plugins.
- **DO NOT** change `postcss.config.cjs` to an ESM `.js` file. The CJS format is required for our current build pipeline.
- **DO NOT** modify the build command in `package.json` without lead approval.

## Included Features

- **React 19**: Latest React features.
- **Vite 8**: Next-gen frontend tooling.
- **Tailwind v3**: Utility-first CSS.
- **React Router v7**: Modern routing.
- **Lucide React**: High-quality icon set.
- **Asset Typing**: Pre-configured `global.d.ts` for SVG and CSS imports.
