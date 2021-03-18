import React from 'react';
import { connect } from 'react-redux'
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Images from '../../Image/index'
function MenuProduct() {
    
    const type = [{
        image: "",
        name: "Coffe"
    }, {
        image: "",
        name: "Trà sữa"
    },
    {
        image: "",
        name: "Hồng trà"
    },
    {
        image: "",
        name: "giải khát"
    },
    {
        image: "",
        name: "Đồ ăn vặt"
    },
    ]
    return (
        <View style={styles.container}>
            <Image source={Images.ProductCoffe} style={styles.imageSty} />
            <View style={styles.textSty}>
                <Text style={{position:"absolute"}}>Coffe</Text>
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
        width: 100,
        height: 100,
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
        width: 40,
        height: 40,
        borderRadius: 30,
    },
    textSty:{
        color:"black",
        fontSize: 25,
        
    }
});

export default MenuProduct