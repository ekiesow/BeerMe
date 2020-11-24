import React, {useRef, useState} from 'react';
import {View, Image, StyleSheet, SafeAreaView} from 'react-native';
import {API, Storage} from 'aws-amplify';
import {useForm, Controller} from 'react-hook-form';
import ImagePicker from 'react-native-image-picker';
import awsExports from '../../aws-exports';

import {createDrink} from '../../graphql/mutations';
import {Button, TextInput} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';

const AdminScreen = () => {
  const [imageResponse, setImageResponse] = useState(null);
  const [s3file, setS3File] = useState(null);

  const {control, errors, handleSubmit} = useForm({
    defaultValues: {
      abv: '',
      breweryLocation: '',
      breweryName: '',
      description: '',
      drinkName: '',
      drinkStyle: '',
      price: '',
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

  const onSubmit = async (data) => {
    console.log('data: ', data);
    console.log('s3file: ', s3file);

    // create the input for the createDrink mutation
    const input = {
      ...data,
      file: s3file,
      fileKey: s3file.key,
    };

    console.log('input: ', input);

    try {
      await API.graphql({
        query: createDrink,
        variables: {input: input},
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      });
    } catch (err) {
      console.log('Error creating drink: ', err);
    }
  };

  const selectImage = () => {
    const options = {
      mediaType: 'photo',
      includeBase94: false,
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.uri) {
        console.log('fileName: ', response.path);
        console.log('path: ', response.path);
        console.log('uri: ', response.uri);
        console.log('mime: ', response.type);
        setImageResponse(response);
        // upload the submitted image to S3 and create file object
        uploadToStorage(response);
      }
    });
  };

  const uploadToStorage = async (imageResponse) => {
    try {
      const response = await fetch(imageResponse.uri);
      const blob = await response.blob();

      await Storage.put(imageResponse.fileName, blob, {
        contentType: imageResponse.type,
      }).then((result) => {
        console.log('key: ', result.key);

        // create file object to store in DB
        const file = {
          bucket: awsExports.aws_user_files_s3_bucket,
          region: awsExports.aws_user_files_s3_bucket_region,
          key: 'public/' + result.key,
        };
        console.log('file: ', file);
        setS3File(file);
      });
    } catch (err) {
      console.log('S3 put error: ', err);
    }
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.mainContainer}>
        {imageResponse && (
          <View style={{paddingTop: 12, paddingBottom: 6}}>
            <Image
              style={{width: 200, height: 200}}
              source={{uri: imageResponse.uri}}
            />
          </View>
        )}
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
            icon="image"
            onPress={selectImage}>
            Choose Image
          </Button>
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

export default AdminScreen;
