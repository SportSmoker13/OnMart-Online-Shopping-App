import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import firebase from 'firebase';
import { SafeAreaView } from 'react-native-safe-area-context';
import Orderlist from '../components/Orderlist';
import { Text } from 'react-native-elements';

const ShopkeeperOrders = ({route,navigation}) => {
    const {shoper} = route.params

    const[order,setOrder] = useState([])
    useEffect(()=>{
        firebase.firestore().collection("admin").doc(shoper).collection("customerDetail").onSnapshot((snapshot)=>setOrder(snapshot.docs.map((doc)=>doc.data())));
    },[]) 
    // alert(order)
        const enter = (chatName,add,mob,own) => navigation.navigate("OrderContents",{
            name: chatName,
            shopName: shoper,
            address: add,
            mobile: mob,
            owner: own,
        })

    return (
        <SafeAreaView>  
            <ScrollView>
                {order.map(list=>(
                    <Orderlist name={list.name} status={list.orderStatus} add={list.address} mob={list.mobile} own={list.ownerName} shop={shoper} enter={enter}/>
                    // <Text>{list.name}</Text>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

export default ShopkeeperOrders;

const styles = StyleSheet.create({})
