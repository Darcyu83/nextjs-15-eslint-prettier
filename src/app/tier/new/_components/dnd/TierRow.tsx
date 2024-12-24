import { TierDndProps } from '.';
import TierDndCard from './TierDndCard';

interface IProps {
  rowConfig: TierDndProps;
}

function TierRow({ rowConfig }: IProps) {
  return (
    <div className='flex gap-2'>
      <div
        className='h-auto w-[100px] border'
        style={{ background: rowConfig.bgColor }}
      >
        <h1 className='grid h-full w-full place-items-center text-black'>
          {rowConfig.title}
        </h1>
      </div>

      <div
        key={'tier_' + rowConfig.title}
        className='flex h-fit flex-wrap gap-2'
      >
        {[...Array(10)].map((_, index) => {
          return <TierDndCard key={index} title={index + ''} />;
        })}
      </div>
    </div>
  );
}

export default TierRow;
