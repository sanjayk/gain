import { StackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import { GooglePlacesAutocompleteScreen } from '../screens/GooglePlacesAutoCompleteScreen';

const AppNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: false,
    },
  },
  Location: {
    screen: GooglePlacesAutocompleteScreen,
  },
});

export default AppNavigator;
