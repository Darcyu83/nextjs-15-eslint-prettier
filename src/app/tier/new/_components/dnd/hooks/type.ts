export interface TierDndCard {
  id: string;
  imgUrl?: string;
}

export interface TierDndRow {
  title: string;
  bgColor: string;
  items: TierDndCard[];
}
export interface TierDndData {
  origin: TierDndRow[];
  updated: TierDndRow[] | null;
}

type TierDndonCompleteDrop = () => void;
type TierDndOnCancelDrag = () => void;
type TierDndOnMoveDraggedItem = ({
  nextRowIndex,
  nextItemIndex,
  item,
}: {
  nextRowIndex: number;
  nextItemIndex: number;
  item: TierDndDropProps;
}) => void;

export interface TierDndDataFns {
  onMoveDraggedItem: TierDndOnMoveDraggedItem;
  onCompleteDrop: TierDndonCompleteDrop;
  onCancelDrag: TierDndOnCancelDrag;
}

export interface UseTierDndDataReturns {
  data: TierDndData;
  tierDndFns: TierDndDataFns;
}

export interface TierDndDropProps {
  id: string;
  rowIndex: number;
  itemIndex: number;
}
