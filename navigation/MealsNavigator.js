import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createAppContainer } from "react-navigation";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/Favorites";
import Colors from "../constants/colors";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: {
      screen: CategoryMealsScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primary : ""
        },
        headerTintColor: Platform.OS === "android" ? "white" : Colors.primary
      }
    },
    MealDetail: MealDetailScreen
  },
  {
    initialRouteName: "Categories", //not needed just here for reference
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : ""
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary
    }
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons
            name="ios-restaurant"
            size={30}
            // style={{ marginTop: 10 }}
            color={tabInfo.tintColor}
          />
        );
      }
      // tabBarColor: Colors.accent
    }
  },
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: {
      // tabBarLabel: "TEST",
      tabBarIcon: tabInfo => {
        return (
          <Ionicons
            name="ios-star"
            size={22}
            color={tabInfo.tintColor}
            // style={{ marginTop: 10 }}
          />
        );
      }
      // tabBarColor: "#FF0000"
    }
  }
};
const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: Colors.primary,
        shifting: true,
        barStyle: {
          backgroundColor: Colors.primary
        }
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.primary
        }
      });

export default createAppContainer(MealsFavTabNavigator);
