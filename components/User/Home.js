// import React, { useEffect, useLayoutEffect, useState } from "react";
// import {
//   Dimensions,
//   Image,
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   View,
// } from "react-native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import Cart from "./Cart/Cart";
// import About from "./About";
// import Menu from "react-native-vector-icons/Entypo";
// import { TouchableOpacity } from "react-native-gesture-handler";
// import { Input } from "react-native-elements";
// import Search from "react-native-vector-icons/FontAwesome";
// import CustomDrawer from "../CustomDrawer";
// import Product from "./Product";
// import { auth } from "../firebase";
// import Shopkeeper from "../Admin/auth/Shopkeeper";
// import OrderStatus from "./Orders/OrderStatus";
// import { Text } from "react-native-elements";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import HomeIcon from "react-native-vector-icons/Entypo";
// import SettingIcon from "react-native-vector-icons/Feather";

// let shop = "";
// let user = "";

// function HomeScreen() {
//   const images = [
//     require("../../images/cart.jpg"),
//     require("../../images/4._Staggering_of_courses.jpg"),
//   ];
//   const { width } = Dimensions.get("window");
//   const height = width * 0.6;

//   const [currentUser, setCurrentUser] = useState([]);
//   const [search, setSearch] = useState([]);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((authUser) => {
//       setCurrentUser(authUser);
//     });

//   return unsubscribe;
// }, []);
//   return (
//     <SafeAreaView>
//       <ScrollView>
//         <View style={styles.searchContainer}>
//           <Input
//             placeholder="Search"
//             type="text"
//             value={search}
//             onChange={() => search(search)}
//             leftIcon={<Search name="search" size={20} />}
//           />
//         </View>

//         <View style={styles.sliderContainer}>
//           <ScrollView
//             pagingEnabled
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             style={{ width, height }}
//           >
//             {images.map((image, index) => (
//               <Image
//                 key={index}
//                 source={image}
//                 style={{ width, height, resizeMode: "cover" }}
//               />
//             ))}
//           </ScrollView>
//         </View>
//         <Text h4 style={styles.text}>
//           Groceries :
//         </Text>
//         <Product userName={currentUser.displayName} shopName={shop} />
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// // const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();

// export default function Home({ route, navigation }) {
//   const [currentUser, setCurrentUser] = useState([]);

//   const { shopName } = route.params;
//   shop = shopName;
// useEffect(() => {
//   const unsubscribe = auth.onAuthStateChanged((authUser) => {
//     setCurrentUser(authUser);
//   });

//     return unsubscribe;
//   }, []);
//   user = currentUser.displayName;

//   useLayoutEffect(() => {
//     navigation.setOptions({
//       title: "OnMart",
//       headerTitleStyle: { color: "black" },
//       headerStyle: { backgroundColor: "#A3E4D7" },
//       headerTintColor: "black",
//       headerLeft: () => (
//         <View style={{ marginLeft: 20 }}>
//           <TouchableOpacity activeOpacity={0.5}>
//             <Menu
//               name="user"
//               size={20}
//               onPress={() => navigation.replace("SignOut")}
//             />
//           </TouchableOpacity>
//         </View>
//       ),
//       headerRight: () => (
//         <View style={{ marginRight: 20 }}>
//           <TouchableOpacity activeOpacity={0.5}>
//             <Menu
//               name="shopping-cart"
//               size={20}
// onPress={() =>
//   navigation.navigate("Cart", {
//     shoper: shopName,
//     userName: user,
//   })
//               }
//             />
//           </TouchableOpacity>
//         </View>
//       ),
//     });
//   }, []);

//   return (
//     //   <Drawer.Navigator
//     //     initialRouteName="Home"
//     //     drawerContent={(props) => <CustomDrawer {...props} />}
//     //   >
//     //     <Drawer.Screen name="Home" component={HomeScreen} />
//     //     <Drawer.Screen name="Cart" component={Cart} />
//     //     <Drawer.Screen name="About" component={About} />
//     //     <Drawer.Screen name="Order Status" component={OrderStatus} />
//     //     <Drawer.Screen
//     //       style={styles.bottom}
//     //       name="Shopkeeper Login"
//     //       component={Shopkeeper}
//     //     />
//     //   </Drawer.Navigator>

// <Tab.Navigator
//   initialRouteName="HomeScreen"
//   tabBarOptions={{
//     activeTintColor: "#A3E4D7",
//     labelStyle: {
//       fontSize: 0,
//       margin: 0,
//       padding: 0,
//     }
//   }}
// >
//   <Tab.Screen
//     name="Homecreen"
//     component={HomeScreen}
//     options={{
//       tabBarLabel: "HomeScreen",
//       tabBarIcon: ({ color, size }) => (
//         <HomeIcon name="home" color={color} size={size} />
//       ),
//     }}
//   />
//   <Tab.Screen
//     name="About"
//     component={About}
//     options={{
//       tabBarLabel: "About",
//       tabBarIcon: ({ color, size }) => (
//         <HomeIcon name="map" color={color} size={size} />
//       ),
//     }}
//   />
//   <Tab.Screen
//     name="Order Status"
//     component={OrderStatus}
//     options={{
//       tabBarLabel: "OrderStatus",
//       tabBarIcon: ({ color, size }) => (
//         <HomeIcon name="shopping-bag" color={color} size={size} />
//       ),
//     }}
//   />
//   <Tab.Screen
//     name="Settings"
//     component={OrderStatus}
//     options={{
//       tabBarLabel: "Setting",
//       tabBarIcon: ({ color, size }) => (
//         <SettingIcon name="settings" color={color} size={size} />
//       ),
//     }}
//   />
// </Tab.Navigator>
//   );
// }

// const styles = StyleSheet.create({
//   searchContainer: {
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 0,
//     width: 360,
//     marginTop: 10,
//   },
//   sliderContainer: {
//     marginTop: -20,
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   text: {
//     alignItems: "center",
//     color: "grey",
//     flex: 1,
//     justifyContent: "center",
//     padding: 15,
//     backgroundColor: "white",
//     marginTop: 15,
//   },
//   bottom: {
//     flex: 1,
//     justifyContent: "flex-end",
//     marginBottom: 36,
//   },
// });
import React, { useEffect, useState } from "react";
import firebase from "firebase";
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import { CardImage } from "react-native-cards";
import Cart from "./Cart/Cart";
import About from "./About";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import OrderStatus from "./Orders/OrderStatus";
import HomeIcon from "react-native-vector-icons/Entypo";
import SettingIcon from "react-native-vector-icons/Feather";
import AddCart from "react-native-vector-icons/Fontisto";
import { auth } from "../firebase";

const width = Dimensions.get("window").width / 2 - 30;
let shop = "";

const COLORS = {
  white: "#fff",
  dark: "#000",
  red: "#F52A2A",
  light: "#F1F1F1",
  green: "#00B761",
};

export function HomeScreen({ navigation }) {
  const loadingInitialValue = false;
  const [loading, setLoading] = useState(loadingInitialValue);
  const [catergoryIndex, setCategoryIndex] = React.useState(0);
  const [currentUser, setCurrentUser] = useState([]);

  const categories = ["POPULAR", "ORGANIC", "INDOORS", "SYNTHETIC"];
  const [plants, setItems] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setCurrentUser(authUser);
    });

    return unsubscribe;
  }, []);

  useEffect(async () => {
    setLoading(true);
    await firebase
      .firestore()
      .collection("admin")
      .doc(shop)
      .collection("items")
      .onSnapshot((snap) => setItems(snap.docs.map((doc) => doc.data())));
    setLoading(false);
  }, []);

  const CategoryList = () => {
    return (
      <View style={style.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setCategoryIndex(index)}
          >
            <Text
              style={[
                style.categoryText,
                catergoryIndex === index && style.categoryTextSelected,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  function Card({ plant }) {
    // const[like,setLike] = useState(false)

    return (
      <TouchableOpacity activeOpacity={0.8}>
        <View style={style.card}>
          <View style={{ alignItems: "flex-end" }}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: plant.like
                  ? "rgba(245, 42, 42,0.2)"
                  : "rgba(0,0,0,0.2) ",
              }}
            >
              <Icon
                name="favorite"
                size={18}
                color={plant.like ? COLORS.red : COLORS.black}
                // onPress={() => {
                //   firebase
                //     .firestore()
                //     .collection("customer")
                //     .doc(currentUser)
                //     .collection("Liked")
                //     .doc(plant.name)
                //     .set({
                //       name: plant.name,
                //       brand: plant.brand,
                //       price: plant.price,
                //       quantity: plant.quantity,
                //       path: plant.path,
                //     })
                //     .then(() => {
                //       alert("Item Added!!!");
                //     });
                // }}
              />
            </View>
          </View>

          <View
            style={{
              height: 100,
              alignItems: "center",
            }}
          >
            <CardImage
              source={{ uri: plant.path }}
              style={{ flex: 1, resizeMode: "contain" }}
              onPress={() =>
                navigation.navigate("DetailScreen", { plant: plant })
              }
            />
          </View>

          <Text
            style={{ fontWeight: "bold", fontSize: 17, marginTop: 10 }}
            onPress={() =>
              navigation.navigate("DetailScreen", { plant: plant })
            }
          >
            {plant.name}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
            }}
          >
            <Text
              style={{ fontSize: 19, fontWeight: "bold" }}
              onPress={() =>
                navigation.navigate("DetailScreen", { plant: plant })
              }
            >
              ₹ {plant.price}
            </Text>
            <View
              style={{
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AddCart
                name="shopping-basket-add"
                size={20}
                onPress={() => {
                  firebase
                    .firestore()
                    .collection("customer")
                    .doc(currentUser)
                    .collection("cart")
                    .doc(plant.name)
                    .set({
                      name: plant.name,
                      brand: plant.brand,
                      price: plant.price,
                      quantity: plant.quantity,
                      path: plant.path,
                    })
                    .then(() => {
                      alert("Item Added!!!");
                    });
                }}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <SafeAreaView
      style={{ flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white }}
    >
      <View style={style.header}>
        <View>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Welcome to</Text>
          <Text
            style={{ fontSize: 38, color: COLORS.green, fontWeight: "bold" }}
          >
            OnMart
          </Text>
        </View>
        <Icon
          name="shopping-cart"
          size={28}
          onPress={() =>
            navigation.navigate("Cart", {
              shoper: shop,
              userName: "Danny",
            })
          }
        />
      </View>
      <View style={{ marginTop: 30, flexDirection: "row" }}>
        <View style={style.searchContainer}>
          <Icon name="search" size={25} style={{ marginLeft: 20 }} />
          <TextInput placeholder="Search" style={style.input} />
        </View>
        <View style={style.sortBtn}>
          <Icon name="sort" size={30} color={COLORS.white} />
        </View>
      </View>
      <CategoryList />
      {loading ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Image
            source={require("../../assets/loadin_gif.gif")}
            style={{ height: 200, width: 200 }}
          />
        </View>
      ) : (
        <FlatList
          columnWrapperStyle={{ justifyContent: "space-between" }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: 10,
            paddingBottom: 50,
          }}
          numColumns={2}
          data={plants}
          renderItem={({ item }) => {
            return <Card plant={item} />;
          }}
        />
      )}
    </SafeAreaView>
  );
}

export default function Home({ navigation, route }) {
  const { shopName } = route.params;
  shop = shopName;

  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      tabBarOptions={{
        activeTintColor: "#A3E4D7",
        labelStyle: {
          fontSize: 0,
          margin: 0,
          padding: 0,
        },
      }}
    >
      <Tab.Screen
        name="Homecreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "HomeScreen",
          tabBarIcon: ({ color, size }) => (
            <HomeIcon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: "About",
          tabBarIcon: ({ color, size }) => (
            <HomeIcon name="map" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Order Status"
        component={OrderStatus}
        options={{
          tabBarLabel: "OrderStatus",
          tabBarIcon: ({ color, size }) => (
            <HomeIcon name="shopping-bag" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={OrderStatus}
        options={{
          tabBarLabel: "Setting",
          tabBarIcon: ({ color, size }) => (
            <SettingIcon name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const style = StyleSheet.create({
  categoryContainer: {
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 20,
    justifyContent: "space-between",
  },
  categoryText: { fontSize: 16, color: "grey", fontWeight: "bold" },
  categoryTextSelected: {
    color: COLORS.green,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.green,
  },
  card: {
    height: 225,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  header: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    color: COLORS.dark,
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: COLORS.green,
    justifyContent: "center",
    alignItems: "center",
  },
});
