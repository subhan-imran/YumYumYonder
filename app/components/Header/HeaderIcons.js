import React from "react";
import { Heart, Shopping } from "lucide-react-native";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import colors from "../../config/colors";

const navigation = useNavigation();

function HeaderIcons() {
  return (
    <View>
      <Heart
        color={colors.secondary}
        size={20}
        onPress={() => {
          navigation.navigate("Favorite");
        }}
      />
      <Shopping color={colors.secondary} />
    </View>
  );
}

export default HeaderIcons;
