import { type PropsWithChildren, type ReactNode, useState } from "react";

import { SearchContext } from "@/context/search-context.ts";

type Props = PropsWithChildren;
export const SearchProvider = ({ children }: Props): ReactNode => {
  const [query, setQuery] = useState("");

  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      {children}
    </SearchContext.Provider>
  );
};
