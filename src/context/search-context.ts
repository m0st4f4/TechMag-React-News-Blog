import { createContext } from "react";

type ContextValue = {
  query: string;
  setQuery: (query: string) => void;
};

export const SearchContext = createContext<ContextValue>({
  query: "",
  setQuery: () => {},
});
