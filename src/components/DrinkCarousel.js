import {API, graphqlOperation} from 'aws-amplify';
import React, {useEffect, useState} from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {searchDrinks} from '../../graphql/queries';
import {
  onCreateDrink,
  onDeleteDrink,
  onUpdateDrink,
} from '../../graphql/subscriptions';
import MyCard from './MyCard';

const {width: screenWidth} = Dimensions.get('window');
const ITEM_WIDTH = screenWidth - 60;
const ITEM_HEIGHT = screenWidth - 60;

const initialState = [{drinkName: '', breweryName: '', description: ''}];

const DrinkCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [drinks, setDrinks] = useState(initialState);

  useEffect(() => {
    fetchDrinks();
    setUpSubscription();
    console.log('use Effect is called');

    return () => {
      createDrinkListener.unsubscribe();
      updateDrinkListener.unsubscribe();
      deleteDrinkListener.unsubscribe();
    };
  }, []);

  function setUpSubscription() {
    createDrinkListener = API.graphql(
      graphqlOperation(onCreateDrink),
    ).subscribe({
      next: (drinkData) => {
        const newDrink = drinkData.value.data.onCreateDrink; // newly created drink
        const updatedDrinks = [newDrink, ...drinks];
        setDrinks(updatedDrinks);
      },
    });

    updateDrinkListener = API.graphql(
      graphqlOperation(onUpdateDrink),
    ).subscribe({
      next: (drinkData) => {
        const updatedDrink = drinkData.value.data.onUpdateDrink; // newly updated drink
        const index = drinks.findIndex((drink) => drink.id === updatedDrink.id);
        const updatedDrinks = [
          ...drinks.slice(0, index),
          updatedDrink,
          ...drinks.slice(index + 1),
        ];
        setDrinks(updatedDrinks);
      },
    });

    deleteDrinkListener = API.graphql(
      graphqlOperation(onDeleteDrink),
    ).subscribe({
      next: (drinkData) => {
        const deletedDrink = drinkData.value.data.onDeleteDrink; // newly deleted drink
        const updatedDrinks = drinks.filter(
          (drink) => drink.id !== deletedDrink.id,
        );
        setDrinks(updatedDrinks);
      },
    });
  }

  async function fetchDrinks() {
    try {
      const drinkData = await API.graphql({
        query: searchDrinks,
        sort: {field: 'createdAt', direction: 'desc'},
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      });
      const drinks = drinkData.data.searchDrinks.items;
      setDrinks(drinks);
    } catch (err) {
      console.log('error fetching drinks', err);
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
