import React from 'react';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {Dimensions, StyleSheet, View} from 'react-native';

const {width, height} = Dimensions.get('window');
// const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const MyCard = (props) => (
  <View style={styles.container}>
    <Card style={styles.card}>
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
  </View>
);

const styles = StyleSheet.create({
  container: {
    height,
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: height * 0.6,
    width: width * 0.6,
    justifyContent: 'center',
  },
  cardActions: {
    justifyContent: 'center',
  },
  cardCover: {
    resizeMode: 'cover',
  },
});

export default MyCard;
