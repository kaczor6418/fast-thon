import i18n from 'i18next';
import I18NextHttpBackend from 'i18next-http-backend';
import MultiLoadBackendAdapter, { MultiloadBackendOptions } from 'i18next-multiload-backend-adapter';
import { initReactI18next } from 'react-i18next';

void i18n
  .use(MultiLoadBackendAdapter)
  .use(initReactI18next)
  .init<MultiloadBackendOptions>({
    backend: {
      backend: I18NextHttpBackend,
      backendOption: {
        loadPath: '/locales/{{lng}}/{{ns}}.json',
      },
    },
    fallbackLng: ['en'],
    interpolation: {
      escapeValue: false,
    },
    react: {
      bindI18n: 'languageChanged',
    },
  });

export { i18n };
