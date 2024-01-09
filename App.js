import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ExploreScreen, FavoritesScreen, HomeScreen, MessageScreen, ProductScreen, ProfileScreen, SellScreen } from './screens';
import { CameraIcon, ChatBubbleOvalLeftEllipsisIcon, GlobeAltIcon, HeartIcon, HomeIcon } from 'react-native-heroicons/outline';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      >
        <Tab.Screen name="Anasayfa" component={HomeStack}
          options={{
            headerShown: false,
            tabBarActiveTintColor: "#404040",
            tabBarIcon: () =>
              < HomeIcon size={24} color="#292524" />
          }}
        />
        <Tab.Screen name="Keşfet" component={ExploreScreen}
          options={{
            headerShown: false,
            tabBarActiveTintColor: "#404040",
            tabBarIcon: () =>
              < GlobeAltIcon size={24} color="#292524" />
          }}
        />
        <Tab.Screen name="Sat" component={SellScreen}
          options={{
            headerShown: false,
            tabBarActiveTintColor: "#e11d48",
            tabBarIcon: () =>
              < CameraIcon size={24} color="#e11d48" />
          }}
        />
        <Tab.Screen name="Mesajlar" component={MessageScreen}
          options={{
            headerShown: false,
            tabBarActiveTintColor: "#404040",
            tabBarIcon: () =>
              < ChatBubbleOvalLeftEllipsisIcon size={24} color="#404040" />
          }}
        />
        <Tab.Screen name="Favoriler" component={FavoritesScreen}
          options={{
            headerShown: false,
            tabBarActiveTintColor: "#404040",
            tabBarIcon: () =>
              < HeartIcon size={24} color="#404040" />
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
