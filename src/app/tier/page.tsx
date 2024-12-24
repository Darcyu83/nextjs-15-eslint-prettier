import { Button } from '@/components/ui/button';
import TierCardList from './_components/list/TierCardList';
import Link from 'next/link';

interface IProps {}

function TierPage(props: IProps) {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex gap-4'>
        <h1 className='text-2xl'>TierPage</h1>

        <Link href={'/tier/new'}>
          <Button>New</Button>
        </Link>
      </div>

      <div className='p-4'>
        <TierCardList />
      </div>
    </div>
  );
}

export default TierPage;
