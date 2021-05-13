import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import firebase from 'firebase'
import { Button, CheckBox, Header, ListItem, Tile } from 'react-native-elements'
import StatusItem from './/StatusItem';

let ordStatus = ''

const StatusContents = ({route,navigation}) => {

    const {name,address,mobile,owner,status} = route.params
    const[order,setOrder] = useState([])
    // const[customer,setCustomer] = useState([]);
    // alert(status)
    if(status){
        ordStatus = "Order Delivered!!!"
    } else {
        ordStatus = "Order On The Way!!!"
    }

    useEffect(()=>{
        
        firebase.firestore().collection("customer").doc(owner).collection("orderStatus").doc(name).collection("items").onSnapshot((snapshot)=>setOrder(snapshot.docs.map((doc)=>doc.data())));
        // firebase.firestore().collection("admin").doc(shopName).collection("customerDetail").onSnapshot((snapshot)=>setCustomer(snapshot.docs.map((doc)=>doc.data())));
    },[]) 

    return (<ScrollView>
        <View>
            <View>
            {/* {customer.map(list=>( */}
                <Tile
                    title={<Text>{name}</Text>}
                    featured
                    caption={<Text>{"\n"}
                        Address: {address}{"\n"}
                        Mobile No.: {mobile}{"\n"}
                        Order Status: {ordStatus}{"\n"}
                    </Text>}
                />
            {/* ))} */}
            </View>
                 
            {order.map(list=>(
               <StatusItem name={list.name} brand={list.brand} quantity={list.quantity} price={list.price}/>
            ))}   
        </View>
        <View></View>
        {/* <Button
                    buttonStyle={{borderRadius: 30, marginLeft: 18,marginTop: 18, marginRight: 18, marginBottom: 18,backgroundColor: 'black'}}
                    title='Deliver Order' 
                    onPress={()=>{
                        firebase.firestore().collection("admin").doc(shopName).collection("customerDetail").doc(name).update({
                            // name: name,
                            orderStatus: 1,
                        });
                        firebase.firestore().collection('customer').doc(owner).collection('orderStatus').doc(name).update({
                            orderStatus: 1,
                        })
                        navigation.navigate('ShopkeeperOrders');
                    }}
                /> */}
        <View></View>
        </ScrollView>
        
    )
}

export default StatusContents

const styles = StyleSheet.create({})
