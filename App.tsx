import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import "intl";
import "intl/locale-data/jsonp/pt-BR";

import { Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';

import { useFonts } from 'expo-font';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/theme';
import AppLoading from 'expo-app-loading';
import Routes from './src/routes';
import { ArticlesProvider } from './src/context/useArticles';


export default function App() {
  
  
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <ArticlesProvider>
          <Routes />
        </ArticlesProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

