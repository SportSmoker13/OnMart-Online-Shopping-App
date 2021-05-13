import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import { Button, Image, Input } from 'react-native-elements';
import firebase from 'firebase'

const Register = ({navigation}) => {

    const [name,setName] = useState('');
    
    const checkShop = () => (
        firebase.firestore()
        .collection('admin').doc(name).get().then((snapshot) => {
            if(snapshot.exists){     
                navigation.replace("Home",{shopName: name})
            } else {
                alert("Shop Doesn't Exist!!!");
            }
        })
    )

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
                    placeholder="Enter Full Name" 
                    autofocus 
                    type="text"
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
            </View>

            <Button 
                containerStyle={styles.inputButton}
                raised
                title="Enter Shop"  
                onPress={checkShop} 
                buttonStyle={{backgroundColor: '#A3E4D7'}} 
            /> 
        </KeyboardAvoidingView>
    )
}

export default Register
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