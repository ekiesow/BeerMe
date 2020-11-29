import React, {useEffect, useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Auth} from 'aws-amplify';
import _ from 'lodash';

import {AdminStackNavigator, SettingsStackNavigator} from './StackNavigator';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    is_admin();
  }, []);

  async function is_admin() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const groups =
        user.signInUserSession.accessToken.payload['cognito:groups'];
      console.log('groups: ', groups);
      // using lodash to short circuit to make sure groups is not undefined
      if (!_.isEmpty(groups) && groups.includes('Admin')) {
        setAdmin(true);
      }
    } catch (err) {
      console.log('Error getting user: ', err);
    }
  }

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigator} />
      {admin ? (
        <Drawer.Screen name="Admin" component={AdminStackNavigator} />
      ) : (
        <Drawer.Screen name="Settings" component={SettingsStackNavigator} />
      )}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
