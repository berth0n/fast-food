import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Best } from '../common/Best';
import { DetailScreen } from '../presentation/screen/DetailScreen';
import { HomeScreen } from '../presentation/screen/HomeScreen';
import { LoginScreen } from '../presentation/screen/LoginScreen';

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
},
{
    initialRouteName: 'Home',
    defaultNavigationOptions:{headerShown:true,  headerTransparent: true}
}

);

export default createAppContainer(AppNavigator);
