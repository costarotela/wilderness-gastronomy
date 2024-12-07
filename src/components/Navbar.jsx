import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiMenu, FiX } from 'react-icons/fi';
import LanguageSelector from './LanguageSelector';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="font-display text-2xl text-primary">
            Wilderness Gastronomy
          </Link>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link 
              to="/" 
              className={`${isActive('/') ? 'text-primary font-medium' : 'text-gray-700'} hover:text-primary transition-colors`}
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/menu" 
              className={`${isActive('/menu') ? 'text-primary font-medium' : 'text-gray-700'} hover:text-primary transition-colors`}
            >
              {t('nav.menu')}
            </Link>
            <Link 
              to="/locations" 
              className={`${isActive('/locations') ? 'text-primary font-medium' : 'text-gray-700'} hover:text-primary transition-colors`}
            >
              {t('nav.locations')}
            </Link>
            <LanguageSelector />
            <button className="px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors">
              {t('nav.book')}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <LanguageSelector />
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-white border-b">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/" 
                className={`block px-3 py-2 rounded-md ${isActive('/') ? 'text-primary bg-primary/5' : 'text-gray-700'}`}
                onClick={() => setIsOpen(false)}
              >
                {t('nav.home')}
              </Link>
              <Link 
                to="/menu" 
                className={`block px-3 py-2 rounded-md ${isActive('/menu') ? 'text-primary bg-primary/5' : 'text-gray-700'}`}
                onClick={() => setIsOpen(false)}
              >
                {t('nav.menu')}
              </Link>
              <Link 
                to="/locations" 
                className={`block px-3 py-2 rounded-md ${isActive('/locations') ? 'text-primary bg-primary/5' : 'text-gray-700'}`}
                onClick={() => setIsOpen(false)}
              >
                {t('nav.locations')}
              </Link>
              <button className="w-full text-left px-3 py-2 text-primary font-medium">
                {t('nav.book')}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
