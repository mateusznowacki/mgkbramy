const { writeFileSync } = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const path = require('path');

// Import danych
const { cities } = require('../src/data/cities');
const { realizations } = require('../src/data/realizations');

const BASE_URL = 'https://mgkmatallzaune.de';

// Statyczne podstrony
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

// Dynamiczne podstrony miast
const cityPages = cities.map(city => `/cities/${city.slug}`);

// Dynamiczne podstrony realizacji
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