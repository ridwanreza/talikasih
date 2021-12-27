import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CardDonation = props => {
  return (
    <View style={styles.container}>
      <View style={styles.arrange}>
        <View style={styles.donatorContainer}>
          <Image
            source={{uri: props.data.user.image.replace(/\s+/g, '')}}
            style={styles.avatar}
          />
          <View style={{marginLeft: 10}}>
            <Text style={styles.amount}>{`${props.data.jumlahDonasi}`}</Text>
            <Text style={styles.donator}>{props.data.name}</Text>
          </View>
        </View>
        <Text style={styles.time}>{props.data.donateTime}</Text>
      </View>
      <Text style={styles.story}>{props.data.message}</Text>
    </View>
  );
};

export default CardDonation;

const styles = StyleSheet.create({
  container: {
    width: wp('80%'),
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    alignSelf: 'center',
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('4%'),
    elevation: 3,
    marginBottom: 15,
    overflow: 'hidden',
  },
  arrange: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  donatorContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  amount: {
    fontFamily: 'Nunito-Bold',
    fontSize: hp('2%'),
    color: '#1D94A8',
  },
  time: {
    fontFamily: 'Nunito-Regular',
    fontSize: hp('1.6%'),
    color: '#9F9F9F',
  },
  donator: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: hp('2%'),
    color: '#000000',
  },
  story: {
    fontFamily: 'Nunito-Regular',
    fontSize: hp('2.2%'),
    color: '#000000',
  },
  avatar: {
    width: wp('12%'),
    height: hp('6%'),
    resizeMode: 'stretch',
    borderRadius: 2,
  },
});
