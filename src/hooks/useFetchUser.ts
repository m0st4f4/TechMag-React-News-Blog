import { useQuery } from "@tanstack/react-query";

import { fetchUserByUserName } from "@/services/userService.ts";

import type { ApiError } from "@/types/api.types.ts";
import type { UserType } from "@/types/user.types.ts";

export const useFetchUser = (username: string) => {
  return useQuery<UserType, ApiError>({
    queryKey: ["user", username],
    queryFn: ({ signal }) => {
      return fetchUserByUserName(username, signal);
    },
  });
};
