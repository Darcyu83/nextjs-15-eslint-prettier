import { TierDndRow } from './types';

export const defaultTierDndRows: TierDndRow[] = [
  { title: 'SS', bgColor: 'dodgerblue', items: [] },
  { title: 'S', bgColor: 'tomato', items: [] },
  { title: 'A', bgColor: 'violet', items: [] },
  { title: 'B', bgColor: 'red', items: [] },
  { title: 'C', bgColor: 'yellow', items: [] },
  { title: 'D', bgColor: 'green', items: [] },
  { title: 'LOL', bgColor: 'lime', items: [] },
];

export const TierDndItemTypes = {
  TIER_DND_ITEM: 'tier_dnd_item',
};
