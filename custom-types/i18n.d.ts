import { translations, defaultNS, fallbackLang } from '../src/i18n/i18n';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: (typeof translations)[typeof fallbackLang];
  }
}
