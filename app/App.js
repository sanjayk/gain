
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { Provider } from 'react-redux';

import AppNavigator from './navigation/AppNavigator';
import createStore from './ducks/create';
import ApiClient from './utilities/ApiClient';

const client = new ApiClient();
const store = createStore(client, {});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  renderLoadingMessage() {
    return (
      <View style={styles.loadingContainer}>
        <Text>Contacting Unsplash</Text>
      </View>
    );
  }

  renderResults() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </View>
    );
  }

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return this.renderLoadingMessage();
    }
    return this.renderResults();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

// export default App;
