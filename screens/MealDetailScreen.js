import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam("mealId");
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return (
    <View style={styles.screen}>
      <Text>Meals screen</Text>
      <Text>Meal ID: {selectedMeal.id}</Text>
      <Text>Meal: {selectedMeal.title}</Text>
    </View>
  );
};

MealDetailScreen.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return {
    headerTitle:
      selectedMeal.title.length < 28
        ? selectedMeal.title
        : selectedMeal.title.substring(0, 28).concat("..."),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Facorite"
          iconName="ios-star-outline"
          onPress={() => {
            console.log("mark as favorite");
          }}
        />
      </HeaderButtons>
    )
  };
};
export default MealDetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
