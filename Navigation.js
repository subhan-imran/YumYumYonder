import * as React from "react";
import { StyleSheet, Animated } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import colors from "./app/config/colors";

import HomeScreen from "./app/screens/HomeScreen";
import Cart from "./app/screens/Cart";
import Location from "./app/components/Header/Location";
import Icons from "./app/components/Header/Icons";
import FRestaurants from "./app/screens/Favorites/FRestaurants";
import Restaurant from "./app/screens/Restaurant";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const Favorites = () => {
  return (
    <Tab.Navigator
      screenOptions={{ tabBarStyle: { backgroundColor: colors.background } }}
    >
      <Tab.Screen name="Restaurants" component={FRestaurants} />
    </Tab.Navigator>
  );
};

function Navigation() {
  const av = new Animated.Value(0);
  av.addListener(() => {
    return;
  });
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
        <Stack.Screen
          name="Cart"
          options={{ presentation: "modal", headerShown: false }}
          component={Cart}
        />
        <Stack.Screen
          name="Restaurant"
          component={Restaurant}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {},
});

export default Navigation;
