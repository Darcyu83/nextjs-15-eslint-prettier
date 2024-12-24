import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

function TierLayout({ children }: IProps) {
  return <div>{children}</div>;
}

export default TierLayout;
