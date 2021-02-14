import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export const Couches = (props: any) => {
  return (
    <View>
  
        <View
          style={{
            width: 220,
            height: 300,
            elevation: 2,
            margin: 2,
            paddingTop: 10,
            backgroundColor: '#fff',
            borderRadius: 10,

            alignItems: 'center',
          }}>
          <Image
            source={props && props.src}
            style={{
              width: 200,
              height: 130,
              borderRadius: 10,
            }}
          />
          <View
            style={{
              marginTop: 1,
              width: '100%',
              padding: 10,
              flexDirection: 'row',
            }}>
            <Text style={{fontFamily: 'AquareNormal', fontSize: 15}}>
              {props && props.name}
            </Text>
            <View
              style={{
                borderRadius: 4,
                marginHorizontal: 5,
                height: 4,
                width: 4,
                color: '#f00',
              }}></View>
            <Text
              style={{
                fontFamily: 'normal',
                fontSize: 9,
                paddingBottom: 5,
                color: '#f00',
              }}>
              * Nouveau
            </Text>
          </View>
          <View style={{paddingHorizontal: 10, paddingTop: 2}}>
            <Text>{props && props.description}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              paddingHorizontal: 10,
              marginTop: 5,
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '80%',
               
              }}>
              <Text
                style={{
                  fontFamily: 'AquareBold',
                  fontSize: 22,
                }}>
                {props.price}
              </Text>
            </View>
            <View
              style={{
                width: '20%',
              
              // alignItems:'flex-end'
              }}>
                <TouchableOpacity
                onPress={ props && props.onPress}
                >

             
              <Image source={require('../ressources/icon/add.png')} 
              style={{
                width:40,
                height:40,
                // paddingLeft:78,
              
              }}
              />
                 </TouchableOpacity>
            </View>
          </View>
        </View>
   
    </View>
  );
};
