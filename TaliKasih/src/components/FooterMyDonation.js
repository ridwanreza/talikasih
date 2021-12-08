import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const FooterMyDonation = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Main', {screen: 'Donate'})}>
        <Text style={styles.buttonText}>DONATE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FooterMyDonation;

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
