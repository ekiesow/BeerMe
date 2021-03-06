import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Auth} from 'aws-amplify';
import {IconButton, Colors} from 'react-native-paper';

import Home from '../../screens/HomeScreen';
import Orders from '../../screens/OrdersScreen';
import Settings from '../../screens/SettingsScreen';
import Profile from '../../screens/ProfileScreen';
import Admin from '../../screens/AdminScreen';
import Update from '../../screens/UpdateScreen';
import Purchase from '../../screens/PurchaseScreen';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#6200EE',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Update Drink" component={Update} />
      <Stack.Screen name="Purchase Drink" component={Purchase} />
    </Stack.Navigator>
  );
};

const OrdersStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Orders" component={Orders} />
    </Stack.Navigator>
  );
};

const ProfileStackNavigator = () => {
  async function signOut() {
    try {
      await Auth.signOut();
    } catch (err) {
      console.log('Error signing out: ', err);
    }
  }

  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerRight: () => (
            <IconButton
              icon="logout-variant"
              color={Colors.amber800}
              size={30}
              onPress={signOut}
            />
          ),
        }}
      />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

const SettingsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

const AdminStackNavigator = () => {
  async function signOut() {
    try {
      await Auth.signOut();
    } catch (err) {
      console.log('Error signing out: ', err);
    }
  }

  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Admin"
        component={Admin}
        options={{
          headerRight: () => (
            <IconButton
              icon="logout-variant"
              color={Colors.amber800}
              size={30}
              onPress={signOut}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export {
  AdminStackNavigator,
  HomeStackNavigator,
  OrdersStackNavigator,
  ProfileStackNavigator,
  SettingsStackNavigator,
};
