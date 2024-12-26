import { useDrop } from 'react-dnd';
import { TierDndItemTypes } from '../contants';

import { TierDndDataFns, TierDndDropProps } from './type';

interface IProps {
  itemId: string;
  rowIndex: number;
  itemIndex: number;
  onMoveDraggedItem: TierDndDataFns['onMoveDraggedItem'];
  onCompleteDrop: TierDndDataFns['onCompleteDrop'];
}

function useTierDndDrop({
  itemId,
  rowIndex,
  itemIndex,
  onMoveDraggedItem,
  onCompleteDrop,
}: IProps) {
  const [{ isOver }, drop] = useDrop({
    accept: TierDndItemTypes.TIER_DND_ITEM,

    collect: (monitor) => {
      return { isOver: monitor.isOver() };
    },

    hover: (item, monitor) => {
      // This method returns the mouse position relative to the client area
      const xyCoord = monitor.getClientOffset();

      if (xyCoord) {
        // Get the position of the target row relative to the viewport
        console.log(
          'xyCoord ==== ',
          monitor.getSourceClientOffset(),
          '\n',
          monitor.getClientOffset(),
          item,
        );

        if (item.id !== itemId)
          onMoveDraggedItem({
            nextRowIndex: rowIndex,
            nextItemIndex: itemIndex,
            item,
          });
      }
    },

    drop: (item: TierDndDropProps) => {
      console.log('드래그 해서 드랍까지 진행됨 !!! ');
      onCompleteDrop();
    },
  });
  return { isOver, drop };
}

export default useTierDndDrop;
