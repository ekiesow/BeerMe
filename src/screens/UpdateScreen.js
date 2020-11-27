import React, {useRef} from 'react';
import {View, StyleSheet} from 'react-native';
import {API} from 'aws-amplify';
import {useForm, Controller} from 'react-hook-form';

import {updateDrink} from '../../graphql/mutations';
import {Button, TextInput} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';

const UpdateScreen = (props) => {
  const drink = props.route.params.data;

  const defaultData = {
    abv: drink.abv,
    breweryLocation: drink.breweryLocation,
    breweryName: drink.breweryName,
    description: drink.description,
    drinkName: drink.drinkName,
    drinkStyle: drink.drinkStyle,
    price: drink.price.toString(),
  };

  const {control, errors, handleSubmit} = useForm({
    defaultValues: defaultData,
  });

  const abvRef = useRef();
  const breweryLocationRef = useRef();
  const breweryNameRef = useRef();
  const descriptionRef = useRef();
  const drinkNameRef = useRef();
  const drinkStyleRef = useRef();
  const priceRef = useRef();

  console.log('errors', errors);

  const onSubmit = async (data) => {
    console.log('data: ', data);

    // create the input for the createDrink mutation
    const input = {
      id: drink.id,
      createdAt: drink.createdAt,
      ...data,
    };

    console.log('input: ', input);

    try {
      await API.graphql({
        query: updateDrink,
        variables: {input: input},
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      });
      // Go back to the Home Screen
      props.navigation.goBack();
    } catch (err) {
      console.log('Error creating drink: ', err);
    }
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.mainContainer}>
        <View style={styles.inputContainer}>
          <Controller
            name="breweryName"
            control={control}
            rules={{required: 'Brewery name is required.'}}
            onFocus={() => {
              // console.log('breweryNameRef', breweryNameRef);
              breweryNameRef.current.focus();
            }}
            render={(props) => (
              <TextInput
                {...props}
                ref={breweryNameRef}
                mode="outlined"
                label="Brewery Name"
                placeholder="Brewery Name"
                onChangeText={(val) => {
                  props.onChange(val);
                }}
              />
            )}
          />
        </View>
        <View style={styles.inputContainer}>
          <Controller
            name="breweryLocation"
            control={control}
            rules={{required: 'Brewery Location is required.'}}
            onFocus={() => {
              breweryLocationRef.current.focus();
            }}
            render={(props) => (
              <TextInput
                {...props}
                ref={breweryLocationRef}
                mode="outlined"
                label="Brewery Location"
                placeholder="Brewery Location"
                onChangeText={(val) => {
                  props.onChange(val);
                }}
              />
            )}
          />
        </View>
        <View style={styles.inputContainer}>
          <Controller
            name="drinkName"
            control={control}
            rules={{required: 'Drink name is required.'}}
            onFocus={() => {
              // console.log('drinkNameRef', drinkNameRef);
              drinkNameRef.current.focus();
            }}
            render={(props) => (
              <TextInput
                {...props}
                ref={drinkNameRef}
                mode="outlined"
                label="Drink Name"
                placeholder="Drink Name"
                onChangeText={(val) => {
                  props.onChange(val);
                }}
              />
            )}
          />
        </View>
        <View style={styles.inputContainer}>
          <Controller
            name="description"
            control={control}
            rules={{required: 'Description is required.'}}
            onFocus={() => {
              descriptionRef.current.focus();
            }}
            render={(props) => (
              <TextInput
                {...props}
                ref={descriptionRef}
                mode="outlined"
                label="Description"
                placeholder="Description"
                multiline={true}
                onChangeText={(val) => {
                  props.onChange(val);
                }}
              />
            )}
          />
        </View>
        <View style={styles.inlineContainer}>
          <View style={[styles.inputContainer, styles.inlineLeftContainer]}>
            <Controller
              name="drinkStyle"
              control={control}
              rules={{required: 'Drink Style is required.'}}
              onFocus={() => {
                drinkStyleRef.current.focus();
              }}
              render={(props) => (
                <TextInput
                  {...props}
                  ref={drinkStyleRef}
                  mode="outlined"
                  label="Drink Style"
                  placeholder="Drink Style"
                  onChangeText={(val) => {
                    props.onChange(val);
                  }}
                />
              )}
            />
          </View>
          <View style={[styles.inputContainer, styles.inlineMiddleContainer]}>
            <Controller
              name="abv"
              control={control}
              rules={{required: 'ABV is required.'}}
              onFocus={() => {
                abvRef.current.focus();
              }}
              render={(props) => (
                <TextInput
                  {...props}
                  ref={abvRef}
                  mode="outlined"
                  label="ABV"
                  placeholder="ABV"
                  onChangeText={(val) => {
                    props.onChange(val);
                  }}
                />
              )}
            />
          </View>
          <View style={[styles.inputContainer, styles.inlineRightContainer]}>
            <Controller
              name="price"
              control={control}
              rules={{required: 'Price is required.'}}
              onFocus={() => {
                priceRef.current.focus();
              }}
              render={(props) => (
                <TextInput
                  {...props}
                  ref={priceRef}
                  mode="outlined"
                  label="Price"
                  placeholder="Price"
                  onChangeText={(val) => {
                    props.onChange(val);
                  }}
                />
              )}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            value="Submit"
            mode="contained"
            onPress={handleSubmit(onSubmit)}>
            Submit
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 6,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  inputContainer: {
    paddingVertical: 6,
  },
  inlineContainer: {
    flex: 2,
    flexDirection: 'row',
  },
  inlineLeftContainer: {
    flex: 1,
    paddingRight: 6,
  },
  inlineMiddleContainer: {
    flex: 1,
    paddingHorizontal: 6,
  },
  inlineRightContainer: {
    flex: 1,
    paddingLeft: 6,
  },
  buttonContainer: {
    paddingVertical: 6,
  },
});

export default UpdateScreen;
