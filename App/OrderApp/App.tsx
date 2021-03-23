import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as StoreProvider } from 'react-redux'
import Dialog from './src/Screens/Dialog'
import Home from './src/Screens/User/Home'
import DetailProduct from './src/Screens/Product/DetailProduct';

const Stack=createStackNavigator();

export default function App() {
  return (
    // <StoreProvider >
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Dialog">
          <Stack.Screen name="Dialog" component={Dialog} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="DetailProduct" component={DetailProduct}/>
        </Stack.Navigator>
      </NavigationContainer>
    // </StoreProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
