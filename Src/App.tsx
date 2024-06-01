import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import Details from './Details'
import Home from './Home'




const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen
          name='Home'
          component={Home}
          options={
            {
              title:"Shopkart",
              headerTitleStyle: {
                color: 'black', // Change the color to your desired color
              },
              headerStyle: {
                backgroundColor: '#287FF0', // Change the background color to your desired color
              },

            }
          }

          />
          <Stack.Screen
          name='Details'
          component={Details}
          options={
            {
              title:"Product Details",
              headerTitleStyle: {
                color: 'black', // Change the color to your desired color
              },
              headerStyle: {
                backgroundColor: '#287FF0', // Change the background color to your desired color
              },
            }
            
          }
          

          />
        </Stack.Navigator>

      </NavigationContainer>
    </GestureHandlerRootView>
  )
}
const styles = StyleSheet.create({})

export default App
