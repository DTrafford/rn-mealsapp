import React from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import { useSelector } from "react-redux";
import MealList from "../components/MealList";
import DefaulText from "../components/DefaultText";
import Colors from "../constants/colors";

const CategoryMealsScreen = props => {
  const catID = props.navigation.getParam("categoryID");

  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(catID) >= 0
  );

  if (displayedMeals.length <= 0) {
    return (
      <View style={styles.screen}>
        <View style={styles.card}>
          <DefaulText style={styles.text}>
            No Meals Matching Your Current Filters
          </DefaulText>
        </View>
      </View>
    );
  }
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

const styles = StyleSheet.create({
  screen: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  card: {
    width: "90%",
    height: 200,
    backgroundColor: "white",
    justifyContent: "center",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10
  },
  text: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    color: Colors.primary,
    textAlign: "center"
  }
});
