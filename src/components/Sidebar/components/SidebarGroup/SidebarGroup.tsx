import { type PropsWithChildren, type ReactNode } from "react";

import { cn } from "@/lib/utils.ts";

type Props = PropsWithChildren & {
  className?: string;
  title?: string;
};

export const SidebarGroup = ({
  className,
  title,
  children,
}: Props): ReactNode => {
  return (
    <div
      className={cn(
        "border border-sidebar-border rounded-lg p-6 flex flex-col gap-4",
        className
      )}
    >
      {title && (
        <h3 className="border-s-4 border-accent ps-2 text-lg font-bold capitalize">
          {title}
        </h3>
      )}
      <div className="body">{children}</div>
    </div>
  );
};
