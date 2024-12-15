import Image from 'next/image';
import { DragPreviewImage, useDrag } from 'react-dnd';
import { DragItemTypes } from './ChessBoard';
import { useEffect, useState } from 'react';

interface IProps {}

function Knight(props: IProps) {
  const [previewImage, setPreviewImage] = useState<string>();
  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: DragItemTypes.KNIGHT,
    collect: (monitor) => {
      return {
        isDragging: !!monitor.isDragging(),
      };
    },
  }));

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const size = 100;
    canvas.width = size;
    canvas.height = size;

    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    ctx.globalAlpha = 0.3;
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, size, size);

    ctx.font = ' bold 50px serif';
    ctx.fillStyle = 'blue';
    ctx.textAlign = 'center';

    ctx.textBaseline = 'middle';
    ctx.fillText('HORSE', size / 2, size / 2, 50);

    const dataUrl = canvas.toDataURL();

    setPreviewImage(dataUrl);

    canvas.remove();
  }, []);

  return (
    <>
      {previewImage && (
        <DragPreviewImage connect={preview} src={previewImage} />
      )}

      <div
        ref={(el) => {
          drag(el);
        }}
        className='cursor-grab border bg-white p-3'
        style={{ opacity: isDragging ? 0.5 : 1 }}
      >
        <Image src={'/next.svg'} alt='next logo' width={50} height={50} />
      </div>
    </>
  );
}

export default Knight;
