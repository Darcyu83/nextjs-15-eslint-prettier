import { TierDndProps } from '.';

interface IProps {
  title?: TierDndProps['title'];
}

function TierDndCard({ title }: IProps) {
  return (
    <div className='aspect-square h-full w-[100px] border'>
      <h1>{title}</h1>
    </div>
  );
}

export default TierDndCard;
