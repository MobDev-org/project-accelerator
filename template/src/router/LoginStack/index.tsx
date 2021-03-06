import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Login from "screens/LoginStack/Login";

const Stack = createStackNavigator();

let LoginStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen name="Login" component={Login} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default LoginStack;
