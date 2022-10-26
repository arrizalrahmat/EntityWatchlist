import dayjs from 'dayjs';
import 'dayjs/locale/id';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.locale('id');

export const date = arg => {
  if (!arg) {
    return dayjs();
  }

  const currentDate = dayjs(arg).toDate();
  const timezoneHourOffset = Math.abs(currentDate.getTimezoneOffset()) / 60;
  if (timezoneHourOffset >= 7) {
    // example arg = 2022-07-13T11:17:38.501559Z
    if (typeof arg === 'string' && /[Z]/.test(arg)) {
      currentDate.setDate(currentDate.getUTCDate());
      currentDate.setHours(currentDate.getUTCHours() + timezoneHourOffset - 7);
    }
    // example arg = 2022-07-12 13:52:19
    else {
      currentDate.setHours(currentDate.getHours() + timezoneHourOffset - 7);
    }
  }
  return dayjs(currentDate);
};
