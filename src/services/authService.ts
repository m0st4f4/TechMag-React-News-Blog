import apiInstance from "@/services/api.ts";
import axios, { type AxiosResponse } from "axios";

import type {
  AuthResponseType,
  RefreshResponseType,
  UserLoginType,
  UserRegisterType,
} from "@/types/auth.types.ts";
import type { UserType } from "@/types/user.types.ts";

export const getMe = async (): Promise<UserType> => {
  const response: AxiosResponse<UserType> = await apiInstance.get("/auth/me");
  return response.data;
};
export const refreshUserToken = async (
  refreshToken: string
): Promise<RefreshResponseType> => {
  const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";
  const response: AxiosResponse<RefreshResponseType> = await axios.post(
    `${baseURL}/auth/refresh`,
    refreshToken
  );
  return response.data;
};

export const RegisterUser = async (
  userData: UserRegisterType
): Promise<AuthResponseType> => {
  const response: AxiosResponse<AuthResponseType> = await apiInstance.post(
    `/auth/register`,
    userData
  );

  return response.data;
};

export const LoginUser = async (
  userData: UserLoginType
): Promise<AuthResponseType> => {
  const response: AxiosResponse<AuthResponseType> = await apiInstance.post(
    `/auth/login`,
    userData
  );
  return response.data;
};
