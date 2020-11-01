import React, {useState} from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import MyCard from './MyCard';

const {width: screenWidth} = Dimensions.get('window');
const ITEM_WIDTH = screenWidth - 60;
const ITEM_HEIGHT = screenWidth - 60;

const DrinkCarousel = (props) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const renderItem = ({item, index}) => {
    return (
      <View key={index} style={styles.container}>
        <MyCard data={item} style={styles.card} />
        <Pagination
          dotsLength={props.data.length}
          activeDotIndex={activeSlide}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 8,
            backgroundColor: 'rgba(0, 0, 0, 0.60)',
          }}
          inactiveDotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 8,
            backgroundColor: 'rgba(0, 0, 0, 0.20)',
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.8}
        />
      </View>
    );
  };

  return (
    <>
      <Carousel
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={ITEM_WIDTH}
        itemHeight={ITEM_HEIGHT}
        data={props.data}
        renderItem={renderItem}
        style={styles.carousel}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
    </>
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
