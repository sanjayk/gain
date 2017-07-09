/* eslint no-console: 0 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


const GeolocationExample = React.createClass({
  watchID: (null: ?number),

  getInitialState() {
    return {
      initialPosition: 'unknown',
      lastPosition: 'unknown',
    };
  },

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      initialPosition => this.setState({ initialPosition }),
      error => alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
    this.watchID = navigator.geolocation.watchPosition((lastPosition) => {
      this.setState({ lastPosition });
    });
  },

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  },

  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text>
            <Text style={styles.title}>Initial position: </Text>
            {JSON.stringify(this.state.initialPosition)}
          </Text>
        </View>
        <View style={styles.container}>
          <Text>
            <Text style={styles.title}>Current position: </Text>
            {JSON.stringify(this.state.lastPosition)}
          </Text>
        </View>
      </View>
    );
  },
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  title: {
    fontWeight: '500',
  },
});

export default GeolocationExample;
