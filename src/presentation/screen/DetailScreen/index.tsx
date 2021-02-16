import React from 'react';
import {
  ImageBackground,
  View,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import {SwiperComponent} from '../../../common/SwiperComponent';
import Stars from 'react-native-stars';

export const DetailScreen = (props: any) => {
  console.log('pros', props.navigation.state.key);
  return (
    <ScrollView
      style={{
        paddingHorizontal: 20,
        backgroundColor: '#fff',
      }}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          marginTop: 40,
          alignItems: 'center',

          justifyContent: 'space-between',
        }}>
        <View
          style={
            {
              //   width: '50%',
            }
          }>
          <TouchableOpacity
            onPress={() => {
              console.log('clic');
              props.navigation.navigate('Home');
            }}>
            <Image
              source={require('../../../ressources/icon/back.png')}
              style={{
                width: 35,
                height: 30,
              }}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={{
              fontFamily: 'AquareBold',
              fontSize: 22,
            }}>
            Fast Food
          </Text>
        </View>
        <View
          style={
            {
              // width: '50%',
              // alignItems: 'flex-end',
            }
          }>
          <Image
            source={require('../../../ressources/icon/bag1.png')}
            style={{
              width: 30,
              height: 30,
            }}
          />
        </View>
      </View>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          height: 350,
          backgroundColor: '#fff',
        }}>
        <View
          style={{
            marginTop: 50,
          }}>
          <View
            style={{
              width: 25,
              height: 25,
              backgroundColor: '#8f8a8a',
              borderWidth: 2,
              borderColor: '#fff',
              borderRadius: 5,
              elevation: 5,
            }}></View>
          <View
            style={{
              width: 25,
              height: 25,
              backgroundColor: '#3f3a3a',
              borderWidth: 2,
              borderColor: '#fff',
              borderRadius: 5,
              elevation: 5,
              marginVertical: 10,
            }}></View>
          <View
            style={{
              width: 25,
              height: 25,
              backgroundColor: '#cccccc',
              borderWidth: 2,
              borderColor: '#fff',
              borderRadius: 5,
              elevation: 5,
            }}></View>
        </View>
        <SwiperComponent />
      </View>
        <View
        style={{
          flexDirection:'row', 
          justifyContent:'flex-end',
          marginTop:-80,
          paddingVertical:20,
          paddingHorizontal:10,
        }}
        >
          <Image
            source={require('../../../ressources/icon/bookmark.png')}
            style={{
              height: 30,
              width: 40,
              
       
            }}
          />
        </View>
    </ScrollView>
  );
};
