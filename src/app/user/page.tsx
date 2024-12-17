'use client';
import { useSession } from 'next-auth/react';

interface IProps {}

function UserPage(props: IProps) {
  const { data: session } = useSession();

  console.log('session ---- ', session, session?.user, session?.user.address);
  return (
    <div style={{}}>
      <h1>UserPage</h1>
    </div>
  );
}

export default UserPage;
