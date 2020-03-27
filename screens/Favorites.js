import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Favorites = () => {
  return (
    <View style={styles.screen}>
      <Text>FavoritesScreen</Text>
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
