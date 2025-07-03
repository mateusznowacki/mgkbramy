# Podstrony Miast - MGK Metall Zäune

## Opis funkcjonalności

Stworzono system podstron SEO dla 52 miast niemieckich, gdzie każda podstrona zawiera zoptymalizowane treści o ogrodzeniach nowoczesnych i klasycznych dla konkretnego miasta.

## Struktura plików

### Główne komponenty:
- `src/pages/cities/CityPage.tsx` - Szablon strony miasta
- `src/pages/cities/CityPageDynamic.tsx` - Dynamiczny komponent obsługujący routing
- `src/pages/CitiesList.tsx` - Strona z listą wszystkich miast
- `src/data/cities.ts` - Dane wszystkich miast

### Routing:
- `/cities` - Lista wszystkich miast
- `/cities/:citySlug` - Indywidualna strona miasta

## Lista miast

### Meklemburgia-Pomorze Przednie (8 miast):
- Greifswald
- Güstrow
- Neubrandenburg
- Peenemünde
- Rostock
- Schwerin
- Stralsund
- Wismar

### Brandenburgia (5 miast):
- Brandenburg
- Cottbus
- Eberswalde
- Frankfurt an der Oder
- Potsdam
- Schwedt

### Berlin (5 miast):
- Berlin
- Charlottenburg
- Spandau
- Tempelhof
- Tiergarten

### Saksonia-Anhalt (11 miast):
- Bernburg
- Dessau
- Eisleben
- Halberstadt
- Halle
- Köthen
- Merseburg
- Naumburg
- Quedlinburg
- Stendal
- Wernigerode
- Wittenberg

### Saksonia (12 miast):
- Altenburg
- Annaberg-Buchholz
- Bautzen
- Chemnitz
- Dresden
- Freiberg
- Görlitz
- Hoyerswerda
- Leipzig
- Meissen
- Torgau
- Zittau
- Zwickau

### Turyngia (11 miast):
- Arnstadt
- Eisenach
- Erfurt
- Gera
- Gotha
- Jena
- Meiningen
- Mühlhausen
- Nordhausen
- Suhl
- Weimar

## Funkcjonalności SEO

### Każda podstrona miasta zawiera:
1. **Tytuł SEO** - "Ogrodzenia [Miasto] - Nowoczesne i Klasyczne | MGK Metall Zäune"
2. **Meta opis** - Zoptymalizowany opis z nazwą miasta
3. **Treści SEO** - Sekcje o ogrodzeniach nowoczesnych i klasycznych
4. **Call-to-action** - Przyciski do wyceny i kontaktu
5. **Wielojęzyczność** - Treści w języku polskim i niemieckim

### Przykładowe URL-e:
- `/cities/berlin` - Ogrodzenia Berlin
- `/cities/dresden` - Ogrodzenia Dresden
- `/cities/leipzig` - Ogrodzenia Leipzig
- `/cities/potsdam` - Ogrodzenia Potsdam

## Sitemap.xml

Utworzono plik `public/sitemap.xml` zawierający wszystkie podstrony miast z odpowiednimi priorytetami SEO.

## Nawigacja

Dodano link "Miasta" / "Städte" w głównej nawigacji, który prowadzi do strony z listą wszystkich miast.

## Techniczne szczegóły

### Routing:
```typescript
<Route path="/cities" element={<CitiesList />} />
<Route path="/cities/:citySlug" element={<CityPageDynamic />} />
```

### Struktura danych miasta:
```typescript
interface City {
  id: string;
  name: string;      // Nazwa polska
  nameDE: string;    // Nazwa niemiecka
  slug: string;      // URL slug
}
```

### Przykład użycia:
```typescript
const city = getCityBySlug('berlin');
// Zwraca: { id: 'berlin', name: 'Berlin', nameDE: 'Berlin', slug: 'berlin' }
```

## Dodawanie nowych miast

Aby dodać nowe miasto:

1. Dodaj wpis do tablicy `cities` w `src/data/cities.ts`
2. Dodaj URL do `public/sitemap.xml`
3. Miasto automatycznie pojawi się na stronie `/cities`

## Optymalizacja SEO

- Każda podstrona ma unikalny tytuł i meta opis
- Treści są zoptymalizowane pod kątem słów kluczowych lokalnych
- Struktura HTML jest semantyczna
- Sitemap.xml zawiera wszystkie podstrony
- Responsywny design dla wszystkich urządzeń

## Języki

Wszystkie podstrony obsługują:
- Polski (domyślny)
- Niemiecki (przełącznik w nawigacji)

Treści są automatycznie dostosowywane do wybranego języka. 