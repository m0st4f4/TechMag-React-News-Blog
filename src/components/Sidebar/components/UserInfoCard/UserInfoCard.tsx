import { type ReactNode } from "react";

import { cn } from "@/lib/utils";

import type { UserType } from "@/types/user.types";

type Props = {
  className?: string;
  user: UserType;
};

export const UserInfoCard = ({ className, user }: Props): ReactNode => {
  return (
    <div
      className={cn(className, "flex flex-col items-center gap-2 text-center")}
    >
      <div className="flex justify-center items-center w-full aspect-square  overflow-hidden p-6">
        <img
          className="rounded-full w-full"
          src={user.avatar}
          alt={user.name}
        />
      </div>
      <h2 className="text-lg font-bold"> {user.name ?? user.username}</h2>
      <p className="text-sm text-muted-foreground mbe-4"> {user.title}</p>
      <p className="text-sm"> {user.bio}</p>
    </div>
  );
};
