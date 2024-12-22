import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

interface IProps {}

function Intercept({}: IProps) {
  return (
    <div className='flex flex-col gap-2'>
      <h1>Intercept Routes</h1>

      <Link
        className={buttonVariants({ variant: 'outline' })}
        style={{ color: 'red' }}
        href={'/i/login'}
        scroll={false}
      >
        /i/login with Link tag : NextJs interceptor 기능
      </Link>

      <Link
        className='card underline'
        key={101}
        href={`intercept/photos/${101}`}
        passHref
        style={{ color: 'red' }}
      >
        ID: {101} :: createPortal 사용 :: 모달 표시위치는 body 안에
      </Link>
    </div>
  );
}

export default Intercept;
