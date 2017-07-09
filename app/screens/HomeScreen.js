import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Carousel from 'react-native-snap-carousel';

const sourceIcon = require('../../assets/images/gain-icon.png');

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  static get example1() {
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
      />
    );
  }

  componentDidMount() {

  }

  getSlides(entries) {
    if (!this.entries) {
      return false;
    }

    return entries.map(entry => (
      <View key={`entry-${entry.card.id}`} style={styles.slide}>
        <Image
          source={{ uri: entry.card.card_art_url }}
          style={styles.cardImage}
        />
      </View>
    ));
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >

          <View style={styles.welcomeContainer}>
            <Image
              source={sourceIcon}
              style={styles.welcomeImage}
            />
          </View>


          <View style={styles.getStartedContainer}>

            <Text style={styles.getStartedText}>
              {/* Your Cards */}
            </Text>


            <View
              style={[
                styles.codeHighlightContainer1,
                styles.homeScreenFilename,
              ]}
            />

            <Text style={styles.getStartedText}>
              Sanjay You have 2 Cards in your wallet.
            </Text>
          </View>

          <View style={styles.helpContainer}>
            <TouchableOpacity
              style={styles.helpLink}
            >
              <Text style={styles.helpLinkText}>
                Help, it didn’t automatically reload!
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>
            Sanjay You have 2 Cards in your wallet.
          </Text>

          <View
            style={[styles.codeHighlightContainer, styles.navigationFilename]}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 40,
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
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
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
        shadowOffset: { height: -3 },
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
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
