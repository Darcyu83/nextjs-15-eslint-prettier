import dayjs from 'dayjs';

/**
 *
 * @param date
 * @returns  days 월 마지막 날짜 / date Date instance
 */
export const getDaysInCurrentMonth = (date: Date) => {
  const dayjsDate = dayjs(date);
  return { daysInMonth: dayjsDate.daysInMonth(), date: dayjsDate.date() };
};
