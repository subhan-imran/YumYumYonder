import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "lucide-react-native";

import { featured } from "../";
import colors from "../config/colors";
import Screen from "../components/Screen";

function Cart() {
  const navigation = useNavigation();
  return (
    <Screen>
      <View>
        <Text></Text>
        <Text></Text>
      </View>
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
  titleContainer: {},
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
