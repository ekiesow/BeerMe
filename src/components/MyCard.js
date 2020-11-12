import React from 'react';
import {Button, Card, Paragraph} from 'react-native-paper';
import {StyleSheet} from 'react-native';

const MyCard = (props) => (
  <Card style={props.style}>
    <Card.Cover
      source={{uri: 'https://picsum.photos/700'}}
      style={styles.cardCover}
    />
    <Card.Title
      title={props.data.drinkName}
      subtitle={
        props.data.breweryName +
        ', ' +
        props.data.breweryLocation +
        '\n' +
        props.data.drinkStyle +
        ' - ABV:' +
        props.data.abv
      }
      subtitleNumberOfLines={2}
      subtitleStyle={styles.subtitleStyle}
    />
    <Card.Content>
      {/* <Title>{props.title}</Title> */}
      <Paragraph>{props.data.description}</Paragraph>
    </Card.Content>
    <Card.Actions style={styles.cardActions}>
      <Button>Let's Do It</Button>
    </Card.Actions>
  </Card>
);

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
