import { TierDndDataFns, TierDndRow } from './hooks/type';
import TierDragDroppableCard from './TierDragDroppableCard';

interface IProps {
  rowIndex: number;
  rowConfig: TierDndRow;
  dndDataFns: TierDndDataFns;
}

function TierRow({ rowIndex, rowConfig, dndDataFns }: IProps) {
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

      <div
        key={'tier_' + rowIndex + '_' + rowConfig.title}
        className='flex h-fit flex-wrap gap-2'
      >
        {rowConfig.items.map((item, index) => {
          return (
            <TierDragDroppableCard
              key={index}
              rowIndex={rowIndex}
              itemIndex={index}
              dndItemConfig={item}
              dndDataFns={dndDataFns}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TierRow;
