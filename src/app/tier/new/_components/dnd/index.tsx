import TierRow from './TierRow';

interface IProps {}
const defaultTierDndConfig = [
  { title: 'SS', bgColor: 'dodgerblue' },
  { title: 'S', bgColor: 'tomato' },
  { title: 'A', bgColor: 'violet' },
  { title: 'B', bgColor: 'red' },
  { title: 'C', bgColor: 'yellow' },
  { title: 'D', bgColor: 'green' },
  { title: 'LOL', bgColor: 'lime' },
];

export type TierDndProps = (typeof defaultTierDndConfig)[number];

function TierDnd(props: IProps) {
  return (
    <div>
      <h1>TierDnd</h1>

      <div className='flex flex-col flex-wrap gap-2'>
        {defaultTierDndConfig.map((rowConfig, index) => {
          return (
            <TierRow
              key={'t_row_' + rowConfig.title + index}
              rowConfig={rowConfig}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TierDnd;
