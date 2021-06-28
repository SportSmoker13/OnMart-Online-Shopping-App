import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ListItem } from "react-native-elements";
import Img from "react-native-vector-icons/MaterialIcons";

const Item = ({ name, brand, quantity, price }) => {
  return (
    <ListItem>
      <Img name="local-grocery-store" size={28} />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800" }}>
          <Text>{name}</Text>
        </ListItem.Title>

        <ListItem.Subtitle>
          <Text>
            Item Brand: {brand}
            {"\n"}
            Item Quantity: {quantity}
            {"\n"}
            Item Price: {price}{" "}
          </Text>
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default Item;

const styles = StyleSheet.create({});
