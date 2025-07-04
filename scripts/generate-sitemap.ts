import { writeFileSync } from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';
import path from 'path';
import { cities } from '../src/data/cities';
import { realizations } from '../src/data/realizations';

const BASE_URL = 'https://mgkmatallzaune.de/';

const staticPages = [
  '/',
  '/ueber-uns',
  '/produkte',
  '/galerie',
  '/zaeune',
  '/kontakt',
  '/angebot',
  '/privacy',
  '/terms',
];

const cityPages = cities.map(city => `/cities/${city.slug}`);
const realizationPages = realizations.map(r => `/realizations/${r.id}`);

const allPages = [
  ...staticPages,
  ...cityPages,
  ...realizationPages,
];

(async () => {
  const sitemap = new SitemapStream({ hostname: BASE_URL });
  allPages.forEach(url => {
    sitemap.write({ url, changefreq: 'monthly', priority: url === '/' ? 1.0 : 0.7 });
  });
  sitemap.end();
  const data = await streamToPromise(sitemap);
  writeFileSync(path.join(__dirname, '../public/sitemap.xml'), data.toString());
  console.log('Sitemap generated!');
})(); 