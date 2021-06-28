import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ListItem, CheckBox } from "react-native-elements";
import Img from "react-native-vector-icons/MaterialIcons";

const Item = ({ name, brand, quantity, price }) => {
  const [checkedOne, setCheckedOne] = useState(false);
  const updateOne = () => setCheckedOne(!checkedOne);

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
          {/* <Text>Total Items: </Text> */}
        </ListItem.Subtitle>
      </ListItem.Content>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <CheckBox
          name="a"
          label="Checkbox"
          checked={checkedOne}
          onPress={updateOne}
        />
      </View>
    </ListItem>
  );
};

export default Item;

const styles = StyleSheet.create({});
