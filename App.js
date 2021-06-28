import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./components/User/auth/Login";
import Register from "./components/User/auth/Register";
import Home from "./components/User/Home";
import Cart from "./components/User/Cart/Cart";
import ShopkeeperHome from "./components/Admin/ShopkeeperHome";
import AddItem from "./components/Admin/AddItems/AddItem";
import Shopkeeper from "./components/Admin/auth/Shopkeeper";
import ShopkeeperRegister from "./components/Admin/auth/ShopkeeperRegister";
import Shopname from "./components/User/Shopname";
import CheckOut from "./components/User/Cart/CheckOut";
import ShopkeeperOrders from "./components/Admin/Orders/ShopkeeperOrders";
import CustomerOrder from "./components/Admin/Orders/CustomerOrder";
import OrderContents from "./components/Admin/Orders/OrderContents";
import Orderlist from "./components/Admin/Orders/Orderlist";
import OrderList1 from "./components/User/Orders/OrderList1";
import SignOut from "./components/User/auth/SignOut";
import Uploaddetail from "./components/Admin/AddItems/Uploaddetail";
import StatusContents from "./components/User/Orders/StatusContents";

export default function App() {
  const Stack = createStackNavigator();

  const globalScreenOptions = {
    headerStyle: { backgroundColor: "#A3E4D7" },
    headerTitleStyle: { color: "black" },
    headerTextColor: "black",
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen
          options={{
            title: "Let's Sign In",
            headerTitleStyle: { alignSelf: "center" },
          }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Register"
          options={{
            title: "Register",
            headerTitleStyle: { alignSelf: "center" },
          }}
          component={Register}
        />
        <Stack.Screen
          options={{ title: "", headerTitleStyle: { alignSelf: "center" } }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{ title: "Cart", headerTitleStyle: { alignSelf: "center" } }}
          name="Cart"
          component={Cart}
        />
        <Stack.Screen
          options={{ title: "", headerTitleStyle: { alignSelf: "center" } }}
          name="Shopkeeper"
          component={Shopkeeper}
        />
        <Stack.Screen
          options={{ title: "", headerTitleStyle: { alignSelf: "center" } }}
          name="ShopkeeperHome"
          component={ShopkeeperHome}
        />
        <Stack.Screen
          options={{ title: "", headerTitleStyle: { alignSelf: "center" } }}
          name="ShopkeeperRegister"
          component={ShopkeeperRegister}
        />
        <Stack.Screen
          options={{ title: "", headerTitleStyle: { alignSelf: "center" } }}
          name="AddItem"
          component={AddItem}
        />
        <Stack.Screen
          options={{
            title: "Enter Shop Name",
            headerTitleStyle: { alignSelf: "center" },
          }}
          name="Shopname"
          component={Shopname}
        />
        <Stack.Screen
          options={{
            title: "Check Out",
            headerTitleStyle: { alignSelf: "center" },
          }}
          name="CheckOut"
          component={CheckOut}
        />
        <Stack.Screen
          options={{ title: "Orders" }}
          name="ShopkeeperOrders"
          component={ShopkeeperOrders}
        />
        <Stack.Screen
          options={{ title: "Customer" }}
          name="CustomerOrder"
          component={CustomerOrder}
        />
        <Stack.Screen
          options={{ title: "" }}
          name="Orderlist"
          component={Orderlist}
        />
        <Stack.Screen
          options={{ title: "" }}
          name="OrderList1"
          component={OrderList1}
        />
        <Stack.Screen
          options={{ title: "Order Contents" }}
          name="OrderContents"
          component={OrderContents}
        />
        <Stack.Screen
          options={{ title: "Upload Details" }}
          name="Uploaddetail"
          component={Uploaddetail}
        />
        <Stack.Screen
          options={{ title: "Order Details" }}
          name="StatusContents"
          component={StatusContents}
        />
        <Stack.Screen
          options={{ title: "" }}
          name="SignOut"
          component={SignOut}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
