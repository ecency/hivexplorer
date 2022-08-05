// import i18n from 'i18next';

// import moment from 'moment';

// export const langOptions = [
//   {
//     code: 'en-US',
//     name: 'English'
//   },
// ];

// const enUs = require('./locales/en-US.json');
// const resources = {
//   ['en-US']: {
//     translation: enUs
//   },
// };

// i18n.init({
//   resources,
//   fallbackLng: 'en-US',
//   interpolation: {
//     escapeValue: false
//   },
// })

// i18n.on('languageChanged', function (lang) {
//   moment.locale(lang);
// });

// export const _t = (k: string, args = {}) => {
  
//   return i18n.t(k, args);
// };
import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import HttpApi from 'i18next-http-backend';
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs:['en','fr'],
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    //lng: document.querySelector('html').lang , // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
    detection:{
      order: [ 'cookie', 'localStorage',  'htmlTag', 'path', 'subdomain'],
      caches:['cookie']
    },
    backend:{
      loadPath: 'assets/locales/{{lng}}/translation.json',
    },
    react:{
      useSuspense:false
    }
  });

export const _t = (k: string, args = {}) => {
  return i18n.t(k, args);
};

  export default i18n;