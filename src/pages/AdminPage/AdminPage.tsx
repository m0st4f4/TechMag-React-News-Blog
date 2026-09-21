import { type ReactNode } from "react";

type Props = {
  className?: string;
};

export const AdminPage = ({ className = "" }: Props): ReactNode => {
  return <div className={className}>AdminPage Component</div>;
};
