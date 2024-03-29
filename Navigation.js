import * as React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import colors from "./app/config/colors";

import HomeScreen from "./app/screens/HomeScreen";
import Cart from "./app/screens/Cart";
import Location from "./app/components/Header/Location";
import Icons from "./app/components/Header/Icons";
import Restaurants from "./app/screens/Favorites/Restaurants";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const Favorites = () => {
  return (
    <Tab.Navigator
      screenOptions={{ tabBarStyle: { backgroundColor: colors.background } }}
    >
      <Tab.Screen name="Restaurants" component={Restaurants} />
    </Tab.Navigator>
  );
};

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen
          name="Home Screen"
          component={HomeScreen}
          options={{
            headerTitleStyle: {
              alignContent: "center",
              justifyContent: "center",
            },
            headerTitle: Location,
            headerRight: Icons,
          }}
        />
        <Stack.Screen name="Favorites" component={Favorites} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {},
});

export default Navigation;
