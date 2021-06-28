import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Image, Input, Button } from "react-native-elements";
import firebase from "firebase";
require("firebase/firestore");

const Shopkeeper = ({ navigation }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    firebase
      .firestore()
      .collection("admin")
      .doc(name)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          if (password === snapshot.data().password) {
            navigation.replace("ShopkeeperHome", { user: name });
          } else {
            alert("Entered Wrong Password!!!");
          }
        } else {
          alert("Invalid User");
        }
      });
  };

  return (
    <KeyboardAvoidingView behaviour="padding" style={styles.container}>
      <StatusBar styles="dark-theme" />
      <View>
        <Image
          source={require("../assets/icon1.png")}
          style={{ width: 100, height: 100, marginBottom: 80 }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Enter Shop Name"
          autofocus
          type="name"
          value={name}
          onChangeText={(text) => setName(text)}
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
        title="ShopkeeperRegister"
        onPress={() => navigation.navigate("ShopkeeperRegister")}
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
export default Shopkeeper;
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
});
