interface IProps {
  data?: string;
}

function TierCard(props: IProps) {
  return (
    <div
      className={[
        'group aspect-video cursor-pointer border border-dashed',
        'transform transition-transform duration-500 ease-in-out hover:rotate-[rotateY(180deg)]',
      ].join(' ')}
    >
      <div
        style={{ backgroundImage: `url(${'/images/fantasy.jpeg'})` }}
        className='flex h-full w-full items-center justify-center border bg-gradient-to-bl from-cyan-100 to-violet-400 bg-cover bg-center bg-no-repeat'
      >
        <h1 className='h-full w-full border bg-white/80 p-7 text-center text-2xl mix-blend-screen group-hover:bg-violet-950'>
          TierCardad
        </h1>
      </div>
    </div>
  );
}

export default TierCard;
