import { useDrop } from 'react-dnd';
import { TierDndItemTypes } from '../contants';
import { TierDndDropProps } from '../types';
import { useState } from 'react';

interface IProps {
  rowIndex: number;
  onDrop: (
    nextRowIndex: number,
    nextItemIndex: number,
    item: TierDndDropProps,
  ) => void;
}

function useTierDndDrop({ rowIndex, onDrop }: IProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [{ isOver }, drop] = useDrop({
    accept: TierDndItemTypes.TIER_DND_ITEM,
    drop: (item: TierDndDropProps) => {
      if (hoveredIndex === null) return;
      onDrop(rowIndex, hoveredIndex, item);
    },
    collect: (monitor) => {
      return { isOver: monitor.isOver() };
    },
    hover: (item, monitor) => {
      // This method returns the mouse position relative to the client area
      const xyCoord = monitor.getClientOffset();
      if (xyCoord) {
        // Get the position of the target row relative to the viewport
        console.log('xyCoord ==== ', xyCoord, monitor.canDrop());
      }
    },
  });
  return { isOver, drop, hoveredIndex };
}

export default useTierDndDrop;
