import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';

import { Picker } from '@react-native-picker/picker';
import ArticleCard from "../../components/ArticleCard";
import Header from "../../components/Header";
import { useArticles } from "../../context/useArticles";
import Search from "../../components/Search";

import {
  ArticleList, Article, Container,
  Title, Wrapper, SelectAmountArticles
} from "./style";
import LoadAnimation from "../../components/LoadAnimation";



export function Dashboard() {
  const navigation = useNavigation();
  const { articles, showMoreArticles, findByTitle, loading, } = useArticles()
  const [search, setSearch] = useState("");
  const [selectedAmountArticles] = useState("");


  function handleSearch() {
    if (search !== "") {
      findByTitle(search)
    }
  }

  function handleGoSearchDate() {
    navigation.navigate("SearchDate")
  }

  function handleSearchClear() {
    setSearch("")
    findByTitle("")
  }

  return (
    <Container>
      <Header />
      <Search
        onChangeText={setSearch}
        value={search}
        onSearch={handleSearch}
        onSearchDate={handleGoSearchDate}
        onClear={handleSearchClear}
      />
      <Article>
        <Wrapper>
          <Title>Artigos recentes</Title>
          <SelectAmountArticles
            selectedValue={selectedAmountArticles}
            onValueChange={(itemValue: any) =>
              showMoreArticles(itemValue)
            }>
            <Picker.Item label="Exibir mais" value="" />
            <Picker.Item label="Exibir 10 artigos" value="10" />
            <Picker.Item label="Exibir 20 artigos" value="20" />
            <Picker.Item label="Exibir 50 artigos" value="50" />
            <Picker.Item label="Exibir 100 artigos" value="100" />
          </SelectAmountArticles>
        </Wrapper>
        {
          loading ?
            <LoadAnimation />
            :
            <>
              <ArticleList
                data={articles}
                keyExtractor={(item: any) => item.id}
                renderItem={({ item }: any) => <ArticleCard data={item} />}
              />
            </>
        }
      </Article>
    </Container>

  )
}

