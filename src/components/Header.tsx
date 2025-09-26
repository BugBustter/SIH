import React, { useState } from 'react';
import { Menu, X, ChevronDown, User, Stethoscope, Building2, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { t, languages, currentLanguage, setLanguage } = useLanguage();

  const navigationItems = [
    { key: 'home', href: '#home' },
    { key: 'services', href: '#services' },
    { key: 'doctors', href: '#doctors' },
    { key: 'about', href: '#about' },
    { key: 'contact', href: '#contact' },
  ];

  const loginOptions = [
    { key: 'doctorLogin', icon: Stethoscope, color: 'text-green-600' },
    { key: 'patientLogin', icon: User, color: 'text-blue-600' },
    { key: 'pharmacyLogin', icon: Building2, color: 'text-purple-600' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/20 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-green-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div className="text-xl font-bold text-gray-900">
              <span className="text-green-600">Sarthi</span>
              <span className="text-gray-800"> Healthcare</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium"
              >
                {t(item.key)}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-1 px-3 py-2 rounded-lg border border-gray-200 hover:border-green-300 transition-colors duration-300"
              >
                <Globe className="h-4 w-4 text-gray-600" />
                <span className="text-sm">{currentLanguage.flag}</span>
                <ChevronDown className="h-4 w-4 text-gray-600" />
              </button>
              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => {
                        setLanguage(language);
                        setIsLanguageOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center space-x-3"
                    >
                      <span>{language.flag}</span>
                      <span className="text-sm">{language.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Login Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLoginOpen(!isLoginOpen)}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105"
              >
                <User className="h-4 w-4" />
                <span>{t('login')}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {isLoginOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {loginOptions.map((option) => (
                    <button
                      key={option.key}
                      className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center space-x-3 transition-colors duration-200"
                    >
                      <option.icon className={`h-5 w-5 ${option.color}`} />
                      <span className="text-sm font-medium">{t(option.key)}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium px-2 py-1"
                >
                  {t(item.key)}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200">
                {loginOptions.map((option) => (
                  <button
                    key={option.key}
                    className="w-full text-left px-2 py-2 hover:bg-gray-50 flex items-center space-x-3 rounded-lg"
                  >
                    <option.icon className={`h-5 w-5 ${option.color}`} />
                    <span className="text-sm font-medium">{t(option.key)}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;