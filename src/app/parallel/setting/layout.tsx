import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

function SettingLayout({ children }: IProps) {
  return <div style={{}}>{children}</div>;
}

export default SettingLayout;
