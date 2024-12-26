import React from 'react';
import { TierDndCard, TierDndDataFns } from './hooks/type';
import useTierDndDrag from './hooks/useTierDndDrag';
import useTierDndDrop from './hooks/useTierDndDrop';

interface IProps {
  rowIndex: number;
  itemIndex: number;
  dndItemConfig: TierDndCard;
  dndDataFns: TierDndDataFns;
}

function TierDragDroppableCard({
  rowIndex,
  itemIndex,
  dndItemConfig,
  dndDataFns: { onCancelDrag, onCompleteDrop, onMoveDraggedItem },
}: IProps) {
  const { isDragging, drag, previewRef } = useTierDndDrag({
    dropItemProps: {
      id: dndItemConfig?.id,
      itemIndex,
      rowIndex,
    },
    onCancelDrag,
  });

  const { isOver, drop } = useTierDndDrop({
    itemId: dndItemConfig.id,
    rowIndex,
    itemIndex,
    onCompleteDrop,
    onMoveDraggedItem,
  });

  return (
    <div
      style={{
        background: isOver ? 'red' : undefined,
        border: isDragging ? '2px dashed blue' : undefined,
      }}
      ref={(el) => {
        drag(el);
        drop(el);
      }}
      className='aspect-square h-full w-[100px] border'
    >
      {dndItemConfig?.imgUrl && (
        <h1 className='text-sm'>{dndItemConfig.imgUrl}</h1>
      )}
    </div>
  );
}

export default React.memo(TierDragDroppableCard);
