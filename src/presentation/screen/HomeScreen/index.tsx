import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import {Best} from '../../../common/Best';
import {Couches} from '../../../common/Couches';
import {New} from '../../../common/New';

export const HomeScreen = (props) => {
  const {navigation} = props;
  return (
    <ScrollView
      style={{
        backgroundColor: '#fff',
        paddingHorizontal: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          marginTop: 40,
          alignItems: 'center',
          backgroundColor: '#fff',
        }}>
        <View
          style={{
            width: '50%',
            backgroundColor: '#fff',
          }}>
          <Text style={{fontFamily: 'AquareBold', fontSize: 22}}>
            FAST FOOD
          </Text>
        </View>
        <View style={{width: '50%', alignItems: 'flex-end', paddingRight: 10}}>
          <Image
            source={require('../../../ressources/icon/bag1.png')}
            style={{height: 30, width: 25}}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          marginTop: 30,
          alignItems: 'center',
          backgroundColor: '#fff',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            elevation: 2,
            width: '85%',
            backgroundColor: '#fff',
            paddingHorizontal: 20,
            height: 45,
            marginRight: 2,
            paddingRight: 1,
            marginLeft: 2,
            marginBottom: 1,
            borderRadius: 10,
          }}>
          <Image
            source={require('../../../ressources/icon/search.png')}
            style={{
              height: 30,
              width: 25,
            }}
          />
          <TextInput
            style={{
              paddingHorizontal: 20,
              fontSize: 12,
              width: '90%',
              backgroundColor: '#fff',
            }}></TextInput>
        </View>
        <View
          style={{
            paddingHorizontal: 10,
            elevation: 2,
            margin: 2,
            width: '13%',
            height: 45,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 5,
            borderRadius: 10,
            backgroundColor: '#fff',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Image
              source={require('../../../ressources/icon/filter.png')}
              style={{
                height: 35,
                width: 35,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 30,
        }}>
        <Text
          style={{
            fontSize: 22,
            color: '#4f4a4a',
          }}>
          Plats du jour
        </Text>
        <View
          style={{
            marginHorizontal: 5,
          }}></View>
        <Text
          style={{
            fontFamily: 'AquareLight',
            fontSize: 9,
            color: '#4f4a4a',
          }}>
          * Good Quality Items
        </Text>
      </View>
      <ScrollView horizontal showHorizontalScrollViewIndicator={false}>
        <Couches
          src={require('../../../ressources/patisserie/patisserie-1.jpg')}
          onPress={() => {
            alert('commender cette savoureuse patisserie');
          }}
          name="Gateau"
          description="Acheter ce gateau avec une remise de -50%"
          price={'15 000 Ar'}
        />
        <Couches
          src={require('../../../ressources/patisserie/fois-gras.jpeg')}
          onPress={() => {
            alert('commender cette savoureuse patisserie');
          }}
          name="Foie gras"
          description="Acheter cete Foie gras avec une remise de -50%"
          price={'20 000 Ar'}
        />
        <Couches
          src={require('../../../ressources/patisserie/patisserie-2.jpg')}
          onPress={() => {
            alert('commender cette savoureuse patisserie');
          }}
          name="Mortadelle"
          description="Acheter cette mortadelle avec une remise de -50%"
          price={'10 000 Ar'}
        />
      </ScrollView>
      <View
        style={{
          marginTop: 10,
          marginBottom: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 22,
          }}>
          Nouvelles plats
        </Text>
        <View
          style={{
            height: 4,
            width: 4,
            paddingHorizontal: 10,
          }}></View>
        <Text
          style={{
            fontFamily: 'AquareLight',
            fontSize: 9,
          }}>
          * Délicieux fruits de mer
        </Text>
      </View>
      <ScrollView horizontal>
        <New
          src={require('../../../ressources/patisserie/pizza-1.jpg')}
          description={'Pizza de qualité GM, pizza de quantité'}
        />
        <New
          src={require('../../../ressources/patisserie/pizza-2.jpeg')}
          description={'Pizza de qualité PM, pizza de quantité'}
        />
        <New
          src={require('../../../ressources/patisserie/hamburgeur-2.jpg')}
          description={'Hambergeur PM super'}
        />
        <New
          src={require('../../../ressources/patisserie/hamburgeur-1.jpg')}
          description={'Hambergeur GM super max'}
        />
      </ScrollView>
      <View
        style={{
          marginTop: 10,
          marginBottom: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 22,
          }}>
          Les plus vendus
        </Text>
        <View
          style={{
            height: 4,
            width: 4,
            paddingHorizontal: 10,
          }}></View>
        <Text
          style={{
            fontFamily: 'AquareLight',
            fontSize: 9,
          }}>
          * Délicieux fruits de mer
        </Text>
      </View>
      <ScrollView horizontal>
        <Best
          src={require('../../../ressources/patisserie/hamburgeur-1.jpg')}
          name={'Hambergeur'}
          price="8 000 Ar"
          navigation={props.navigation}

        />
        <Best
          src={require('../../../ressources/patisserie/poulet.jpg')}
          name={'Poulet'}
          price="10 000 Ar"
          navigation={props.navigation}
        />
        <Best
          src={require('../../../ressources/patisserie/sambos.jpg')}
          name={'Sambos'}
          price="3 000 Ar"
          navigation={props.navigation}
        />
      </ScrollView>
    </ScrollView>
  );
};
