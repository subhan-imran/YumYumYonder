import React from "react";
import { Text, StyleSheet, View } from "react-native";

function Categories() {
  return (
    <View>
      <Text style={styles.categoryHeading}>Categories</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryHeading: { marginLeft: 15, fontWeight: "bold" },
});

export default Categories;
