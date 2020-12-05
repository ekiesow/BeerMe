import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {withAuthenticator} from 'aws-amplify-react-native';
import PushNotification from '@aws-amplify/pushnotification';
import {Auth, Analytics} from 'aws-amplify';
import {NativeModules} from 'react-native';
// import { PushNotificationIOS } from '@react-native-community/push-notification-ios';

import DrawerNavigator from './src/components/navigation/DrawerNavigator';

// get the registration token
// This will only be triggered when the token is generated or updated.
PushNotification.onRegister((token) => {
  console.log('in app registration', token);
});

// get the notification data when notification is received
PushNotification.onNotification((notification) => {
  // Note that the notification object structure is different from Android and IOS
  console.log('in app notification', notification);

  // required on iOS only (see fetchCompletionHandler docs: https://github.com/react-native-community/push-notification-ios#finish)
  // notification.finish(PushNotificationIOS.FetchResult.NoData);
});

// get the notification data when notification is opened
PushNotification.onNotificationOpened((notification) => {
  console.log('the notification is opened', notification);
});

async function associateEndpointWithUser(setUserId) {
  // retrieve and print the unique internal userid
  const {
    attributes: {sub},
  } = await Auth.currentUserInfo();
  console.log('userId', sub);
  setUserId(sub);

  // associate the device endpoint with the user
  Analytics.updateEndpoint({
    userId: sub,
  })
    .then((data) => {
      console.log('End Update Endpoint userId', JSON.stringify(data));
    })
    .catch((error) => {
      console.log('Update Endpoint userId', error);
    });
}

function associateFCMTokenWithEndpoint() {
  NativeModules.RNPushNotification.getToken((token) => {
    console.log('token: ', token);
    // associate the device endpoint with the FCM token
    Analytics.updateEndpoint({
      address: token,
      channelType: 'GCM',
    })
      .then((data) => {
        console.log('End Update Endpoint FCM token', JSON.stringify(data));
      })
      .catch((error) => {
        console.log('Update Endpoint FCM token', error);
      });
  });
}

const App = () => {
  const [userId, setUserId] = useState('');
  // associate the device endpoint with the user
  useEffect(() => {
    associateFCMTokenWithEndpoint();
    associateEndpointWithUser(setUserId);
  }, []);

  // retrieve and print the endpoint id, for testing only
  const [endpointId, setEndpointId] = useState('');
  useEffect(() => {
    const myEndpointId = Analytics.getPluggable('AWSPinpoint')._config
      .endpointId;
    console.log('endpointId', myEndpointId);
    setEndpointId(myEndpointId);
  }, []);

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
