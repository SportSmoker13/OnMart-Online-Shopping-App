import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import firebase from "firebase";
import { Button, Tile } from "react-native-elements";
import Item from "./Item";

const OrderContents = ({ route, navigation }) => {
  const { name, shopName, address, mobile, owner } = route.params;
  const [order, setOrder] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("admin")
      .doc(shopName)
      .collection("customerDetail")
      .doc(name)
      .collection("orderList")
      .onSnapshot((snapshot) =>
        setOrder(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  return (
    <ScrollView>
      <View>
        <View>
          <Tile
            title={<Text>{name}</Text>}
            featured
            caption={
              <Text>
                {"\n"}
                Address: {address}
                {"\n"}
                Mobile No.: {mobile}
                {"\n"}
              </Text>
            }
          />
        </View>

        {order.map((list) => (
          <Item
            name={list.name}
            brand={list.brand}
            quantity={list.quantity}
            price={list.price}
          />
        ))}
      </View>
      <View></View>
      <Button
        buttonStyle={{
          borderRadius: 30,
          marginLeft: 18,
          marginTop: 18,
          marginRight: 18,
          marginBottom: 18,
          backgroundColor: "black",
        }}
        title="Deliver Order"
        onPress={() => {
          firebase
            .firestore()
            .collection("admin")
            .doc(shopName)
            .collection("customerDetail")
            .doc(name)
            .update({
              orderStatus: 1,
            });
          firebase
            .firestore()
            .collection("customer")
            .doc(owner)
            .collection("orderStatus")
            .doc(name)
            .update({
              orderStatus: 1,
            });
          navigation.navigate("ShopkeeperOrders");
        }}
      />
      <View></View>
    </ScrollView>
  );
};

export default OrderContents;

const styles = StyleSheet.create({});
