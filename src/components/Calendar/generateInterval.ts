import { eachDayOfInterval, format} from 'date-fns';
import { DayProps, MarkedDateProps} from '.';
import { getPlatformDate } from '../../utils/getPlataformDate';
import theme from '../../global/theme';

export function generateInterval(start: DayProps, end: DayProps){
  let interval: MarkedDateProps = {};
  eachDayOfInterval({start: new Date(start.timestamp), end: new Date(end.timestamp)})
  .forEach((item) => {
    const date = format(getPlatformDate(item), 'yyyy-MM-dd');
    interval = {
      ...interval,
      [date]:{
        color: start.dateString === date || end.dateString === date
        ? theme.colors.green_500 : theme.colors.green_300,

        textColor: start.dateString === date || end.dateString === date
        ? theme.colors.green_300 : theme.colors.green_500,
      }
    }
  });

  return interval;
}