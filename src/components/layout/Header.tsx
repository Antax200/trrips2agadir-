import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import Container from '../ui/Container';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  const headerClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled || !isHomePage || mobileMenuOpen
      ? 'bg-white shadow-md py-3'
      : 'bg-gradient-to-b from-black/50 to-transparent py-4'
  }`;

  const logoClasses = `font-bold text-xl md:text-2xl ${
    isScrolled || !isHomePage || mobileMenuOpen ? 'text-amber-600' : 'text-white'
  }`;

  const navLinkClasses = `transition-colors duration-200 hover:text-amber-600 ${
    isScrolled || !isHomePage || mobileMenuOpen
      ? 'text-gray-700'
      : 'text-white hover:text-amber-400'
  }`;

  const navLinks = [
    { name: t('Home'), path: '/' },
    { name: t('Services'), path: '/tours' },
    { name: t('About'), path: '/about' },
    { name: t('Contact'), path: '/contact' },
    { name: t('FAQs'), path: '/faqs' }
  ];

  return (
    <header className={headerClasses}>
      <Container>
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src=".bolt/Public/logo.png" alt="Trips 2 Agadir Logo" className="h-16 w-auto" />
            <span className={`${logoClasses} ml-2`}>Trips 2 Agadir</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${navLinkClasses} ${location.pathname === link.path ? 'font-medium' : ''}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/tours#booking"
              className="px-4 py-2 rounded-md bg-amber-600 text-white font-medium hover:bg-green-700 transition"
            >
              {t('Book Now')}
            </Link>
            <button
              onClick={toggleLanguage}
              className="ml-4 text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded"
            >
              {i18n.language === 'en' ? 'FR' : 'EN'}
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? (
              <X size={24} className={isScrolled || !isHomePage ? 'text-gray-800' : 'text-white'} />
            ) : (
              <Menu size={24} className={isScrolled || !isHomePage ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            <Container>
              <nav className="py-4 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="flex items-center justify-between text-gray-800 py-2 border-b border-gray-100"
                  >
                    <span>{link.name}</span>
                    <ChevronRight size={16} />
                  </Link>
                ))}
                <Link
                  to="/tours#booking"
                  className="px-4 py-3 mt-2 rounded-md bg-amber-600 text-white font-medium text-center"
                >
                  {t('Book Now')}
                </Link>
                <button
                  onClick={toggleLanguage}
                  className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-2 rounded"
                >
                  {i18n.language === 'en' ? 'FR' : 'EN'}
                </button>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
