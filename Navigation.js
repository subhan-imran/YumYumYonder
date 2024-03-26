import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import colors from "./app/config/colors";
import HomeScreen from "./app/screens/HomeScreen";
import Favorites from "./app/screens/Favorites";
import Cart from "./app/screens/Cart";
import Restaurants from "./app/screens/Favorites/Restaurants";
import Shops from "./app/screens/Favorites/Shops";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();

function HomeScreenNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: "front",
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: colors.secondary,
      }}
    >
      <Drawer.Screen
        name="Home Screen"
        component={HomeScreen}
        options={{
          headerRight: () => {},
        }}
      />
      <Drawer.Screen
        name="Favorite Screen"
        component={FavoriteScreen}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

function FavoriteScreen() {
  return (
    <Stack.Navigator
      screenOptions={{ headerStyle: { backgroundColor: colors.primary } }}
    >
      <Stack.Screen
        name="Favorite Screen"
        component={FavoriteNavigator}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

function FavoriteNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Restaurants"
      screenOptions={{ tabBarStyle: { backgroundColor: colors.primary } }}
    >
      <Tab.Screen name="Restaurants" component={Restaurants} />
      <Tab.Screen name="Shops" component={Shops} />
    </Tab.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: colors.primary },
          headerTintColor: colors.secondary,
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreenNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Favorite" component={FavoriteScreen} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
