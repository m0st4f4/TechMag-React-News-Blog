import "i18next";

import type { en } from "@/locales/en.ts";

type TFunc = ReturnType<typeof useTranslation>["t"];

export type TranslationKey = Parameters<TFunc>[0];

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: {
      translation: typeof en;
    };
  }
}
