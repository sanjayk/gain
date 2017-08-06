import { StackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import GPACScreen from '../screens/GPACScreen';

const AppNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: false,
    },
  },
  Location: {
    screen: GPACScreen,
  },
});

export default AppNavigator;
