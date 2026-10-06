import { type ReactNode } from "react";

type Props = {
  className?: string;
};

const AdminPage = ({ className = "" }: Props): ReactNode => {
  return <div className={className}>AdminPage Component</div>;
};
export default AdminPage;
