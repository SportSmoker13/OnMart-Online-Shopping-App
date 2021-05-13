import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import firebase from 'firebase'
import { auth } from '../firebase';
import OrderList1 from './OrderList1'

const OrderStatus = ({route,navigation}) => {

    const [currentUser,setCurrentUser] = useState([]);

    const[order,setOrder] = useState([])
    

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            setCurrentUser(authUser);
        });
        firebase.firestore().collection('customer').doc(currentUser.displayName).collection('orderStatus').onSnapshot((snapshot)=>setOrder(snapshot.docs.map((doc)=>doc.data())));
    })
    // alert(currentUser.displayName)

    const enter = (chatName,add,mob,own,status) => navigation.navigate("StatusContents",{
        name: chatName,
        address: add,
        mobile: mob,
        owner: own,
        status:status,
    })

    return (
        <SafeAreaView>  
            <ScrollView>
                {order.map(list=>(
                    <OrderList1 name={list.orderName} status={list.orderStatus} add={list.orderAdd} mob={list.orderCon} own={currentUser.displayName} enter={enter}/>
                    // <Text>{list.name}</Text>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

export default OrderStatus

const styles = StyleSheet.create({})
