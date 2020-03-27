import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = props => {
  const renderGridItem = itemData => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryID: itemData.item.id
            }
          });
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={(item, index) => item.id}
        numColumns={2}
        data={CATEGORIES}
        renderItem={renderGridItem}
      />
    </View>
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories"
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center"
  }
});
