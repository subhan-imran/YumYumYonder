import React from "react";
import Screen from "../../components/Screen";
import { Text, StyleSheet, View, ScrollView } from "react-native";

import colors from "../../config/colors";
import SearchBar from "../../components/HomeScreen/SearchBar";
import Categories from "../../components/HomeScreen/Categories";

function Home() {
  return (
    <Screen>
      <View style={styles.mainContainer}>
        <View style={styles.searchBarContainer}>
          <SearchBar />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flex: 1 }}
        >
          <Categories />
        </ScrollView>
      </View>
      <View style={styles.menuContainer}></View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  searchBarContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 10,
  },
  menuContainer: {
    flex: 5,
  },
});

export default Home;
