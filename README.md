# Kebnekaise – fjällvandringsguide

An unofficial, Swedish-language guide to hiking in the **Kebnekaise** area. The site also tells the story of four students who climbed the peak in August 2009 as a school project, and preserves their trip diary, photos and film.

- **Live site:** https://saladusaladim.github.io/
- **Legacy site:** https://saladusaladim.github.io/old/

The content is in Swedish. The original site was published in 2010 and last updated in 2012. It is preserved in full under `old/`; the root now contains a modernized, responsive version.

Kebnekaise's highest point is the **north summit at 2,096.8 m**. The south summit is covered by a glacier and was measured at 2,088.3 m in September 2026, so the north summit has been Sweden's highest point since 2019. The old site's figure of 2,104 m refers to the south summit before it melted below the north summit.

## Repository layout

| Path | Description |
| --- | --- |
| `index.html` | Home page: introduction, quick links, day cards, webcam and weather. |
| `vandring.html` | The guide: routes, summit, accommodation, fauna, gear, clothing, food and packing list. |
| `varfard.html` | Hub for the eight-day travel diary. |
| `dag1.html`–`dag8.html` | Day-by-day diary with photo galleries and a keyboard-accessible lightbox. |
| `film.html` | Links to the OneDrive clips and the Vimeo short film. |
| `omoss.html` | About the four authors, the project and the modernization. |
| `404.html` | Custom not-found page, served automatically by GitHub Pages. |
| `assets/css/style.css` | The complete design system: layout, typography, components and responsive rules. |
| `assets/js/main.js` | Lightbox and webcam refresh (progressive enhancement). |
| `assets/images/` | Optimized copies of the images used by the new site. |
| `old/` | The complete original site, preserved as-is. All relative links keep working under `/old/`. |
| `sitemap.xml`, `robots.txt` | Search-engine metadata. |
| `.nojekyll` | Tells GitHub Pages to serve files directly instead of running Jekyll. |
| `README.md` | This file. |

## The modern site

The new site is plain, static HTML, CSS and a small amount of JavaScript. There is no build step, no framework, no analytics and no cookies. React can be deployed to GitHub Pages with a Vite build and a Pages workflow, but for 14 content pages it would add build and deployment complexity without improving the result, so the site stays framework-free.

- **Responsive layout** from small phones to wide desktops.
- **Semantic HTML** with one `h1` per page, landmarks, a skip link, visible focus styles and `prefers-reduced-motion` support.
- **No web fonts or trackers**; it uses the system font stack throughout, with a serif italic accent for display lines.
- **High-resolution hero image** with responsive `srcset` variants, replacing the soft 800 px original.
- **Photo galleries** use a native `<dialog>` lightbox with keyboard arrows and Escape. Without JavaScript, each image still opens as a normal link.
- **Optimized images** are resized and re-encoded into `assets/images/`. The originals remain untouched in `old/images/`.
- **External services:** the webcam is loaded over HTTPS from `liveevent.se`, weather links go to `yr.no`, and the films open on OneDrive and Vimeo. These services are outside the project's control and may change or disappear.
- **Sitemap and Open Graph metadata** are included for search engines and link previews.

The guide's summit facts were updated in 2026. The diary text is otherwise preserved from the original, with light copy-editing of proper nouns (for example `kebnekaise` → `Kebnekaise` and `nikkaloukta` → `Nikkaluokta`).

## The legacy site

The original site is a static, table-based website built with Adobe Dreamweaver around 2010. Its pages:

| Page | Content |
| --- | --- |
| `old/index.html` (Start) | Webcam from Kebnekaise Fjällstation, weather for Tarfala/Nikkaluokta/Abisko, and an "Aktuellt" news list (2010–2012). |
| `old/vandring.html` (Vandring) | The original guide, including images of trail maps. |
| `old/varfard.html` (Vår Färd) | Hub for the travel diary and the film page. |
| `old/dag1.html`–`old/dag8.html` | Original day-by-day diary with photo galleries. |
| `old/film.html` | Links to six OneDrive-hosted video clips and an embedded Vimeo film. |
| `old/omoss.html` (Om Oss) | About the four authors and the project. |
| `old/webcam.html` | A bare iframe that refreshes a Kebnekaise webcam image every 60 seconds. |

There are also two unlinked diary pages in `old/dagbok/` and a Dreamweaver sync file in `old/_notes/`, kept for completeness.

### Known issues in the legacy site

- **Mixed content:** on HTTPS, browsers block the three `http://` weather widgets and the external favicon, so the weather never loads.
- **Dead dependencies:** the weather service (`vackertvader.se`), favicon host (`pici.se`) and old Vimeo Flash player may disappear or have already changed. The webcam host now supports HTTPS, but the old page still embeds it over HTTP.
- **Missing script:** `old/vandring.html` references `SpryAssets/SpryAccordion.js`, which is not in the repository.
- **Accessibility and responsiveness:** no viewport meta tag, fixed 822 px table layout, 10–12 px body text, image navigation without meaningful `alt` text.
- **Frozen content:** news stops in 2012 and some advice is outdated.

The old site is intentionally left untouched so it remains an accurate archive. Fixes belong in the new root site instead.

## Local preview

There is no build step. Serve the repository root with any static file server, for example:

```sh
python -m http.server 8000
```

Then open:

- New site: http://localhost:8000/
- Legacy site: http://localhost:8000/old/

Some features (webcam, weather, OneDrive videos, Vimeo) need an internet connection and may still be blocked or unavailable.

## Deployment

This is a **GitHub user site** (`saladusaladim.github.io`), so GitHub Pages publishes one site from the root of the default branch (`master`). All top-level folders are served as paths, which is why the legacy site can live at `/old/` without extra configuration.

Important consequences:

- Only **one branch** can be published for a user site. Keeping the old and new site side by side therefore means using a subdirectory, not a second branch.
- The old URLs (`/vandring.html`, `/dag1.html`, …) now resolve to the **new** pages. The archived originals are at `/old/vandring.html`, `/old/dag1.html`, etc.
- Nothing is published from `modernization` until it is merged into `master`.
- To keep old deep links working, add small redirect pages at the old paths or configure redirects at the host. This has not been done yet; the new pages deliberately reuse the same filenames for the main sections and diary days.

## Modernization status

- [x] Create the `modernization` branch and this README.
- [x] Move the original site into `old/` so it stays published at `/old/`.
- [x] Design and build the new responsive site at the repository root.
- [x] Replace the table layout and image navigation with semantic HTML and CSS.
- [x] Remove dead embeds and fix mixed-content issues; replace the webcam and weather with HTTPS sources and outbound links.
- [x] Improve accessibility: viewport, `lang`, alt text, contrast, readable type sizes and focus styles.
- [x] Rebuild the photo galleries and diary with a modern lightbox.
- [x] Add a 404 page, Open Graph metadata, `robots.txt` and `sitemap.xml`.
- [x] Refresh the visual design with a crisp hero image, fluid type, pill buttons and responsive cards.
- [ ] Decide whether to redirect legacy deep links beyond the reused filenames.
- [ ] Review the remaining 2010-era advice and links periodically.

## Credits

Created as a school project by **Ossian Mauritzson**, **Simon Nelson Landén**, **Marcus Lilliequist** and **Daniel Wedenborg**, with supervisor **Ola Larson**.

The guide text, diary and historical photographs belong to their respective authors. No reuse license is granted unless stated otherwise.

### Image credits

- Home hero: [Storglaciären with Kebnekaise behind](https://commons.wikimedia.org/wiki/File:Storglaci%C3%A4ren_with_Kebnekaise_behind_2022-08-25_18.jpg) by **Leonhard Lenz**, released under **CC0**, via Wikimedia Commons. Responsive 2560/1600/800 px versions are stored in `assets/images/`; `og-hero.jpg` is a 1200 × 630 social-preview crop.
