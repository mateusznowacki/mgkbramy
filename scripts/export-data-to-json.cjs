const fs = require('fs');
const path = require('path');

function extractArray(tsContent, arrayName) {
  const start = tsContent.indexOf(`export const ${arrayName}`);
  if (start === -1) throw new Error(`Nie znaleziono tablicy ${arrayName}`);
  const arrayStart = tsContent.indexOf('[', start);
  const arrayEnd = tsContent.indexOf('];', arrayStart);
  if (arrayStart === -1 || arrayEnd === -1) throw new Error(`Nie znaleziono zakresu tablicy ${arrayName}`);
  let arrStr = tsContent.slice(arrayStart, arrayEnd + 1);
  arrStr = arrStr.replace(/\/\/.*$/gm, '');
  // Użyj eval do sparsowania tablicy JS
  return eval(arrStr);
}

// Eksport cities
const citiesTs = fs.readFileSync(path.join(__dirname, '../src/data/cities.ts'), 'utf8');
const cities = extractArray(citiesTs, 'cities');
fs.writeFileSync(path.join(__dirname, '../src/data/cities.json'), JSON.stringify(cities, null, 2));

// Eksport realizations
const realizationsTs = fs.readFileSync(path.join(__dirname, '../src/data/realizations.ts'), 'utf8');
const realizations = extractArray(realizationsTs, 'realizations');
fs.writeFileSync(path.join(__dirname, '../src/data/realizations.json'), JSON.stringify(realizations, null, 2));

console.log('Eksportowano cities.json i realizations.json'); 