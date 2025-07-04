import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook } from 'lucide-react';
import { useI18n } from '../lib/i18n';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" fill="currentColor" {...props}>
    <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.393L4 29l7.828-2.05C13.41 27.633 14.686 28 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.13 0-2.238-.188-3.287-.558l-.235-.08-4.65 1.217 1.24-4.527-.153-.236C7.01 18.13 6.25 16.6 6.25 15c0-5.376 4.374-9.75 9.75-9.75s9.75 4.374 9.75 9.75-4.374 9.75-9.75 9.75zm5.13-7.13c-.28-.14-1.65-.815-1.905-.91-.255-.095-.44-.14-.625.14-.185.28-.715.91-.88 1.095-.165.185-.325.21-.605.07-.28-.14-1.185-.435-2.255-1.385-.833-.743-1.396-1.66-1.56-1.94-.165-.28-.018-.43.123-.57.127-.127.28-.33.42-.495.14-.165.185-.28.28-.465.093-.186.047-.35-.023-.49-.07-.14-.625-1.51-.855-2.07-.225-.54-.455-.465-.625-.475-.16-.01-.35-.012-.54-.012-.19 0-.495.07-.755.35-.26.28-1 1-.97 2.43.03 1.43 1.04 2.81 1.19 3.01.14.19 2.05 3.13 5.01 4.27.7.3 1.25.48 1.68.61.705.225 1.345.193 1.85.117.565-.085 1.65-.675 1.885-1.33.235-.655.235-1.215.165-1.33-.07-.115-.255-.185-.535-.325z" />
  </svg>
);

const Footer = () => {
  const { t } = useI18n();
  return (
    <>
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/4917682184462"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 bottom-6 left-6 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-colors"
        style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.2)' }}
        aria-label="WhatsApp"
      >
        <WhatsAppIcon width={40} height={40} />
      </a>
      <footer className="bg-slate-900 text-gray-300">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-green-500 p-2 rounded">
                  <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                    <span className="font-bold text-slate-900 text-lg">MGK</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-xl">{t('footer', 'company')}</h3>
                </div>
              </div>
              <p className="text-gray-300 mb-2" dangerouslySetInnerHTML={{ __html: t('footer', 'description') }} />
              <div className="flex space-x-4 mt-4">
                <a href="https://www.facebook.com/mgkmetallzaune" target="_blank" rel="noopener noreferrer">
                  <Facebook size={20} className="hover:text-green-400 cursor-pointer transition-colors" />
                </a>
                <a href="https://www.tiktok.com/@adamkrupa61" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-green-400 cursor-pointer transition-colors"><path d="M9 17a5 5 0 1 0 5-5V3h3a5 5 0 0 0 5 5"/><circle cx="9" cy="17" r="5"/></svg>
                </a>
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-semibold text-lg mb-4 text-green-400">{t('footer', 'products')}</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/produkte" className="hover:text-white transition-colors">{t('productCategories', 'modern')}</a></li>
                <li><a href="/produkte" className="hover:text-white transition-colors">{t('productCategories', 'classic')}</a></li>
                <li><a href="/produkte" className="hover:text-white transition-colors">{t('productCategories', 'decorative')}</a></li>
                <li><a href="/produkte" className="hover:text-white transition-colors">{t('productCategories', 'privacy')}</a></li>
                <li><a href="/produkte" className="hover:text-white transition-colors">{t('productCategories', 'slidingGate')}</a></li>
                <li><a href="/produkte" className="hover:text-white transition-colors">{t('productCategories', 'doubleSwingGate')}</a></li>
                <li><a href="/produkte" className="hover:text-white transition-colors">{t('productCategories', 'wicket')}</a></li>
                <li><a href="/produkte" className="hover:text-white transition-colors">{t('productCategories', 'railings')}</a></li>
                <li><a href="/produkte" className="hover:text-white transition-colors">{t('productCategories', 'panel')}</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4 text-green-400">{t('footer', 'quickLinks')}</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/" className="hover:text-white transition-colors">{t('footer', 'home')}</a></li>
                <li><a href="/ueber-uns" className="hover:text-white transition-colors">{t('footer', 'about')}</a></li>
                <li><a href="/galerie" className="hover:text-white transition-colors">{t('footer', 'gallery')}</a></li>
                <li><a href="/kontakt" className="hover:text-white transition-colors">{t('footer', 'contactPage')}</a></li>
                <li><a href="/angebot" className="hover:text-white transition-colors">{t('footer', 'quote')}</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-lg mb-4 text-green-400">{t('footer', 'contact')}</h4>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center space-x-2">
                  <Mail size={16} />
                  <a href={`mailto:${t('footer', 'email')}`} className="hover:text-white transition-colors">{t('footer', 'email')}</a>
                </p>
                <p className="flex items-center space-x-2">
                  <Phone size={16} />
                  <a href={`tel:${t('footer', 'phone')}`} className="hover:text-white transition-colors">{t('footer', 'phone')}</a>
                </p>
                <p className="flex items-center space-x-2">
                  <MapPin size={16} />
                  <a href="https://maps.app.goo.gl/wQgBVoyJNxSKrLY46" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{t('footer', 'location')}</a>
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">{t('footer', 'copyright')} | <a href="/privacy" className="hover:text-white transition-colors ml-2">{t('footer', 'privacy')}</a> | <a href="/terms" className="hover:text-white transition-colors ml-2">{t('footer', 'terms')}</a></p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
