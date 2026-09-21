import { createContext } from "react";

import type { AuthResponseType } from "@/types/auth.types.ts";
import type { UserType } from "@/types/user.types.ts";

type ContextValue = {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: UserType | null;
  login: (data: AuthResponseType) => void;
  logout: () => void;
};
export const AuthContext = createContext<ContextValue>({
  isAuthenticated: false,
  isLoading: false,
  user: null,
  login: () => {},
  logout: () => {},
});
