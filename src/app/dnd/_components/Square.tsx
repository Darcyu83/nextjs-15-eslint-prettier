import { Dispatch, ReactNode, SetStateAction } from 'react';
import { useDrop } from 'react-dnd';
import { DragItemTypes } from './ChessBoard';

interface IProps {
  children?: ReactNode;
  index: number;
  x: number;
  y: number;
  widthAndHeight: string;
  isBgBlack: boolean;
  setKnightPosition: Dispatch<
    SetStateAction<[knightX: number, knightY: number]>
  >;
}

function Square({
  children,
  index,
  x,
  y,
  widthAndHeight,
  isBgBlack,
  setKnightPosition,
}: IProps) {
  const [{ isOver }, drop] = useDrop(
    {
      accept: DragItemTypes.KNIGHT,

      drop: () => {
        setKnightPosition([x, y]);
      },
      collect: (monitor) => {
        return { isOver: !!monitor.isOver() };
      },
    },
    [x, y],
  );
  return (
    <div
      ref={(el) => {
        drop(el);
      }}
      style={{
        width: widthAndHeight,
        aspectRatio: '1/1',
        background: isBgBlack ? 'black' : 'white',
      }}
      className='relative flex items-center justify-center border border-dashed border-red-200'
    >
      {children}
      {isOver && (
        <div className='absolute z-10 h-full w-full bg-yellow-200 opacity-50'></div>
      )}
    </div>
  );
}

export default Square;
