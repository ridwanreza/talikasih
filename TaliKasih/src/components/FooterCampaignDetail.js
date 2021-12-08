import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';

const FooterCampaignDetail = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.shareContainer}>
        <Feather name="share" style={styles.shareIcon} />
        <Text style={styles.shareText}>SHARE</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>DONATE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FooterCampaignDetail;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  buttonContainer: {
    width: wp('55%'),
    height: hp('7.5%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A43F3C',
  },
  shareContainer: {
    width: wp('45%'),
    height: hp('7.5%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  buttonText: {
    fontFamily: 'Nunito-Bold',
    fontSize: hp('2.5%'),
    color: '#FFFFFF',
  },
  shareText: {
    fontFamily: 'Nunito-Bold',
    fontSize: hp('2.5%'),
    color: '#1D94A8',
    marginLeft: 10,
  },
  shareIcon: {
    fontFamily: 'Nunito-Bold',
    fontSize: hp('4%'),
    color: '#1D94A8',
  },
});
