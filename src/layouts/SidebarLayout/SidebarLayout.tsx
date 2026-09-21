import { type ReactNode } from "react";

import { Outlet } from "react-router";

type Props = {
  sidebar: ReactNode;
};
export const SidebarLayout = ({ sidebar }: Props): ReactNode => {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      <div className="col-span-full md:col-span-3">
        <Outlet />
      </div>
      <aside className="col-span-full md:col-span-1 ">{sidebar}</aside>
    </div>
  );
};
