import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import colors from "../../config/colors";
import RestaurantCard from "./RestaurantCard";

function FeaturedView({ title, description, restaurants }) {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.featuredView}>
        <View style={styles.featuredRestaurant}>
          <Text style={styles.featuredTitle}>{title}</Text>
          <Text style={styles.featuredDescription}>{description}</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.featuredDetail}>See All</Text>
        </TouchableOpacity>
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
  featuredRestaurant: {},
  featuredTitle: {
    color: colors.text,
    fontSize: 20,
    fontWeight: "bold",
  },
  featuredDescription: {
    color: colors.subText,
    fontSize: 12,
  },
  featuredDetail: {
    color: colors.primary,
  },
});

export default FeaturedView;
