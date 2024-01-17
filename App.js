import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import SignInScreen from "./sourceCode/screens/signInScreens/SignInScreen.js";
import SignUpScreen from "./sourceCode/screens/SignUpScreen.js";
import ConfirmEmailScreen from "./sourceCode/screens/ConfirmEmailScreen.js";
import PasswordResetScreen from "./sourceCode/screens/PasswordResetScreen.js";
import Navigations from "./sourceCode/Navigations.js";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Navigations />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#D9DDDc",
  },
});
