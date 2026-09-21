import type { ApiError } from "@/types/api.types.ts";
import type { TranslationKey } from "@/types/i18next";

export const getApiErrorMessage = (error: ApiError): TranslationKey => {
  const errorBody = error?.response?.data?.message;
  const status = error?.response?.status;

  if (errorBody === "User Data is invalid") return "error.UserDataInvalid";
  if (errorBody === "This email already exists")
    return "error.EmailAlreadyExists";
  if (errorBody === "This username already exists")
    return "error.UsernameAlreadyExists";
  if (errorBody === "Username and password are required")
    return "error.UsernamePasswordRequired";
  if (errorBody === "Username or Password is incorrect")
    return "error.UsernamePasswordIncorrect";
  if (errorBody === "Token is incorrect , login for this operation")
    return "error.TokenInvalidLogin";

  if (!error.response) return "error.Network";
  if (status === 401) return "error.NotAuthenticated";
  if (status === 403) return "error.AccessDenied";
  if (status === 404) return "error.NotFound";
  if (status === 500) return "error.Server";
  return error?.message ?? "error.General";
};
