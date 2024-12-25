import useTierDndDrag from './hooks/useTierDndDrag';
import { TierDndCard, TierDndDropProps } from './types';

interface IProps {
  rowIndex: number;
  itemIndex: number;
  dndItemConfig?: TierDndCard;
  onDrop: (
    nextRowIndex: number,
    nextItemIndex: number,
    item: TierDndDropProps,
  ) => void;
}

function TierDndDragCard({
  rowIndex,
  itemIndex,
  dndItemConfig,
  onDrop,
}: IProps) {
  const { isDragging, drag, previewRef } = useTierDndDrag({
    dropItemProps: {
      itemIndex,
      rowIndex,
    },
    onDrop,
  });
  return (
    <div
      style={{
        border: isDragging ? '2px dashed blue' : undefined,
      }}
      ref={(el) => {
        drag(el);
      }}
      className='aspect-square h-full w-[100px] border'
    >
      {dndItemConfig?.imgUrl && <h1>{dndItemConfig.imgUrl}</h1>}
    </div>
  );
}

export default TierDndDragCard;
