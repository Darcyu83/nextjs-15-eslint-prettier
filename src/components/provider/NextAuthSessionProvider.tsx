'use client';

import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  session: Session | null;
}

function NextAuthSessionProvider({ children, session }: IProps) {
  return (
    <SessionProvider session={session} refetchOnWindowFocus={true}>
      {children}
    </SessionProvider>
  );
}

export default NextAuthSessionProvider;
