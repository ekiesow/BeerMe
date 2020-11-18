import React, {useState} from 'react';
import {Button, Card, Paragraph} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {S3Image} from 'aws-amplify-react-native';

const MyCard = (props) => {
  const [url, setUrl] = useState(null);

  return (
    <>
      {props.data.file && (
        <S3Image
          hidden
          imgKey={props.data.file.key}
          onLoad={(url) => {
            console.log(url);
            setUrl(url);
          }}
        />
      )}
      <Card style={props.style}>
        {url ? (
          <Card.Cover source={{uri: {url}}} style={styles.cardCover} />
        ) : (
          <Card.Cover
            source={{uri: 'https://picsum.photos/700'}}
            style={styles.cardCover}
          />
        )}
        <Card.Title
          title={props.data.drinkName}
          subtitle={
            props.data.breweryName +
            ' - ' +
            props.data.breweryLocation +
            '\n' +
            props.data.drinkStyle +
            ' - ABV: ' +
            props.data.abv +
            '%'
          }
          subtitleNumberOfLines={2}
          subtitleStyle={styles.subtitleStyle}
        />
        <Card.Content>
          {/* <Title>{props.title}</Title> */}
          <Paragraph>{props.data.description}</Paragraph>
          <Paragraph>Price: ${props.data.price}</Paragraph>
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
