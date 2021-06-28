import React, { useLayoutEffect } from "react";
import { RefreshControl, StyleSheet, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Pay from "react-native-vector-icons/MaterialIcons";
import CartProduct from "./CartProduct";
import { SafeAreaView } from "react-native-safe-area-context";

let shop = "";
let user = "";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const Cart = ({ route, navigation }) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(4000).then(() => navigation.navigate("Cart"), setRefreshing(false));
  }, []);

  const { shoper } = route.params;
  const { userName } = route.params;

  user = userName;
  shop = shoper;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Cart",
      headerTitleStyle: { color: "black" },
      headerStyle: { backgroundColor: "#A3E4D7" },
      headerTintColor: "black",
      headerRight: () => (
        <View style={{ marginRight: 20 }}>
          <TouchableOpacity activeOpacity={0.5}>
            <Pay
              name="payment"
              size={20}
              onPress={() =>
                navigation.navigate("CheckOut", {
                  userOrder: user,
                  shop: shop,
                })
              }
            />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <CartProduct user={user} shop={shoper} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cart;
const styles = StyleSheet.create({
  text: {
    alignItems: "center",
    color: "grey",
    flex: 1,
    justifyContent: "center",
    padding: 15,
    backgroundColor: "white",
  },
});
