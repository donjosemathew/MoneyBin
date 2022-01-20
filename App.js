import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Intro from "./Screens/intro";
import Home from "./Screens/home";
import AllTransactions from "./Screens/alltransactions";
import { store } from "./store";
import { Provider } from "react-redux";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Intro"
            options={{
              headerShown: false,
            }}
            component={Intro}
          />
          <Stack.Screen
            name="Home"
            options={{
              headerShown: false,
            }}
            component={Home}
          />
          <Stack.Screen
            name="AllTransactions"
            options={{
              headerShown: false,
            }}
            component={AllTransactions}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
