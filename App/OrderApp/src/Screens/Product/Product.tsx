import React from 'react';
import { connect } from 'react-redux'
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Images from '../../Image/index'
function Product({navigate}) {
    const product = {
        name: "Capuchino Coffe",
        detail: "no",
        price: 120,
        type: "Coffe",
        Vote: 4,
        like: false,
    }
    return (
        <View style={styles.container}>
            <Image source={Images.ProductCoffe} style={styles.imageSty} />
            <View style={styles.textSty}>
                <Text style={styles.textStyVote}>
                    {product.Vote} *
                </Text>
                <Text style={styles.textStyName}>
                    {product.name}
                </Text>
                <Text style={styles.textStyType}>
                    {product.type}
                </Text>
                <Text style={styles.textStyPrice}>
                    ${product.price}.000
                </Text>

            </View>
            <View style={{ marginLeft: "85%", marginTop: -40, width: 40, height: 40 }}>
                <TouchableOpacity
                onPress={()=>navigate("DetailProduct")}
                    style={{borderRadius:10,width:35,height:35,backgroundColor: "#F00808",}}>
                    <Text style={{fontSize:22,color:"#fff",marginLeft:12,marginTop:2}}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const mapStateToProps = (state) => {
    return {
        value: state.prop
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch1: () => {

        }
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: 380,
        height: 120,
        margin: 12,
        marginTop: 20,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 0.5,
        elevation: 5
    },
    imageSty: {
        width: 120,
        height: 90,
        borderRadius: 30,
        margin: 13,

    },
    textSty: {
        position: 'absolute',
        marginTop: 13,
        marginLeft: 150,
        backgroundColor: "#FFF",
        width: 200,
        height: 45,
    },
    textStyName: {
        color: "black",
        fontSize: 26,
        fontFamily: "cursive",
        fontWeight: "bold"

    },
    textStyVote: {
        color: "gray",
        fontSize: 18,
        fontFamily: "cursive",
    },
    textStyType: {
        color: "gray",
        fontSize: 15,
        fontFamily: "sans-serif",
    }, textStyPrice: {
        color: "black",
        fontSize: 15,
        fontFamily: "math",
        fontWeight: "bold"
    }
});

export default Product