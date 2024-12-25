import TierDndDragCard from './TierDndDragCard';
import TierDndDropZone from './TierDndDropZone';
import { TierDndCard, TierDndDropProps, TierDndRow } from './types';

interface IProps {
  rawIndex: number;
  rowConfig: TierDndRow;
  onDrop: (
    nextRowIndex: number,
    nextItemIndex: number,
    item: TierDndDropProps,
  ) => void;
}

function TierRow({ rawIndex, rowConfig, onDrop }: IProps) {
  const items: TierDndCard[] =
    rowConfig.items.length === 0 ? [...Array(10)] : rowConfig.items;
  return (
    <div className='flex gap-2'>
      <div
        className='h-auto w-[100px] border'
        style={{ background: rowConfig.bgColor }}
      >
        <h1 className='grid h-full w-full place-items-center text-black'>
          {rowConfig.title}
        </h1>
      </div>

      <TierDndDropZone
        rowTitle={rowConfig.title}
        rowIndex={rawIndex}
        onDrop={onDrop}
      >
        {items.map((item, index) => {
          return (
            <TierDndDragCard
              key={index}
              rowIndex={rawIndex}
              itemIndex={index}
              dndItemConfig={item}
              onDrop={onDrop}
            />
          );
        })}
      </TierDndDropZone>
    </div>
  );
}

export default TierRow;
