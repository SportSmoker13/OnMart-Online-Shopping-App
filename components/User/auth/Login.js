import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import { Input, Button, Image } from "react-native-elements";
import { auth } from "../../../firebase";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = "";

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("Shopname");
      }
    });
    return unsubscribe;
  }, []);

  const signIn = async () => {
    const state = await auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));
    setLogin(state);
    if (login) {
      return (
        <View style={[styles.container1, styles.horizontal]}>
          <ActivityIndicator />
          <ActivityIndicator size="large" />
          <ActivityIndicator size="small" color="#0000ff" />
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      );
    }
  };

  return (
    <KeyboardAvoidingView behaviour="padding" style={styles.container}>
      <StatusBar styles="dark-theme" />
      <View>
        <Image
          // key={index}
          source={require("../assets/icon1.png")}
          style={{ width: 100, height: 100, marginBottom: 80 }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Enter Email"
          autofocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Enter Password"
          type="password"
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <Button
        containerStyle={styles.inputButton}
        title="Login"
        onPress={signIn}
        buttonStyle={{ backgroundColor: "#A3E4D7" }}
      />
      <Button
        containerStyle={styles.inputButton}
        title="Register"
        onPress={() => navigation.navigate("Register")}
        type="outline"
        buttonStyle={{
          borderColor: "#A3E4D7",
        }}
        titleStyle={{
          color: "#A3E4D7",
        }}
      />
    </KeyboardAvoidingView>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    width: 300,
  },
  inputButton: {
    width: 200,
    marginTop: 10,
  },
  container1: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
