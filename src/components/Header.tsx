import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { useI18n } from '../lib/i18n';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, setLanguage } = useI18n();
  React.useEffect(() => { setLanguage('de'); }, [setLanguage]);

  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover-scale group">
            <div className="transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
              <img 
                src="/mgk-logo.png" 
                alt="MGK Metall Zäune Logo" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <div className="transition-all duration-300 group-hover:translate-x-1">
              <h1 className="font-bold text-xl">MGK Metall Zäune</h1>
              <p className="text-sm text-gray-300">Moderne Zäune und Tore</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`story-link transition-all duration-300 hover:text-green-400 hover:scale-105 ${isActive('/') ? 'text-green-400 scale-105' : ''}`}
            >
              {t('header', 'home')}
            </Link>
            <Link 
              to="/ueber-uns" 
              className={`story-link transition-all duration-300 hover:text-green-400 hover:scale-105 ${isActive('/ueber-uns') ? 'text-green-400 scale-105' : ''}`}
            >
              {t('header', 'about')}
            </Link>
            <Link 
              to="/produkte" 
              className={`story-link transition-all duration-300 hover:text-green-400 hover:scale-105 ${isActive('/produkte') ? 'text-green-400 scale-105' : ''}`}
            >
              {t('header', 'products')}
            </Link>
            <Link 
              to="/galerie" 
              className={`story-link transition-all duration-300 hover:text-green-400 hover:scale-105 ${isActive('/galerie') ? 'text-green-400 scale-105' : ''}`}
            >
              Galerie
            </Link>
            <Link 
              to="/zaeune" 
              className={`story-link transition-all duration-300 hover:text-green-400 hover:scale-105 ${isActive('/zaeune') ? 'text-green-400 scale-105' : ''}`}
            >
              Städte
            </Link>
            <Link 
              to="/kontakt" 
              className={`story-link transition-all duration-300 hover:text-green-400 hover:scale-105 ${isActive('/kontakt') ? 'text-green-400 scale-105' : ''}`}
            >
              {t('header', 'contact')}
            </Link>
            
            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-4 text-sm">
              <a href="tel:+4917682184462" className="flex items-center space-x-1 transition-all duration-300 hover:text-green-400 hover:scale-105">
                <Phone size={16} className="animate-pulse" />
                <span>+49 176 82184462</span>
              </a>
            </div>

            <Link 
              to="/angebot" 
              className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
            >
              {t('header', 'quote')}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden transition-all duration-300 hover:scale-110 hover:text-green-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="hover:text-green-400 transition-all duration-300 hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header', 'home')}
              </Link>
              <Link 
                to="/ueber-uns" 
                className="hover:text-green-400 transition-all duration-300 hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header', 'about')}
              </Link>
              <Link 
                to="/produkte" 
                className="hover:text-green-400 transition-all duration-300 hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header', 'products')}
              </Link>
              <Link 
                to="/galerie" 
                className="hover:text-green-400 transition-all duration-300 hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Galerie
              </Link>
              <Link 
                to="/zaeune" 
                className="hover:text-green-400 transition-all duration-300 hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Städte
              </Link>
              <Link 
                to="/kontakt" 
                className="hover:text-green-400 transition-all duration-300 hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header', 'contact')}
              </Link>
              
              <a 
                href="tel:+4917682184462"
                className="flex items-center space-x-2 text-green-500 font-semibold hover:text-green-600 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone size={18} />
                <span>+49 176 82184462</span>
              </a>

              <Link 
                to="/angebot" 
                className="bg-green-500 hover:bg-green-600 px-6 py-4 rounded-full text-lg font-semibold transition-all duration-300 inline-block text-center hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header', 'quote')}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
