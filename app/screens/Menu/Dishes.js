import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Plus, Minus } from "lucide-react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectCartItemsById,
} from "../../../slices/cartSlice";

import colors from "../../config/colors";

function Dishes({ item }) {
  const dispatch = useDispatch();
  const totalItems = useSelector((state) =>
    selectCartItemsById(state, item.id)
  );
  const handleIncrease = () => {
    dispatch(addToCart({ ...item }));
  };
  const handleDecrease = () => {
    dispatch(removeFromCart({ id: item.id }));
  };
  return (
    <View style={styles.dishContainer}>
      <StatusBar style="light" />
      <Image source={item.image} style={styles.dishImage} />
      <View style={styles.dishDescription}>
        <View style={{ marginBottom: 10 }}>
          <Text
            style={{ fontSize: 20, color: colors.text, fontWeight: "bold" }}
          >
            {item.name}
          </Text>
          <Text style={{ fontSize: 12, color: colors.subText }}>
            {item.description}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>
              $ {item.price}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={handleDecrease}
              disabled={!totalItems.length}
              style={styles.dishCountButton}
            >
              <Minus color={colors.background} />
            </TouchableOpacity>
            <Text style={{ fontSize: 15 }}>{totalItems.length}</Text>
            <TouchableOpacity
              onPress={handleIncrease}
              style={styles.dishCountButton}
            >
              <Plus color={colors.background} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dishContainer: {
    alignItems: "center",
    flexDirection: "row",
    margin: 10,
    marginBottom: 3,
    padding: 7,
    borderRadius: 20,
    backgroundColor: colors.card,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 2,
  },
  dishImage: {
    height: 100,
    width: 100,
    marginLeft: 2,
    borderRadius: 20,
  },
  dishDescription: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 10,
  },
  dishCountButton: {
    height: 30,
    width: 30,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 15,
  },
});

export default Dishes;
