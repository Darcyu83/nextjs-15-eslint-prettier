import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

interface IProps {}

function ParallelRoutes({}: IProps) {
  return (
    <div style={{}}>
      <h1>page.tsx :: ParallelRoutes</h1>

      <Link
        className={buttonVariants({ variant: 'outline' })}
        href={'/parallel/setting'}
      >
        /parallel/setting with Link tag
      </Link>
    </div>
  );
}

export default ParallelRoutes;
