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


const SignUpScreen = () => {

  const onRegisterPressed = () => {
   navigation.navigate("ConfirmEmail")
  };
  
  const onFacebookSignInPressed = () => {
    console.warn("facebook sign in pressed");
  };
  
  const onGoogleSignInPressed = () => {
    console.warn("google sign in pressed");
  };
  
  const onSignInPressed = () => {
    navigation.navigate("SignIn")
  };
  const onPrivacyPolicyPressed = () => {
    console.warn("privacyClicked");
  };
  const onTermsOfUsePressed = () => {
    console.warn("onTermsOfUsePressed");
  };

  const navigation = useNavigation();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Create An Account</Text>
        <CustomInput
          placeholder="enter your name"
          value={userName}
          setValue={setUserName}
        />
        <CustomInput
          placeholder="enter your email"
          value={email}
          setValue={setEmail}
        />
        <CustomInput
          placeholder="enter your password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomInput
          placeholder="retype your password"
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry={true}
        />
        <CustomButton pressing={onRegisterPressed} text="Register" />
        <Text style={styles.text}>
          By registering,You confirms our{" "}
          <Text style={styles.link} onPress={onPrivacyPolicyPressed}>
            privacy policy
          </Text>{" "}
          and{" "}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            terms of use
          </Text>
        </Text>
        <CustomButton
          pressing={onFacebookSignInPressed}
          text="SignIn With facebook"
          bgColor="#E7EAF4"
          fgColor="#4765A9"
        />
        <CustomButton
          pressing={onGoogleSignInPressed}
          text="SignIn With Google"
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
        />
        <CustomButton
          pressing={onSignInPressed}
          text="Have An Account? SignIn"
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
  text: {
    color: "gray",
    marginVertical: 10,
  },
  link: {
    color: "#FDB075",
  },
});

export default SignUpScreen;
