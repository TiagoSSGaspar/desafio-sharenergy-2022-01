
import React, { ReactNode, createContext, useState, useContext, useEffect, useCallback } from "react";
import { Alert } from "react-native";

import { format, formatISO } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR'
import { api } from "../utils/api";
import { getPlatformDate } from "../utils/getPlataformDate";
import { convertDateISO } from "../utils/convertDate";

interface IArticleProviderProps {
  children: ReactNode
}

interface IArticleContextData {
  articles: ArticleDTO[];
  setArticles: React.Dispatch<React.SetStateAction<ArticleDTO[]>>;
  showMoreArticles: (amountPage: string) => void;
  findByTitle: (title: string) => void;
  findByIntervalDates: (start: string, end: string) => void;
  loading: boolean;
}

const ArticlesContext = createContext<IArticleContextData>({} as IArticleContextData);

export function ArticlesProvider({ children }: IArticleProviderProps): JSX.Element {
  const [articles, setArticles] = useState<ArticleDTO[]>([]);
  const [loading, setLoading] = useState(true)

  function handleLoaded() {
    setLoading(false)
  }

  const loadArticles = useCallback(async () => {
    try {
      const { data } = await api.get("/articles")
      setArticles(data)
      handleLoaded()
    } catch {
      Alert.alert("Algo saiu errado ao carregar seus artigos!")
      handleLoaded()
    }

  }, [])

  async function showMoreArticles(amountPages: string) {
    try {
      setLoading(!loading)

      const { data } = await api.get(`/articles?_limit=${amountPages}`)
      
      setArticles(data)
      handleLoaded()
    
    } catch {
      Alert.alert("Algo deu errado tente novamente!")
    }
  }

  async function findByTitle(title: string) {
    try {
      setLoading(!loading)

      const { data } = await api.get(`/articles?title_contains=${title}`)

      setArticles(data)
      handleLoaded()

    } catch {
      Alert.alert("Não foi possível realizar a consulta!")
      handleLoaded()
    }
  }

  async function findByIntervalDates(start: string, end: string) {
    try {
      setLoading(!loading)
      const startFormatted = convertDateISO(start).concat("T00:00:00.000Z") 
      const endFormatted = convertDateISO(end).concat("T23:59:59.000Z") 
      
      const { data } = await api.get(`articles?_limit=100&publishedAt_gt=${startFormatted}&publishedAt_lt=${endFormatted}`)
      
      setArticles(data)
      handleLoaded()
    } catch {
      Alert.alert("Não foi possível realizar a consulta!")
      handleLoaded()
    }
  }

  useEffect(() => {
    loadArticles()
  }, [])

  return (
    <ArticlesContext.Provider value={
      {
        articles,
        setArticles,
        showMoreArticles,
        findByTitle,
        loading,
        findByIntervalDates
      }
    }>
      {children}
    </ArticlesContext.Provider>
  )
}

export function useArticles(): IArticleContextData {
  const context = useContext(ArticlesContext);

  return context;
}






