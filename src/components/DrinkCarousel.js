import {API, graphqlOperation} from 'aws-amplify';
import React, {useEffect, useState} from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {listDrinks} from '../../graphql/queries';
import MyCard from './MyCard';

const {width: screenWidth} = Dimensions.get('window');
const ITEM_WIDTH = screenWidth - 60;
const ITEM_HEIGHT = screenWidth - 60;

// const drinks = [
//   {
//     drinkName: 'Double Dry Hopped Green City',
//     breweryName: 'Other Half Brewing Co.',
//     content: "Try this beer! It's great!",
//   },
//   {
//     drinkName: 'Double Scatterbrain DDH W/ Citra',
//     breweryName: 'Bearded Iris Brewing',
//     content: "Try this beer! It's even better!",
//   },
//   {
//     drinkName: 'Prickle My Fancy Slushy',
//     breweryName: '903 Brewers',
//     content: "Try this beer! It's great!",
//   },
// ];

const initialState = [{drinkName: '', breweryName: '', description: ''}];

const DrinkCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [drinks, setDrinks] = useState(initialState);

  useEffect(() => {
    fetchDrinks();
  }, []);

  async function fetchDrinks() {
    try {
      const drinkData = await API.graphql(graphqlOperation(listDrinks));
      const drinks = [drinkData.data.listDrinks.items];
      setDrinks(drinks);
    } catch (err) {
      confirm.log('error fetching drinks');
    }
  }

  const renderItem = ({item, index}) => {
    return (
      <View key={index} style={styles.container}>
        <MyCard data={item} style={styles.card} />
        <Pagination
          dotsLength={drinks.length}
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
        data={drinks}
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
