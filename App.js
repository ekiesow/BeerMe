/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import DrawerNavigator from './src/components/navigation/DrawerNavigator';

import {withAuthenticator} from 'aws-amplify-react-native';

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <DrawerNavigator />
      </NavigationContainer>
    </>
  );
};

export default withAuthenticator(App, {includeGreetings: true});
