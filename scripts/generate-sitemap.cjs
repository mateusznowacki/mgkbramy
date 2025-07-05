const { writeFileSync } = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const path = require('path');

const BASE_URL = 'https://mgkmetallzaune.de';

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

const cities = require('../src/data/cities.json');
const realizations = require('../src/data/realizations.json');

const cityPages = cities.map(city => `/zaeune/${city.slug}`);
const realizationPages = realizations.map(r => `/realizations/${r.id}`);

const allPages = [
  ...staticPages,
  ...cityPages,
  ...realizationPages,
];

function cleanUrl(url) {
  if (url === '/') return '';
  return url.replace(/^\//, '');
}

(async () => {
  const sitemap = new SitemapStream({ hostname: BASE_URL });
  allPages.forEach(url => {
    sitemap.write({ url: cleanUrl(url), changefreq: 'monthly', priority: url === '/' ? 1.0 : 0.7 });
  });
  sitemap.end();
  const data = await streamToPromise(sitemap);
  writeFileSync(path.join(__dirname, '../public/sitemap.xml'), data.toString());
  console.log('Sitemap generated!');
})(); 