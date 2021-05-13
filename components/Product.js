import React, { Component } from 'react';
import { Text } from 'react-native-elements'
import firebase from 'firebase';
import { StyleSheet, View } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { TouchableOpacity } from 'react-native-gesture-handler';


class Product extends Component {

    state={
        item:null,
        imageName:null
    }
    

    componentDidMount(){
        
        firebase.firestore().collection('admin').doc(this.props.shopName).collection('items')
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
            <View >
                {this.state.item &&
                    this.state.item.map((items) => {
                                               
                    return (
                        <View style={styles.card}>
                            <Card>
                                <CardImage source={{uri: items.path}} />
                                <CardTitle subtitle={<Text>{items.name}</Text>}/>
                                <CardContent text={
                                    <View>
                                        <Text>
                                            Brand: {items.brand}
                                        </Text>
                                        <Text style={{fontSize:25}}>
                                            Price: ₹. <Text style={{color:"#b30000"}}>{items.price}</Text>
                                        </Text>
                                    </View>} 
                                    style={styles.cardText}/>
                                
                                <CardAction 
                                    separator={true} 
                                    inColumn={false}>
                                <TouchableOpacity activeOpacity={0.5}>
                                <CardButton
                                    onPress={() => {
                                        firebase.firestore().collection('customer').doc(this.props.userName).collection('cart').doc(items.name).set({
                                            name: items.name,
                                            brand: items.brand,
                                            price: items.price,
                                            quantity: items.quantity,
                                            path: items.path
                                        }).then(()=>{alert("Item Added!!!")})
                                    }}
                                    title="ADD TO CART"
                                    color="#FEB557"
                                />
                                </TouchableOpacity>
                                </CardAction>
                            </Card>
                        </View>
                    );
                    })
                }   
            </View>
        );
    }
}

export default Product;

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
    }
})