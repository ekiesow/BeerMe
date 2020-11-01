import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import DrinkCarousel from '../components/DrinkCarousel';
// import SplashScreen from 'react-native-splash-screen' // TODO look into splash screen when loading drinks from graphql see example: https://github.com/sarthakpranesh/Covid19/blob/master/src/screens/HomeScreen.tsx

const cards = [
  {
    drinkName: 'Double Dry Hopped Green City',
    breweryName: 'Other Half Brewing Co.',
    content: "Try this beer! It's great!",
  },
  {
    drinkName: 'Double Scatterbrain DDH W/ Citra',
    breweryName: 'Bearded Iris Brewing',
    content: "Try this beer! It's even better!",
  },
  {
    drinkName: 'Prickle My Fancy Slushy',
    breweryName: '903 Brewers',
    content: "Try this beer! It's great!",
  },
];

const HomeScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <DrinkCarousel data={cards} />
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
