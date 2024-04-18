import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  Pressable,
} from "react-native";

import { categories } from "../../data";
import colors from "../../config/colors";

function Categories() {
  const [foodCategory, setFoodCategory] = useState(null);
  const [isPress, setIsPress] = useState(false);

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
          let btnClass = isActive ? "" : "";
          let textClass = isActive ? "" : "";
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
              <Pressable
                onPress={() => setFoodCategory(category.id)}
                style={styles.categoryFood}
              >
                <Image
                  style={{ width: 45, height: 45 }}
                  source={category.image}
                />
              </Pressable>
              <Text style={textClass}>{category.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryFood: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: colors.category,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Categories;
