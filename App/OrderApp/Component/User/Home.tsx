import React from 'react'
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image } from 'react-native'
import { BackgroundTimer } from 'react-native-background-timer'
import Images from '../../Image/index'
import MenuProduct from '../Product/MenuProduct'
import Product from '../Product/Product'
function Home({ navigation: { navigate } }) {
  const [text, setText] = React.useState('')
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Images.BackGroundMain} style={{ width: "100%", height: 300 }} />
      </View>
      <View style={styles.viewInput}>
        <TextInput style={styles.input}
          placeholder="Tìm kiếm..."
          placeholderTextColor="#002"
          onChangeText={text => setText(text)}
          defaultValue={text}
        />
      </View>

      <View >
        <ScrollView horizontal={true}>
          <MenuProduct />
        </ScrollView>
      </View>
      <ScrollView>
        <View style={styles.mainSty}>
          <Product />
        </View>
      </ScrollView>


      {/* Menu của trang chủ*/}
      
      <View style={styles.menuSty}>

      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: "100%",
    height: 200,
    backgroundColor: "#fff",
  },
  menuSty: {
    width: "100%",
    height: 50,
    backgroundColor: "#900",
    alignSelf: 'flex-end',
    bottom: 0,
    position: 'absolute',
  },
  mainSty: {
    width: "100%",
    height: 500,
    backgroundColor: "#fff",
  }, viewInput: {
    marginTop: 10,
    position: 'absolute',
    padding: 2
  }
  , input: {
    margin: 2,
    width: 400,
    height: 40,
    borderColor: 'red',
    borderWidth: 0.6,
    borderRadius: 10,
    color: "#900",
  },

});

export default Home;