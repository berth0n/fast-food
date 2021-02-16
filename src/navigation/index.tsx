import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Best } from '../common/Best';
import { DetailScreen } from '../presentation/screen/DetailScreen';
import { HomeScreen } from '../presentation/screen/HomeScreen';
import { LoginScreen } from '../presentation/screen/LoginScreen';
import { SmartPhoneScreen } from '../presentation/screen/SmartPhoneScreen';

const AppNavigator = createSwitchNavigator({
  Login: {
    screen: LoginScreen,
  },
  Home: {
    screen: HomeScreen,
  },
  Detail: {
    screen: DetailScreen,
  },
  Best: {
    screen: Best,
  },
  SmartPhone: {
    screen: SmartPhoneScreen,
  },
},
{
    initialRouteName: 'Login',
    defaultNavigationOptions:{headerShown:true,  headerTransparent: true}
}

);

export default createAppContainer(AppNavigator);
