import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle } from 'lucide-react';

interface CityPageProps {
  cityName: string;
  cityNameDE: string;
}

const CityPage: React.FC<CityPageProps> = ({ cityName, cityNameDE }) => {
  const { t } = useI18n();

  const content = {
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

  const currentContent = content.de;

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

  const products = [
    {
      title: t('productCategories', 'modern'),
      description: t('products', 'modernDesc'),
      image: '/modern.png',
      features: [
        t('products', 'modernFeature1'),
        t('products', 'modernFeature2'),
        t('products', 'modernFeature3'),
        t('products', 'modernFeature4'),
      ]
    },
    {
      title: t('productCategories', 'classic'),
      description: t('products', 'classicDesc'),
      image: '/classic.png',
      features: [
        t('products', 'classicFeature1'),
        t('products', 'classicFeature2'),
        t('products', 'classicFeature3'),
        t('products', 'classicFeature4'),
      ]
    },
    {
      title: t('productCategories', 'decorative'),
      description: t('products', 'decorativeDesc'),
      image: '/balcony.png',
      features: [
        t('products', 'decorativeFeature1'),
        t('products', 'decorativeFeature2'),
        t('products', 'decorativeFeature3'),
        t('products', 'decorativeFeature4'),
      ]
    },
    {
      title: t('productCategories', 'privacy'),
      description: t('products', 'privacyDesc'),
      image: '/private.png',
      features: [
        t('products', 'privacyFeature1'),
        t('products', 'privacyFeature2'),
        t('products', 'privacyFeature3'),
        t('products', 'privacyFeature4'),
      ]
    },
    {
      title: t('productCategories', 'slidingGate'),
      description: t('products', 'slidingGateDesc'),
      image: '/sliding-gate.png',
      features: [
        t('products', 'slidingGateFeature1') || 'Solidna konstrukcja',
        t('products', 'slidingGateFeature2') || 'Automatyka Nice',
        t('products', 'slidingGateFeature3') || 'Płynna praca',
        t('products', 'slidingGateFeature4') || 'Bezpieczeństwo',
      ],
    },
    {
      title: t('productCategories', 'doubleSwingGate'),
      description: t('products', 'doubleSwingGateDesc'),
      image: '/double-leaf-gate.png',
      features: [
        t('products', 'doubleSwingGateFeature1') || 'Wytrzymałość',
        t('products', 'doubleSwingGateFeature2') || 'Automatyka Nice',
        t('products', 'doubleSwingGateFeature3') || 'Wygoda użytkowania',
        t('products', 'doubleSwingGateFeature4') || 'Estetyka',
      ],
    },
    {
      title: t('productCategories', 'wicket'),
      description: t('products', 'wicketDesc'),
      image: '/wicket.png',
      features: [
        t('products', 'wicketFeature1') || 'Trwałość',
        t('products', 'wicketFeature2') || 'Integracja z kontrolą dostępu',
        t('products', 'wicketFeature3') || 'Estetyka',
        t('products', 'wicketFeature4') || 'Bezpieczeństwo',
      ],
    },
    {
      title: t('productCategories', 'railings'),
      description: t('products', 'railingsDesc'),
      image: '/balustrade.png',
      features: [
        t('products', 'railingsFeature1'),
        t('products', 'railingsFeature2'),
        t('products', 'railingsFeature3'),
        t('products', 'railingsFeature4'),
      ]
    },
    {
      title: t('productCategories', 'panel'),
      description: t('products', 'panelDesc') || '',
      image: '/automatics.png',
      features: [
        t('products', 'panelFeature1') || 'Niezawodność',
        t('products', 'panelFeature2') || 'Bezpieczeństwo',
        t('products', 'panelFeature3') || 'Komfort użytkowania',
        t('products', 'panelFeature4') || 'Nowoczesne technologie',
      ],
    },
  ];

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
            <div className="flex items-center justify-center">
              <img src="/modern.png" alt="Nowoczesne ogrodzenie" className="h-80 w-full max-w-md rounded-lg object-cover shadow-lg mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Classic Fences Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center justify-center">
                <img src="/classic.png" alt="Klasyczne ogrodzenie" className="h-80 w-full max-w-md rounded-lg object-cover shadow-lg mx-auto" />
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

      {/* SEO LONG TEXT SECTION (styl spójny z resztą) */}
      <section className="py-20 bg-white border-t border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Zaun und Tore in {cityNameDE}</h2>
          <p className="mb-4 text-gray-700 text-lg text-center">
            Suchen Sie nach hochwertigen Zaunlösungen in {cityNameDE}? Wir bieten <b>moderne Zäune {cityNameDE}</b>, <b>klassische Zäune {cityNameDE}</b> sowie <b>französische Balkone {cityNameDE}</b>. Zu unserem Sortiment gehören auch <b>Sichtschutzzäune {cityNameDE}</b>, <b>Schiebetore {cityNameDE}</b>, <b>Doppelflügeltore {cityNameDE}</b>, <b>Pforten {cityNameDE}</b>, <b>Geländer & Handläufe {cityNameDE}</b> und <b>Zaunpaneele {cityNameDE}</b>.
          </p>
          <p className="mb-4 text-gray-700 text-lg text-center">
            Jedes Produkt ist individuell anpassbar – sowohl im Design als auch in der Funktionalität. Wir bieten professionelle Montage, Beratung und faire Preise in {cityNameDE} und Umgebung.
          </p>
          <ul className="grid md:grid-cols-2 gap-2 list-none max-w-2xl mx-auto mb-4">
            <li className="flex items-center text-gray-700"><svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>Moderne Zäune {cityNameDE}</li>
            <li className="flex items-center text-gray-700"><svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>Klassische Zäune {cityNameDE}</li>
            <li className="flex items-center text-gray-700"><svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>Französische Balkone {cityNameDE}</li>
            <li className="flex items-center text-gray-700"><svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>Sichtschutzzäune {cityNameDE}</li>
            <li className="flex items-center text-gray-700"><svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>Schiebetore {cityNameDE}</li>
            <li className="flex items-center text-gray-700"><svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>Doppelflügeltore {cityNameDE}</li>
            <li className="flex items-center text-gray-700"><svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>Pforten {cityNameDE}</li>
            <li className="flex items-center text-gray-700"><svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>Geländer & Handläufe {cityNameDE}</li>
            <li className="flex items-center text-gray-700"><svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>Zaunpaneele {cityNameDE}</li>
          </ul>
        </div>
      </section>

      {/* Products Grid (nowa sekcja zamiast Modern/Classic) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 w-full bg-slate-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{product.title}</h3>
                  {product.description && (
                    <p className="text-gray-600 mb-4">{product.description}</p>
                  )}
                  {product.features && product.features.length > 0 && (
                    <ul className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
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
            to="/angebot" 
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 inline-flex items-center group"
          >
            Kostenloses Angebot
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CityPage; 