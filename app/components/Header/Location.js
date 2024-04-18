import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { MapPin } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

import colors from "../../config/colors";

function Location() {
  const navigation = useNavigation();
  const [location, setLocation] = useState("NY");
  const [city, setCity] = useState("USA");
  const addLocation = () => {};

  return (
    <View
      style={{
        overflow: "hidden",
        flexDirection: "row",
        alignItems: "center",
      }}
      onPress={addLocation}
    >
      <MapPin color={colors.primary} size={25} />
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <Text style={styles.text}>
          <Text style={{ fontWeight: "bold" }}>{location},</Text>
          {city}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontWeight: "200",
    marginLeft: 5,
  },
});

export default Location;
