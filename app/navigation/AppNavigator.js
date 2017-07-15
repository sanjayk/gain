import { StackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import { GooglePlacesAutocomplete } from '../screens/GooglePlacesAutoComplete';

const AppNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: false,
    },
  },
  Location: {
    screen: GooglePlacesAutocomplete,
  },
});

export default AppNavigator;
