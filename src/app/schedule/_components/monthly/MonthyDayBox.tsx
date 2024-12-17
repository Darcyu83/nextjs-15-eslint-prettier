interface IProps {
  dateNum: number;
}

function MonthyDayBox({ dateNum }: IProps) {
  return (
    <div className='aspect-square w-[calc(100%/7)] border border-red-300 p-2'>
      <h1>{dateNum}</h1>

      {[...Array(5)].map((info, index) => {
        return <div key={index}>스케쥴 정보{index}</div>;
      })}
    </div>
  );
}

export default MonthyDayBox;
