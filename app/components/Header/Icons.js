import React from "react";
import { Heart, ShoppingBasket } from "lucide-react-native";
import { Text, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import colors from "../../config/colors";

function Icons() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      <Heart
        color={colors.primary}
        size={25}
        style={styles.icon}
        onPress={() => navigation.navigate("Favorites")}
      />
      <ShoppingBasket
        color={colors.primary}
        size={25}
        style={styles.icon}
        onPress={() => navigation.navigate("Cart")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
  },
});

export default Icons;
