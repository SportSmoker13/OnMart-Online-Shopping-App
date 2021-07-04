import React, { Component, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  StatusBar,
} from "react-native";
import firebase from "firebase";
import { Button, Input } from "react-native-elements";
require("firebase/firestore");
require("firebase/firebase-storage");

let childPath = "";

export default function Uploaddetail({ route, navigation }) {
  const { user } = route.params;
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [itemBrand, setItemBrand] = useState("");
  const { image } = route.params;

  const uploadImage = async () => {
    childPath = `post/${user}/${Math.random().toString(36)}`;
    console.log(childPath);

    const response = await fetch(image);
    const blob = await response.blob();

    const task = firebase.storage().ref().child(childPath).put(blob);

    const taskProgress = (snapshot) => {
      // alert(`transferred: ${snapshot.bytesTransferred}`)
    };

    const taskCompleted = () => {
      task.snapshot.ref.getDownloadURL().then((snapshot) => {
        addItem(snapshot);
        savePostData(snapshot);
      });
    };

    const taskError = (snapshot) => {
      alert(snapshot);
    };

    task.on("state_changed", taskProgress, taskError, taskCompleted);
  };

  const addItem = (url) => {
    firebase
      .firestore()
      .collection("admin")
      .doc(user)
      .collection("items")
      .doc(itemName)
      .set({
        name: itemName,
        price: itemPrice,
        quantity: itemQuantity,
        brand: itemBrand,
        path: url,
      })
      .then(alert("Item Added"));
  };
  return (
    <View style={{ flex: 1 }}>
      <Image source={{ uri: image }} />
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <StatusBar style="dark-theme" />
        <View>
          <Image
            // key={index}
            source={require("../../../assets/icon1.png")}
            style={{ width: 100, height: 100, marginBottom: 80 }}
          />
        </View>
        <View style={styles.inputContainer}>
          <Input
            placeholder="Enter Item Name"
            autofocus
            type="text"
            value={itemName}
            onChangeText={(text) => setItemName(text)}
          />
          <Input
            placeholder="Enter Price"
            type="tel"
            value={itemPrice}
            onChangeText={(text) => setItemPrice(text)}
          />
          <Input
            placeholder="Enter Quantity"
            type="text"
            value={itemQuantity}
            onChangeText={(text) => setItemQuantity(text)}
          />
          <Input
            placeholder="Enter Brand"
            type="text"
            value={itemBrand}
            onChangeText={(text) => setItemBrand(text)}
          />
        </View>
        <Button
          containerStyle={styles.inputButton}
          raised
          title="Upload"
          onPress={() => uploadImage()}
          buttonStyle={{ backgroundColor: "#A3E4D7" }}
        />
        <Button
          buttonStyle={{
            borderRadius: 30,
            width: 240,
            marginLeft: 40,
            marginTop: 30,
            marginRight: 40,
            marginBottom: 18,
            backgroundColor: "black",
          }}
          title="Back To HomePage"
          onPress={() => navigation.replace("ShopkeeperHome", { user: user })}
        />
      </KeyboardAvoidingView>
    </View>
  );
}

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
