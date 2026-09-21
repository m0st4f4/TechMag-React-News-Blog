import { useEffect } from "react";

import { languages } from "@/i18n.ts";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const availableLanguages = Object.keys(
    i18n.services.resourceStore?.data || {}
  );

  useEffect(() => {
    const currentLanguage = i18n.language;
    document.documentElement.dir = i18n.dir(currentLanguage);
    document.documentElement.lang = currentLanguage;
  }, [i18n, i18n.language]);

  function handleLanguageSelect(lng: string) {
    i18n.changeLanguage(lng);
  }

  const currentLangLabel = languages[i18n.language].nativeName || i18n.language;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{currentLangLabel}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {availableLanguages.map((lng) => (
          <DropdownMenuItem
            key={lng}
            onSelect={() => handleLanguageSelect(lng)}
            className={`cursor-pointer ${i18n.language === lng ? "bg-secondary font-bold" : ""} focus:bg-secondary`}
          >
            {languages[lng].nativeName || lng.toUpperCase()}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
