import { type ChangeEvent, type SyntheticEvent, useContext } from "react";

import { useNavigate } from "react-router";

import { useTranslation } from "react-i18next";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group.tsx";

import { SearchContext } from "@/context/search-context.ts";

import MingcuteCloseLine from "@/icons/MingcuteCloseLine.tsx";
import MingcuteSearch2Line from "@/icons/MingcuteSearch2Line.tsx";

import { cn } from "@/lib/utils.ts";

export const SearchForm = () => {
  const { query, setQuery } = useContext(SearchContext);

  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setQuery(input);
  };
  const handleFormSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/${query.trim()}`);
  };
  return (
    <form
      onSubmit={handleFormSubmit}
      onReset={() => setQuery("")}
      className="group"
    >
      <InputGroup className="max-w-xs">
        <InputGroupInput
          placeholder={t("search.placeholder")}
          value={query}
          onChange={handleInputChange}
        />
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            size="icon-xs"
            type="reset"
            className={cn(
              "group-hover:visible invisible duration-100",
              query || "hidden"
            )}
          >
            <MingcuteCloseLine />
          </InputGroupButton>
          <InputGroupButton size="icon-xs" type="submit">
            <MingcuteSearch2Line />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </form>
  );
};
