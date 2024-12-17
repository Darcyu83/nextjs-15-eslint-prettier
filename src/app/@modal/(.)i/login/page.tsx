'use client';
import { Button } from '@/components/ui/button';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface IProps {}

function LoginModal(props: IProps) {
  const router = useRouter();

  const { data: session } = useSession();

  console.log('session user info===== ', session);
  return (
    <div className='fixed left-0 top-0 z-10 flex h-dvh w-dvw items-center justify-center bg-[rgba(0,0,0,0.5)]'>
      {/* <div className='absolute z-0 h-full w-full bg-black'></div> */}

      <div className='relative bg-white p-20'>
        <h1 className='text-red-500'>Modal :: Login.tsx @modal/(.)i/login </h1>

        <div className='absolute right-6 top-6'>
          <Button
            variant={'outline'}
            onClick={() => {
              router.back();
            }}
          >
            닫기
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
