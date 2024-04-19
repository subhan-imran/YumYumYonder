import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import colors from "../config/colors";

function CartIcon() {
  const navigation = useNavigation();
  return (
    <View style={styles.view}>
      <Pressable
        style={styles.container}
        onPress={() => navigation.navigate("Cart")}
      >
        <View style={styles.counterContainer}>
          <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
            3
          </Text>
        </View>
        <Text style={styles.cartText}>View Cart</Text>
        <Text style={styles.cartPrice}>${23}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    position: "absolute",
    flexDirection: "row",
    bottom: 30,
    marginHorizontal: 15,
  },
  container: {
    flex: 1,
    width: 50,
    height: 60,
    borderRadius: 35,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  counterContainer: {
    height: 40,
    width: 40,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primaryLight,
  },
  cartText: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.background,
  },
  cartPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.background,
  },
});

export default CartIcon;