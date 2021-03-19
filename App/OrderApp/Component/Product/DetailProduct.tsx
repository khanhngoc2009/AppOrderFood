import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import Images from '../../Image';
function DetailProduct(){
    return(
        <View style={styles.container}>
            <View style={styles.layoutInfor}>
                
            </View>
            <View style={styles.layoutImage}>
                <Image source={Images.ProductCoffe} style={styles.ImageStyProduct}/>
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
        width:"50%",
        height:620,
        backgroundColor:"#fff",
    },
    layoutImage:{
        width:"50%",
        height:620,
        marginLeft:"50%",
        backgroundColor:"#fff",
        position: 'absolute',
        justifyContent: 'center'
        ,alignItems: 'flex-end'
    },
    ImageStyProduct:{
        width:230,
        height:230,
        borderRadius:115,
    }
})
export default DetailProduct;