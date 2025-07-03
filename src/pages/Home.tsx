import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProcessSteps from '../components/ProcessSteps';
import { ArrowRight, Shield, Award, Users, CheckCircle } from 'lucide-react';
import { useI18n } from '../lib/i18n';

const Home = () => {
  const { t } = useI18n();
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-green-900 text-white overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/mgk-home-video.mp4"
        />
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center z-20">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-green-400">{t('home', 'heroTitle1')}</span><br />
              {t('home', 'heroTitle2')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              {t('home', 'heroDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/quote" 
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 flex items-center justify-center group"
              >
                {t('home', 'getQuote')}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/gallery" 
                className="border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all flex items-center justify-center"
              >
                {t('home', 'viewGallery')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">{t('home', 'aboutTitle')}</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t('home', 'aboutDesc1')}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {t('home', 'aboutDesc2')}
            </p>
            <Link 
              to="/about" 
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all inline-flex items-center group"
            >
              {t('home', 'learnMore')}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{t('home', 'whyChoose')}</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home', 'whyDesc')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group hover:shadow-lg p-8 rounded-lg transition-all">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500 transition-colors">
                <Shield className="w-8 h-8 text-green-500 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">{t('home', 'premiumQuality')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('home', 'premiumQualityDesc')}
              </p>
            </div>

            <div className="text-center group hover:shadow-lg p-8 rounded-lg transition-all">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500 transition-colors">
                <Award className="w-8 h-8 text-green-500 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">{t('home', 'expertInstall')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('home', 'expertInstallDesc')}
              </p>
            </div>

            <div className="text-center group hover:shadow-lg p-8 rounded-lg transition-all">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500 transition-colors">
                <Users className="w-8 h-8 text-green-500 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">{t('home', 'customerFirst')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('home', 'customerFirstDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <ProcessSteps />

      {/* Products Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{t('home', 'ourProducts')}</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="relative bg-gray-200 h-64 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                <img src="/modern.png" alt="Ogrodzenia nowoczesne" className="object-cover w-full h-full" />
              </div>
              <Link to="/products" className="bg-green-500 text-white px-6 py-3 rounded-full inline-block hover:bg-green-600 transition-colors">
                {t('productCategories', 'modern')}
              </Link>
            </div>

            <div className="group cursor-pointer">
              <div className="relative bg-gray-200 h-64 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                <img src="/classic.png" alt="Ogrodzenia klasyczne" className="object-cover w-full h-full" />
              </div>
              <Link to="/products" className="bg-green-500 text-white px-6 py-3 rounded-full inline-block hover:bg-green-600 transition-colors">
                {t('productCategories', 'classic')}
              </Link>
            </div>

            <div className="group cursor-pointer">
              <div className="relative bg-gray-200 h-64 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                <img src="/balcony.png" alt="Balkony francuskie" className="object-cover w-full h-full" />
              </div>
              <Link to="/products" className="bg-green-500 text-white px-6 py-3 rounded-full inline-block hover:bg-green-600 transition-colors">
                {t('productCategories', 'decorative')}
              </Link>
            </div>

            <div className="group cursor-pointer">
              <div className="relative bg-gray-200 h-64 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                <img src="/private.png" alt="Ogrodzenia zasłaniające" className="object-cover w-full h-full" />
              </div>
              <Link to="/products" className="bg-green-500 text-white px-6 py-3 rounded-full inline-block hover:bg-green-600 transition-colors">
                {t('productCategories', 'privacy')}
              </Link>
            </div>

            <div className="group cursor-pointer">
              <div className="relative bg-gray-200 h-64 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                <img src="/sliding-gate.png" alt="Bramy przesuwne" className="object-cover w-full h-full" />
              </div>
              <Link to="/products" className="bg-green-500 text-white px-6 py-3 rounded-full inline-block hover:bg-green-600 transition-colors">
                {t('productCategories', 'slidingGate')}
              </Link>
            </div>

            <div className="group cursor-pointer">
              <div className="relative bg-gray-200 h-64 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                <img src="/double-leaf-gate.png" alt="Bramy dwuskrzydłowe" className="object-cover w-full h-full" />
              </div>
              <Link to="/products" className="bg-green-500 text-white px-6 py-3 rounded-full inline-block hover:bg-green-600 transition-colors">
                {t('productCategories', 'doubleSwingGate')}
              </Link>
            </div>

            <div className="group cursor-pointer">
              <div className="relative bg-gray-200 h-64 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                <img src="/wicket.png" alt="Furtki" className="object-cover w-full h-full" />
              </div>
              <Link to="/products" className="bg-green-500 text-white px-6 py-3 rounded-full inline-block hover:bg-green-600 transition-colors">
                {t('productCategories', 'wicket')}
              </Link>
            </div>

            <div className="group cursor-pointer">
              <div className="relative bg-gray-200 h-64 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                <img src="/balustrade.png" alt="Balustrady i poręcze" className="object-cover w-full h-full" />
              </div>
              <Link to="/products" className="bg-green-500 text-white px-6 py-3 rounded-full inline-block hover:bg-green-600 transition-colors">
                {t('productCategories', 'railings')}
              </Link>
            </div>

            <div className="group cursor-pointer">
              <div className="relative bg-gray-200 h-64 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                <img src="/automatics.png" alt="Automatyka bram" className="object-cover w-full h-full" />
              </div>
              <Link to="/products" className="bg-green-500 text-white px-6 py-3 rounded-full inline-block hover:bg-green-600 transition-colors">
                {t('productCategories', 'panel')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{t('home', 'customerReviews')}</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-600 mb-6 italic">
                "{t('home', 'review1')}"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  JD
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{t('home', 'review1Name')}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-600 mb-6 italic">
                "{t('home', 'review2')}"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  MS
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{t('home', 'review2Name')}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-600 mb-6 italic">
                "{t('home', 'review3')}"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  RT
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{t('home', 'review3Name')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">{t('home', 'readyFence')}</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            {t('home', 'readyFenceDesc')}
          </p>
          <Link 
            to="/quote" 
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 inline-flex items-center group"
          >
            {t('home', 'getQuote')}
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
