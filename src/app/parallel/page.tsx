import Link from 'next/link';

interface IProps {}

function ParallelRoutes({}: IProps) {
  return (
    <div style={{}}>
      <h1>page.tsx :: ParallelRoutes</h1>
      <Link href={'/parallel/setting'}>/parallel/setting with Link tag</Link>
    </div>
  );
}

export default ParallelRoutes;
