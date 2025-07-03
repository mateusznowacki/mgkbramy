import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, Award, Wrench, Shield } from 'lucide-react';
import { useI18n } from '../lib/i18n';

const About = () => {
  const { t } = useI18n();
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">{t('about', 'heroTitle')}</h1>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            {t('about', 'heroDesc')}
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">{t('about', 'storyTitle')}</h2>
              <div className="w-16 h-1 bg-green-500 mb-6"></div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('about', 'story1')}
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('about', 'story2')}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t('about', 'story3')}
              </p>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Users size={64} className="text-green-500 mx-auto mb-4" />
                <p className="text-gray-600 font-medium">{t('about', 'expertTeam')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-500 mb-2">11+</div>
              <p className="text-gray-600 font-medium">{t('about', 'statsYears')}</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-500 mb-2">500+</div>
              <p className="text-gray-600 font-medium">{t('about', 'statsProjects')}</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-500 mb-2">98%</div>
              <p className="text-gray-600 font-medium">{t('about', 'statsSatisfaction')}</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-500 mb-2">24/7</div>
              <p className="text-gray-600 font-medium">{t('about', 'statsSupport')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{t('about', 'valuesTitle')}</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">{t('about', 'valueQuality')}</h3>
              <p className="text-gray-600">{t('about', 'valueQualityDesc')}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">{t('about', 'valueCustomer')}</h3>
              <p className="text-gray-600">{t('about', 'valueCustomerDesc')}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">{t('about', 'valueExcellence')}</h3>
              <p className="text-gray-600">{t('about', 'valueExcellenceDesc')}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">{t('about', 'valueCraft')}</h3>
              <p className="text-gray-600">{t('about', 'valueCraftDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
