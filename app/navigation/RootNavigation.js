import { StackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';

const SimpleAppNavigator = StackNavigator({
  Home: { screen: HomeScreen },
});

export default SimpleAppNavigator;
