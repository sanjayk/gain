import { StackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import GPACScreen from '../screens/GPACScreen';
import CardMatchScreen from '../screens/CardMatchScreen';

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
  CardMatch: {
    screen: CardMatchScreen,
  },
});

export default AppNavigator;
