import i18n from "i18next";

import { z } from "zod";

import locales from "@/locales";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { zodI18nMap } from "zod-i18n-map";
import translationAR from "zod-i18n-map/locales/ar/zod.json";
import translationEN from "zod-i18n-map/locales/en/zod.json";
import translationFA from "zod-i18n-map/locales/fa/zod.json";

export const languages: Record<string, { nativeName: string }> = {
  en: { nativeName: "English" },
  fa: { nativeName: "فارسی" },
  ar: { nativeName: "العربية" },
};

const resources = {
  en: {
    translation: locales.en,
    locale: "en-US",
    calendar: "gregory",
    zod: translationEN,
  },
  fa: {
    translation: locales.fa,
    locale: "fa-IR",
    calendar: "persian",
    zod: translationFA,
  },
  ar: {
    translation: locales.ar,
    locale: "ar-SA",
    calendar: "islamic",
    zod: translationAR,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage"],
      lookupLocalStorage: "language",
      caches: ["localStorage"],
    },
  });
z.setErrorMap(zodI18nMap);

export { z };
export default i18n;
