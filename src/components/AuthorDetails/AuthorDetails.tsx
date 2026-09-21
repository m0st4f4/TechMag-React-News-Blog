import type { ComponentProps, ReactNode } from "react";

import { Link } from "react-router";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar.tsx";

import { cn } from "@/lib/utils.ts";

import type { UserType } from "@/types/user.types.ts";

type Props = ComponentProps<typeof Avatar> & {
  item: UserType;
};
export const AuthorDetails = ({ item, size, className }: Props): ReactNode => {
  return (
    <Link to={`/user/${item.username}`} className={cn("flex gap-2", className)}>
      <Avatar size={size}>
        <AvatarImage src={item.avatar} alt={item.name} />
        <AvatarFallback></AvatarFallback>
      </Avatar>
      <div className="grid justify-between">
        <div className="text-sm">{item.name ?? item.username}</div>
        <div className="text-xs">{item?.title}</div>
      </div>
    </Link>
  );
};
