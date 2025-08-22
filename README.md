# Portfolio — toppjirayut-style (React + Vite + Tailwind)

Single-page app with hash-based routes that mimic multiple pages:
- `#/home`, `#/about`, `#/latest`, `#/latest/:id`, `#/blogs`, `#/blogs/:id`, `#/contact`

## Quick Start
```bash
npm i
npm run dev
# open the URL shown (usually http://localhost:5173)
```

## Build
```bash
npm run build
npm run preview
```

## Where to edit
- **src/pages/** — each page in its own file
- **src/data/** — demo data for Latest & Blogs
- **src/components/** — header, footer, cards, comments
- Replace images and text with your own content.
- Change brand text in `src/components/Header.tsx`

## Notes
- Uses localStorage for blog comments (demo only).
- Uses Tailwind Typography for better prose styles.
