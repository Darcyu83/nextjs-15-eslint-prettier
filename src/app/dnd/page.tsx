'use client';
import { DndProvider } from 'react-dnd';
import ChessBoard from './_components/ChessBoard';
import { HTML5Backend } from 'react-dnd-html5-backend';

interface IProps {}

function DND(props: IProps) {
  return (
    <DndProvider backend={HTML5Backend}>
      <ChessBoard />
    </DndProvider>
  );
}

export default DND;
