import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "lucide-react-native";

import { featured } from "../data";
import colors from "../config/colors";
import Screen from "../components/Screen";

function Cart() {
  const restaurant = featured.restaurants[0];
  const navigation = useNavigation();
  return (
    <Screen>
      <View style={styles.titleContainer}>
        <Text style={{ color: colors.text, fontSize: 20, fontWeight: "bold" }}>
          Your Cart
        </Text>
        <Text>{restaurant.name}</Text>
      </View>
      <View style={styles.timeContainer}>
        <Image
          source={require("../assets/DeliveryGuy.gif")}
          style={{ height: 60, width: 60 }}
        />
        <Text>Delivery in 20 - 30 minutes</Text>
        <Pressable>
          <Text style={{ color: colors.primary, fontWeight: "bold" }}>
            Change
          </Text>
        </Pressable>
      </View>
      <ScrollView></ScrollView>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <ArrowLeft color={colors.background} />
      </TouchableOpacity>
    </Screen>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    margin: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  timeContainer: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: colors.primaryLight,
  },
  backButton: {
    position: "absolute",
    top: 30,
    left: 20,
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 15,
  },
});

export default Cart;
