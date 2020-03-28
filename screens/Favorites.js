import React from "react";
import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import MealList from "../components/MealList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import DefaulText from "../components/DefaultText";
import Colors from "../constants/colors";

const Favorites = props => {
  const favMeals = useSelector(state => state.meals.favoriteMeals);

  if (favMeals.length <= 0) {
    return (
      <View style={styles.screen}>
        <View style={styles.card}>
          <DefaulText style={styles.text}>
            You Have No Favorites Yet!
          </DefaulText>
        </View>
      </View>
    );
  }
  return <MealList listData={favMeals} navigation={props.navigation} />;
};

Favorites.navigationOptions = navData => {
  return {
    headerTitle: "Your Favorites",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};

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
export default Favorites;
