import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'

// impor escreen
import Restaurants from '../screens/restaurants/Restaurants'
import Favorites from '../screens/favorites/Favorites'
import TopRestaurants from '../screens/topRestaurants/TopRestaurants'
import Search from '../screens/search/Search'
import Account from '../screens/account/Account'

const Tab = createBottomTabNavigator()

export default function Navigation () {
  const screenOptions = (route, color) => {
    let iconName
    switch (route.name) {
      case 'restaurants':
        iconName = 'compass-outline'
        break
      case 'favorites':
        iconName = 'heart-outline'
        break
      case 'top-restaurants':
        iconName = 'star-outline'
        break
      case 'search':
        iconName = 'magnify'
        break
      case 'account':
        iconName = 'home-outline'
        break
    }

    return (
      <Icon type='material-community' name={iconName} size={22} color={color} />
    )
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='restaurants'
        BottomTabNavigation={{
          tabBarInactiveTintColor: '#a17dc3',
          tabBarActiveTintColor: '#442484',
          tabBarStyle: [
            {
              display: 'flex'
            },
            null
          ]
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color)
        })}
      >
        <Tab.Screen
          name='restaurants'
          component={Restaurants}
          options={{ title: 'Restaurantes' }}
        />
        <Tab.Screen
          name='favorites'
          component={Favorites}
          options={{ title: 'Favoritos' }}
        />
        <Tab.Screen
          name='top-restaurants'
          component={TopRestaurants}
          options={{ title: 'Top 10' }}
        />
        <Tab.Screen
          name='search'
          component={Search}
          options={{ title: 'Buscar' }}
        />
        <Tab.Screen
          name='account'
          component={Account}
          options={{ title: 'Cuenta' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
