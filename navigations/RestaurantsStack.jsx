import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
// import screens from './screens'
import Restaurants from '../screens/restaurants/Restaurants'

const Stack = createStackNavigator()

export default function RestaurantsStack () {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='restaurants'
        component={Restaurants}
        options={{ title: 'Restaurantes' }}
      />
    </Stack.Navigator>
  )
}
