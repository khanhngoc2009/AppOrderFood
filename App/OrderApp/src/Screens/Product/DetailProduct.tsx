import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Images from '../../Image/index';
function DetailProduct() {
    const product = {
        name: "Capuchino Coffe",
        detail: "Làm từ hạt caffe nguyên chất mang lại hương vị đậm đà",
        price: 120,
        type: "Coffe",
        Vote: 4,
        like: false,
    }
    return (
        <View style={styles.container}>
            <View style={styles.layoutHeader}></View>
            <View style={styles.layoutInfor}>
                <Text style={styles.textPrice}>${product.price}</Text>
                <Text style={{marginLeft:25,color:"gray"}}>Thể loại</Text>
                <Text style={{marginLeft:25,color:"red",fontSize:18,fontWeight:"bold"}}>{product.type}</Text>
                <Text style={{marginLeft:25,marginTop:25,}}>Đánh giá</Text>
                <Text style={{marginLeft:25,color:"red",fontSize:20,fontWeight:"bold"}}>{product.Vote}<Text style={{color:"black",fontWeight:"normal"}}> *</Text></Text>
                <Text style={{marginLeft:25,marginTop:25}}>Thông tin</Text>
                <Text style={{marginLeft:25,color:"black",fontWeight:"bold"}}>{product.detail}</Text>
                <View style={{margin:25}}>
                    <TouchableOpacity style={{width:30,height:30,
                    backgroundColor:"red",
                    borderRadius:7,
                    }}>
                        <Text style={{marginLeft:10,marginTop:6,color:"#fff",fontWeight:"bold"}}>
                            S
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>
                            M
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>
                            L
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.layoutImage}>
                <Image source={Images.ProductCoffe} style={styles.ImageStyProduct} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    layoutHeader: {
        width: "100%",
        height: 100
    },
    layoutInfor: {
        width: "40%",
        height: 620,
        backgroundColor: "#fff",
    },
    layoutImage: {
        width: "60%",
        height: 620,
        marginLeft: "50%",
        backgroundColor: "#fff",
        position: 'absolute',
        justifyContent: 'center'
        , alignItems: 'flex-end'
    },
    ImageStyProduct: {
        width: 239,
        height: 239,
        borderRadius: 115,
    },
    textPrice: {
        fontSize: 30,
        fontWeight: "bold",
        fontFamily: "Georgia",
        color: "#000",
        margin: 25
    }
})
export default DetailProduct;