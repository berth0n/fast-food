import React from 'react';
import { Image, Text, View } from 'react-native';

export const New = (props) => {
  return (
    <View
      style={{
        width: 270,
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 2,
        borderRadius: 10,
        margin: 2,
        backgroundColor: '#fff',
      }}>
      <Image
        source={props.src}
        style={{
          height: 80,
          width: 120,
          borderRadius: 10,
        }}
      />
      <View
        style={{
          padding: 10,
          margin: 2,
          width: 150,
          height: '100%',
        }}>
        <Text>{props.description}</Text>
      </View>
    </View>
  );
};
