import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';


export const Best = (props: any) => {

  return (
    <View
      style={{
        width: 300,
        height: 150,
        elevation: 2,
        margin: 2,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius:10,
        marginBottom:50
      }}>

        <TouchableOpacity
        onPress={()=>props.navigation.navigate("Detail")}>
      <ImageBackground

      source={props.src}
      style={{
          height:150,
          width:300,
          borderRadius:10,
          backgroundColor:'#00f',
          opacity:0.7,
          paddingHorizontal:10,
      }}
      >
          <Text
          style={{
              color:'#fff',
              opacity:1,
              fontFamily:'Vegan',
              fontSize:20
          }}
          >
              {props.name}
          </Text>
          <Text
          style={{
              color:'#ff0',
              opacity:1,
              fontFamily:'normal',
              fontSize:25,
              marginTop:0,
              fontWeight:'bold'
          }}
          >
              {props.price}
          </Text>
      </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};
