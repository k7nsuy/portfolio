import _debug from 'debug';
import { DateTime } from 'luxon';

// enum LUXON_DATE_FORMAT {
//   YYYY_LL_DD = 'yyyy-LL-dd',
//   YYYY_LL = 'yyyy-LL',
//   YYYY_DOT_LL = 'yyyy. LL',
//   YYYY_DOT_LL_DOT_DD = 'yyyy. LL. dd',
//   KINDNESS_FULL = 'DDDD',

//   DURATION_KINDNESS = 'y년 M개월',
//   DURATION_KINDNESS_ONLY_MONTH = 'M개월',
// }

enum LUXON_DATE_FORMAT {
  MONTH_DAY_YEAR = 'MMMM dd yyyy', // Full month name, day, and year (e.g., January 15 2025)
  MONTH_YEAR = 'MMM yyyy', // Full month name and year (e.g., January 2025)
  LESS_MONTH_YEAR = 'MMM yyyy', // Full month name and year (e.g., January 2025)
  DAY_MONTH_YEAR = 'dd MM yyyy', // Day, full month name, and year (e.g., 15 Jan 2025)

  KINDNESS_FULL = 'EEEE', // Full day name (e.g., Monday)

  DURATION_YEARS_MONTHS = "y 'yr' M 'mos'", // Duration in months and years
  DURATION_ONLY_MONTHS = "M 'mos'", // Duration in months only
}

function getFormattingDuration(from: DateTime, to: DateTime = DateTime.local()) {
  const log = debug('Util:getFormattingDuration');

  // 햇수 계산을 위해 month 에 1개월 추가
  const diff = to.plus({ month: 1.5 }).diff(from);

  log(diff.milliseconds, diff.get('years'));

  // 기간이 1년 미만이면 포맷팅을 변경
  const format =
    // diff.years 가 0으로 계속 찍혀 밀리세컨드로 1년 비교
    diff.milliseconds < 31536000000
      ? LUXON_DATE_FORMAT.DURATION_ONLY_MONTHS
      : LUXON_DATE_FORMAT.DURATION_YEARS_MONTHS;

  return diff.toFormat(format);
}

function debug(channel: string) {
  return _debug(`yosume:${channel}`);
}

const Util = {
  LUXON_DATE_FORMAT,
  getFormattingDuration,
  debug,
};

export default Util;
