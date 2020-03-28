import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import Colors from "../constants/colors";
import FilterSwitch from "../components/FilterSwitch";

const FiltersScreen = props => {
  const { navigation } = props;
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegitarian, setIsVegitarian] = useState(false);

  // wrapping save filters in useCallback ensure that
  // saveFilters only updates when the state changes
  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glucoseFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegitarian: isVegitarian
    };
    console.log(appliedFilters);
    return appliedFilters;
  }, [isGlutenFree, isLactoseFree, isVegan, isVegitarian]);

  // Everytime saveFilters is changed it resends the Param "save"
  useEffect(() => {
    // setParams causes the component to rebuild
    navigation.setParams({
      save: saveFilters
    });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Avilable Filters</Text>
      <FilterSwitch
        label="Gluten-Free"
        state={isGlutenFree}
        onChange={newValue => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label="Lactose-Free"
        state={isLactoseFree}
        onChange={newValue => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={newValue => setIsVegan(newValue)}
      />
      <FilterSwitch
        label="Vegitarian"
        state={isVegitarian}
        onChange={newValue => setIsVegitarian(newValue)}
      />
    </View>
  );
};

FiltersScreen.navigationOptions = navData => {
  return {
    headerTitle: "Filter Meals",
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
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={navData.navigation.getParam("save")}
        />
      </HeaderButtons>
    )
  };
};

export default FiltersScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center"
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center"
  }
});
