import React, { useState } from 'react'
import { Text } from 'react-native'
import { CheckBox, ListItem } from 'react-native-elements'
import Img from "react-native-vector-icons/FontAwesome";
import firebase from 'firebase'

const Orderlist = ({name,shop,status,enter,add,mob,own}) => {

    // alert(name)

    const checkedOne  = status
    // const updateOne = () => setCheckedOne(true);

    // if(checkedOne){
        // firebase.firestore().collection("admin").doc(shop).collection("customerDetail").doc(name).set({
        //     orderStatus: 1,
        // })

    // }

    return (
       <ListItem onPress={()=>enter(name,add,mob,own)}>
           <CheckBox
                name="a"
                label="Checkbox"
                checked={checkedOne}
                // onPress={updateOne}
            />
           <Img  name="user-circle-o" size={28}/>
           <ListItem.Content>
            <ListItem.Title style={{fontWeight : '800'}}>
                    <Text>{name}</Text>
                </ListItem.Title>
           </ListItem.Content>     
       </ListItem>
    )
}

export default Orderlist
