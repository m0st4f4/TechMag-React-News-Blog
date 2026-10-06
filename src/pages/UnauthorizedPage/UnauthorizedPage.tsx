import { type ReactNode } from "react";

type Props = {
  className?: string;
};

const UnauthorizedPage = ({ className = "" }: Props): ReactNode => {
  return <div className={className}>UnauthorizedPage Component</div>;
};
export default UnauthorizedPage;