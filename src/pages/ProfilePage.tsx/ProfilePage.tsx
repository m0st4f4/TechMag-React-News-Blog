import { type ReactNode } from "react";

type Props = {
  className?: string;
};

export const ProfilePage = ({ className = "" }: Props): ReactNode => {
  return <div className={className}>ProfilePage Component</div>;
};
