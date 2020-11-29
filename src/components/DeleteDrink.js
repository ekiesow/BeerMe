import {API, Storage} from 'aws-amplify';
import React from 'react';
import {Alert} from 'react-native';
import {IconButton} from 'react-native-paper';

import {deleteDrink} from '../../graphql/mutations';

const DeleteDrink = (props) => {
  const drink = props.data;

  async function handleDeleteDrink() {
    const input = {
      id: drink.id,
      createdAt: drink.createdAt,
    };

    try {
      // Remove drink from Drink table
      await API.graphql({
        query: deleteDrink,
        variables: {input: input},
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      });

      // Delete drink's image from S3
      // slice string to remove 'public/' prefix
      await Storage.remove(drink.fileKey.slice(7))
        .then((result) => console.log('Removed file: ', JSON.stringify(result)))
        .catch((err) => console.log('Error removing image from S3: ', err));
    } catch (err) {
      console.log('Delete Drink Error: ', err);
    }
  }

  const confirmDelete = () => {
    console.log('Delete Pressed');
    Alert.alert(
      'Confirm Delete',
      "Are you sure you want to delete\n'" + drink.drinkName + "'?",
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: handleDeleteDrink},
      ],
      {cancelable: false},
    );
  };

  return <IconButton icon="delete" color="#6200EE" onPress={confirmDelete} />;
};
export default DeleteDrink;
