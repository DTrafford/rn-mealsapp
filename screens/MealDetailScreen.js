import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
import ListItem from "../components/ListItem";
import Colors from "../constants/colors";
import { Entypo } from "@expo/vector-icons";

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam("mealId");
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return (
    <ScrollView>
      <View style={styles.screen}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
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
            <ListItem key={ing}>
              {/* <Entypo name="dot-single" size={15} /> */}
              {ing}
            </ListItem>
          ))}
        </View>
        <View style={styles.card}>
          <DefaultText style={styles.title}>Steps</DefaultText>
          {selectedMeal.steps.map(step => (
            <ListItem key={step}>
              {/* <Entypo name="dot-single" size={15} /> */}
              {step}
            </ListItem>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

// Navigation
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
          title="Favorite"
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
