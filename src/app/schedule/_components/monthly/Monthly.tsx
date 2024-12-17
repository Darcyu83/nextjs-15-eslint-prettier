import MonthyDayBox from './MonthyDayBox';
import { getDaysInCurrentMonth } from '../utils';

interface IProps {}

function Monthly(props: IProps) {
  return (
    <div className='flex flex-wrap'>
      {[
        ...Array(getDaysInCurrentMonth(new Date('2024-12-16')).daysInMonth),
      ].map((_, dayIndex) => {
        const dateNum = dayIndex + 1;
        return <MonthyDayBox key={dayIndex} dateNum={dateNum} />;
      })}
    </div>
  );
}

export default Monthly;
