import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router";

import { ErrorBoundary } from "react-error-boundary";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { DirectionProvider } from "@/components/ui/direction.tsx";
import { Toaster } from "@/components/ui/sonner.tsx";

import { ErrorPage } from "@/pages/ErrorPage/ErrorPage.tsx";

import { AuthProvider } from "@/providers/AuthProvider/AuthProvider.tsx";
import { SearchProvider } from "@/providers/SearchProvider.tsx";
import { ThemeProvider } from "@/providers/ThemeProvider/ThemeProvider.tsx";

import type { ApiError } from "@/types/api.types.ts";

import App from "./App.tsx";
import "./i18n";

import "./index.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 50000,
      gcTime: 100000,
      refetchOnWindowFocus: true,
      refetchOnMount: true,
      refetchOnReconnect: true,
      retry: (failureCount, error) => {
        const apiError = error as ApiError;
        const status = apiError?.response?.status;

        if (status && status >= 400 && status < 500) return false;
        if (!apiError.response) {
          return failureCount < 3;
        }
        return failureCount < 3;
      },
    },
    mutations: {
      retry: (failureCount, error) => {
        const apiError = error as ApiError;
        const status = apiError?.response?.status;

        if (status && status >= 400 && status < 500) return false;
        if (!apiError.response) {
          return failureCount < 3;
        }
        return failureCount < 3;
      },
    },
  },
});
// TypeScript only:
declare global {
  interface Window {
    __TANSTACK_QUERY_CLIENT__: import("@tanstack/query-core").QueryClient;
  }
}
window.__TANSTACK_QUERY_CLIENT__ = queryClient;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <AuthProvider>
        <BrowserRouter>
          <DirectionProvider dir="rtl">
            <QueryClientProvider client={queryClient}>
              <SearchProvider>
                <ThemeProvider>
                  <App />
                </ThemeProvider>
                <Toaster />
                <ReactQueryDevtools initialIsOpen={false} />
              </SearchProvider>
            </QueryClientProvider>
          </DirectionProvider>
        </BrowserRouter>
      </AuthProvider>
    </ErrorBoundary>
  </StrictMode>
);
