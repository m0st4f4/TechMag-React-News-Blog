import { useMutation, useQueryClient } from "@tanstack/react-query";

import { ChangeUserInfo } from "@/services/userService.ts";

import type { ApiError } from "@/types/api.types.ts";
import type { ChangeUserInfoParams, UserType } from "@/types/user.types.ts";

export const useChangeUserInfo = () => {
  const queryClient = useQueryClient();
  return useMutation<UserType, ApiError, ChangeUserInfoParams>({
    mutationFn: ChangeUserInfo,
    onSuccess: (updatedUser) => {
      queryClient.setQueryData(["user", updatedUser.id], updatedUser);
    },
  });
};
