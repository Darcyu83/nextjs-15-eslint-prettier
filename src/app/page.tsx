import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='mt-3 flex -skew-y-12 flex-col gap-5'>
      <h1
        className={[
          'relative box-border bg-slate-400 p-3 shadow-xl transition-transform',
          'hover:translate-x-[-40px]',

          'before:absolute before:left-[-40px] before:top-0 before:h-full before:w-[40px] before:origin-right before:skew-y-[45deg] before:bg-lime-200',
          'after:absolute after:left-0 after:top-[-40px] after:h-[40px] after:w-full after:origin-bottom after:skew-x-[45deg] after:bg-purple-300',
        ].join(' ')}
      >
        <span className='relative'>Home</span>
      </h1>

      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>

      <Link
        className={buttonVariants({ variant: 'outline' })}
        href={'/i/login'}
      >
        /i/login with Link tag
      </Link>
    </div>
  );
}
