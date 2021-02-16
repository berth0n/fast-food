import React from 'react';

import {View, Text, StyleSheet, Image} from 'react-native';
import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  wrapper: {

  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex:1,
  },
});

export const SwiperComponent = (props: any) => {
  return (
    <Swiper
      style={styles.wrapper}
      activeDotColor='#fff'
      activeDotStyle={{
          borderColor:'#000',
          borderWidth:1,
          width: 10,
          height: 10,
          borderRadius:10,
          marginBottom:15,
      }}
      dotStyle={{
        backgroundColor: '#000',
        width: 10,
        height: 10,
        borderRadius:10,
        marginBottom:15,
      }}>
      <View style={styles.slide}>
        <Image
          source={require('../ressources/patisserie/poulet.jpg')}
          style={{
            borderRadius:10,
            width: '100%',
            height: 300,
            paddingBottom:20,
          }}
        />
      </View>
      <View style={styles.slide}>
        <Image
          source={require('../ressources/patisserie/pizza-1.jpg')}
          style={{
            borderRadius:10,
            width: '100%',
            height: 300,
            paddingBottom:20,
          }}
        />
      </View>
      <View style={styles.slide}>
        <Image
          source={require('../ressources/patisserie/sambos.jpg')}
          style={{
            borderRadius:10,
            width: '100%',
            height: 300,
            paddingBottom:20,
          }}
        />
      </View>
    
    </Swiper>
  );
};
