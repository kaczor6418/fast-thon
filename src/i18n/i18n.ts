import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { AppEN } from './locales/en/app.translation';
import { AppPL } from './locales/pl/app.translation';

const translations = {
  en: {
    app: AppEN,
  },
  pl: {
    app: AppPL,
  },
};

export const initializeI18n = () => {
  void i18n.use(initReactI18next).init({
    fallbackLng: ['en'],
    interpolation: {
      escapeValue: false,
    },
    lng: 'en',
    ns: ['app'],
    react: {
      bindI18n: 'languageChanged',
    },
    resources: translations,
  });
};
