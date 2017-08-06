import React from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CardSlider from './fragments/CardSlider';

const CardMatchScreen = React.createClass({
  propTypes: {
    productName: PropTypes.string,
    productIssuer: PropTypes.string,
    cardArtUrl: PropTypes.string,
    even: PropTypes.bool,
    card: PropTypes.object,
  },

  getDefaultProps() {
    return {
      productName: '',
      productIssuer: '',
      cardArtUrl: '',
      even: false,
      card: {},
    };
  },

  render() {
    return (
      <View style={styles.container}>
        <CardSlider
          key={'carousel-entry-0'}
          even={false}
          id={0}
          {...this.props.navigation.state.params}
        />
      </View>
    );
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
});

export default CardMatchScreen;
