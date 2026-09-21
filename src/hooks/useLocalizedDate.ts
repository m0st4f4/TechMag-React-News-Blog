import { useTranslation } from "react-i18next";

import { formatUserDate } from "@/lib/formatDate.ts";

interface CustomLangData {
  locale?: string;
  calendar?: "persian" | "gregory" | "islamic";
}
export const useLocalizedDate = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const langData = i18n.getDataByLanguage(currentLanguage) as
    | CustomLangData
    | undefined;

  const calendar = langData?.calendar || "persian";
  const locale = langData?.locale || "fa-IR";

  const formatDate = (
    date: Date | string | number,
    dateStyle: "full" | "long" | "medium" | "short" = "medium"
  ) => {
    return formatUserDate(date, { locale, calendar, dateStyle });
  };
  return { formatDate };
};
