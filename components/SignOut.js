import { StyleSheet, Text, View } from 'react-native'
import { auth } from '../firebase'

const SignOut = ({navigation}) => {
    auth.signOut()
        .then(() => {
            navigation.replace('Login')
        })
    return null;
}
export default SignOut
