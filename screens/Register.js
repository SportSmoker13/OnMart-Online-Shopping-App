import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import { Button, Image, Input } from 'react-native-elements';
import { auth } from "../firebase"; 
import firebase from 'firebase';

const Register = ({navigation}) => {

    const [name,setName] = useState('');
    const [mobno,setMobno] = useState('');
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');

    const register = () =>{
        firebase.firestore().collection('customer').doc(name).set({
            name: name,
        }).then(alert("Success!!!"));
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((authUser) => {
                authUser.user.updateProfile({
                    displayName: name,
                });
            })
            .catch((error) => alert(error.message));
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
                    placeholder="Enter Full Name" 
                    autofocus 
                    type="text"
                    value={name}
                    onChangeText={(text) => setName(text)}
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
