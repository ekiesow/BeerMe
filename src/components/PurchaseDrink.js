import React from 'react';
import {Button} from 'react-native-paper';

const PurchaseDrink = (props) => {
  function onPress() {
    props.nav.navigate('Purchase Drink', {
      breweryName: props.data.breweryName,
      drinkName: props.data.drinkName,
      price: props.data.price,
    });
  }

  return (
    <Button mode="outlined" onPress={onPress}>
      Let's Do It
    </Button>
  );
};
export default PurchaseDrink;
