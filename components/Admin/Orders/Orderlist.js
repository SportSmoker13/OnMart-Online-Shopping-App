import React, { useState } from "react";
import { Text } from "react-native";
import { CheckBox, ListItem } from "react-native-elements";
import Img from "react-native-vector-icons/FontAwesome";

const Orderlist = ({ name, shop, status, enter, add, mob, own }) => {
  const checkedOne = status;

  return (
    <ListItem onPress={() => enter(name, add, mob, own)}>
      <CheckBox name="a" label="Checkbox" checked={checkedOne} />
      <Img name="user-circle-o" size={28} />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800" }}>
          <Text>{name}</Text>
        </ListItem.Title>
      </ListItem.Content>
    </ListItem>
  );
};

export default Orderlist;
