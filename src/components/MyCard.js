import React from 'react';
import {Button, Card, Paragraph} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import awsExports from '../../aws-exports';

const MyCard = (props) => {
  const drink = props.data;
  const BUCKET_NAME = awsExports.aws_user_files_s3_bucket;
  const BUCKET_REGION = awsExports.aws_user_files_s3_bucket_region;
  const url =
    'https://' +
    BUCKET_NAME +
    '.s3-' +
    BUCKET_REGION +
    '.amazonaws.com/' +
    drink.fileKey;

  return (
    <>
      <Card style={props.style}>
        {url ? (
          <Card.Cover source={{uri: url}} style={styles.cardCover} />
        ) : (
          <Card.Cover
            source={{uri: 'https://picsum.photos/700'}}
            style={styles.cardCover}
          />
        )}
        <Card.Title
          title={drink.drinkName}
          subtitle={
            drink.breweryName +
            ' - ' +
            drink.breweryLocation +
            '\n' +
            drink.drinkStyle +
            ' - ABV: ' +
            drink.abv +
            '%'
          }
          subtitleNumberOfLines={2}
          subtitleStyle={styles.subtitleStyle}
        />
        <Card.Content>
          {/* <Title>{props.title}</Title> */}
          <Paragraph>{drink.description}</Paragraph>
          <Paragraph>Price: ${drink.price}</Paragraph>
        </Card.Content>
        <Card.Actions style={styles.cardActions}>
          <Button>Let's Do It</Button>
        </Card.Actions>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  cardActions: {
    justifyContent: 'center',
  },
  cardCover: {
    resizeMode: 'cover',
  },
  subtitleStyle: {
    fontSize: 18,
  },
});

export default MyCard;
