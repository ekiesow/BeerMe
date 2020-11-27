import {API} from 'aws-amplify';
import React, {useEffect, useState} from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {listDrinks} from '../../graphql/queries';
import {
  onCreateDrink,
  onDeleteDrink,
  onUpdateDrink,
} from '../../graphql/subscriptions';
import MyCard from './MyCard';

const {width: screenWidth} = Dimensions.get('window');
const ITEM_WIDTH = screenWidth - 60;
const ITEM_HEIGHT = screenWidth - 60;

const initialState = [
  {
    id: '',
    drinkName: '',
    drinkStyle: '',
    abv: '',
    breweryName: '',
    breweryLocation: '',
    description: '',
    price: '',
    file: {bucket: '', region: '', key: ''},
    fileKey: '',
  },
];

const DrinkCarousel = (props) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [drinks, setDrinks] = useState(initialState);
  // setDrinks({drinks.filter(drink => drink.drinkStyle === 'IPA'), ...drinks}); // TODO filter drinks by style

  useEffect(() => {
    fetchDrinks();

    createDrinkListener = API.graphql({
      query: onCreateDrink,
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    }).subscribe({
      next: () => {
        fetchDrinks();
      },
    });

    updateDrinkListener = API.graphql({
      query: onUpdateDrink,
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    }).subscribe({
      next: () => {
        fetchDrinks();
      },
    });

    deleteDrinkListener = API.graphql({
      query: onDeleteDrink,
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    }).subscribe({
      next: () => {
        fetchDrinks();
      },
    });

    return () => {
      createDrinkListener.unsubscribe();
      updateDrinkListener.unsubscribe();
      deleteDrinkListener.unsubscribe();
    };
  }, []);

  async function fetchDrinks() {
    try {
      const drinkData = await API.graphql({
        query: listDrinks,
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      });
      const drinkItems = drinkData.data.listDrinks.items;
      if (drinkItems) setDrinks(drinkItems);
    } catch (err) {
      console.log('error fetching drinks', err);
    }
  }

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.container}>
        <MyCard key={index} data={item} admin={props.admin} nav={props.nav} />
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
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default DrinkCarousel;
