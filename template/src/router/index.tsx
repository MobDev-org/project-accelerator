import React, { useContext, useEffect, useState } from "react";
// import {Platform, View} from 'react-native';
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

import { AXIOS_INSTANCE, setAxiosInterceptors } from "helpers/axiosService";
import LocalizationContext from "translation/context";
import { useToast } from "react-native-styled-toast";

import LoginStack from "./LoginStack";
import LoggedInStack from "./LoggedInStack";

import { useSelector } from "react-redux";
import { RootState } from "store/reducers";

let navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // background: lightTheme.colors.background,
    background: "#fff",
  },
};

const Stack = createStackNavigator();

let Router = () => {
  let { token } = useSelector((state: RootState) => state.user);
  const { toast } = useToast();
  let { t } = useContext(LocalizationContext);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    AXIOS_INSTANCE.defaults.headers = { Authorization: `Bearer ${token}` };
  }, [token]);

  useEffect(() => {
    setAxiosInterceptors(toast, t);
    setLoaded(true);
  }, []);

  return loaded ? (
    <NavigationContainer theme={navigationTheme}>
      {!token ? <LoginStack /> : <LoggedInStack />}
    </NavigationContainer>
  ) : null;
};

export default Router;
