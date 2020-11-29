import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {withAuthenticator} from 'aws-amplify-react-native';

import DrawerNavigator from './src/components/navigation/DrawerNavigator';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <DrawerNavigator />
      </NavigationContainer>
    </>
  );
};

export default withAuthenticator(App);
