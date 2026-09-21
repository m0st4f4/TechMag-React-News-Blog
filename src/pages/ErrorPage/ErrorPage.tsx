import type { ReactNode } from "react";

import { type FallbackProps, getErrorMessage } from "react-error-boundary";

export const ErrorPage = ({
  error,
  resetErrorBoundary,
}: FallbackProps): ReactNode => {
  return (
    <div
      role="alert"
      dir="rtl"
      className="flex flex-col gap-8 items-center justify-center w-screen h-screen"
    >
      <h1 className="text-5xl">خطایی رخ داد!</h1>
      <pre style={{ color: "red" }}>{getErrorMessage(error)}</pre>
      <button onClick={resetErrorBoundary}>تلاش مجدد</button>
      <a className="text-lg" href="/">
        برو به صفحه اصلی
      </a>
    </div>
  );
};
