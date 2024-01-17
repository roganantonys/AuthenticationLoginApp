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
import { useNavigation } from "@react-navigation/native";


import Logo from "../../../assets/images/logo.jpg";
import CustomInput from "../../components/CustomInputs/CustomInput";
import CustomButton from "../../components/CustomButton.js";


const SignInScreen = () => {

  const onSignInPressed = () => {
  
    //validations
    navigation.navigate('Home')
  };
  
  const onForgetPasswordPressed = () => {
    
    navigation.navigate('ForgetPassword')
  };
  
  const onFacebookSignInPressed = () => {
   
  };
  
  const onGoogleSignInPressed = () => {
    console.warn("google sign in pressed");
  };
  
  const onSignUpPressed = () => {
    navigation.navigate("SignUp")
  }




  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />
        <CustomInput
          placeholder="enter your name"
          value={userName}
          setValue={setUserName}
        />
        <CustomInput
          placeholder="enter your password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomButton pressing={onSignInPressed} text="SignIn" />
        <CustomButton
          pressing={onForgetPasswordPressed}
          text="Forget Password"
          type="TERTIARY"
        />
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
          pressing={onSignUpPressed}
          text="Don't Have An Account?Create One"
          type="TERTIARY"
        />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  logo: {
    margin: 20,
    width: 300,
  },
});

export default SignInScreen;
