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

import CustomInput from "../../components/CustomInputs/CustomInput.js";
import CustomButton from "../../components/CustomButton.js";
import { useNavigation } from "@react-navigation/native";


const NewPassword = () => {

    const onSubmitPressed = () => {
        navigation.navigate("Home")
      };
      
      const onSignInPressed = () => {
        navigation.navigate("SignIn")
      };
   const navigation = useNavigation();   
  const [code, setCode] = useState("");
  const [NewPassword, setNewPassword] = useState("");

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Reset Your Password</Text>
        <CustomInput placeholder="Code" value={code} setValue={setCode} />

        <CustomInput
          placeholder="enter your new password"
          value={NewPassword}
          setValue={setNewPassword}
        />

        <CustomButton pressing={onSubmitPressed} text="Submit" />
        
        <CustomButton
          text="Back To SignIn"
          pressing={onSignInPressed}
          type="TERTIARY"
        />
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

export default NewPassword;
