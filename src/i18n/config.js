import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en.json';
import ruTranslations from './locales/ru.json';
import frTranslations from './locales/fr.json';
import deTranslations from './locales/de.json';

/**
 * i18n Configuration
 * Sets up multi-language support for the website
 * Supports: English, Russian, French, German
 */
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      ru: { translation: ruTranslations },
      fr: { translation: frTranslations },
      de: { translation: deTranslations }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
