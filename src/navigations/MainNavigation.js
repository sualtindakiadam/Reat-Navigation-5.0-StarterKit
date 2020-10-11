import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from '../pages/Home'
import Screen1 from '../pages/Screen1'
import Screen2 from '../pages/Screen2'
import { RectButton } from 'react-native-gesture-handler';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();




const HomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: 'red'
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: '500',
        fontSize: 20
      }
    }}
    >
      <Stack.Screen name="Home" component={Home} options={{
        headerLeft: () => (
          <TouchableOpacity style={{ paddingHorizontal: 20, justifyContent: 'center', alignItems: 'center' }} onPress={() => navigation.openDrawer()}>
            <Text style={{ color: 'white', fontWeight: '500', fontSize: 15 }}>MENU</Text>
          </TouchableOpacity>

        )
      }} />
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />


    </Stack.Navigator>

  );
}


const MainTab = () => {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    activeColor="orange"
    shifting={true}
  >
       <Tab.Screen
        name="Home"
        component={HomeStack}
        
        options={{
          tabBarLabel: 'Home',
          tabBarColor:'red',

          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Screen1"
        component={Screen1}
        options={{
          tabBarLabel: 'Updates',
          tabBarColor:'pink',

          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Screen2"
        component={Screen2}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />

    </Tab.Navigator>
  );


}


function MainNavigation() {
  return (

    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MainTab} />
        <Drawer.Screen name="Screen1" component={Screen1} />
      </Drawer.Navigator>
    </NavigationContainer>



  );
}



export default MainNavigation;