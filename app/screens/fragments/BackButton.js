
import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const backIcon = require('../../../assets/images/back.png');

const BackButton = () => (
  <View style={styles.headerContainer}>
    <View style={styles.headerIconView}>
      <TouchableOpacity style={styles.headerBackButtonView}>
        <Image
          source={backIcon}
          style={styles.backButtonIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  </View>
);
const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  headerIconView: {
    backgroundColor: 'grey',
    width: 400,
    height: 50,
    marginTop: 20,
  },
  headerBackButtonView: {
    width: 25,
    height: 25,
  },
  backButtonIcon: {
    width: 25,
    height: 25,
  },
});

export default BackButton;
