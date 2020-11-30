import React, {useEffect, useState} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Auth} from 'aws-amplify';
import _ from 'lodash';

import {
  AdminStackNavigator,
  HomeStackNavigator,
  OrdersStackNavigator,
  ProfileStackNavigator,
} from './StackNavigator';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    is_admin();
  }, []);

  async function is_admin() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const groups =
        user.signInUserSession.accessToken.payload['cognito:groups'];
      // console.log('groups: ', groups);
      // using lodash to short circuit to make sure groups is not undefined
      if (!_.isEmpty(groups) && groups.includes('Admin')) {
        setAdmin(true);
      }
    } catch (err) {
      console.log('Error getting user: ', err);
    }
  }

  return (
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={{backgroundColor: '#6200EE'}}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      {admin ? (
        <Tab.Screen
          name="Admin"
          component={AdminStackNavigator}
          options={{
            tabBarLabel: 'Admin',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="circle-edit-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
      ) : (
        <>
          <Tab.Screen
            name="Orders"
            component={OrdersStackNavigator}
            options={{
              tabBarLabel: 'Orders',
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons
                  name="package-variant-closed"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileStackNavigator}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons
                  name="account-circle"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
        </>
      )}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
