import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="text-sm bg-amber-500 hover:bg-amber-600 text-white px-3 py-1 rounded transition"
    >
      {i18n.language === 'en' ? 'FR' : 'EN'}
    </button>
  );
};

export default LanguageSwitcher;
