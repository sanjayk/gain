import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import { connect } from 'react-redux';
import { load as loadMyCards } from '../ducks/mycards';
import { getAndSetCurrentLocation } from '../ducks/location';
import CardSlider from './fragments/CardSlider';
//import GeolocationExample from './LocationScreen';
import LocationButton from './fragments/LocationButton';

const sourceIcon = require('../../assets/images/gain-icon.png');

export class HomeScreen extends React.Component {
  static defaultProps = {
    load: this.load,
    geoLocation: this.geoLocation,
    position: {},
    myCards: {},
    navigation: {},
  };

  static propTypes = {
    load: PropTypes.func,
    geoLocation: PropTypes.func,
    position: PropTypes.object,
    myCards: PropTypes.object,
    navigation: PropTypes.object,
  };

  componentDidMount() {
    this.props.load();
    this.props.geoLocation();
  }

  getSlides(entries) {
    if (!entries) {
      return false;
    }
    return entries.map((entry, index) => (
      <CardSlider
        key={`carousel-entry-${entry.id}`}
        even={(entry.id) % 2 === 0}
        id={index}
        {...entry}
      />
    ));
  }

  get loadCarouselWithCards() {
    return (
      <Carousel
        sliderWidth={300}
        itemWidth={300}
        firstItem={0}
        inactiveSlideScale={0.94}
        inactiveSlideOpacity={0.6}
        enableMomentum={false}
        showsHorizontalScrollIndicator={false}
        snapOnAndroid
        removeClippedSubviews={false}
      >
        {this.getSlides(this.props.myCards.cards)}
      </Carousel>
    );
  }
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.welcomeContainer}>
          <Image source={sourceIcon} style={styles.welcomeImage} />
        </View>

        <View style={styles.getStartedContainer}>
          <Text style={styles.getStartedText}>
            Your Cards
          </Text>
          <View style={[styles.cardContainer]}>
            { this.loadCarouselWithCards }
          </View>
        </View>

        <View style={styles.locationContainer}>
          {/* <GeolocationExample /> */}
          <LocationButton navigation={this.props.navigation} screenProps={this.props.position} />
        </View>

        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>
            Sanjay You have 2 Cards in your wallet.
          </Text>
        </View>
      </View>
    );
  }
}

export function mapStateToProps(state) {
  return {
    myCards: state.mycards,
    position: state.location,
  };
}

const mapDispatchToProps = dispatch => ({
  load: () => dispatch(loadMyCards()),
  geoLocation: () => dispatch(getAndSetCurrentLocation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  locationContainer: {
    marginTop: 10,
    marginBottom: 20,
    width: 350,
    alignItems: 'center',
  },
  cardContainer: {
    height: 250,
  },
  welcomeImage: {
    width: 150,
    height: 75,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 23,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          height: -3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
});
