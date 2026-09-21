import { refreshUserToken } from "@/services/authService.ts";
import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
} from "axios";

const apiConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:4000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: false,
};

const apiInstance: AxiosInstance = axios.create(apiConfig);

apiInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & {
      _retry?: boolean;
    };

    if (error.response?.status === 401 && originalRequest) {
      // Return error instead of getting a refresh token when the login request itself fails
      if (originalRequest.url?.includes("/auth/login")) {
        return Promise.reject(error);
      }

      // Getting new token
      if (!originalRequest._retry) {
        originalRequest._retry = true;
        console.warn("token is invalid , getting new token");

        try {
          const refreshToken = localStorage.getItem("refreshToken");
          if (!refreshToken) {
            throw new Error("Refresh token is missing");
          }
          const tokens = await refreshUserToken(refreshToken);

          localStorage.setItem("accessToken", tokens.accessToken);
          localStorage.setItem("refreshToken", tokens.refreshToken);

          // Append new token to previous request
          if (originalRequest.headers) {
            originalRequest.headers["Authorization"] =
              `Bearer ${tokens.accessToken}`;
          }
          return apiInstance.request(originalRequest);
        } catch {
          // If refresh fails, clear stale auth state and redirect to login page
          localStorage.removeItem("user");
          localStorage.removeItem("isAuthenticated");
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          window.location.href = "/login";
        }
      }
    }

    if (error.response?.status && error.response.status >= 500) {
      console.error("Server Error. try again later");
    }

    if (error.message === "Network Error") {
      console.error("Check your internet connection");
    }

    return Promise.reject(error);
  }
);

export default apiInstance;
