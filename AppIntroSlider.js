import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 'one',
    title: 'Scan, Pay & Enjoy!',
    text: 'Scan products you want to buy at your favorite store and pay by your phone & enjoy happy, friendly Shopping!',
    image: require('./assets/scan.png'), // đường dẫn tới ảnh bạn muốn hiển thị
    backgroundColor: '#59b2ab',
  },
  {
    key: 'two',
    title: 'Page 2',
    text: 'Description for the second page.',
    image: require('./assets/scan.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 'three',
    title: 'Page 3',
    text: 'Description for the third page.',
    image: require('./assets/scan.png'), // đường dẫn tới ảnh bạn muốn hiển thị
    backgroundColor: '#59b2ab',
  }
];

const AppIntroSliderComponent = () => {
  const _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  return (
    <AppIntroSlider renderItem={_renderItem} data={slides} />
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 250,
    height: 250,
    marginVertical: 20,
    marginBottom:60
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom:30
  },
  text: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom:90
  },
});

export default AppIntroSliderComponent;
