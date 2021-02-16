import React, {useState} from 'react';
import {
  Image,
  PermissionsAndroid,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Ussd, {ussdEventEmitter} from 'react-native-ussd';
import SmsAndroid from 'react-native-get-sms-android';
import {useTheme} from 'react-navigation';

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    width: '100%',
  },
});
export const SmartPhoneScreen = (props: any) => {
  const [numberDial, setNumberDial] = useState('');
  const [message, setMessage] = useState('');
  const checkAuthorization = () => {
    let granted = PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.SEND_SMS,
      {
        title: 'FAHAZOANDALANA MANDEFA SMS',
        message:
          'Aktiveo ny alalanana mandefa sms mba hahafahanao mampiasa ity application ity',
      },
    );

    if (granted) {
      return true;
    } else {
      return false;
    }
  };

  const onChangeText = (text: string) => {
    setNumberDial(text);
  };
  const onSubmit = () => {
    console.log('dial');
    if (checkAuthorization()) {
      SmsAndroid.autoSend(
        numberDial,
        message,
        (fail) => {
          console.log('Failed with this error: ' + fail);
         
          alert("Tsy lasa ny hafatrao ")
        },
        (success) => {
            alert("Lasa soamantsara any amin'ny " +numberDial+" ny hafatrao")
            setNumberDial('')
            setMessage('')
          console.log('SMS sent successfully');
        },
      );
    }
  };

  React.useEffect(() => {
    const eventListener = ussdEventEmitter.addListener('ussdEvent', (event) => {
      console.log('d', event.ussdReply);
    });
  });
  return (
    <ScrollView style={styles.wrapper}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
            <Image
              source={require('../../../ressources/icon/back.png')}
              style={{
                width: 40,
                height: 30,
              }}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text>SMART PHONE</Text>
        </View>
        <View>
          <Image
            source={require('../../../ressources/icon/phone.png')}
            style={{
              width: 40,
              height: 30,
            }}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <View
          style={{
            width: '100%',
            elevation: 2,
            margin: 2,
            height: 45,
            backgroundColor: '#fff',
            borderRadius: 10,
          }}>
          <TextInput
            value={numberDial}
            placeholder={"Numéro destinataire"}
            keyboardType='number-pad'
            onChangeText={(text: string) => setNumberDial(text)}
            style={{
              width: '90%',
            }}></TextInput>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <View
          style={{
            width: '100%',
            elevation: 2,
            margin: 2,
            height: 105,
            backgroundColor: '#fff',
            borderRadius: 10,
         
          }}>
          <TextInput
            value={message}
            placeholder="Message"
            onChangeText={(text: string) => setMessage(text)}
            style={{
         
              width: '100%',
            
            }}></TextInput>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={{
            width: '50%',
            elevation: 2,
            margin: 2,
            flex: 1,
            height: 55,
            backgroundColor: '#fff',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
            
          }}
          onPress={() => onSubmit()}>
          <Image
            source={require('../../../ressources/icon/send.png')}
            style={{
              height: 45,
              width: 45,
              padding:20
            }}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
