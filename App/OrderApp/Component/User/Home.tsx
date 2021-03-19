import React from 'react'
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import { BackgroundTimer } from 'react-native-background-timer'
import Images from '../../Image/index'
import MenuProduct from '../Product/MenuProduct'
import Product from '../Product/Product'
function Home({ navigation: { navigate } }) {
  const [text, setText] = React.useState('')

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
      <View style={styles.mainSty}>
        <ScrollView showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false} >
          <View style={{ width: "98%", height: 200 }}>
            <Text style={styles.titleStyText}>All</Text>
            <ScrollView showsVerticalScrollIndicator={false}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {type.map(function (value, index) {
                return (
                  <View key={index}>
                    <Product />
                  </View>
                )
              })}
            </ScrollView>
          </View>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 0.3,
            }}
          />
          <View style={{ width: 400, height: 200 }}>
            <Text style={styles.titleStyText}>Uống nhiều trong ngày</Text>
            <ScrollView horizontal={true} showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            >
              {type.map(function (value, index) {
                return (
                  <View key={index}>
                    <Product />
                  </View>
                )
              })}
            </ScrollView>
          </View>
          <View style={{ width: 400, height: 300 }}>
            <Text style={styles.titleStyText}>Nổi bật tuần qua</Text>
            <ScrollView horizontal={true} showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            >
              {type.map(function (value, index) {
                return (
                  <View key={index}>
                    <Product />
                  </View>
                )
              })}
            </ScrollView>
          </View>
        </ScrollView>
      </View>
      <View style={styles.setPositionMenuFilter}>
        <ScrollView horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <MenuProduct type="ALL" />
          {type.map(function (value, index) {
            return (
              <View key={index}>
                <MenuProduct type={value.name} />
              </View>
            )
          })}
        </ScrollView>
      </View>

      {/* Menu của trang chủ*/}

      <View style={styles.menuSty}>
          {/* <TouchableOpacity style={styles.btmenu}>
            <Text>1</Text>
          </TouchableOpacity> */}
          <TouchableOpacity style={styles.btmenu}>
            <Text>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btmenu}>
            <Text>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btmenu}>
            <Text>4</Text>
          </TouchableOpacity>
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
    height: 180,
    backgroundColor: "#fff",
  },
  menuSty: {
    width: "100%",
    height: 40,
    backgroundColor: "#ff5f38",

    alignSelf: 'flex-end',
    bottom: 0,
    position: 'absolute',
  },
  mainSty: {
    width: "100%",
    height: 490,
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
  titleStyText: {
    color: "red", marginTop: 12, marginLeft: 12, fontWeight: "bold", fontFamily: "normal", fontSize: 16
  },
  setPositionMenuFilter: {
    width: "100%", height: 80, marginTop: 110,
    position: 'absolute',
  },
  btmenu:{
    width: "25%",
    height: "100%",
    backgroundColor: "#FFFFFF",
 
  }

});

export default Home;