import { useCallback, useState } from 'react';
import { TierDndDropProps, TierDndRow } from '../types';
import { defaultTierDndRows } from '../contants';

function useTierDnd() {
  const [data, setData] = useState<TierDndRow[]>(defaultTierDndRows);

  // const prevDataRef = useRef<TierDndRow[]>(null);
  // const onCancelDrag = useCallback(() => {
  //   // if (prevDataRef.current) setData(prevDataRef.current);
  // }, []);

  const onDrop = useCallback(
    (nextRowIndex: number, nextItemIndex: number, item: TierDndDropProps) => {
      const { rowIndex, itemIndex } = item;

      setData((prev) => {
        const movingItem = prev[rowIndex].items[itemIndex];
        if (!movingItem) return prev;

        const copied = [...prev];

        const sourceRowItems = [...copied[rowIndex].items];
        const targetRowItems = [...copied[nextRowIndex].items];

        // remove item from source row;
        sourceRowItems.splice(itemIndex, 1);

        // move item between items with
        targetRowItems.splice(nextItemIndex, 0, movingItem);

        copied[rowIndex].items = sourceRowItems;
        copied[nextRowIndex].items = targetRowItems;

        return copied;
      });
    },
    [],
  );
  return { data, onDrop };
}

export default useTierDnd;
