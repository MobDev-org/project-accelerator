import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Home from "screens/LoggedInStack/Home";

const Stack = createStackNavigator();

let LoggedInStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group>
        {/*  */}
        <Stack.Screen name="Home" component={Home} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default LoggedInStack;
