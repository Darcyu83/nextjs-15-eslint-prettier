import { useDrag } from 'react-dnd';
import { TierDndItemTypes } from '../contants';
import { TierDndDropProps } from '../types';

interface IProps {
  dropItemProps: TierDndDropProps;
  onDrop: (
    nextRowIndex: number,
    nextItemIndex: number,
    item: TierDndDropProps,
  ) => void;
}

function useTierDndDrag({ dropItemProps, onDrop }: IProps) {
  const [{ isDragging }, drag, previewRef] = useDrag({
    type: TierDndItemTypes.TIER_DND_ITEM,
    item: dropItemProps,
    collect: (monitor) => {
      return { isDragging: monitor.isDragging() };
    },
    end: (originDropItemProps, monitor) => {
      if (!monitor.didDrop()) {
        onDrop(
          originDropItemProps.rowIndex,
          originDropItemProps.itemIndex,
          originDropItemProps,
        );
      }
    },
  });
  return { isDragging, drag, previewRef };
}

export default useTierDndDrag;
