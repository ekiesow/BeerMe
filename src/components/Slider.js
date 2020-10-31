import React, {useState} from 'react';
import {View, ScrollView, Dimensions, Text, StyleSheet} from 'react-native';
import MyCard from './MyCard';

const {width} = Dimensions.get('window');
const height = width; // 60%

const Slider = (props) => {
  const [active, isActive] = useState(0);

  change = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== active) {
      isActive(slide);
    }
  };

  return (
    <View style={style.container}>
      <ScrollView
        pagingEnabled
        horizontal
        onScroll={change}
        showsHorizontalScrollIndicator={false}
        style={style.scroll}>
        {props.cards.map((card, index) => (
          <MyCard
            key={index}
            title={card.title}
            content={card.content}
            style={card.style}
          />
        ))}
      </ScrollView>
      <View style={style.pagination}>
        {props.cards.map((i, k) => (
          <Text
            key={k}
            style={k == active ? style.pagingActiveText : style.pagingText}>
            ⬤
          </Text>
        ))}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: 50,
    width,
    height,
  },
  scroll: {
    width,
    height,
  },
  card: {
    width,
    height,
    // resizeMode: 'cover',
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  pagingText: {
    fontSize: width / 30,
    color: '#666',
    margin: 3,
  },
  pagingActiveText: {
    fontSize: width / 30,
    color: 'black',
    margin: 3,
  },
});

export default Slider;
