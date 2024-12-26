import TierRow from './TierRow';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import useTierDndData from './hooks/useTierDndData';

interface IProps {}

function TierDnd(props: IProps) {
  const { data, dndDataFns } = useTierDndData();

  return (
    <div>
      <h1>TierDnd</h1>

      <DndProvider backend={HTML5Backend}>
        <div className='flex flex-col flex-wrap gap-2'>
          {data.map((rowConfig, index) => {
            return (
              <TierRow
                key={'t_row_' + rowConfig.title + index}
                rowIndex={index}
                rowConfig={rowConfig}
                dndDataFns={dndDataFns}
              />
            );
          })}
        </div>
      </DndProvider>
    </div>
  );
}

export default TierDnd;
