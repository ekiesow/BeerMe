import React from 'react';
import {IconButton} from 'react-native-paper';

const UpdateDrink = (props) => {
  return (
    <IconButton
      icon="pencil"
      color="#3F51B5"
      onPress={() =>
        props.nav.navigate('Update Drink', {
          data: props.data,
        })
      }
    />
  );
};
export default UpdateDrink;
