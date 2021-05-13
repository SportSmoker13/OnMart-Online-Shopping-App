
                title="Place Order"  
                onPress={placeOrder} 
                buttonStyle={{backgroundColor: '#A3E4D7'}} 
            /> 
        </KeyboardAvoidingView>
    )
}

export default CheckOut
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
