import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calculator, CheckCircle } from 'lucide-react';
import { useI18n } from '../lib/i18n';

const Quote = () => {
  const { t, language } = useI18n();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    projectType: '',
    fenceLength: '',
    fenceHeight: '',
    material: '',
    gateRequired: false,
    additionalInfo: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let msg;
    if (language === 'de') {
      const materialKey = formData.material === 'wrought-iron' ? 'wroughtIron' : formData.material;
      msg = `Name: ${formData.name}\nE-Mail: ${formData.email}\nTelefon: ${formData.phone}\nAdresse: ${formData.address}\nProjekttyp: ${t('quote', formData.projectType) || formData.projectType}\nZaunlänge: ${formData.fenceLength} m\nZaunhöhe: ${formData.fenceHeight} m\nMaterial: ${t('quote', materialKey) || formData.material}\nTor benötigt: ${formData.gateRequired ? 'Ja' : 'Nein'}\nZusätzliche Informationen: ${formData.additionalInfo}`;
    } else {
      const materialKey = formData.material === 'wrought-iron' ? 'wroughtIron' : formData.material;
      msg = `Imię i nazwisko: ${formData.name}\nE-mail: ${formData.email}\nTelefon: ${formData.phone}\nAdres: ${formData.address}\nTyp projektu: ${t('quote', formData.projectType) || formData.projectType}\nDługość ogrodzenia: ${formData.fenceLength} m\nWysokość ogrodzenia: ${formData.fenceHeight} m\nMateriał: ${t('quote', materialKey) || formData.material}\nPotrzebna brama: ${formData.gateRequired ? 'Tak' : 'Nie'}\nDodatkowe informacje: ${formData.additionalInfo}`;
    }
    const phone = '4917682184462';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">{t('quote', 'heroTitle')}</h1>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            {t('quote', 'heroDesc')}
          </p>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Form */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">{t('quote', 'projectDetails')}</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">{t('quote', 'name')} *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">{t('quote', 'email')} *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">{t('quote', 'phone')} *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">{t('quote', 'projectType')} *</label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        <option value="">{t('quote', 'selectProjectType')}</option>
                        <option value="residential">{t('quote', 'residential')}</option>
                        <option value="commercial">{t('quote', 'commercial')}</option>
                        <option value="industrial">{t('quote', 'industrial')}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">{t('quote', 'address')} *</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Street address, city, state, zip code"
                    />
                  </div>

                  {/* Project Specifications */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">{t('quote', 'fenceLength')}</label>
                      <input
                        type="number"
                        name="fenceLength"
                        value={formData.fenceLength}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="np. 30"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">{t('quote', 'fenceHeight')}</label>
                      <select
                        name="fenceHeight"
                        value={formData.fenceHeight}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        <option value="">{t('quote', 'selectHeight')}</option>
                        <option value="1">1 m</option>
                        <option value="1.2">1.2 m</option>
                        <option value="1.5">1.5 m</option>
                        <option value="1.8">1.8 m</option>
                        <option value="2">2 m</option>
                        <option value="custom">{t('quote', 'selectHeight')}</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">{t('quote', 'material')}</label>
                      <select
                        name="material"
                        value={formData.material}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        <option value="">{t('quote', 'selectMaterial')}</option>
                        <option value="aluminum">{t('quote', 'aluminum')}</option>
                        <option value="steel">{t('quote', 'steel')}</option>
                        <option value="wrought-iron">{t('quote', 'wroughtIron')}</option>
                        <option value="vinyl">{t('quote', 'vinyl')}</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="gateRequired"
                      checked={formData.gateRequired}
                      onChange={handleChange}
                      className="mr-3 h-4 w-4 text-green-500 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label className="text-gray-700 font-medium">{t('quote', 'gateRequired')}</label>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">{t('quote', 'additionalInfo')}</label>
                    <textarea
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center"
                  >
                    <Calculator className="mr-2" size={20} />
                    {t('quote', 'getMyQuote')}
                  </button>
                </form>
              </div>

              {/* Quote Benefits */}
              <div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">{t('quote', 'whatYouGet')}</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{t('quote', 'benefitEstimate')}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{t('quote', 'benefitConsult')}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{t('quote', 'benefitMaterial')}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{t('quote', 'benefitTimeline')}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{t('quote', 'benefitNoHidden')}</span>
                    </li>
                  </ul>

                  <div className="mt-6 p-4 bg-green-100 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">{t('quote', 'quickResponse')}</h4>
                    <p className="text-green-700 text-sm">
                      {t('quote', 'quickResponseDesc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Quote;
