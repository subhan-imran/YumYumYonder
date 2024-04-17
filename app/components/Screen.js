import React from "react";
import Constants from "expo-constants";
import colors from "../config/colors";
import { View, StyleSheet } from "react-native";

function Screen({ children }) {
  return <View style={styles.screen}>{children}</View>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default Screen;
