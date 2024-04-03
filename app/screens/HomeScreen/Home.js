import React from "react";
import Screen from "../../components/Screen";
import { Text, StyleSheet, View, ScrollView, Platform } from "react-native";

import colors from "../../config/colors";
import SearchBar from "../../components/HomeScreen/SearchBar";
import Categories from "../../components/HomeScreen/Categories";
import { featured } from "../../data";
import FeaturedView from "../../components/HomeScreen/FeaturedView";

function Home() {
  return (
    <Screen>
      <View style={styles.searchBarContainer}>
        <SearchBar />
      </View>
      <View style={styles.categoriesContainer}>
        <Categories />
      </View>
      <View style={styles.menuContainer}>
        {[featured, featured, featured].map((item, index) => {
          return (
            <FeaturedView
              key={index}
              title={item.title}
              restaurants={item.restaurants}
              description={item.description}
            />
          );
        })}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  searchBarContainer: {
    flex: 1,
  },
  categoriesContainer: {
    flex: Platform.OS === "android" ? 1.2 : 1,
  },
  menuContainer: {
    flex: 8,
  },
});

export default Home;
