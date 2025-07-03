import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Languages, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useI18n } from '../lib/i18n';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useI18n();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const languages = [
    { code: 'pl', name: 'Polski', flag: '🇵🇱' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  ];

  const handleLanguageChange = (languageCode: string) => {
    setLanguage(languageCode as 'pl' | 'de');
    console.log(`Language changed to: ${languageCode}`);
  };

  return (
    <header className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover-scale group">
            <div className="bg-green-500 p-2 rounded transition-all duration-300 group-hover:bg-green-400 group-hover:shadow-lg">
              <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                <span className="font-bold text-slate-900 text-lg transition-transform duration-300 group-hover:scale-110">MGK</span>
              </div>
            </div>
            <div className="transition-all duration-300 group-hover:translate-x-1">
              <h1 className="font-bold text-xl">MGK Metall Zäune</h1>
              <p className="text-sm text-gray-300">Nowoczesne ogrodzenia i bramy</p>
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
              to="/about" 
              className={`story-link transition-all duration-300 hover:text-green-400 hover:scale-105 ${isActive('/about') ? 'text-green-400 scale-105' : ''}`}
            >
              {t('header', 'about')}
            </Link>
            <Link 
              to="/products" 
              className={`story-link transition-all duration-300 hover:text-green-400 hover:scale-105 ${isActive('/products') ? 'text-green-400 scale-105' : ''}`}
            >
              {t('header', 'products')}
            </Link>
            <Link 
              to="/gallery" 
              className={`story-link transition-all duration-300 hover:text-green-400 hover:scale-105 ${isActive('/gallery') ? 'text-green-400 scale-105' : ''}`}
            >
              {t('header', 'gallery')}
            </Link>
            <Link 
              to="/cities" 
              className={`story-link transition-all duration-300 hover:text-green-400 hover:scale-105 ${isActive('/cities') ? 'text-green-400 scale-105' : ''}`}
            >
              {language === 'de' ? 'Städte' : 'Miasta'}
            </Link>
            <Link 
              to="/contact" 
              className={`story-link transition-all duration-300 hover:text-green-400 hover:scale-105 ${isActive('/contact') ? 'text-green-400 scale-105' : ''}`}
            >
              {t('header', 'contact')}
            </Link>
            
            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1 transition-all duration-300 hover:text-green-400 hover:scale-105">
                <Phone size={16} className="animate-pulse" />
                <span>+49 176 82184462</span>
              </div>
            </div>

            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 hover:text-green-400 transition-all duration-300 hover:scale-105 focus:outline-none">
                <Languages size={16} />
                <span>{language}</span>
                <ChevronDown size={12} className="transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-slate-800 border-slate-700">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className="text-white hover:bg-slate-700 hover:text-green-400 transition-all duration-200 cursor-pointer"
                  >
                    <span className="mr-2">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link 
              to="/quote" 
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
                to="/about" 
                className="hover:text-green-400 transition-all duration-300 hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header', 'about')}
              </Link>
              <Link 
                to="/products" 
                className="hover:text-green-400 transition-all duration-300 hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header', 'products')}
              </Link>
              <Link 
                to="/gallery" 
                className="hover:text-green-400 transition-all duration-300 hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header', 'gallery')}
              </Link>
              <Link 
                to="/cities" 
                className="hover:text-green-400 transition-all duration-300 hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {language === 'de' ? 'Städte' : 'Miasta'}
              </Link>
              <Link 
                to="/contact" 
                className="hover:text-green-400 transition-all duration-300 hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header', 'contact')}
              </Link>
              
              {/* Mobile Language Switcher */}
              <div className="pt-2 border-t border-slate-700">
                <p className="text-sm text-gray-400 mb-2">Language</p>
                <div className="flex space-x-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        handleLanguageChange(lang.code);
                        setIsMenuOpen(false);
                      }}
                      className={`px-3 py-1 rounded transition-all duration-300 hover:scale-105 ${
                        language === lang.code
                          ? 'bg-green-500 text-white'
                          : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                      }`}
                    >
                      {lang.flag} {lang.code}
                    </button>
                  ))}
                </div>
              </div>
              
              <Link 
                to="/quote" 
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
