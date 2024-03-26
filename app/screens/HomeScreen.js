import React from "react";
import Screen from "../components/Screen";
import { Text, StyleSheet, View } from "react-native";

import colors from "../config/colors";

function HomeScreen() {
  return (
    <Screen>
      <View style={styles.searchBarContainer}>
        <Text>Home Screen</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  searchBarContainer: { backgroundColor: colors.primary, flex: 1 },
});

export default HomeScreen;
