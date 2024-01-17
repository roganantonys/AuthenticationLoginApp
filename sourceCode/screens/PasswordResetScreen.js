import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import { useState } from "react";

import CustomInput from "../components/CustomInputs/CustomInput.js";
import CustomButton from "../components/CustomButton.js";
import { useNavigation } from "@react-navigation/native";

const PasswordResetScreen = () => {
  const onSendPressed = () => {
    navigation.navigate("NewPassword");
  };

  const onSignInPressed = () => {
    navigation.navigate("SignIn");
  };

  const navigation = useNavigation();
  const [userName, setUserName] = useState("");

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Reset Your Password</Text>
        <CustomInput
          placeholder="Enter your userName"
          value={userName}
          setValue={setUserName}
        />

        <CustomButton pressing={onSendPressed} text="Send" />

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

export default PasswordResetScreen;
