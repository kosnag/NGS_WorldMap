import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    ns: [
      'ui',
      'items'
    ],
    framework: "React",
    fallbackLng: 'en_US',
    //debug: true,
    react: {
      useSuspense: false,
      //bindI18n: false,
      bindI18nStore: false,
      //wait: false,
      escapeValue: false,
    },
    backend: {
      loadPath: './assets/locales/{{lng}}/{{ns}}.json'
    },
  });


export default i18n;