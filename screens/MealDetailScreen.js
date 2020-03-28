import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
import ListItem from "../components/ListItem";
import Colors from "../constants/colors";
import { toggleFavorite } from "../store/actions/meals";

const MealDetailScreen = props => {
  const availableMeals = useSelector(state => state.meals.meals);
  const mealId = props.navigation.getParam("mealId");
  const isFavorite = useSelector(state =>
    state.meals.favoriteMeals.some(meal => meal.id === mealId)
  );
  const selectedMeal = availableMeals.find(meal => meal.id === mealId);

  const disptach = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    disptach(toggleFavorite(mealId));
  }, [disptach, mealId]);

  // Toggle Effect
  useEffect(() => {
    props.navigation.setParams({
      toggleFav: toggleFavoriteHandler
    });
  }, [toggleFavoriteHandler]);

  // Display Favorite Effect
  useEffect(() => {
    props.navigation.setParams({
      isFavorite: isFavorite
    });
  }, [isFavorite]);

  return (
    <ScrollView>
      <View style={styles.screen}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: selectedMeal.imageUrl
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.details}>
          <DefaultText style={styles.detailsText}>
            {selectedMeal.duration}m
          </DefaultText>
          <DefaultText style={styles.detailsText}>
            {selectedMeal.complexity.toUpperCase()}
          </DefaultText>
          <DefaultText style={styles.detailsText}>
            {selectedMeal.affordability.toUpperCase()}
          </DefaultText>
        </View>
        <View style={styles.card}>
          <DefaultText style={styles.title}>Ingredients</DefaultText>
          {selectedMeal.ingredients.map(ing => (
            <ListItem key={ing}>{ing}</ListItem>
          ))}
        </View>
        <View style={styles.card}>
          <DefaultText style={styles.title}>Steps</DefaultText>
          {selectedMeal.steps.map(step => (
            <ListItem key={step}>{step}</ListItem>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

// Navigation
MealDetailScreen.navigationOptions = navigationData => {
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  const toggleFav = navigationData.navigation.getParam("toggleFav");
  const isFavorite = navigationData.navigation.getParam("isFavorite");

  return {
    headerTitle:
      mealTitle.length < 28
        ? mealTitle
        : mealTitle.substring(0, 28).concat("..."),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName={isFavorite ? "ios-star" : "ios-star-outline"}
          onPress={toggleFav}
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
  },
  imageContainer: {
    width: "100%",
    height: 200
  },
  image: {
    width: "100%",
    height: "100%"
  },
  card: {
    width: "90%",
    backgroundColor: "white",
    justifyContent: "center",
    // alignItems: "center",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: 50,
    backgroundColor: Colors.primary
  },
  detailsText: {
    color: Colors.accent,
    fontFamily: "open-sans-bold"
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    textDecorationLine: "underline",
    marginBottom: 10
  }
});
