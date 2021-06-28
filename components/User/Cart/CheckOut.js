import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import { Button, Image, Input } from "react-native-elements";
import firebase from "firebase";

const CheckOut = ({ route, navigation }) => {
  const { userOrder } = route.params;
  const { shop } = route.params;
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mob, setMob] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("customer")
      .doc(userOrder)
      .collection("cart")
      .onSnapshot((snapshot) =>
        setCart(snapshot.docs.map((doc) => doc.data()))
      );
  });

  const giveOrder = () => {
    firebase
      .firestore()
      .collection("admin")
      .doc(shop)
      .collection("customerDetail")
      .doc(name)
      .set({
        name: name,
        address: address,
        mobile: mob,
        ownerName: userOrder,
        orderStatus: 0,
      }),
      ord();
  };

  const ord = () => {
    firebase
      .firestore()
      .collection("customer")
      .doc(userOrder)
      .collection("orderStatus")
      .doc(name)
      .set({
        orderName: name,
        orderStatus: false,
        orderAdd: address,
        orderCon: mob,
      }),
      abc();
  };

  const abc = () => {
    {
      cart.map((orders) =>
        // alert(orders.name),
        firebase
          .firestore()
          .collection("admin")
          .doc(shop)
          .collection("customerDetail")
          .doc(name)
          .collection("orderList")
          .doc(orders.name)
          .set({
            name: orders.name,
            brand: orders.brand,
            price: orders.price,
            quantity: orders.quantity,
          })
      );
    }
    status();
  };

  const status = () => {
    {
      cart.map((orders) =>
        // alert(orders.name),
        firebase
          .firestore()
          .collection("customer")
          .doc(userOrder)
          .collection("orderStatus")
          .doc(name)
          .collection("items")
          .doc(orders.name)
          .set({
            name: orders.name,
            brand: orders.brand,
            price: orders.price,
            quantity: orders.quantity,
          })
      );
    }
    deleteCart();
  };

  const deleteCart = () => {
    {
      cart.map((orders) => {
        firebase
          .firestore()
          .collection("customer")
          .doc(userOrder)
          .collection("cart")
          .doc(orders.name)
          .delete();
      });
    }
    alert("Order Placed!!!");
    navigation.replace("Login");
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="dark-theme" />
      <View>
        <Image
          // key={index}
          source={require("../assets/icon1.png")}
          style={{ width: 100, height: 100, marginBottom: 80 }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Enter Full Name"
          autofocus
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Enter Address"
          autofocus
          type="text"
          value={address}
          onChangeText={(text) => setAddress(text)}
        />
        <Input
          placeholder="Enter Mobile No."
          autofocus
          type="text"
          value={mob}
          onChangeText={(text) => setMob(text)}
        />
      </View>
      <Button
        containerStyle={styles.inputButton}
        raised
        title="Place Order"
        onPress={giveOrder}
        buttonStyle={{ backgroundColor: "#A3E4D7" }}
      />
    </KeyboardAvoidingView>
  );
};

export default CheckOut;
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
