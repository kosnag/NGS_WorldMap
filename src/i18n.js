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
      'items',
      'battledias',
      'cocoons',
      'ryukers',
      'sections',
      'towers',
      'urgents',
      'rewards',
      'datapods',
      'enemies',
      'rewards',
      'mags',
    ],
    framework: "React",
    fallbackLng: 'en-US',
    debug: false,
    react: {
      useSuspense: false,
      //wait: false,
      escapeValue: false,
    },
    backend: {
      loadPath: '//raw.githubusercontent.com/kosnag/NGS_WorldMap/master/public/assets/locales/{{lng}}/{{ns}}.json'
    },
  });


export default i18n;