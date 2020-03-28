import React from "react";
// import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoryMealsScreen = props => {
  const catID = props.navigation.getParam("categoryID");

  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catID) >= 0
  );

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam("categoryID");

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title
  };
};

export default CategoryMealsScreen;

// const styles = StyleSheet.create({});
