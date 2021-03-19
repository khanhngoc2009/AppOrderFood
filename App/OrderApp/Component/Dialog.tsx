import React from 'react'
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { BackgroundTimer } from 'react-native-background-timer'
import Images from '../Image/index'
function Dialog({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center', }}>
        <Image source={Images.CoffeDialog} style={styles.imageCenter} />
        <Text style={styles.textHeader}><Text style={{color:"#F00808",fontSize:23,fontWeight:"normal"}}>Z~ Coffe</Text> Top #1 Coffe </Text>
        <Text style={styles.textCenter}>Nơi thường thức chất lượng cuộc sống</Text>
      </View>
      <View style={styles.buttonSty}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>Get Start</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 20}}>
        <TouchableOpacity>
          <Text style={{color:"red",fontSize:20}}>. . .</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageCenter: {
    width: 160,
    height: 160,
  },
  buttonSty: {
    width: 300,
    marginTop: 100,
    height: 50
  },
  textHeader: {
    fontSize: 20,
    fontFamily: "fantasy ", fontWeight: "bold",

    color: "#800",
  },
  textCenter: {
    fontSize: 15,
    fontWeight: "100",
    fontFamily: "fantasy ",
    color: "#800",
  }, appButtonContainer: {
    elevation: 8,
    backgroundColor: "#F00808",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    alignSelf: "center",
    textTransform: "uppercase"
  },
});

export default Dialog;