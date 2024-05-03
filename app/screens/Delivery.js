import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";

import { useSelector } from "react-redux";
import { selectRestaurant } from "../../slices/restaurantSlice";

import Screen from "../components/Screen";
import colors from "../config/colors";
import { Phone, X } from "lucide-react-native";

function Delivery() {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  return (
    <Screen>
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        mapType="standard"
        style={{ flex: 1 }}
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.lng,
          }}
          title={restaurant.name}
          description={restaurant.description}
          pinColor={colors.primary}
        />
      </MapView>
      <View style={styles.container}>
        <View
          style={{
            margin: 20,
            marginBottom: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontSize: 17, fontWeight: "bold", marginBottom: 5 }}>
              Estimated Arrival
            </Text>
            <Text style={{ fontSize: 30, fontWeight: "bold", marginBottom: 5 }}>
              20-30 Minutes
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "bold", marginBottom: 5 }}>
              Your Order is own its way!
            </Text>
          </View>
          <Image source={require("../assets/DeliveryGuy.gif")} />
        </View>
        <View style={styles.driverInfoContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../assets/subhan.jpg")}
              style={{
                height: 60,
                width: 60,
                borderRadius: 30,
              }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text
                style={{
                  color: colors.background,
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                Subhan Imran
              </Text>
              <Text style={{ color: colors.background, fontSize: 15 }}>
                Your Rider
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={styles.iconContainer}>
              <Phone color="green" fill="green" strokeWidth={0} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Home Screen")}
              style={styles.iconContainer}
            >
              <X color="red" strokeWidth={4} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: -100,
    borderRadius: 30,
    paddingVertical: 15,
    backgroundColor: colors.background,
  },
  driverInfoContainer: {
    margin: 10,
    marginTop: 0,
    borderRadius: 40,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.primary,
  },
  iconContainer: {
    height: 40,
    width: 40,
    marginHorizontal: 10,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
});

export default Delivery;
