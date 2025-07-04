import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import { cities } from '@/data/cities';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CitiesList: React.FC = () => {
  const { t } = useI18n();

  const content = {
    de: {
      title: 'Zäune in deutschen Städten - MGK Metall Zäune',
      heroTitle: 'Zäune in deutschen Städten',
      heroDesc: 'Suchen Sie hochwertige Metallzäune in Deutschland? MGK Metall Zäune ist Ihr Experte für moderne und klassische Zäune, Schiebetore, Doppelflügeltore, Pforten, Sichtschutzzäune, französische Balkone, Geländer und Zaunpaneelen in ganz Deutschland. Wir bieten individuelle Beratung, professionelle Planung, Fertigung und Montage direkt vor Ort – für Privatkunden, Unternehmen und Industrie. Verzinkter Stahl, Pulverbeschichtung in RAL-Farben, langlebige Automatisierung (Nice), intelligente Zugangskontrollsysteme und höchste Qualität aus Polen. Profitieren Sie von langjähriger Erfahrung, persönlichem Service und einem kostenlosen Angebot für Ihr Zaunprojekt in jeder deutschen Stadt.',
      sectionTitle: 'Wählen Sie Ihre Stadt',
      sectionDesc: 'Klicken Sie auf Ihre Stadt und entdecken Sie unser umfassendes Angebot an Metallzäunen, Schiebetoren, Doppelflügeltoren, Pforten, Sichtschutzzäunen, Geländern und Zaunpaneelen. Wir bieten individuelle Lösungen, professionelle Montage, Automatisierung und Beratung für Ihr Grundstück in ganz Deutschland. Jetzt kostenloses Angebot anfordern!',
      regions: {
        baden: 'Baden-Württemberg',
        bayern: 'Bayern',
        berlin: 'Berlin',
        brandenburg: 'Brandenburg',
        bremen: 'Bremen',
        hamburg: 'Hamburg',
        hessen: 'Hessen',
        mecklenburg: 'Mecklenburg-Vorpommern',
        niedersachsen: 'Niedersachsen',
        nrw: 'Nordrhein-Westfalen',
        rheinland: 'Rheinland-Pfalz',
        saarland: 'Saarland',
        sachsen: 'Sachsen',
        sachsenAnhalt: 'Sachsen-Anhalt',
        schleswig: 'Schleswig-Holstein',
        thuringen: 'Thüringen'
      }
    }
  };

  const currentContent = content.de;

  // Grupowanie miast po regionie
  const cityGroups = Object.keys(currentContent.regions).reduce((acc, regionKey) => {
    acc[regionKey] = cities.filter(city => city.region === regionKey);
    return acc;
  }, {} as Record<string, typeof cities>);

  React.useEffect(() => {
    document.title = currentContent.title;
  }, [currentContent]);

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

      {/* Cities List Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{currentContent.sectionTitle}</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {currentContent.sectionDesc}
            </p>
          </div>

          <div className="space-y-12">
            {Object.entries(cityGroups).map(([regionKey, regionCities]) => (
              <div key={regionKey} className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  {currentContent.regions[regionKey as keyof typeof currentContent.regions]}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {regionCities.map((city) => (
                    <Link
                      key={city.id}
                      to={`/zaeune/${city.slug}`}
                      className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all text-center group hover:scale-105"
                    >
                      <h4 className="font-semibold text-slate-900 group-hover:text-green-600 transition-colors mb-2">
                        {city.nameDE}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {t('header', 'quote')}
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            {t('header', 'quoteDesc')}
          </p>
          <Link 
            to="/angebot" 
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 inline-flex items-center group"
          >
            {t('header', 'quote')}
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

export default CitiesList; 