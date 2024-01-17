import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import { useState } from "react";

import CustomInput from "../components/CustomInputs/CustomInput.js";
import CustomButton from "../components/CustomButton.js";
import { useNavigation } from "@react-navigation/native";



const ConfirmEmailScreen = () => {

    const onConfirmPressed = () => {
        navigation.navigate("Home")
      };
      
      const onResetPressed = () => {
          console.warn("reset pressed")
      };
      const onSignInPressed = () => {
       navigation.navigate("SignIn")
      };

    const navigation = useNavigation()  
    const [code, setCode] = useState("");


  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Confirm Your Email</Text>
        <CustomInput
          placeholder="Enter your Confirmation Code"
          value={code}
          setValue={setCode}
        />

        <CustomButton pressing={onConfirmPressed} text="Confirm" />
        <CustomButton text="reset the code" pressing={onResetPressed} type="SECONDARY" />
        <CustomButton text="Back To SignIn" pressing={onSignInPressed} type="TERTIARY"/>

      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
    alignItems: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051C60",
    marginVertical: 20,
  },
});

export default ConfirmEmailScreen;
