import { ReactNode } from 'react';

interface IProps {
  team: ReactNode;
  analytics: ReactNode;
  children: ReactNode;
}

function ParallelLayout({ team, analytics, children }: IProps) {
  return (
    <div>
      <h1 className='font-bold'>Parallel Routes Layout</h1>
      <div className='flex gap-3'>
        <h1 className='font-bold text-blue-300'>@team:</h1> {team}
      </div>
      <div className='flex gap-3'>
        <h1 className='font-bold text-blue-300'>@analytics:</h1>

        {analytics}
      </div>
      <div className='flex gap-3'>
        <h1 className='font-bold text-blue-300'>children:</h1>

        {children}
      </div>
    </div>
  );
}

export default ParallelLayout;
