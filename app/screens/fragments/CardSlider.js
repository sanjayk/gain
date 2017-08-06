import React from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class CardSlider extends React.Component {
  static propTypes = {
    productName: PropTypes.string,
    productIssuer: PropTypes.string,
    cardArtUrl: PropTypes.string,
    even: PropTypes.bool,
    card: PropTypes.object,
  };

    static defaultProps = {
      productName: '',
      productIssuer: '',
      cardArtUrl: '',
      even: false,
      card: {},
    };

    render() {
      const { productName, productIssuer, cardArtUrl, even } = this.props.card;
      return (
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.slideInnerContainer}
        >
          <View style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>
            <Image
              source={{ uri: cardArtUrl }}
              style={styles.image}
            />
            <View style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]} />
          </View>
          <View style={[styles.textContainer, even ? styles.textContainerEven : {}]}>
            <Text style={styles.title}>
              { productName }
            </Text>
            <Text
              style={[styles.subtitle, even ? styles.subtitleEven : {}]}
              numberOfLines={2}
            >{ productIssuer }</Text>
          </View>
        </TouchableOpacity>
      );
    }
}

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideHeight = viewportHeight * 0.4;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + (itemHorizontalMargin * 2);

const entryBorderRadius = 8;

const styles = StyleSheet.create({
  slideInnerContainer: {
    width: itemWidth,
    height: slideHeight,
    paddingHorizontal: itemHorizontalMargin,
    paddingBottom: 18, // needed for shadow
  },
  imageContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: entryBorderRadius,
    borderTopRightRadius: entryBorderRadius,
  },
  imageContainerEven: {
    backgroundColor: 'black',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    borderRadius: Platform.OS === 'ios' ? entryBorderRadius : 0,
    borderTopLeftRadius: entryBorderRadius,
    borderTopRightRadius: entryBorderRadius,
  },
  // image's border radius is buggy on ios; let's hack it!
  radiusMask: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: entryBorderRadius,
    backgroundColor: 'white',
  },
  radiusMaskEven: {
    backgroundColor: 'black',
  },
  textContainer: {
    justifyContent: 'center',
    paddingTop: 20 - entryBorderRadius,
    paddingBottom: 20,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderBottomLeftRadius: entryBorderRadius,
    borderBottomRightRadius: entryBorderRadius,
  },
  textContainerEven: {
    backgroundColor: 'black',
  },
  title: {
    color: 'black',
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  subtitle: {
    marginTop: 6,
    color: 'gray',
    fontSize: 12,
    fontStyle: 'italic',
  },
  subtitleEven: {
    color: 'rgba(255, 255, 255, 0.7)',
  },
});
