import React, { useLayoutEffect, useState } from "react";
import {
  Button,
  Dimensions,
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Card, Input } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductAdmin from "./ProductAdmin";
import Search from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native-gesture-handler";
import Order from "react-native-vector-icons/Entypo";

const ShopkeeperHome = ({ route, navigation }) => {
  const { user } = route.params;
  const images = [
    require("../images/cart.jpg"),
    require("../images/4._Staggering_of_courses.jpg"),
  ];
  const { width } = Dimensions.get("window");
  const height = width * 0.6;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "OnMart Admin",
      headerTitleStyle: { color: "black" },
      headerStyle: { backgroundColor: "#A3E4D7" },
      headerTintColor: "black",

      headerRight: () => (
        <View style={{ marginRight: 20 }}>
          <TouchableOpacity activeOpacity={0.5}>
            <Order
              name="list"
              size={20}
              onPress={() =>
                navigation.navigate("ShopkeeperOrders", {
                  shoper: user,
                })
              }
            />
          </TouchableOpacity>
        </View>
      ),

      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity activeOpacity={0.5}>
            <Order
              name="log-out"
              size={20}
              onPress={() => navigation.replace("Shopname")}
            />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.searchContainer}>
          <Input
            placeholder="Search"
            type="text"
            leftIcon={<Search name="search" size={20} />}
          />
        </View>
        <View style={styles.sliderContainer}>
          <ScrollView
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ width, height }}
          >
            {images.map((image, index) => (
              <Image
                key={index}
                source={image}
                style={{ width, height, resizeMode: "cover" }}
              />
            ))}
          </ScrollView>
        </View>
        <Card>
          <Button
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
              backgroundColor: "#A3E4D7",
            }}
            title="Add Items"
            onPress={() => navigation.navigate("AddItem", { userName: user })}
          />
        </Card>
        <ProductAdmin shopName={user} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShopkeeperHome;
const styles = StyleSheet.create({
  inputButton: {
    width: 200,
    marginTop: 10,
    padding: 10,
  },
  searchContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    width: 360,
    marginTop: 10,
  },
  sliderContainer: {
    marginTop: -20,
    justifyContent: "center",
    alignItems: "center",
  },
});
