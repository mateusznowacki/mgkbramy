import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CheckCircle } from 'lucide-react';
import { useI18n } from '../lib/i18n';

const Products = () => {
  const { t, language } = useI18n();
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
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">{t('products', 'heroTitle')}</h1>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            {t('products', 'heroDesc')}
          </p>
        </div>
      </section>

      {/* Products Grid */}
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
                  {/* Opis produktu */}
                  {product.description && !['slidingGateDesc','doubleSwingGateDesc','wicketDesc','panelDesc'].includes(product.description) && product.description !== '' && (
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

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{t('products', 'whyChoose')}</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-green-500 font-bold text-xl">★</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">{t('products', 'premiumMaterials')}</h3>
              <p className="text-gray-600">{t('products', 'premiumMaterialsDesc')}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-green-500 font-bold text-xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">{t('products', 'fastInstall')}</h3>
              <p className="text-gray-600">{t('products', 'fastInstallDesc')}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-green-500 font-bold text-xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">{t('products', 'warranty')}</h3>
              <p className="text-gray-600">{t('products', 'warrantyDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
