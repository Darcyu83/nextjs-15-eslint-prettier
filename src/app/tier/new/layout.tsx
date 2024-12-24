import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

function layout({ children }: IProps) {
  return <div style={{}}>{children}</div>;
}

export default layout;
