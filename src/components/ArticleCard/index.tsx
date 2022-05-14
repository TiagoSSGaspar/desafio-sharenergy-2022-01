import React from "react";
import { useNavigation } from '@react-navigation/native';

import {
  Container, CardBlur, CardGradient,
  CardContent, Title, Paragraph,
  Wrapper, Icon, PublishedAt
} from "./style";
import { convertDatePTBR } from "../../shared/utils/convertDate";

interface Props {
  data: ArticleDTO
}

export default function ArticleCard({ data }: Props) {
  const navigation = useNavigation();

  function handleArticleDetails(article:ArticleDTO) {
    navigation.navigate('ArticleDetails', {article})
  }

  return (
    <Container>
      <CardBlur>
        <CardGradient>
          <CardContent onPress={() => handleArticleDetails(data)}>
            <Title numberOfLines={1}>{data.title}</Title>
            <Paragraph numberOfLines={2} >{data.summary}</Paragraph>
            <PublishedAt>Publicado em: {convertDatePTBR(data.publishedAt)}</PublishedAt>
            <Wrapper>
              <Title>Continuar lendo</Title>
              <Icon name="book-open"/>
            </Wrapper>
          </CardContent>
        </CardGradient>
      </CardBlur>
    </Container>
  )
}
