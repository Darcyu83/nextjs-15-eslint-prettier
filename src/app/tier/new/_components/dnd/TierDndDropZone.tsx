import { ReactNode } from 'react';
import useTierDndDrop from './hooks/useTierDndDrop';
import { TierDndDropProps } from './types';

interface IProps {
  children: ReactNode;
  rowTitle: string;
  rowIndex: number;
  onDrop: (
    nextRowIndex: number,
    nextItemIndex: number,
    item: TierDndDropProps,
  ) => void;
}

function TierDndDropZone({ children, rowIndex, rowTitle, onDrop }: IProps) {
  const { isOver, drop } = useTierDndDrop({ rowIndex, onDrop });

  return (
    <div
      style={{ border: isOver ? '2px solid red' : undefined }}
      key={'tier_' + rowIndex + '_' + rowTitle}
      ref={(el) => {
        drop(el);
      }}
      className='flex h-fit flex-wrap gap-2'
    >
      {children}
    </div>
  );
}

export default TierDndDropZone;
