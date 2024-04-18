import React from "react";
import { Pressable, Text, View, Image, StyleSheet } from "react-native";
import { Star, MapPin } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

import colors from "../../config/colors";

function RestaurantCard({ item }) {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate("Restaurant", { ...item })}>
      <View style={styles.cardView}>
        <Image source={item.image} style={styles.cardImage} />
        <View style={styles.cardDetail}>
          <Text style={styles.cardText}>{item.name}</Text>
          <View style={styles.cardDescription}>
            <Star fill={colors.star} color={colors.star} size={14} />
            <Text style={{ marginLeft: 5 }}>
              <Text style={{ color: colors.text }}>{item.star}</Text>
              <Text style={{ color: colors.subText }}>
                ({item.reviews} reviews) -{" "}
                <Text style={{ fontWeight: "700", color: colors.text }}>
                  {item.category}
                </Text>
              </Text>
            </Text>
          </View>
          <View style={styles.cardDescription}>
            <MapPin color={colors.primary} size={16} />
            <Text style={{ marginLeft: 5, color: colors.subText }}>
              Nearby - {item.address}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cardView: {
    marginRight: 6,
    backgroundColor: colors.background,
    borderRadius: 15,
    marginRight: 20,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  cardImage: {
    height: 150,
    width: 270,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  cardDetail: {
    margin: 10,
    justifyContent: "space-between",
  },
  cardText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardDescription: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
});

export default RestaurantCard;
