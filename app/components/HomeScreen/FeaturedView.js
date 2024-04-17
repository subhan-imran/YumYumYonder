import React from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import colors from "../../config/colors";

import RestaurantCard from "./RestaurantCard";

function FeaturedView({ title, description, restaurants }) {
  return (
    <View>
      <View style={styles.featuredView}>
        <View style={styles.featuredCard}>
          <Text style={styles.featuredTitle}>{title}</Text>
          <Text style={styles.featuredDescription}>{description}</Text>
        </View>
        <Pressable>
          <Text style={styles.featuredDetail}>See All</Text>
        </Pressable>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          margin: 15,
        }}
      >
        {restaurants.map((restaurant, index) => {
          return <RestaurantCard item={restaurant} key={index} />;
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  featuredView: {
    marginTop: 10,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  featuredCard: {},
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
