import apiInstance from "@/services/api.ts";
import type { AxiosResponse } from "axios";

import type { ChangeUserInfoParams, UserType } from "@/types/user.types.ts";

export const fetchUserByUserName = async (
  username: string,
  signal?: AbortSignal
): Promise<UserType> => {
  const response: AxiosResponse<UserType[]> = await apiInstance.get(`/users`, {
    params: { username },
    signal,
  });
  return response.data?.[0];
};

export const ChangeUserInfo = async ({
  data,
  userId,
}: ChangeUserInfoParams): Promise<UserType> => {
  const response: AxiosResponse<UserType> = await apiInstance.patch(
    `/users/${userId}`,
    data
  );
  return response.data;
};
