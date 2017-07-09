import React from 'react';
import { Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return (
      <View>
        <Text>Hello, Navigation!</Text>
      </View>
    );
  }
}

const SimpleAppNavigator = StackNavigator({
  Home: { screen: HomeScreen },
});

export default SimpleAppNavigator;
