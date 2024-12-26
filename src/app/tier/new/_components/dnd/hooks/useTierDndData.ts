import { useCallback, useMemo, useState } from 'react';

import { defaultTierDndRows } from '../contants';
import { TierDndData, TierDndDataFns, TierDndDropProps } from './type';

function useTierDndData() {
  const [data, setData] = useState<TierDndData>({
    origin: defaultTierDndRows,
    updated: null,
  });

  const onCompleteDrop: TierDndDataFns['onCompleteDrop'] = useCallback(() => {
    console.log('%c  onCompleteDrop ==== ', 'background: green');
    setData((prev) => {
      if (!prev.updated) return prev;
      return { origin: prev.updated, updated: null };
    });
  }, []);

  const onCancelDrag: TierDndDataFns['onCancelDrag'] = useCallback(() => {
    console.log('%c  onCancelDrag ==== ', 'background: yellow');
    setData((prev) => {
      return { ...prev, updated: null };
    });
  }, []);

  const onMoveDraggedItem: TierDndDataFns['onMoveDraggedItem'] = useCallback(
    ({
      nextRowIndex,
      nextItemIndex,
      item,
    }: {
      nextRowIndex: number;
      nextItemIndex: number;
      item: TierDndDropProps;
    }) => {
      const { id, rowIndex, itemIndex } = item;

      setData((prev) => {
        const movingItem = prev.origin[rowIndex].items[itemIndex];

        console.log('movingItem ==== ', movingItem);

        // deep copy
        const updated = (prev.updated ?? prev.origin).map((row, rowIdx) => {
          // If it's either the source or target row, copy and update the items
          if (rowIdx === rowIndex || rowIdx === nextRowIndex) {
            const updatedItems = [...row.items];

            // If it's the source row, remove the item
            if (rowIdx === rowIndex) {
              updatedItems.splice(itemIndex, 1);
            }

            // If it's the target row, insert the item at the correct position
            if (rowIdx === nextRowIndex) {
              updatedItems.splice(nextItemIndex, 0, movingItem);
            }

            return { ...row, items: updatedItems };
          }

          return row; // Return the row unmodi
        });

        return { ...prev, updated };
      });
    },
    [],
  );

  const dndDataFns: TierDndDataFns = useMemo(
    () => ({ onCompleteDrop, onCancelDrag, onMoveDraggedItem }),
    [onCompleteDrop, onCancelDrag, onMoveDraggedItem],
  );
  return {
    data: data.updated ?? data.origin,
    dndDataFns,
  };
}

export default useTierDndData;
