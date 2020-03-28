import React, { useState } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";
import Colors from "../constants/colors";

const FilterSwitch = props => {
  //   const [isActive, setIsActive] = useState(false);
  return (
    <View style={styles.filterContainer}>
      <Text style={styles.filterLabel}>{props.label}</Text>
      <Switch
        value={props.state}
        onValueChange={props.onChange}
        trackColor={{ true: Colors.primary }}
        thumbColor={Colors.accent}
      />
    </View>
  );
};

export default FilterSwitch;

const styles = StyleSheet.create({
  filterContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20
  },
  filterLabel: {
    fontFamily: "open-sans",
    fontSize: 18
  }
});
