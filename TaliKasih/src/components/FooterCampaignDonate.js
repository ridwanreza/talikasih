import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const FooterButton = props => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        if (!props.selected) {
          Alert.alert(
            'TaliKasih',
            'Please fill the required data above and select payment!',
          );
        } else if (props.selected) {
          props.navigation.navigate('Main', {screen: 'Donate'});
        }
      }}>
      <Text style={styles.buttonText}>{props.name}</Text>
    </TouchableOpacity>
  );
};

export default FooterButton;

const styles = StyleSheet.create({
  container: {
    width: wp('100%'),
    height: hp('7.5%'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A43F3C',
  },
  buttonText: {
    fontFamily: 'Nunito-Bold',
    fontSize: hp('2.5%'),
    color: '#FFFFFF',
  },
});
