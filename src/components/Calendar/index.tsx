import React from 'react';
import Feather from '@expo/vector-icons/build/Feather';
import {
  Calendar as CustomCalendar,
  LocaleConfig, CalendarProps
} from 'react-native-calendars';
import { useTheme } from 'styled-components';
import { ptBR } from './localeConfig';
import { generateInterval } from './generateInterval';
import { format } from 'date-fns';

LocaleConfig.locales['pt-br'] = ptBR
LocaleConfig.defaultLocale = 'pt-br';

interface MarkedDateProps {
  [date: string]: {
    color: string;
    textColor: string;
    disable?: boolean;
    disableTouchEvent?: boolean;
  }
}

interface DayProps {
  dateString: string;
  day: number;
  month: number;
  year: number;
  timestamp: number;   
}


function Calendar({ markedDates,onDayPress}:CalendarProps) {
  const theme = useTheme()

  return (
    <CustomCalendar
      renderArrow={(direction) =>
        <Feather
          size={24}
          color={theme.colors.green_500}
          name={direction == 'left' ? 'chevron-left' : "chevron-right"}
        />
      }

      headerStyle={{
        backgroundColor: theme.colors.white,
        borderBottomWidth: 0.5,
        borderBottomColor: theme.colors.green_300,
        paddingBottom: 10,
        marginBottom: 10
      }}

      theme={{
        textDayFontFamily: theme.fonts.medium,
        textDayHeaderFontFamily: theme.fonts.regular,
        textDayHeaderFontSize: 10,
        arrowStyle: {
          marginHorizontal: -15
        }
      }}

      maxDate={format(new Date, "YYY-MM-dd")}
      firstDay={1}
      markingType="period"
      markedDates={markedDates}
      onDayPress={onDayPress}
    />
  )
}

export {
  Calendar,
  DayProps,
  MarkedDateProps,
  CalendarProps,
  generateInterval
}

