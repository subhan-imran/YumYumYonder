import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ArrowLeft, Star, MapPin } from "lucide-react-native";

import colors from "../config/colors";
import Screen from "../components/Screen";
import Dishes from "./Menu/Dishes";
import CartIcon from "../components/CartIcon";

function Restaurant() {
  const navigation = useNavigation();
  const { params } = useRoute();
  let item = params;
  //console.log("Restaurant: ", item);
  return (
    <Screen>
      <ScrollView>
        <View>
          <Image style={styles.restaurantImage} source={item.image} />
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <ArrowLeft color={colors.primary} />
          </TouchableOpacity>
        </View>
        <View style={styles.restaurantDetailContainer}>
          <View>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>
              {item.name}
            </Text>
            <View style={{ marginTop: 7 }}>
              <View style={{ flexDirection: "row" }}>
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
              <View style={{ flexDirection: "row" }}>
                <MapPin color={colors.primary} size={16} />
                <Text style={{ marginLeft: 5, color: colors.subText }}>
                  Nearby - {item.address}
                </Text>
              </View>
              <Text style={{ color: colors.subText, marginTop: 10 }}>
                {item.description}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.restaurantMenuContainer}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              marginBottom: 5,
              paddingLeft: 20,
            }}
          >
            Menu
          </Text>
          {item.dishes.map((dish, index) => (
            <Dishes item={{ ...dish }} key={index} />
          ))}
        </View>
      </ScrollView>
      <CartIcon />
    </Screen>
  );
}

const styles = StyleSheet.create({
  restaurantImage: {
    height: 250,
    width: "auto",
  },
  backButton: {
    position: "absolute",
    top: 60,
    left: 20,
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
    borderRadius: 15,
  },
  restaurantDetailContainer: {
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    backgroundColor: colors.background,
    marginTop: -35,
    padding: 20,
  },
  restaurantMenuContainer: {
    backgroundColor: colors.background,
  },
});

export default Restaurant;
