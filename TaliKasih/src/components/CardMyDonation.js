import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CardMyDonation = ({data, navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>{data.donateTime}</Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('CampaignDetails', {
            campaignId: data.campaign.id,
          })
        }>
        <Text style={styles.campaignTitle}>{data.campaign?.title}</Text>
      </TouchableOpacity>
      <Text style={styles.donationValueText}>{`${data.jumlahDonasi}`}</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.donationMessage}>{`"${data.message}"`}</Text>
      </ScrollView>
    </View>
  );
};

export default CardMyDonation;

const styles = StyleSheet.create({
  container: {
    width: wp('90%'),
    height: hp('27%'),
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    elevation: 2,
    padding: 10,
    marginBottom: 15,
    overflow: 'hidden',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 8,
  },
  timeText: {
    fontSize: hp('1.7%'),
    fontFamily: 'Nunito-Regular',
    color: '#9F9F9F',
  },
  campaignTitle: {
    fontSize: hp('2.3%'),
    fontFamily: 'Nunito-Bold',
    color: '#000000',
    textDecorationLine: 'underline',
    lineHeight: hp('2.6%'),
    marginBottom: 5,
  },
  donationValueText: {
    fontSize: hp('2.8%'),
    fontFamily: 'Nunito-Bold',
    color: '#1D94A8',
    marginBottom: 5,
  },
  donationMessage: {
    fontSize: hp('1.7%'),
    fontFamily: 'Nunito-Regular',
    color: '#000000',
    overflow: 'scroll',
  },
});
