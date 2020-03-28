import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DefaultText from "./DefaultText";

const ListItem = props => {
  return (
    <DefaultText style={{ ...styles.listItem, ...props.style }}>
      {props.children}
    </DefaultText>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  listItem: {
    textAlign: "left",
    margin: 5,
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10
  }
});
