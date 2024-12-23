import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import * as en from './en/translation.json';
import * as ru from './ru/translation.json';

const resources = {
  ru,
  en,
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'ru',
  returnNull: false,
});

export default i18n;
