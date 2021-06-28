import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import firebase from "firebase";
import { Tile } from "react-native-elements";
import StatusItem from "./StatusItem";

let ordStatus = "";

const StatusContents = ({ route, navigation }) => {
  const { name, address, mobile, owner, status } = route.params;
  const [order, setOrder] = useState([]);

  if (status) {
    ordStatus = "Order Delivered!!!";
  } else {
    ordStatus = "Order On The Way!!!";
  }

  useEffect(() => {
    firebase
      .firestore()
      .collection("customer")
      .doc(owner)
      .collection("orderStatus")
      .doc(name)
      .collection("items")
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
                Order Status: {ordStatus}
                {"\n"}
              </Text>
            }
          />
          ]{" "}
        </View>

        {order.map((list) => (
          <StatusItem
            name={list.name}
            brand={list.brand}
            quantity={list.quantity}
            price={list.price}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default StatusContents;

const styles = StyleSheet.create({});
