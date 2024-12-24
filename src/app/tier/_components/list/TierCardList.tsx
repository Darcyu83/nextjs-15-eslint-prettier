import TierCard from './TierCard';

interface IProps {}

function TierCardList(props: IProps) {
  return (
    <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6'>
      {[...Array(10)].map((data, index) => {
        return <TierCard key={index} />;
      })}
    </div>
  );
}

export default TierCardList;
