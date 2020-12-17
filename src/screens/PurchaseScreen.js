import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Button, ToggleButton} from 'react-native-paper';

const PurchaseScreen = (props) => {
  const params = props.route.params;
  const drinkName = params.drinkName;
  const breweryName = params.breweryName;
  const price = params.price;

  const [value, setValue] = useState('two');

  const onPress = () => {
    // TODO create orderItem
    props.navigation.goBack();
  };

  return (
    <View>
      <Text>HOW MANY WOULD YOU LIKE?</Text>
      <Text>
        {breweryName} - {drinkName}
      </Text>
      <ToggleButton.Row
        onValueChange={(value) => setValue(value)}
        value={value}>
        <ToggleButton
          icon="numeric-2-box-outline"
          value="two"
          color="#6200EE"
        />
        <ToggleButton
          icon="numeric-4-box-outline"
          value="four"
          color="#6200EE"
        />
        <ToggleButton
          icon="numeric-6-box-outline"
          value="six"
          color="#6200EE"
        />
      </ToggleButton.Row>
      {value === 'two' && <Text>Price: {price * 2}</Text>}
      {value === 'four' && <Text>Price: {price * 4}</Text>}
      {value === 'six' && <Text>Price: {price * 6}</Text>}
      <Button mode="contained" onPress={onPress}>
        Gimme!
      </Button>
    </View>
  );
};
export default PurchaseScreen;
