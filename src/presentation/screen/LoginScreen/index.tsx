import React from 'react';
import {
  Image,
  LogBox,
  StatusBar,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Styles from './styles';
export const LoginScreen = (props: any) => {
  LogBox.ignoreAllLogs(true);
  return (
    <View>
      <View style={[Styles.fomrContainer, Styles.primaryBgColor]}>
        <StatusBar barStyle="light-content"></StatusBar>
        <View style={Styles.profile}>
          <Image
            style={Styles.profile}
            source={require('../../../ressources/images/profil.png')}
          />
        </View>
        <Text style={Styles.profileName}>RAOILISON Manitra Berthon</Text>
      </View>
      <View style={{padding: 20, height: '50%'}}>
        <View style={Styles.button}>
          <TouchableOpacity
           
            onPress={() => {
              alert(
                "My name is RAOILISON Manitra Berthon, I'm Telecom and Software Engeener",
              );
            }}>
            <Text>More information ...</Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.boxContainer}>
          <View style={Styles.wrapBox}>
            <View style={Styles.boxElement}>
              <TouchableOpacity
              onPress={()=>props.navigation.navigate("Home")}>
              <Text style={{fontFamily:'AquareNormal'}}>Profil</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={Styles.wrapBox}>
            <View style={Styles.boxElement}>
              <Text style={{fontFamily:'AquareNormal'}}>Experiences</Text>
            </View>
          </View>
          <View style={Styles.wrapBox}>
            <View style={Styles.boxElement}>
              <Text>Hobbies</Text>
            </View>
          </View>
          <View style={Styles.wrapBox}>
            <View style={Styles.boxElement}>
              <TouchableOpacity onPress={()=>console.log("project")}>
                <Text>Projects</Text>
              </TouchableOpacity>
 
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
