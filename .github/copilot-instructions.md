# Copilot Instructions

This is a personal portfolio site for Pubudu Ranasinghe, built with Astro 5.11 as a static site.

## Architecture

**Single-page static site** — All content is rendered from `src/pages/index.astro`, which composes modular components:
- `Intro.astro` — Hero section with name, title, bio, and social links
- `Writing.astro` — Writing/blog section that dynamically fetches posts from content collection
- `BackgroundImage.astro` — Full-width image with noise overlay effect
- `FinePrint.astro` — Footer with site tech stack and copyright

**Layout system** — `src/layouts/Layout.astro` provides the base HTML structure with SEO metadata (Open Graph, Twitter cards), and global CSS including the design system. `BlogLayout.astro` extends this for blog posts with metadata display.

**Content Collections** — Blog posts are managed through Astro's content collections in `src/content/blog/`. Schema defined in `src/content/config.ts` with required fields: `title`, `description`, `publishDate`, optional `draft` and `tags[]`.

**Blog routing** — Individual posts are accessible at top-level URLs (`/post-slug`) via `src/pages/[slug].astro` dynamic route. Posts are written in MDX format for rich content with React components if needed.

## Design System

**CSS Custom Properties in `Layout.astro`** — All design tokens are centralized in `:root`:
- Typography: `--font-size-base` (16px), `--line-height-base` (28px), `--font-weight-base/medium`, `--letter-spacing-base`
- Color Palette: Stone scale (`--stone-50` through `--stone-950`), `--accent-400`, `--gray-900` in OKLCH format for perceptual uniformity
- Semantic Colors: `--color-bg`, `--color-surface`, `--color-border`, `--color-text-primary`, `--color-text-secondary`, `--color-text-emphasis` (automatically switch between palette colors for light/dark themes)
- Layout: Responsive `--container-padding-horizontal` (32px → 64px → 128px → 200px at breakpoints), `--hero-padding-vertical` (72px), `--max-width-content` (800px)

**Geist Sans font** — Variable font loaded from `/public/fonts/Geist[wght].woff2` with OpenType features enabled (`ss01-08`). Always reference this font stack in global styles.

**Responsive breakpoints** — Use modern CSS: `@media (width >= 48rem)` syntax, not `min-width`.

## Component Patterns

**TypeScript interfaces for props** — Every component exports a `Props` interface with default values destructured:
```astro
export interface Props {
  title?: string;
}
const { title = "Default" } = Astro.props;
```

**SVG icons inline** — Social links in `SocialLinks.astro` use inline SVG paths stored in a `socialLinks` array. Add new social links by extending this array with `href`, `label`, `icon`, `viewBox`, `width`, `height`.

**Image optimization** — Use `astro:assets` Image component for all images. See `BackgroundImage.astro` for pattern: import from `src/assets/`, pass quality/loading props, use CSS for object-fit.

**Noise overlay pattern** — `BackgroundImage.astro` uses an inline SVG data URI with `feTurbulence` filter for film grain effect. Apply via pseudo-element with `mix-blend-mode: screen`.

## Development Workflow

**Commands** (npm):
- `npm run dev` — Dev server at localhost:4321
- `npm run build` — Static build to `./dist/`
- `npm run preview` — Preview production build locally

**No build configuration** — `astro.config.mjs` is minimal with only MDX integration enabled. Astro's zero-config philosophy means most features work out-of-the-box.

**Creating blog posts** — Add new `.mdx` files to `src/content/blog/` with frontmatter matching the schema. Posts with `draft: true` are excluded from production. They automatically appear in the Writing section, sorted by `publishDate` (newest first).

**Analytics** — Umami analytics script loaded in `Layout.astro` head. Website ID: `0c8d67f9-e696-40e7-aead-d71b63c8622d`.

## Conventions

- **Scoped styles** — Each component has a `<style>` block. Use CSS custom properties for all design tokens, never hardcode values.
- **Semantic HTML** — Use `<article>`, `<section>`, `<aside>`, `<nav>`, `<footer>` for structure. Include ARIA labels for accessibility.
- **No client-side JavaScript** — This is a static site. All interactivity is CSS-only (hover states, transitions).
- **Consistent spacing** — Paragraphs have `margin: 0 0 16px 0`. Sections use `--hero-padding-vertical` for vertical rhythm.

## Key Files

- `src/layouts/Layout.astro` — Global styles, SEO metadata, design tokens
- `src/layouts/BlogLayout.astro` — Blog post layout with metadata and styled content
- `src/pages/index.astro` — Single page entry point
- `src/pages/[slug].astro` — Dynamic blog post routes at top level
- `src/components/Intro.astro` — Main content and bio
- `src/components/Writing.astro` — Blog post list from content collection
- `src/content/config.ts` — Content collections schema definition
- `public/fonts/` — Self-hosted Geist Sans variable font
