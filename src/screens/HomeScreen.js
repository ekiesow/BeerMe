import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import DrinkCarousel from '../components/DrinkCarousel';
import {Auth} from 'aws-amplify';
import _ from 'lodash';
// import SplashScreen from 'react-native-splash-screen' // TODO look into splash screen when loading drinks from graphql see example: https://github.com/sarthakpranesh/Covid19/blob/master/src/screens/HomeScreen.tsx

const HomeScreen = ({navigation}) => {
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
    <>
      <View style={styles.container}>
        <DrinkCarousel admin={admin} nav={navigation} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
