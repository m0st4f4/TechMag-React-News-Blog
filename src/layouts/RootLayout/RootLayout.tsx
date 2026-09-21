import type { ReactNode } from "react";

import { Outlet } from "react-router";

import { Footer } from "@/components/Footer/Footer.tsx";
import { Header } from "@/components/Header/Header.tsx";

export const RootLayout = (): ReactNode => {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="container py-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
