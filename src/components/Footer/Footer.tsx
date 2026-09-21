import type { ReactNode } from "react";

import { Copyright } from "@/components/Footer/components/Copyright/Copyright.tsx";
import { FooterAbout } from "@/components/Footer/components/FooterAbout/FooterAbout.tsx";
import { FooterNavigationBar } from "@/components/Footer/components/FooterNavigationBar/FooterNavigationBar.tsx";
import { SiteLogo } from "@/components/SiteLogo/SiteLogo.tsx";

export const Footer = (): ReactNode => {
  return (
    <footer className="border-t shrink-0">
      <div className="container py-12 mt-4 ">
        <div className="flex gap-4 justify-between">
          <div className="basis-1/4">
            <SiteLogo />
            <FooterAbout />
          </div>
          <FooterNavigationBar className="basis-3/4 flex gap-4" />
        </div>
      </div>
      <Copyright className="text-center mt-4 border-t py-4 text-sm" />
    </footer>
  );
};
