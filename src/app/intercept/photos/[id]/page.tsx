// 'use client';

import Link from 'next/link';

interface IProps {
  params: Promise<{ id: string }>;
}

async function Photos({ params }: IProps) {
  // const params = useParams();

  const paramsAwaited = await params;
  return (
    <div style={{}}>
      <h1>Photos</h1>

      {JSON.stringify(paramsAwaited)}

      <Link href={'102?modal=true'}>102 modal </Link>
    </div>
  );
}

export default Photos;
