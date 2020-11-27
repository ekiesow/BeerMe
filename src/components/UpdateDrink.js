import React from 'react';
import {IconButton} from 'react-native-paper';

import {updateDrink} from '../../graphql/mutations';

const UpdateDrink = () => {
  return (
    <IconButton
      icon="pencil"
      color="#3F51B5"
      onPress={() => console.log('Edit Pressed')}
    />
  );
};
export default UpdateDrink;
