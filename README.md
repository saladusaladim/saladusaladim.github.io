# Kebnekaise – fjällvandringsguide

An unofficial, Swedish-language guide to hiking and climbing **Kebnekaise**, Sweden's highest mountain (2,104 m). The site also tells the story of four students who climbed the peak in August 2009 as a school project, and it preserves their trip diary, photos and film.

- **Live site:** https://saladusaladim.github.io/
- **Legacy site (after the modernization branch is merged):** https://saladusaladim.github.io/old/

The content is in Swedish. The last content update to the original site was in 2012.

## Repository layout

| Path | Description |
| --- | --- |
| `index.html` | Entry point for the modernized site. Currently a placeholder. |
| `old/` | The complete original site, preserved as-is. All relative links keep working under `/old/`. |
| `README.md` | This file. |
| `.nojekyll` | Tells GitHub Pages to serve the files directly instead of running Jekyll. |

## The legacy site

The original site is a static, table-based website built with Adobe Dreamweaver around 2010. Its pages:

| Page | Content |
| --- | --- |
| `old/index.html` (Start) | Webcam from Kebnekaise Fjällstation, weather for Tarfala/Nikkaluokta/Abisko, and an "Aktuellt" news list (2010–2012). |
| `old/vandring.html` (Vandring) | The main guide: getting to Kiruna and Nikkaluokta, the western and eastern routes to the summit, other trails, accommodation, fauna, gear, clothing, food and a packing list. |
| `old/varfard.html` (Vår Färd) | Hub for the travel diary and the film page. |
| `old/dag1.html`–`old/dag8.html` | Day-by-day trip diary with photo galleries. |
| `old/film.html` | Links to six OneDrive-hosted video clips and an embedded Vimeo film. |
| `old/omoss.html` (Om Oss) | About the four authors and the project. |
| `old/webcam.html` | A bare iframe that refreshes a Kebnekaise webcam image every 60 seconds. |

There are also two unlinked diary pages in `old/dagbok/` and a Dreamweaver sync file in `old/_notes/`, kept for completeness.

### Known issues in the legacy site

- **Mixed content:** on HTTPS, browsers block the three `http://` weather widgets and the external favicon, so the weather never loads.
- **Dead dependencies:** the weather service (`vackertvader.se`), favicon host (`pici.se`), webcam host (`liveevent.se`) and old Vimeo Flash player may disappear or have already changed.
- **Missing script:** `old/vandring.html` references `SpryAssets/SpryAccordion.js`, which is not in the repository.
- **Accessibility and responsiveness:** no viewport meta tag, fixed 822 px table layout, 10–12 px body text, image navigation without meaningful `alt` text.
- **Frozen content:** news stops in 2012 and some advice is outdated.

## Local preview

There is no build step. Serve the repository root with any static file server, for example:

```sh
python -m http.server 8000
```

Then open:

- New site: http://localhost:8000/
- Legacy site: http://localhost:8000/old/

Some legacy features (webcam, weather, OneDrive videos) need an internet connection and may still be blocked or unavailable.

## Deployment

This is a **GitHub user site** (`saladusaladim.github.io`), so GitHub Pages publishes one site from the root of the default branch (`master`). All top-level folders are served as paths, which is why the legacy site can live at `/old/` without any extra configuration.

Important consequences:

- Only **one branch** can be published for a user site. Keeping the old and new site side by side therefore means using a subdirectory, not a second branch.
- The old URLs (`/vandring.html`, `/dag1.html`, …) change to `/old/vandring.html`, etc., once this branch is merged. Add redirects if old links need to keep working.
- Nothing is published from `modernization` until it is merged into `master`.

## Modernization plan

- [x] Create the `modernization` branch and this README.
- [x] Move the original site into `old/` so it stays published at `/old/`.
- [ ] Design and build the new responsive site at the repository root.
- [ ] Replace the table layout and image navigation with semantic HTML and CSS.
- [ ] Remove dead embeds and fix mixed-content issues; replace or gracefully degrade the webcam and weather.
- [ ] Improve accessibility: viewport, `lang`, alt text, contrast, readable type sizes and focus styles.
- [ ] Rebuild the photo galleries and diary with a modern lightbox.
- [ ] Add a 404 page and basic metadata (Open Graph, sitemap).
- [ ] Decide whether to redirect legacy URLs or keep them only under `/old/`.

## Credits

Created as a school project by **Ossian Mauritzson**, **Simon Nelson Landén**, **Marcus Lilliequist** and **Daniel Wedenborg**, with supervisor **Ola Larson**.

The guide text, diary and photographs belong to their respective authors. No reuse license is granted unless stated otherwise.
