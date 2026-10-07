# MH Electrical

Static site for Martin Hughes, MH Electrical, Bromham, Bedford. Built with Astro.

Facts on the pages come from the public Google listing (checked 6 October 2026), the flyer on that listing, and his public trade profile. The site does not invent review scores, prices, or insurance policy numbers.

## Commands

```bash
npm install
npm run dev
npm run build
```

The live site is published with GitHub Pages at https://creativemkstudios.github.io/mhelectrical/. The address is set in `astro.config.mjs` (`site` and `base`) and in `public/robots.txt`. A push to `main` runs `.github/workflows/deploy.yml`.

## Pages

Home, about, services (plus one page each for lighting, fuse boards, rewires, fault finding, testing, and callouts), projects, reviews, areas (Bedford, Bromham, Kempston, Milton Keynes, Ampthill), contact, and privacy.

`npm run build` writes `dist/`, including `sitemap-index.xml`.
