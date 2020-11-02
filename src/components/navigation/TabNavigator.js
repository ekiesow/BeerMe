import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  HomeStackNavigator,
  OrdersStackNavigator,
  ProfileStackNavigator,
} from "./StackNavigator";

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return(
        <Tab.Navigator
          initialRouteName="Home"
        >
          <Tab.Screen 
            name="Home" component={HomeStackNavigator}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
              }}
          />
          <Tab.Screen
            name="Orders"
            component={OrdersStackNavigator}
            options={{
              tabBarLabel: "Orders",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="package-variant-closed" color={color} size={26} />
              ),
              }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileStackNavigator}
            options={{
              tabBarLabel: "Profile",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account-circle" color={color} size={26} />
              ),
              }}
          />
        </Tab.Navigator>
  );
};

export default BottomTabNavigator;
