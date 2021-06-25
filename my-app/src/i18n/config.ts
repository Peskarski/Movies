import i18n from 'i18next';
import translationEn from './en/translationEn.json';
import translationRu from './ru/translationRu.json';
import { initReactI18next } from 'react-i18next';

export enum Language {
  En = 'en',
  Ru = 'ru',
}

export const resources = {
  [Language.En]: {
    translation: translationEn,
  },
  [Language.Ru]: {
    translation: translationRu,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: Language.En,
  resources,
});
