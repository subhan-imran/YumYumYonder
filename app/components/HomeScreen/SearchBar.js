import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Search } from "lucide-react-native";

import colors from "../../config/colors";

function SearchBar() {
  const [userInput, setUserInput] = useState("");
  const navigation = useNavigation();
  let data = null;

  const restaurants = [];

  const pressHandler = () => {
    checkData(userInput.toString());
  };

  const checkData = (user) => {
    data = restaurants.find((restaurants) => restaurants.name == user);
    if (data != null) {
      getMemberDetail(navigation);
    } else {
      console.log("Not Found");
    }
  };

  return (
    <View style={styles.inputContainer}>
      <Search color={colors.primary} size={25} />
      <TextInput
        style={styles.input}
        placeholder="Search for Restaurants"
        onChangeText={(text) => {
          setUserInput(text);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.secondary,
    backgroundColor: colors.background,
    borderWidth: 1,
    height: 45,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 50,
    marginHorizontal: 16,
    margin: 10,
  },
  input: {
    width: "100%",
    height: "100%",
    textAlign: "center",
  },
});

export default SearchBar;
