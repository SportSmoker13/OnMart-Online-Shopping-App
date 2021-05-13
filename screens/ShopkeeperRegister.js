import React, { useState } from 'react'
import { Button, KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import { StatusBar } from 'expo-status-bar';
import { Image, Input } from 'react-native-elements';

const ShopkeeperRegister = ({navigation}) => {

    const [shopName,setShopName] = useState('');
    const [mobno,setMobno] = useState('');
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');

    const register = () => {
        firebase.firestore().collection('admin').doc(shopName).set({
            name: shopName,
            password: password,
            email: email,
            mobile: mobno,
        }).then(()=>{
            alert("Shopkeepper Added!!!");
            navigation.replace("Shopkeeper");
        });
    }

    return (
        <KeyboardAvoidingView  behavior="padding" style={styles.container}>
            <StatusBar style="dark-theme" />
            <View>
                <Image
                    // key={index}
                    source={require('../assets/icon1.png')}
                    style={{width:100,height:100,marginBottom:80}} 
                />
            </View>
            <View style={styles.inputContainer}>
                <Input 
                    placeholder="Enter Full shopName" 
                    autofocus 
                    type="text"
                    value={shopName}
                    onChangeText={(text) => setShopName(text)}
                />
                <Input 
                    placeholder="Enter Mobile No." 
                    type="tel"
                    value={mobno}
                    onChangeText={(text) => setMobno(text)}
                />
                <Input 
                    placeholder="Enter Email" 
                    type="text"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Input 
                    placeholder="Enter Password"  
                    type="password"
                    value={password}
                    secureTextEntry
                    onChangeText={(text) => setPassword(text)}
                />
            </View>
            <Button 
                containerStyle={styles.inputButton}
                raised
                title="Register"  
                onPress={register} 
                buttonStyle={{backgroundColor: '#A3E4D7'}} 
            /> 
        </KeyboardAvoidingView>
    )
}

export default ShopkeeperRegister

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        padding: 10,
        backgroundColor: "white",
    },
    inputContainer: {
        width: 300,
    },
    inputButton: {
        width: 200,
        marginTop: 10,
    },
})
