import React from "react";
import Constants from "expo-constants";
import { View, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";

function Screen({ children }) {
  const theme = useTheme();
  return <View style={styles.screen}>{children}</View>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
});

export default Screen;
