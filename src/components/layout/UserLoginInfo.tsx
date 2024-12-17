'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Button } from '../ui/button';

interface IProps {
  // session: Session;
}

function UserLoginInfo({}: IProps) {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <Button onClick={() => signOut()}>Sign out</Button>
      </>
    );
  }

  return (
    <>
      Not signed in <br />
      <Button onClick={() => signIn()}>Sign out</Button>
    </>
  );
}

export default UserLoginInfo;
