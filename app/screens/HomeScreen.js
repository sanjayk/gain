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

const sourceIcon = require('../../assets/images/gain-icon.png');

export class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    this.props.load();
  }

  getSlides(entries) {
    if (!entries) {
      return false;
    }
    return entries.map((entry, index) => (
      <View key={`entry-${entry.id}`} style={styles.slide}>
        <Image
          source={{
            uri: entry.card.card_art_url,
          }}
          style={styles.cardImage}
          id={index}
        />
      </View>
    ));
  }

  get example1() {
    return (
      <Carousel
        sliderWidth={300}
        itemWidth={300}
        firstItem={1}
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
          <View style={[styles.codeHighlightContainer1, styles.homeScreenFilename]}>
            {this.example1}
          </View>
          <Text style={styles.getStartedText}>
            Sanjay You have 2 Cards in your wallet.
          </Text>
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

HomeScreen.defaultProps = {
  load: this.load,
  myCards: {},
};

HomeScreen.propTypes = {
  load: PropTypes.func,
  myCards: PropTypes.object,
};

export function mapStateToProps(state) {
  return { myCards: state.mycards };
}

const mapDispatchToProps = dispatch => ({
  load: () => dispatch(loadMyCards()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 150,
    height: 75,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  cardImage: {
    width: 300,
    height: 150,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
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
