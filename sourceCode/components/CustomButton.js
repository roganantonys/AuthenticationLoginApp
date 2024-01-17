import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const CustomButton = ({
  pressing,
  text,
  type = "PRIMARY",
  bgColor,
  fgColor,
}) => {
  return (
    <Pressable
      onPress={pressing}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
      ]}>
      <Text
        style={[
          styles.CustomButton,
          styles[`CustomButton_${type}`],
          fgColor ? { color: fgColor } : {},
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    margin: 7,
    width: "100%",

    alignItems: "center",

    padding: 15,
    borderRadius: 5,
  },
  container_PRIMARY: {
    backgroundColor: "#3871F3",
  },

  container_SECONDARY:{
    borderColor:"#3871F3",
    borderWidth:2
  },
  container_TERTIARY: {
    // backgroundColor:"white",
  },
  CustomButton: {
    color: "white",
    fontWeight: "bold",
  },
  CustomButton_SECONDARY:{
    color:"gray"
  },
  CustomButton_TERTIARY: {
    color: "gray",
  },
});
