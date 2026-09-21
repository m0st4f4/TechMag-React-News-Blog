import type { AxiosError } from "axios";

export type ApiErrorResponse = {
  message: string;
  errorCode?: string;
  statusCode?: number;
};

export type ApiError = AxiosError<ApiErrorResponse>;
