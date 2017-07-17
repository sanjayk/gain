import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native';

const LocationButton = ({ navigation, routeParams }) => (
  <Button
    title={'Open Location Screen'}
    onPress={() => navigation.navigate('Location', { routeParams })}
  />
);

LocationButton.defaultProps = {
  load: this.load,
  myCards: {},
  navigation: {},
  routeParams: {
    placeholder: 'Enter Location',
    minLength: 2,
    autoFocus: false,
    returnKeyType: 'default',
    fetchDetails: true,
    predefinedPlacesDescription: {
      color: '#1faadb',
    },
    currentLocation: false,
  },
};

LocationButton.propTypes = {
  navigation: PropTypes.object.isRequired,
  routeParams: PropTypes.object,
};


export default LocationButton;
