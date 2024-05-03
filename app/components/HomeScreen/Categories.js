import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
} from "react-native";

import { categories } from "../../data";
import colors from "../../config/colors";

function Categories() {
  const [foodCategory, setFoodCategory] = useState(null);
  const [isPress, setIsPress] = useState(false);
  const touchProps = {
    activeOpacity: 1,
    underlayColor: colors.category,
    style: isPress ? styles.btPress : styles.btnNormal,
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
  };
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginLeft: 5 }}
      >
        {categories.map((category, index) => {
          let isActive = category.id == foodCategory;
          return (
            <View
              key={index}
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 5,
                paddingHorizontal: 10,
              }}
            >
              <TouchableHighlight
                {...touchProps}
                onPress={() => setFoodCategory(category.id)}
              >
                <Image
                  style={{ width: 45, height: 45 }}
                  source={category.image}
                />
              </TouchableHighlight>
              <Text>{category.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryNormal: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: colors.category,
    alignItems: "center",
    justifyContent: "center",
  },
  categorySelected: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: colors.categorySelected,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Categories;
