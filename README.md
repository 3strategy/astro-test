# Binary Search Lab

An Astro 6 static site. Step through binary search, or enter a missing target to see the search interval become empty.

## Run in WSL

With Node 24 on PATH, run:

```bash
npm ci
npm run dev
```

Open http://localhost:4321/. To test the GitHub Pages project path locally:

```bash
PAGES_BASE=/astro-test npm run build
PAGES_BASE=/astro-test npm run preview
```

Open http://localhost:4321/astro-test/. Use the repository name for the preview base path when reusing the workflow in another project.

## GitHub Pages

Set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**. The workflow builds on pushes to `main` and supports manual runs. The Pages configuration action supplies the hostname and base path. Use Astro’s bundled scripts for client-side interactions. Pages serves static files, so server-rendered routes and server-side secrets need a separate host.
