import React from "react";
import { Pressable, Text, View, Image, StyleSheet } from "react-native";
import colors from "../../config/colors";

function RestaurantCard({ item }) {
  return (
    <Pressable>
      <View style={styles.cardView}>
        <Image source={item.image} style={styles.cardImage} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cardView: {
    marginRight: 6,
    backgroundColor: colors.background,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginRight: 20,
  },
  cardImage: {
    height: 150,
    width: 230,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});

export default RestaurantCard;
