import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { useState } from "react";

const CustomInput = ({value,setValue,placeholder,secureTextEntry}) => {
  
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputStyle}
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#D3D3D3",
    paddingHorizontal: 10,
    margin:5 
  },
  inputStyle: {
    padding: 5,
  },
});
