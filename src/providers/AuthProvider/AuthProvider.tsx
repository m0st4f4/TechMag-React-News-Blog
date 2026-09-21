import {
  type PropsWithChildren,
  type ReactNode,
  useEffect,
  useState,
} from "react";

import { getMe, refreshUserToken } from "@/services/authService.ts";

import { AuthContext } from "@/context/auth-context.ts";

import type { AuthResponseType } from "@/types/auth.types.ts";
import type { UserType } from "@/types/user.types.ts";

type Props = PropsWithChildren;
export const AuthProvider = ({ children }: Props): ReactNode => {
  const [user, setUser] = useState<UserType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = (data: AuthResponseType) => {
    setUser(data.user);
    setIsAuthenticated(true);
    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("refreshToken", data.refreshToken);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("user");
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  };

  useEffect(() => {
    const initAuth = async () => {
      const accessToken = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");

      if (!accessToken) {
        setIsLoading(false);
        return;
      }

      try {
        const currentUser = await getMe();
        setUser(currentUser);
        setIsAuthenticated(true);
        localStorage.setItem("user", JSON.stringify(currentUser));
        localStorage.setItem("isAuthenticated", "true");
      } catch {
        if (refreshToken) {
          try {
            const tokens = await refreshUserToken(refreshToken);
            localStorage.setItem("accessToken", tokens.accessToken);
            localStorage.setItem("refreshToken", tokens.refreshToken);

            const currentUser = await getMe();
            setUser(currentUser);
            setIsAuthenticated(true);
            localStorage.setItem("user", JSON.stringify(currentUser));
            localStorage.setItem("isAuthenticated", "true");
          } catch {
            logout();
          }
        }

        logout();
      } finally {
        setIsLoading(false);
      }
    };
    initAuth();
  });
  return (
    <AuthContext value={{ isAuthenticated, user, isLoading, login, logout }}>
      {children}
    </AuthContext>
  );
};
