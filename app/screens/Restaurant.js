import React from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

function Restaurant() {
  const { params } = useRoute();
  let item = params;
  console.log("Restaurant: ", item);
  return (
    <View>
      <Text>Yo</Text>
    </View>
  );
}

export default Restaurant;
