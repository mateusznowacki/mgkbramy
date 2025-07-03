export interface City {
  id: string;
  name: string;
  nameDE: string;
  slug: string;
}

export const cities: City[] = [
  // Mecklenburg-Vorpommern
  { id: 'greifswald', name: 'Greifswald', nameDE: 'Greifswald', slug: 'greifswald' },
  { id: 'gustrow', name: 'Güstrow', nameDE: 'Güstrow', slug: 'gustrow' },
  { id: 'neubrandenburg', name: 'Neubrandenburg', nameDE: 'Neubrandenburg', slug: 'neubrandenburg' },
  { id: 'peenemunde', name: 'Peenemünde', nameDE: 'Peenemünde', slug: 'peenemunde' },
  { id: 'rostock', name: 'Rostock', nameDE: 'Rostock', slug: 'rostock' },
  { id: 'schwerin', name: 'Schwerin', nameDE: 'Schwerin', slug: 'schwerin' },
  { id: 'stralsund', name: 'Stralsund', nameDE: 'Stralsund', slug: 'stralsund' },
  { id: 'wismar', name: 'Wismar', nameDE: 'Wismar', slug: 'wismar' },
  
  // Brandenburg
  { id: 'brandenburg', name: 'Brandenburg', nameDE: 'Brandenburg', slug: 'brandenburg' },
  { id: 'cottbus', name: 'Cottbus', nameDE: 'Cottbus', slug: 'cottbus' },
  { id: 'eberswalde', name: 'Eberswalde', nameDE: 'Eberswalde', slug: 'eberswalde' },
  { id: 'frankfurt-oder', name: 'Frankfurt an der Oder', nameDE: 'Frankfurt an der Oder', slug: 'frankfurt-oder' },
  { id: 'potsdam', name: 'Potsdam', nameDE: 'Potsdam', slug: 'potsdam' },
  { id: 'schwedt', name: 'Schwedt', nameDE: 'Schwedt', slug: 'schwedt' },
  
  // Berlin
  { id: 'berlin', name: 'Berlin', nameDE: 'Berlin', slug: 'berlin' },
  { id: 'charlottenburg', name: 'Charlottenburg', nameDE: 'Charlottenburg', slug: 'charlottenburg' },
  { id: 'spandau', name: 'Spandau', nameDE: 'Spandau', slug: 'spandau' },
  { id: 'tempelhof', name: 'Tempelhof', nameDE: 'Tempelhof', slug: 'tempelhof' },
  { id: 'tiergarten', name: 'Tiergarten', nameDE: 'Tiergarten', slug: 'tiergarten' },
  
  // Sachsen-Anhalt
  { id: 'bernburg', name: 'Bernburg', nameDE: 'Bernburg', slug: 'bernburg' },
  { id: 'dessau', name: 'Dessau', nameDE: 'Dessau', slug: 'dessau' },
  { id: 'eisleben', name: 'Eisleben', nameDE: 'Eisleben', slug: 'eisleben' },
  { id: 'halberstadt', name: 'Halberstadt', nameDE: 'Halberstadt', slug: 'halberstadt' },
  { id: 'halle', name: 'Halle', nameDE: 'Halle', slug: 'halle' },
  { id: 'kothen', name: 'Köthen', nameDE: 'Köthen', slug: 'kothen' },
  { id: 'merseburg', name: 'Merseburg', nameDE: 'Merseburg', slug: 'merseburg' },
  { id: 'naumburg', name: 'Naumburg', nameDE: 'Naumburg', slug: 'naumburg' },
  { id: 'quedlinburg', name: 'Quedlinburg', nameDE: 'Quedlinburg', slug: 'quedlinburg' },
  { id: 'stendal', name: 'Stendal', nameDE: 'Stendal', slug: 'stendal' },
  { id: 'wernigerode', name: 'Wernigerode', nameDE: 'Wernigerode', slug: 'wernigerode' },
  { id: 'wittenberg', name: 'Wittenberg', nameDE: 'Wittenberg', slug: 'wittenberg' },
  
  // Sachsen
  { id: 'altenburg', name: 'Altenburg', nameDE: 'Altenburg', slug: 'altenburg' },
  { id: 'annaberg-buchholz', name: 'Annaberg-Buchholz', nameDE: 'Annaberg-Buchholz', slug: 'annaberg-buchholz' },
  { id: 'bautzen', name: 'Bautzen', nameDE: 'Bautzen', slug: 'bautzen' },
  { id: 'chemnitz', name: 'Chemnitz', nameDE: 'Chemnitz', slug: 'chemnitz' },
  { id: 'dresden', name: 'Dresden', nameDE: 'Dresden', slug: 'dresden' },
  { id: 'freiberg', name: 'Freiberg', nameDE: 'Freiberg', slug: 'freiberg' },
  { id: 'gorlitz', name: 'Görlitz', nameDE: 'Görlitz', slug: 'gorlitz' },
  { id: 'hoyerswerda', name: 'Hoyerswerda', nameDE: 'Hoyerswerda', slug: 'hoyerswerda' },
  { id: 'leipzig', name: 'Leipzig', nameDE: 'Leipzig', slug: 'leipzig' },
  { id: 'meissen', name: 'Meissen', nameDE: 'Meißen', slug: 'meissen' },
  { id: 'torgau', name: 'Torgau', nameDE: 'Torgau', slug: 'torgau' },
  { id: 'zittau', name: 'Zittau', nameDE: 'Zittau', slug: 'zittau' },
  { id: 'zwickau', name: 'Zwickau', nameDE: 'Zwickau', slug: 'zwickau' },
  
  // Thüringen
  { id: 'arnstadt', name: 'Arnstadt', nameDE: 'Arnstadt', slug: 'arnstadt' },
  { id: 'eisenach', name: 'Eisenach', nameDE: 'Eisenach', slug: 'eisenach' },
  { id: 'erfurt', name: 'Erfurt', nameDE: 'Erfurt', slug: 'erfurt' },
  { id: 'gera', name: 'Gera', nameDE: 'Gera', slug: 'gera' },
  { id: 'gotha', name: 'Gotha', nameDE: 'Gotha', slug: 'gotha' },
  { id: 'jena', name: 'Jena', nameDE: 'Jena', slug: 'jena' },
  { id: 'meiningen', name: 'Meiningen', nameDE: 'Meiningen', slug: 'meiningen' },
  { id: 'muhlhausen', name: 'Mühlhausen', nameDE: 'Mühlhausen', slug: 'muhlhausen' },
  { id: 'nordhausen', name: 'Nordhausen', nameDE: 'Nordhausen', slug: 'nordhausen' },
  { id: 'suhl', name: 'Suhl', nameDE: 'Suhl', slug: 'suhl' },
  { id: 'weimar', name: 'Weimar', nameDE: 'Weimar', slug: 'weimar' }
];

export const getCityBySlug = (slug: string): City | undefined => {
  return cities.find(city => city.slug === slug);
};

export const getAllCitySlugs = (): string[] => {
  return cities.map(city => city.slug);
}; 