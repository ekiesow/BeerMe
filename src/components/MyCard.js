import React from 'react';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {StyleSheet} from 'react-native';

// const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const MyCard = (props) => (
  <Card style={styles.card}>
    <Card.Cover
      source={{uri: 'https://picsum.photos/700'}}
      style={styles.cardCover}
    />
    <Card.Title
      title={props.drinkName}
      subtitle={props.breweryName}
      //   left={LeftContent}
    />
    <Card.Content>
      {/* <Title>{props.title}</Title> */}
      <Paragraph>{props.content}</Paragraph>
    </Card.Content>
    <Card.Actions style={styles.cardActions}>
      <Button>Let's Do It</Button>
    </Card.Actions>
  </Card>
);

const styles = StyleSheet.create({
  card: {
    paddingTop: 50,
    paddingBottom: 30,
  },
  cardActions: {
    justifyContent: 'center',
  },
  cardCover: {
    resizeMode: 'cover',
  },
});

export default MyCard;
