import React from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
// import SplashScreen from 'react-native-splash-screen' // TODO look into splash screen when loading drinks from graphql see example: https://github.com/sarthakpranesh/Covid19/blob/master/src/screens/HomeScreen.tsx

const HomeScreen = () => {
  return (
    <View style={styles.center}>
      <Text>Home!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default HomeScreen;
