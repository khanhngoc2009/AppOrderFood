import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
function DetailProduct(){
    return(
        <View style={styles.container}>
            <View style={styles.layoutInfor}>
                <Text>Khanh</Text>
            </View>
            <View style={styles.layoutImage}>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    layoutInfor:{
        alignSelf: 'flex-end',
        backgroundColor:"red",

    },
    layoutImage:{
        BackgroundColor:"blue"
    }

})
export default DetailProduct;