import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface CityPageProps {
  cityName: string;
  cityNameDE: string;
}

const CityPage: React.FC<CityPageProps> = ({ cityName, cityNameDE }) => {
  const { language } = useI18n();
  const isGerman = language === 'de';

  const content = {
    pl: {
      title: `Ogrodzenia ${cityName} - Nowoczesne i Klasyczne | MGK Metall Zäune`,
      heroTitle: `Ogrodzenia ${cityName}`,
      heroDesc: `Profesjonalne ogrodzenia metalowe w ${cityName}. Nowoczesne i klasyczne ogrodzenia, bramy przesuwne, bramy dwuskrzydłowe. Darmowa wycena, montaż na terenie ${cityName}.`,
      modernTitle: `Nowoczesne ogrodzenia ${cityName}`,
      modernDesc: `Nowoczesne ogrodzenia metalowe w ${cityName} to połączenie funkcjonalności i estetyki. Oferujemy ogrodzenia z poziomych profili, które doskonale komponują się z nowoczesną architekturą. Nasze ogrodzenia w ${cityName} wykonane są z wysokiej jakości stali ocynkowanej malowanej proszkowo, co zapewnia trwałość i odporność na warunki atmosferyczne.`,
      modernFeatures: [
        `Minimalistyczny design idealny dla ${cityName}`,
        'Ocynk lub stalowa konstrukcja',
        'Odporność na warunki pogodowe',
        'Łatwe w utrzymaniu',
        'Różne kolory i wzory'
      ],
      classicTitle: `Klasyczne ogrodzenia ${cityName}`,
      classicDesc: `Klasyczne ogrodzenia w ${cityName} to tradycyjne rozwiązania łączące bezpieczeństwo z elegancją. Nasze klasyczne ogrodzenia w ${cityName} charakteryzują się ozdobnymi elementami i solidną konstrukcją. Wykonane z najlepszych materiałów, zapewniają długoletnią trwałość i estetyczny wygląd.`,
      classicFeatures: [
        `Tradycyjny styl pasujący do architektury ${cityName}`,
        'Stalowa konstrukcja',
        'Indywidualne wzory',
        'Automatyka bram',
        'Elementy dekoracyjne'
      ],
      ctaTitle: `Zamów ogrodzenie w ${cityName}`,
      ctaDesc: `Skontaktuj się z nami, aby otrzymać darmową wycenę ogrodzenia w ${cityName}. Oferujemy kompleksowe usługi: projekt, produkcja i montaż.`,
      seoTitle: `Ogrodzenia ${cityName} - Nowoczesne i Klasyczne Ogrodzenia Metalowe`,
      seoDesc: `Profesjonalne ogrodzenia metalowe w ${cityName}. Nowoczesne ogrodzenia z poziomych profili, klasyczne ogrodzenia ozdobne, bramy przesuwne, bramy dwuskrzydłowe. Darmowa wycena, montaż na terenie ${cityName}. MGK Metall Zäune - polski producent z 11-letnim doświadczeniem.`
    },
    de: {
      title: `Zäune ${cityNameDE} - Moderne und Klassische | MGK Metall Zäune`,
      heroTitle: `Zäune ${cityNameDE}`,
      heroDesc: `Professionelle Metallzäune in ${cityNameDE}. Moderne und klassische Zäune, Schiebetore, Doppelflügeltore. Kostenloses Angebot, Montage in ${cityNameDE}.`,
      modernTitle: `Moderne Zäune ${cityNameDE}`,
      modernDesc: `Moderne Metallzäune in ${cityNameDE} vereinen Funktionalität und Ästhetik. Wir bieten Zäune mit horizontalen Profilen, die sich perfekt in moderne Architektur einfügen. Unsere Zäune in ${cityNameDE} werden aus hochwertigem pulverbeschichtetem verzinktem Stahl gefertigt, was Langlebigkeit und Witterungsbeständigkeit garantiert.`,
      modernFeatures: [
        `Minimalistisches Design ideal für ${cityNameDE}`,
        'Verzinkt- oder Stahlkonstruktion',
        'Witterungsbeständig',
        'Pflegeleicht',
        'Verschiedene Farben und Designs'
      ],
      classicTitle: `Klassische Zäune ${cityNameDE}`,
      classicDesc: `Klassische Zäune in ${cityNameDE} sind traditionelle Lösungen, die Sicherheit und Eleganz vereinen. Unsere klassischen Zäune in ${cityNameDE} zeichnen sich durch dekorative Elemente und solide Konstruktion aus. Aus besten Materialien gefertigt, garantieren sie langjährige Haltbarkeit und ästhetisches Aussehen.`,
      classicFeatures: [
        `Traditioneller Stil passend zur Architektur von ${cityNameDE}`,
        'Stahlkonstruktion',
        'Individuelle Muster',
        'Torautomatik',
        'Dekorative Elemente'
      ],
      ctaTitle: `Zaun in ${cityNameDE} bestellen`,
      ctaDesc: `Kontaktieren Sie uns für ein kostenloses Angebot für einen Zaun in ${cityNameDE}. Wir bieten umfassende Dienstleistungen: Planung, Produktion und Montage.`,
      seoTitle: `Zäune ${cityNameDE} - Moderne und Klassische Metallzäune`,
      seoDesc: `Professionelle Metallzäune in ${cityNameDE}. Moderne Zäune mit horizontalen Profilen, klassische dekorative Zäune, Schiebetore, Doppelflügeltore. Kostenloses Angebot, Montage in ${cityNameDE}. MGK Metall Zäune - polnischer Hersteller mit 11 Jahren Erfahrung.`
    }
  };

  const currentContent = isGerman ? content.de : content.pl;

  React.useEffect(() => {
    document.title = currentContent.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', currentContent.seoDesc);
    }
  }, [currentContent]);

  // --- SEO MIX SECTION ---
  const seoMixDE = [
    'Moderne Zäune',
    'Klassische Zäune',
    'Französische Balkone',
    'Sichtschutzzäune',
    'Schiebetore',
    'Doppelflügeltore',
    'Pforten',
    'Geländer & Handläufe',
    'Zaunpaneele',
  ];

  // --- SEO LONG TEXT ---
  const seoLongTextDE = (
    <>
      <p className="mb-4 text-gray-700 text-lg">
        Suchen Sie nach hochwertigen Zaunlösungen in {cityNameDE}? Wir bieten <b>moderne Zäune {cityNameDE}</b>, <b>klassische Zäune {cityNameDE}</b> sowie <b>französische Balkone {cityNameDE}</b>. Zu unserem Sortiment gehören auch <b>Sichtschutzzäune {cityNameDE}</b>, <b>Schiebetore {cityNameDE}</b>, <b>Doppelflügeltore {cityNameDE}</b>, <b>Pforten {cityNameDE}</b>, <b>Geländer & Handläufe {cityNameDE}</b> und <b>Zaunpaneele {cityNameDE}</b>.
      </p>
      <p className="mb-4 text-gray-700 text-lg">
        Jedes Produkt ist individuell anpassbar – sowohl im Design als auch in der Funktionalität. Wir bieten professionelle Montage, Beratung und faire Preise in {cityNameDE} und Umgebung.
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Moderne Zäune {cityNameDE}</li>
        <li>Klassische Zäune {cityNameDE}</li>
        <li>Französische Balkone {cityNameDE}</li>
        <li>Sichtschutzzäune {cityNameDE}</li>
        <li>Schiebetore {cityNameDE}</li>
        <li>Doppelflügeltore {cityNameDE}</li>
        <li>Pforten {cityNameDE}</li>
        <li>Geländer & Handläufe {cityNameDE}</li>
        <li>Zaunpaneele {cityNameDE}</li>
      </ul>
    </>
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">{currentContent.heroTitle}</h1>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            {currentContent.heroDesc}
          </p>
        </div>
      </section>

      {/* Modern Fences Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">{currentContent.modernTitle}</h2>
              <div className="w-16 h-1 bg-green-500 mb-6"></div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {currentContent.modernDesc}
              </p>
              <ul className="space-y-3">
                {currentContent.modernFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-500 font-bold text-xl">🏠</span>
                </div>
                <p className="text-gray-600 font-medium">Nowoczesne ogrodzenie</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classic Fences Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-500 font-bold text-xl">🏛️</span>
                  </div>
                  <p className="text-gray-600 font-medium">Klasyczne ogrodzenie</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">{currentContent.classicTitle}</h2>
              <div className="w-16 h-1 bg-green-500 mb-6"></div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {currentContent.classicDesc}
              </p>
              <ul className="space-y-3">
                {currentContent.classicFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEO LONG TEXT SECTION */}
      <section className="py-12 bg-white border-t border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Zaun und Tore in {cityNameDE}</h2>
          {seoLongTextDE}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">{currentContent.ctaTitle}</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            {currentContent.ctaDesc}
          </p>
          <Link 
            to="/quote" 
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 inline-flex items-center group"
          >
            {isGerman ? 'Kostenloses Angebot' : 'Darmowa wycena'}
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CityPage; 