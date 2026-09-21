import { useMutation } from "@tanstack/react-query";

import { RegisterUser } from "@/services/authService.ts";

import type { ApiError } from "@/types/api.types.ts";
import type { AuthResponseType, UserRegisterType } from "@/types/auth.types.ts";

export const useRegisterUser = () => {
  return useMutation<AuthResponseType, ApiError, UserRegisterType>({
    mutationFn: RegisterUser,
  });
};
