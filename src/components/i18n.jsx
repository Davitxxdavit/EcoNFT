import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import kaJson from "./translation/data.json"; // Georgian translations
import enJson from './translation/dataEn.json'; // English translations

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ka: { translation: kaJson },
      en: { translation: enJson },
    },
    lng: 'en', // default language set to English
    fallbackLng: 'ka',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;