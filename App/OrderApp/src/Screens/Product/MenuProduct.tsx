import React from 'react';
import { connect } from 'react-redux'
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Images from '../../Image/index'
function MenuProduct({type}){
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.appButtonContainer}>
                <Image source={Images.ProductCoffe} style={styles.imageSty} />
                <View style={styles.textSty}>
                    <Text style={styles.textStyType}>{type}</Text>
                </View>
            </TouchableOpacity>
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
        height: 40,
        margin: 5,
        marginTop: 20,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 0.5,
        elevation: 5,
    },
    imageSty: {
        width: 30,
        height: 30,
        borderRadius: 20,
        margin: 5
    },
    textSty: {
        color: "black",
        position: "absolute",
        marginLeft: 40,
        marginTop: 12
    },
    textStyType: {
        color: "red",
        fontSize: 12,
    }
});

export default MenuProduct