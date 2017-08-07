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

const sourceIcon = require('../../assets/images/gain-icon.png');

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
        <View style={styles.welcomeContainer}>
          <Image source={sourceIcon} style={styles.welcomeImage} />
        </View>
        <View>
          <Text style={styles.getStartedText}>You should use this card</Text>
        </View>
        <View>
          <CardSlider
            key={'carousel-entry-0'}
            even={false}
            id={0}
            {...this.props.navigation.state.params}
          />
        </View>
      </View>
    );
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  welcomeImage: {
    width: 150,
    height: 75,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 23,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default CardMatchScreen;
