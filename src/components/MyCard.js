import React from 'react';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

const MyCard = (props) => (
  <Card style={props.style}>
    <Card.Cover
      source={{uri: 'https://picsum.photos/700'}}
      style={styles.cardCover}
    />
    <Card.Title
      title={props.data.drinkName}
      subtitle={props.data.breweryName}
      //   left={LeftContent}
    />
    <Card.Content>
      {/* <Title>{props.title}</Title> */}
      <Paragraph>{props.data.content}</Paragraph>
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
});

export default MyCard;