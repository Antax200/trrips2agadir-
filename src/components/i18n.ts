import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome',
      exploreTours: 'Explore Tours',
      hero: {
        title: 'Discover Agadir - sun, culture, and adventure!',
        subtitle: "Discover stunning landscapes, from golden sand dunes to coastal adventures along Agadir's natural coastline.",
        exploreButton: 'Explore Tours',
        contactButton: 'Contact Us',
        planYourStay: 'Plan Your Stay',
        startDate: 'Start Date',
        adults: 'Adults',
        children: 'Children',
        search: 'Search'
      }
    }
  },
  fr: {
    translation: {
      welcome: 'Bienvenue',
      exploreTours: 'Explorer les circuits',
      hero: {
        title: 'Découvrez Agadir - soleil, culture et aventure !',
        subtitle: "Découvrez des paysages époustouflants, des dunes dorées aux aventures côtières le long du littoral d'Agadir.",
        exploreButton: 'Explorer les circuits',
        contactButton: 'Nous contacter',
        planYourStay: 'Planifiez votre séjour',
        startDate: 'Date de début',
        adults: 'Adultes',
        children: 'Enfants',
        search: 'Rechercher'
      }
    }
  }
};

i18n
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // bind react-i18next to i18next
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // react already protects from XSS
    }
  });

export default i18n;
