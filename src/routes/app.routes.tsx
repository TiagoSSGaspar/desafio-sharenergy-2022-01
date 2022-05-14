import React from "react";

import { Dashboard } from "../screens/Dashboard";
import ArticleDetails from "../screens/ArticleDetails";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchDate from "../screens/SearchDate";

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: string | any;
      ArticleDetails: string | any;
      SearchDate: string | any;
    }
  }
}


const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {

  return (
    <Navigator screenOptions={{
      headerShown: false
    }}>
      <Screen
        name="Home"
        component={Dashboard}
      />
      <Screen
        name="ArticleDetails"
        component={ArticleDetails}
      />
      <Screen
        name="SearchDate"
        component={SearchDate}
      />
    </Navigator>
  )
}
