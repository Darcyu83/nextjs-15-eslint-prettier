'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Button } from '../ui/button';

interface IProps {
  // session: Session;
}

function UserLoginInfo({}: IProps) {
  const { data: session } = useSession();

  if (session?.user) {
    return (
      <div className='flex items-center gap-2'>
        Signed in as {session.user.email} <br />
        <Button onClick={() => signOut()}>Sign out</Button>
      </div>
    );
  }

  return (
    <div className='flex h-full items-center gap-2'>
      <h1 className='text-nowrap text-sm'>Not signed in</h1>
      <Button onClick={() => signIn()}>Sign In</Button>
    </div>
  );
}

export default UserLoginInfo;
