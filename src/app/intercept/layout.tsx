import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  modal: React.ReactNode;
}

function InterceptLayout({ children, modal }: IProps) {
  return (
    <div style={{}}>
      <h1>InterceptLayout</h1>
      {children}
      {modal}
    </div>
  );
}

export default InterceptLayout;
