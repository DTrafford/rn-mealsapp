import React from "react";
import { Platform, Text } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/Favorites";
import FiltersScreen from "../screens/FiltersScreen";
import Colors from "../constants/colors";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

// STACK NAVIGATORS *************

// OPTIONS
const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : ""
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold"
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans"
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary
};

// NAVIGATORS
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
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const FavoritesNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const FilterNavigator = createStackNavigator(
  {
    Filters: FiltersScreen
  },
  {
    // navigationOptions: {
    //   drawerLabel: "FILTERS!!"
    // },
    defaultNavigationOptions: defaultStackNavOptions
  }
);

// TAB NAVIGATORS *************

// OPTIONS
const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-restaurant" size={30} color={tabInfo.tintColor} />
        );
      },
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}>Meals</Text>
        ) : (
          "Meals"
        )
      // tabBarColor: Colors.accent
    }
  },
  Favorites: {
    screen: FavoritesNavigator,
    navigationOptions: {
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}>Favorites</Text>
        ) : (
          "Favorites"
        ),
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-star" size={22} color={tabInfo.tintColor} />;
      }
      // tabBarColor: "#FF0000"
    }
  }
};

// NAVIGATOR
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
          activeTintColor: Colors.primary,
          labelStyle: {
            fontFamily: "open-sans-bold"
          }
        }
      });

// DRAWER NAVIGATOR *************
const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: "Meals"
      }
    },
    Filters: FilterNavigator
  },
  {
    contentOptions: {
      activeTintColor: Colors.primary,
      labelStyle: {
        fontFamily: "open-sans-bold",
        fontSize: 18
      }
    }
  }
);

export default createAppContainer(MainNavigator);
