import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import DefaultText from "./DefaultText";
import Colors from "../constants/colors";

const MealItem = props => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={{ ...styles.row, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: props.item.imageUrl }}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {props.item.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.row, ...styles.mealDetail }}>
            <DefaultText style={styles.detailText}>
              {props.item.duration} min
            </DefaultText>
            <DefaultText style={styles.detailText}>
              {props.item.complexity.toUpperCase()}
            </DefaultText>
            <DefaultText style={styles.detailText}>
              {props.item.affordability.toUpperCase()}
            </DefaultText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#ebebeb",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10
  },
  row: { flexDirection: "row" },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end"
  },
  mealHeader: {
    height: "85%"
  },
  titleContainer: {
    paddingVertical: 5,
    paddingHorizontal: 12,
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: "white"
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
    backgroundColor: Colors.primary
  },
  detailText: {
    color: Colors.accent
  }
});
