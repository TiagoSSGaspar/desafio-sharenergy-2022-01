import React, { useEffect, useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';

import {
  Container, Article, Blur,
  Gradient, Content, Title,
  Paragraph, Wrapper, Icon, 
  WrapperButtons,ImageArticle, InfoTitle, WrapperInfo,
} from './styles';
import Button from '../../components/Button';
import { ScrollView, BorderlessButton } from 'react-native-gesture-handler';
import { useArticles } from '../../context/useArticles';
import { BackButton } from '../../components/BackButton';
import { useTheme } from 'styled-components/native';
import Header from '../../components/Header';
import { convertDatePTBR } from '../../shared/utils/convertDate';
import { Linking } from 'react-native';


interface Params {
  article: ArticleDTO
}

export default function ArticleDetails() {
  const theme = useTheme();
  const route = useRoute()
  const { article: articleParam } = route.params as Params;

  const { articles } = useArticles()
  const navigation = useNavigation();

  const [currentIndexArticle, setCurrentIndexArticle] = useState(0)

  function handleFindIndex() {
    const index = articles.findIndex(article => article.id === articleParam.id)

    if (index < 0) return
    setCurrentIndexArticle(index)
  }

  useEffect(() => {
    handleFindIndex()
  }, [])

  function handleBack() {
    navigation.goBack()
  }

  function handleNext() {
    let next = currentIndexArticle

    if (currentIndexArticle >= (articles.length - 1)) {
      return
    }

    setCurrentIndexArticle(next += 1)
  }

  function handlePrevious() {
    let previous = currentIndexArticle

    if (currentIndexArticle <= 0) {
      return;
    }

    setCurrentIndexArticle(previous -= 1)
  }

  function handleOpenURL() {
    Linking.openURL(articles[currentIndexArticle]?.url)
  }

  return (
    <Container>
      <Header />
      <BackButton onPress={handleBack} color={theme.colors.green_300} />
      <Article>
        <Blur>
          <Gradient>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Content>
                <Title>{articles[currentIndexArticle]?.title}</Title>
                <Paragraph>{articles[currentIndexArticle]?.summary}</Paragraph>
                <Wrapper>
                  <ImageArticle source={{ uri: `${articles[currentIndexArticle]?.imageUrl}` }} />
                </Wrapper>
                <WrapperInfo>
                  <InfoTitle>Publicado por: {articles[currentIndexArticle]?.newsSite}</InfoTitle>
                  <BorderlessButton onPress={handleOpenURL}>
                    <Icon name="link"/>
                  </BorderlessButton>
                </WrapperInfo>
                <InfoTitle>Publicado em:  {convertDatePTBR(articles[currentIndexArticle]?.publishedAt)}</InfoTitle>
                <InfoTitle>Atualizado em: {convertDatePTBR(articles[currentIndexArticle]?.updatedAt)}</InfoTitle>
              </Content>
            </ScrollView>
          </Gradient>
        </Blur>
      </Article>
      <WrapperButtons>
        <Button backgroundColor="white" textColor="green-500" size="medium" title="Anterior" onPress={handlePrevious} />
        <Button backgroundColor="white" textColor="green-500" size="medium" title="Próximo" onPress={handleNext} />
      </WrapperButtons>
    </Container>
  )
}

