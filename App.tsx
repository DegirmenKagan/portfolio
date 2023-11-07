import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/screens/HomeScreen";
import AboutScreen from "./src/screens/AboutScreen";
import PortfolioScreen from "./src/screens/PortfolioScreen";
import ContactScreen from "./src/screens/ContactScreen";
import Header from "./src/header/Header";
import { ScreenNames } from "./src/consts/HeaderConsts";

// const NativeStack = createNativeStackNavigator();
const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

// EXAMPLES:
// navigation.navigate('Notifications')}
// navigation.goBack()

export default function App() {
  const headerOptions = () => ({
    headerTitle: () => <Header />,
  });
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({}) => ({
          // headerShown: false,
          // gestureEnabled: true,
        })}
      >
        <Stack.Screen
          name={ScreenNames.Home}
          component={HomeScreen}
          options={headerOptions}
        />
        <Stack.Screen
          name={ScreenNames.About}
          component={AboutScreen}
          options={headerOptions}
        />
        <Stack.Screen
          name={ScreenNames.Portfolio}
          component={PortfolioScreen}
          options={headerOptions}
        />
        <Stack.Screen
          name={ScreenNames.Contact}
          component={ContactScreen}
          options={headerOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
