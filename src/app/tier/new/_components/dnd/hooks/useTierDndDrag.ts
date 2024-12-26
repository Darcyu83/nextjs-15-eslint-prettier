import { useDrag } from 'react-dnd';
import { TierDndItemTypes } from '../contants';

import { TierDndDataFns, TierDndDropProps } from './type';

interface IProps {
  dropItemProps: TierDndDropProps;

  onCancelDrag: TierDndDataFns['onCancelDrag'];
}

function useTierDndDrag({ dropItemProps, onCancelDrag }: IProps) {
  const [{ isDragging }, drag, previewRef] = useDrag({
    type: TierDndItemTypes.TIER_DND_ITEM,
    item: dropItemProps,
    collect: (monitor) => {
      return { isDragging: monitor.isDragging() };
    },
    end: (originDropItemProps, monitor) => {
      console.log('드래그 해서 드랍까지 진행됬나? ', monitor.didDrop());
      if (!monitor.didDrop()) {
        onCancelDrag();
      }
    },
  });
  return { isDragging, drag, previewRef };
}

export default useTierDndDrag;
