import { useMutation } from "@tanstack/react-query";

import { LoginUser } from "@/services/authService.ts";

import { useAuth } from "@/hooks/useAuth.ts";

import type { ApiError } from "@/types/api.types.ts";
import type { AuthResponseType, UserLoginType } from "@/types/auth.types.ts";

export const useLoginUser = () => {
  const { login } = useAuth();
  return useMutation<AuthResponseType, ApiError, UserLoginType>({
    mutationFn: LoginUser,
    onSuccess: (data) => {
      login(data);
    },
  });
};
