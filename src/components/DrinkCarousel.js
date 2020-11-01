import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import MyCard from './MyCard';

const {width: screenWidth} = Dimensions.get('window');
const ITEM_WIDTH = screenWidth - 60;
const ITEM_HEIGHT = screenWidth - 60;

const DrinkCarousel = (props) => {
  const renderItem = ({item, index}) => {
    return (
      <View key={index} style={styles.container}>
        <MyCard data={item} style={styles.card} />
      </View>
    );
  };

  return (
    <Carousel
      sliderWidth={screenWidth}
      sliderHeight={screenWidth}
      itemWidth={ITEM_WIDTH}
      itemHeight={ITEM_HEIGHT}
      data={props.data}
      renderItem={renderItem}
      style={styles.carousel}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    justifyContent: 'center',
  },
});

export default DrinkCarousel;
