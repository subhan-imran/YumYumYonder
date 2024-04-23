import * as React from "react";
import { Animated } from "react-native";
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
import OrderPlaced from "./app/screens/OrderPlaced";
import Delivery from "./app/screens/Delivery";

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
          headerShown: false,
          headerTitleAlign: "center",
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen
          name="Home Screen"
          component={HomeScreen}
          options={{
            headerShown: true,
            headerTitleStyle: {
              alignContent: "center",
              justifyContent: "center",
            },
            headerTitle: Location,
            headerRight: Icons,
          }}
        />
        <Stack.Screen
          name="Favorites"
          component={Favorites}
          options={{ headerShown: true }}
        />
        <Stack.Screen name="Restaurant" component={Restaurant} />
        <Stack.Screen
          name="Cart"
          options={{ presentation: "modal" }}
          component={Cart}
        />
        <Stack.Screen
          name="Order Placed"
          component={OrderPlaced}
          options={{ presentation: "fullScreenModal" }}
        />
        <Stack.Screen name="Delivery" component={Delivery} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
