import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import colors from "../../config/colors";

function FeaturedView({ title, description, restaurants }) {
  return (
    <View>
      <View style={styles.featuredView}>
        <View>
          <Text style={styles.featuredTitle}>{title}</Text>
          <Text style={styles.featuredDescription}>{description}</Text>
        </View>
        <Pressable>
          <Text style={styles.featuredDetail}>See All</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  featuredView: {
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  featuredTitle: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: "bold",
  },
  featuredDescription: {
    color: colors.tertiary,
    fontSize: 12,
  },
  featuredDetail: {},
});

export default FeaturedView;
