import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import DrinkCarousel from '../components/DrinkCarousel';
// import SplashScreen from 'react-native-splash-screen' // TODO look into splash screen when loading drinks from graphql see example: https://github.com/sarthakpranesh/Covid19/blob/master/src/screens/HomeScreen.tsx

const initialState = [{drinkName: '', breweryName: '', description: ''}];
const HomeScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <DrinkCarousel />
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
