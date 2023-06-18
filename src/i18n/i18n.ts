import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { AppEN } from './locales/en/components/app.translations';
import { AppPL } from './locales/pl/components/app.translations';

export const defaultNS = 'components';
export const fallbackLang = 'en';
export const translations = {
  en: {
    components: {
      app: AppEN,
    },
  },
  pl: {
    components: {
      app: AppPL,
    },
  },
} as const;

export const initializeI18n = () => {
  void i18n.use(initReactI18next).init({
    defaultNS: defaultNS,
    fallbackLng: [fallbackLang],
    interpolation: {
      escapeValue: false,
    },
    react: {
      bindI18n: 'languageChanged',
    },
    resources: translations,
  });
};
