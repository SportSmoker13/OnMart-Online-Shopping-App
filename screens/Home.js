import React, { useEffect, useLayoutEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Cart from "./Cart";
import About from './About';
import Menu from "react-native-vector-icons/Entypo";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Input } from 'react-native-elements';
import Search from "react-native-vector-icons/FontAwesome";
import CustomDrawer from '../components/CustomDrawer';
import Product from '../components/Product';
import { auth } from '../firebase';
import Shopkeeper from './Shopkeeper';
import OrderStatus from './OrderStatus';
import { Text } from 'react-native-elements';

let shop = '';
let user = '';

function HomeScreen() {

    const images = [
        require('../images/cart.jpg'),
        require('../images/4._Staggering_of_courses.jpg'),
    ]
    const { width } = Dimensions.get("window");
    const height = width*0.6;
    
    const [currentUser,setCurrentUser] = useState([]);
    const[search,setSearch] = useState([])

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            setCurrentUser(authUser);
        });
        
        return unsubscribe;
    },[])
    // alert(currentUser.displayName)
  return (
    <SafeAreaView>
        <ScrollView>
        <View style={styles.searchContainer}>
            <Input 
                placeholder="Search" 
                type="text"
                value={search}
                onChange={()=>search(search)}
                leftIcon={
                    <Search 
                        name="search" 
                        size={20}
                    />
                }
            />
        </View>
        
        <View style={styles.sliderContainer}>
            <ScrollView
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{width, height}}
            >
            
                {
                    images.map((image,index) => (
                        <Image
                            key={index}
                            source={image}
                            style={{width,height,resizeMode: 'cover'}} 
                        />
                    ))
                }
            </ScrollView>
        </View> 
        {/* <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color="red" />
        </View> */}
        <Text h4 style={styles.text}>Groceries :</Text>
            <Product userName={currentUser.displayName} shopName={shop}/> 
        </ScrollView>
    </SafeAreaView>
  );
}

const Drawer = createDrawerNavigator();

export default function Home({route,navigation }) {
    const [currentUser,setCurrentUser] = useState([]);

    const {shopName} = route.params;
    shop = shopName;
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            setCurrentUser(authUser);
        });
        
        return unsubscribe;
    },[])
    user = currentUser.displayName

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "OnMart",
            headerTitleStyle: { color: "black"},
            headerStyle: {backgroundColor: "#A3E4D7"},
            headerTintColor: "black",
            headerLeft: () => (
                <View style={{marginLeft: 20}}>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Menu name="user" size={20} 
                            onPress={()=>navigation.replace("SignOut")}
                        />
                    </TouchableOpacity>
                </View>
            ),
            // MOVE TO CART BUTTON
            headerRight: () => (
                <View style={{marginRight: 20}}>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Menu name="shopping-cart" size={20} 
                            onPress={()=>navigation.navigate("Cart",{
                                shoper: shopName,
                                userName: user,
                            })}
                        />
                    </TouchableOpacity>
                </View>
                
            ),
        })
    },[])

  return (
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen 
            name="Home" 
            component={HomeScreen} 
        />
        <Drawer.Screen 
            name="Cart" 
            component={Cart} 
        />
        <Drawer.Screen 
            name="About" 
            component={About} 
        />
        <Drawer.Screen 
            name="Order Status" 
            component={OrderStatus} 
        />
        <Drawer.Screen 
            style={styles.bottom}
            name="Shopkeeper Login" 
            component={Shopkeeper} 
        />
        
      </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
    searchContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        width: 360,
        marginTop: 10,
    },
    sliderContainer: {
        marginTop: -20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    // container: {
    //     flex: 1,
    //     justifyContent: "center"
    //   },
    //   horizontal: {
    //     flexDirection: "row",
    //     justifyContent: "space-around",
    //     padding: 10
    //   }
    text: {
        alignItems: 'center',
        color: 'grey',
        flex: 1,
        justifyContent: 'center',
        padding: 15,
        backgroundColor: "white",
        marginTop: 15,
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36
      },
});