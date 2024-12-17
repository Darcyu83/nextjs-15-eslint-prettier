interface IProps {}

const dummyData = [
  { name: 'Item 1', quantity: 10 },
  { name: 'Item 2', quantity: 5 },
];

let dataPromise: Promise<typeof dummyData> | null = null;

let dataCache: typeof dummyData | null = null;

const fetchData = (): typeof dummyData => {
  if (dataCache) return dataCache;
  if (!dataPromise) {
    dataPromise = new Promise<typeof dummyData>((res, rej) => {
      setTimeout(() => {
        dataCache = dummyData;
        res(dummyData);
      }, 3000);
    });
  }

  throw dataPromise;
};

function TeamSetting(props: IProps) {
  const data = fetchData();

  return (
    <div style={{}}>
      <h1 className='text-red-500'>
        /parallel/TeamSetting.tsx Modal at slot of @team
      </h1>
    </div>
  );
}

export default TeamSetting;
