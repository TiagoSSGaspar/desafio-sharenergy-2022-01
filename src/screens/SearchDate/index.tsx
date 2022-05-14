import React, { useState } from 'react'
import { format } from 'date-fns';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import { getPlatformDate } from "../../utils/getPlataformDate"
import {
  Calendar, DayProps, generateInterval,
  MarkedDateProps
} from "../../components/Calendar";
import { useArticles } from '../../context/useArticles';
import {
  Container, Header, Title,
  ArticlePeriod, Content,
  DateInfo, DateTitle, DateValue,
  Footer
}
  from './styles';
import ArrowSvg from "../../assets/arrow.svg";
import Button from "../../components/Button";
import { BackButton } from "../../components/BackButton";


interface SearchPeriodProps {
  startFormatted: string;
  startNotFormatted: string;
  endFormatted: string;
  endNotFormatted: string;

}

export default function SearchDate() {
  const theme = useTheme();
  const navigation = useNavigation();
  const { articles, setIsOpenModal, findByIntervalDates } = useArticles()

  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps);
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps);
  const [searchPeriod, setSearchPeriod] = useState<SearchPeriodProps>({} as SearchPeriodProps)

  function handleConfirmSearch() {
    findByIntervalDates(searchPeriod.startFormatted, searchPeriod.endFormatted)
    navigation.goBack()
  }
  
  
  function handleChangeDate(date: DayProps) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;
    
    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    setMarkedDates(interval);

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setSearchPeriod({
      startFormatted: format(getPlatformDate(new Date(firstDate)), 'dd/MM/yyyy'),
      startNotFormatted: firstDate,
      endFormatted: format(getPlatformDate(new Date(endDate)), 'dd/MM/yyyy'),
      endNotFormatted: endDate
    })
  }

  function handleBack() {
    navigation.goBack()
  }

  return (
    <Container>
      <Header>
        <Title>
          Escolha uma data de início e fim do artigo
        </Title>
        <BackButton icon="close" onPress={handleBack} color={theme.colors.green_300} />
        <ArticlePeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={!!searchPeriod.startFormatted}>
              {searchPeriod.startFormatted}
            </DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={!!searchPeriod.endFormatted}>
              {searchPeriod.endFormatted}
            </DateValue>
          </DateInfo>
        </ArticlePeriod>
      </Header>

      <Content>
        <Calendar
          markedDates={markedDates}
          onDayPress={handleChangeDate}
        />
      </Content>

      <Footer>
        <Button
          title="Confirmar"
          onPress={handleConfirmSearch}
          enabled={!!searchPeriod.startFormatted}
          size="full"
          backgroundColor="green-500"
          textColor="white" 
        />
      </Footer>

    </Container>
  )
}