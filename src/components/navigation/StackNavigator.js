import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import Home from "../../screens/HomeScreen";
import Orders from "../../screens/OrdersScreen";
import Settings from "../../screens/SettingsScreen";
import Profile from "../../screens/ProfileScreen";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      {/* <HomeStack.Screen name="Settings" component={SettingsScreen} /> */}
    </Stack.Navigator>
  );
};

const OrdersStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Orders" component={Orders} />
      {/* <OrdersStack.Screen name="Settings" component={SettingsScreen} /> */}
    </Stack.Navigator>
  );
};

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Profile" component={Profile} />
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

export { HomeStackNavigator, OrdersStackNavigator, ProfileStackNavigator, SettingsStackNavigator };
