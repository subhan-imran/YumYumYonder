import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Image, View } from "react-native";

function OrderPlaced() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 3000);
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image source={require("../assets/DeliveryGuy.gif")} />
    </View>
  );
}

export default OrderPlaced;
