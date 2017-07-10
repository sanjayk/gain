import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-native';
import { NavigationActions } from 'react-navigation';

const LocationButton = ({ locationScreen }) => (
  <Button
    title={'Open Location Screen'}
    onPress={locationScreen}
  />
);

LocationButton.propTypes = {
  locationScreen: PropTypes.func.isRequired,
};


const mapDispatchToProps = dispatch => ({
  locationScreen: () =>
    dispatch(NavigationActions.navigate({ routeName: 'Location' })),
});

export default connect(null, mapDispatchToProps)(LocationButton);
