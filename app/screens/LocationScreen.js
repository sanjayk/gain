/* eslint no-console: 0 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import BackButton from './fragments/BackButton';


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
      <View style={styles.container}>
        <View style={styles.signupWrap}>
          <Text>
            <Text style={styles.accountText}>Initial position: </Text>
            {JSON.stringify(this.state.initialPosition)}
          </Text>
        </View>
        <View style={styles.signupWrap}>
          <Text>
            <Text style={styles.accountText}>Current position: </Text>
            {JSON.stringify(this.state.lastPosition)}
          </Text>
        </View>
      </View>
    );
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  signupWrap: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    padding: 20,
  },
  accountText: {
    color: '#D8D8D8',
  },
});

export default GeolocationExample;
