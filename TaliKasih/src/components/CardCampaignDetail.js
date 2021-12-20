import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ProgressBar from 'react-native-progress/Bar';

const CardCampaignDetail = props => {
  if (!props.data.user) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.raised}>{`IDR ${props.data.collected}`}</Text>
      <Text
        style={
          styles.raisedText
        }>{`Available funds IDR ${props.data.collected} `}</Text>
      <Text
        style={
          styles.raisedText
        }>{`Raised from IDR ${props.data.goal} goal`}</Text>
      <View style={styles.progressContainer}>
        <ProgressBar
          progress={props.data.collected / props.data.goal}
          width={null}
          borderWidth={0}
          color={'#1D94A8'}
          unfilledColor={'#F4F4F4'}
        />
      </View>
      <View style={styles.fundRaiserContainer}>
        <Image
          source={{uri: props.data.user.image}}
          style={styles.fundRaiserAvatar}
        />
        <View style={{marginLeft: 8}}>
          <Text style={styles.fundRaiserName}>{props.data.user.name}</Text>
          <Text style={styles.fundRaiser}>Fundraiser</Text>
        </View>
      </View>
      <View style={styles.countContainer}>
        <View style={styles.countCard}>
          <Text style={styles.count}>{props.donator.length}</Text>
          <Text style={styles.countText}>Donations</Text>
        </View>
        <View style={styles.countCard}>
          <Text style={styles.count}>{0}</Text>
          <Text style={styles.countText}>Share</Text>
        </View>
        <View style={styles.countCard}>
          <Text style={styles.count}>{props.remainingTime}</Text>
          <Text style={styles.countText}>Days left</Text>
        </View>
      </View>
    </View>
  );
};

export default CardCampaignDetail;

const styles = StyleSheet.create({
  container: {
    width: wp('90%'),
    height: hp('37%'),
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingVertical: hp('2.6%'),
    paddingHorizontal: wp('6%'),
    elevation: 3,
    marginBottom: 15,
  },
  raised: {
    fontFamily: 'Nunito-Bold',
    fontSize: hp('2.8%'),
    color: '#A43F3C',
  },
  raisedText: {
    fontFamily: 'Nunito-Regular',
    fontSize: hp('2%'),
    color: '#000000',
    marginBottom: 5,
  },
  progressContainer: {
    marginBottom: 12,
  },
  fundRaiserContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 12,
  },
  fundRaiserAvatar: {
    width: wp('11%'),
    height: hp('5.5%'),
    borderRadius: 4,
    resizeMode: 'stretch',
  },
  fundRaiserName: {
    fontFamily: 'Nunito-Bold',
    fontSize: hp('2.2%'),
    color: '#000000',
  },
  fundRaiser: {
    fontFamily: 'Nunito-Regular',
    fontSize: hp('2%'),
    color: '#9F9F9F',
  },
  countContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  countCard: {
    width: wp('22%'),
    height: hp('10%'),
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    elevation: 3,
  },
  count: {
    fontFamily: 'Nunito-Bold',
    fontSize: hp('2.6%'),
    color: '#1D94A8',
  },
  countText: {
    fontFamily: 'Nunito-Regular',
    fontSize: hp('2%'),
    color: '#9F9F9F',
  },
});
