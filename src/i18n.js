import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import English from "./locale/en.json";
import Arabic from "./locale/ar.json";

const resources = {
  en: {
    translation: English,
  },
  ar: {
    translation: Arabic,
  },
};


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('i18nextLng') || 'en',

    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      lookupQuerystring: 'lng',
      caches: ['localStorage'],
      excludeCacheFor: ['cimode'],
      htmlTag: document.documentElement,
      checkWhitelist: true
    },
    react:{
        UseSuspense : false
    },
    
  },
  )
export default i18n;