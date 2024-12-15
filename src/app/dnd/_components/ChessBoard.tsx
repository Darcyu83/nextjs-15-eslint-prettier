import { useState } from 'react';
import Knight from './Knight';
import Square from './Square';

export const DragItemTypes = {
  KNIGHT: 'knight',
};

interface IProps {
  // knightPosition?: [knightX: number, knightY: number];
}

function ChessBoard(props: IProps) {
  const [[knightX, knightY], setKnightPosition] = useState<
    [knightX: number, knightY: number]
  >([0, 0]);
  const nByN = 7;

  return (
    <div className='flex flex-wrap border'>
      {[...Array(nByN * nByN)].map((_, index) => {
        const x = index % nByN;
        const y = Math.floor(index / nByN);
        const widthAndHeight = 100 / nByN + '%';
        const isBgBlack = (x + y) % 2 === 1;
        const isKnightHere = x === knightX && y === knightY;
        return (
          <Square
            key={'sqaure_' + index}
            x={x}
            y={y}
            widthAndHeight={widthAndHeight}
            setKnightPosition={setKnightPosition}
            index={index}
            isBgBlack={isBgBlack}
            // isKnightHere={isKnightHere}
          >
            {isKnightHere && <Knight />}
          </Square>
        );
      })}
    </div>
  );
}

export default ChessBoard;
