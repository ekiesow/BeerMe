import React from 'react';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const MyCard = (props) => (
  <Card style={props.style}>
    <Card.Title
      title="Card Title"
      subtitle="Card Subtitle"
      left={LeftContent}
    />
    <Card.Content>
      <Title>{props.title}</Title>
      <Paragraph>{props.content}</Paragraph>
    </Card.Content>
    <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);

export default MyCard;
