export interface TierDndRow {
  title: string;
  bgColor: string;
  items: TierDndCard[];
}

export interface TierDndCard {
  imgUrl?: string;
}

export interface TierDndDropProps {
  rowIndex: number;
  itemIndex: number;
}
