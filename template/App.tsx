import React, { useEffect } from "react";
import { StatusBar, LogBox, Image } from "react-native";

import Router from "router";
import { PersistGate } from "redux-persist/integration/react";
import { Provider as StoreProvider } from "react-redux";
import store, { persistor } from "store";
import LocalizationContainer from "translation/LocalizationContainer";

import { ThemeProvider } from "styled-components";
import { ToastProvider } from "react-native-styled-toast";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// import Text from 'shared/Text';
import { lightTheme } from "shared/theme";
import { Provider as PaperProvider } from "react-native-paper";
import toastTheme from "shared/constants/toastTheme";

LogBox.ignoreAllLogs(true);
const App = () => {
  return (
    <StoreProvider store={store}>
      <PersistGate persistor={persistor}>
        <PaperProvider theme={lightTheme}>
          <ThemeProvider theme={toastTheme}>
            <SafeAreaProvider>
              <SafeAreaView
                edges={["top"]}
                style={{ flex: 1, backgroundColor: "#fff" }}
              >
                <ToastProvider maxToasts={2} offset={16}>
                  <LocalizationContainer>
                    <StatusBar
                      barStyle="dark-content"
                      translucent
                      backgroundColor="transparent"
                    />
                    <Router />
                  </LocalizationContainer>
                </ToastProvider>
              </SafeAreaView>
            </SafeAreaProvider>
          </ThemeProvider>
        </PaperProvider>
      </PersistGate>
    </StoreProvider>
  );
};
export default App;
