import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft, Minus } from "lucide-react-native";

import { useSelector } from "react-redux";
import { selectRestaurant } from "../../slices/restaurantSlice";
import { selectCartItems, selectCartTotal } from "../../slices/cartSlice";

import colors from "../config/colors";
import Screen from "../components/Screen";

function Cart() {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const [groupedItems, setGroupedItems] = useState({});

  useEffect(() => {
    const items = cartItems.reduce((group, item) => {}, {});
    //setGroupedItems(items);
  }, [cartItems]);

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
        <Text style={{ flexDirection: "row", flexWrap: "wrap", margin: 10 }}>
          Delivery in 20 - 30 minutes
        </Text>
        <TouchableOpacity>
          <Text style={{ color: colors.primary, fontWeight: "bold" }}>
            Change
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, marginTop: 10 }}
      >
        {Object.entries(groupedItems).map(([key, items]) => {
          let dish = items[0];
          return (
            <View key={key} style={styles.itemContainer}>
              <Text
                style={{
                  fontSize: 17,
                  marginRight: 10,
                  fontWeight: "bold",
                  color: colors.primary,
                }}
              >
                {items.length} x
              </Text>
              <Image
                source={dish.image}
                style={{
                  height: 70,
                  width: 70,
                  borderRadius: 50,
                  marginRight: 10,
                }}
              />
              <Text
                style={{ fontSize: 17, fontWeight: "bold", marginRight: 110 }}
              >
                {dish.name}
              </Text>
              <Text
                style={{ fontSize: 17, fontWeight: "bold", marginRight: 15 }}
              >
                ${dish.price}
              </Text>
              <TouchableOpacity
                style={{
                  height: 25,
                  width: 25,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: colors.primary,
                  borderRadius: 15,
                }}
              >
                <Minus color={colors.background} size={20} />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.totalContainer}>
        <View style={styles.totalDetail}>
          <Text style={{ color: colors.subText, fontSize: 15 }}>Subtotal</Text>
          <Text style={{ color: colors.subText, fontSize: 15 }}>$20</Text>
        </View>
        <View style={styles.totalDetail}>
          <Text style={{ color: colors.subText, fontSize: 15 }}>
            Delivery Fee
          </Text>
          <Text style={{ color: colors.subText, fontSize: 15 }}>$5</Text>
        </View>
        <View style={styles.totalDetail}>
          <Text
            style={{ color: colors.text, fontSize: 15, fontWeight: "bold" }}
          >
            Total
          </Text>
          <Text
            style={{ color: colors.text, fontSize: 15, fontWeight: "bold" }}
          >
            $25
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Order Placed")}
            style={{
              borderRadius: 25,
              padding: 15,
              alignItems: "center",
              backgroundColor: colors.primary,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: colors.background,
              }}
            >
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
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
  itemContainer: {
    margin: 10,
    marginBottom: 5,
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 25,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.card,
  },
  totalContainer: {
    padding: 25,
    borderRadius: 25,
    backgroundColor: colors.primaryLight,
  },
  totalDetail: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 20,
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
