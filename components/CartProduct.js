import React, { Component } from 'react';
import firebase from 'firebase';
import { StyleSheet, View } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Button, Text } from 'react-native-elements';

let total = 0
let txt = ''
// const ttl = '20'

class CartProduct extends Component {

    state={
        item:null
    }
    componentDidMount(){
        firebase.firestore().collection('customer').doc(this.props.user).collection('cart')
          .get()
          .then(snapshot =>{
            const item=[]
            snapshot.forEach(doc=>{
              const data = doc.data()
              item.push(data)
            })
            this.setState({item:item})
          })
          .catch(error =>{console.log(error)})
    }

    render() {
        return (

            <View>
                {/* <Text>Cart Total: {total}</Text> */}
                <Text h4 style={styles.text}>Items in Your Cart :</Text>
                {this.state.item &&
                    this.state.item.map((items) => {
                        total = total + parseInt(items.price)
                        txt = 'Order Total: ₹. '+ total
                    return (
                        <View>
                            <Card style={styles.card}>
                                <CardImage
                                    source={{uri: items.path}} 
                                />
                                <CardTitle subtitle={<Text>{items.name}</Text>}/>
                                <CardContent text={
                                    <View>
                                        <Text>
                                            Brand: {items.brand}
                                        </Text>
                                        <Text style={{fontSize:25}}>
                                            Price: ₹. <Text style={{color:"#b30000"}}>{items.price}</Text>
                                        </Text>
                                    </View>} style={styles.cardText} />
                                <CardAction 
                                    separator={true} 
                                    inColumn={false}>
                                <TouchableOpacity activeOpacity={0.5}>
                                <CardButton
                                    onPress={() => {
                                        firebase.firestore().collection('customer').doc(this.props.user).collection('cart').doc(items.name)
                                        .delete().then(()=>{
                                            alert("Item Removed!!!");
                                            navigation.replaceState("Cart");
                                        })
                                    }}
                                    title="DELETE"
                                    color="#FEB557"
                                />
                                </TouchableOpacity>
                                </CardAction>
                            </Card>
                        </View>
                    );{ttl = total}
                    })
                }
                
            <View>
                
            <Button
                    buttonStyle={{borderRadius: 30, marginLeft: 18,marginTop: 18, marginRight: 18, marginBottom: 18,backgroundColor: 'black'}}
                    title={txt} 
                    // onPress={()=>navigation.navigate("CheckOut",{
                    //     userOrder: this.props.user,
                    //     shop: this.props.shop,
                    // })}
                />
            </View>
            </View>
        );
    }
}

export default CartProduct;
const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 23,
        backgroundColor: '#fff',
        shadowOffset: {width: 2,height: 12},
        shadowColor: '#333',
        shadowOpacity: 0.5,
        shadowRadius: 2,
        marginHorizontal: 24,
        marginVertical: 16
    },
    cardText: {
        textDecorationColor: 'red',
    },
    text: {
        alignItems: 'center',
        color: 'grey',
        flex: 1,
        justifyContent: 'center',
        padding: 15,
        backgroundColor: "white",
    }
})