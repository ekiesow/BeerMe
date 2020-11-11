import React, {useEffect, useRef} from 'react';
import {View, StyleSheet} from 'react-native';
import {API} from 'aws-amplify';
import {useForm, Controller} from 'react-hook-form';

import {createDrink} from '../../graphql/mutations';
import {Button, TextInput} from 'react-native-paper';

const AdminScreen = () => {
  const {control, errors, handleSubmit} = useForm({
    defaultValues: {
      abv: '',
      breweryLocation: '',
      breweryName: '',
      description: '',
      drinkName: '',
      drinkStyle: '',
      price: 0,
    },
  });

  const abvRef = useRef();
  const breweryLocationRef = useRef();
  const breweryNameRef = useRef();
  const descriptionRef = useRef();
  const drinkNameRef = useRef();
  const drinkStyleRef = useRef();
  const priceRef = useRef();

  console.log('errors', errors);

  async function onSubmit(data) {
    console.log(data);
    // try {
    //   await API.graphql({
    //     query: createDrink,
    //     variables: {input: data},
    //     authMode: 'AMAZON_COGNITO_USER_POOLS',
    //   });
    // } catch (err) {
    //   console.log('Error creating drink: ', err);
    // }
  }

  return (
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
    flex: 2,
  },
});

export default AdminScreen;
