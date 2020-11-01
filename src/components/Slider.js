import React, {useCallback, useEffect, useRef, useState} from 'react';
import {View, ScrollView, Dimensions, Text, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import MyCard from './MyCard';

const {width, height} = Dimensions.get('window');

const Pagination = (props, {index}) => {
  return (
    <View style={styles.pagination} pointerEvents="none">
      {props.data.map((_, i) => {
        return (
          <View
            key={i}
            style={[
              styles.paginationDot,
              index === i
                ? styles.paginationDotActive
                : styles.paginationDotInactive,
            ]}
          />
        );
      })}
    </View>
  );
};

const Slider = (props) => {
  //   const [index, setIndex] = useState(0);
  //   const indexRef = useRef(index);
  //   indexRef.current = index;

  //   const onScroll = useCallback((event) => {
  //     const cardSize = event.nativeEvent.layoutMeasurement.width;
  //     const index = event.nativeEvent.contentOffset.x / cardSize;
  //     const roundIndex = Math.round(index);

  //     const distance = Math.abs(roundIndex - index);

  //     // Prevent one pixel triggering setIndex in the middle
  //     // of the transition. With this we have to scroll a bit
  //     // more to trigger the index change.
  //     const isNoMansLand = 0.4 < distance;

  //     if (roundIndex !== indexRef.current && !isNoMansLand) {
  //       setIndex(roundIndex);
  //     }
  //   }, []);

  const [active, isActive] = useState(0);
  const onScroll = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== active) {
      isActive(slide);
    }
  };

  const flatListOptimizationProps = {
    initialNumToRender: 0,
    maxToRenderPerBatch: 1,
    removeClippedSubviews: true,
    scrollEventThrottle: 16,
    windowSize: 2,
    keyExtractor: useCallback((s) => String(s.id), []),
    getItemLayout: useCallback(
      (_, index) => ({
        index,
        length: width,
        offset: index * width,
      }),
      [],
    ),
  };

  const renderItem = useCallback(function renderItem({item}) {
    return <MyCard data={item} />;
  }, []);

  return (
    <>
      <FlatList
        data={props.data}
        style={styles.carousel}
        renderItem={renderItem}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        {...flatListOptimizationProps}
      />
      <Pagination data={props.data} index={active} />
    </>
  );
};

const styles = StyleSheet.create({
  slideImage: {width: width * 0.9, height: height * 0.7},
  slideTitle: {fontSize: 24},
  slideSubtitle: {fontSize: 18},
  pagination: {
    position: 'absolute',
    bottom: 8,
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2,
  },
  paginationDotActive: {backgroundColor: 'lightblue'},
  paginationDotInactive: {backgroundColor: 'gray'},
  carousel: {flex: 1},
});

export default Slider;
