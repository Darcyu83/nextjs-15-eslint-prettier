import { TierDndCard, TierDndRow } from './hooks/type';

export const defaultTierDndRows: TierDndRow[] = [
  {
    title: 'SS',
    bgColor: 'dodgerblue',
    items: [...Array(10)].map((_, idx) => {
      const dummy: TierDndCard = {
        id: idx + 'ss',
        imgUrl: 'img_url_SS_' + idx,
      };
      return dummy;
    }),
  },
  {
    title: 'S',
    bgColor: 'tomato',
    items: [...Array(10)].map((_, idx) => {
      const dummy: TierDndCard = {
        id: idx + 's',
        imgUrl: 'img_url_S_' + idx,
      };
      return dummy;
    }),
  },
  {
    title: 'A',
    bgColor: 'violet',
    items: [...Array(10)].map((_, idx) => {
      const dummy: TierDndCard = {
        id: idx + 'a',
        imgUrl: 'img_url_A_' + idx,
      };
      return dummy;
    }),
  },
  {
    title: 'B',
    bgColor: 'red',
    items: [...Array(10)].map((_, idx) => {
      const dummy: TierDndCard = {
        id: idx + 'b',
        imgUrl: 'img_url_' + idx,
      };
      return dummy;
    }),
  },
  {
    title: 'C',
    bgColor: 'yellow',
    items: [...Array(10)].map((_, idx) => {
      const dummy: TierDndCard = {
        id: idx + 'c',
        imgUrl: 'img_url_' + idx,
      };
      return dummy;
    }),
  },
  {
    title: 'D',
    bgColor: 'green',
    items: [...Array(10)].map((_, idx) => {
      const dummy: TierDndCard = {
        id: idx + 'd',
        imgUrl: 'img_url_' + idx,
      };
      return dummy;
    }),
  },
  {
    title: 'LOL',
    bgColor: 'lime',
    items: [...Array(10)].map((_, idx) => {
      const dummy: TierDndCard = {
        id: idx + 'lol',
        imgUrl: 'img_url_' + idx,
      };
      return dummy;
    }),
  },
];

export const TierDndItemTypes = {
  TIER_DND_ITEM: 'tier_dnd_item',
};
