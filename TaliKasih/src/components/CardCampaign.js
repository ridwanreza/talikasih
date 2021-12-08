import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ProgressBar from 'react-native-progress/Bar';

const CardCampaign = ({data, navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={{uri: data.image}} style={styles.campaignPoster} />
      </TouchableOpacity>
      <View style={styles.contentContainer}>
        <View style={styles.campaignCategory}>
          <Text style={styles.campaignCategoryText}>
            {data.category.category}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Campaign Details', {
              campaignId: data.id,
            })
          }>
          <Text style={styles.campaignTitle}>{data.title}</Text>
        </TouchableOpacity>
        <Text
          style={
            styles.campaignKeyword
          }>{`IDR ${data.deviation} more to reach goal`}</Text>
        <View style={styles.progressContainer}>
          <ProgressBar
            progress={data.collected / data.goal}
            width={null}
            borderWidth={0}
            color={'#1D94A8'}
            unfilledColor={'#F4F4F4'}
          />
        </View>
        <View style={styles.arrange}>
          <Text style={styles.raisedGoalText}>Raised</Text>
          <Text style={styles.raisedGoalText}>Goal</Text>
        </View>
        <View style={styles.arrange}>
          <Text style={styles.raisedValueText}>{`IDR ${data.collected}`}</Text>
          <Text style={styles.goalValueText}>{`IDR ${data.goal}`}</Text>
        </View>
      </View>
    </View>
  );
};

export default CardCampaign;

const styles = StyleSheet.create({
  container: {
    width: wp('65%'),
    height: hp('48%'),
    borderRadius: 8,
    elevation: 3,
    backgroundColor: '#FFFFFF',
    marginRight: 15,
    marginBottom: 20,
    overflow: 'hidden',
  },
  campaignPoster: {
    width: wp('65%'),
    height: hp('24%'),
    resizeMode: 'stretch',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    overflow: 'hidden',
  },
  contentContainer: {
    width: wp('65%'),
    height: hp('24%'),
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  progressContainer: {
    marginBottom: 3,
  },
  campaignCategory: {
    width: wp('22%'),
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#A43F3C',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginBottom: 10,
  },
  campaignCategoryText: {
    fontSize: hp('1.6%'),
    fontFamily: 'Nunito-Bold',
    color: '#A43F3C',
  },
  campaignTitle: {
    fontSize: hp('2.4%'),
    fontFamily: 'Nunito-Bold',
    color: '#000000',
    lineHeight: hp('2.6%'),
  },
  campaignKeyword: {
    fontSize: hp('1.8%'),
    fontFamily: 'Nunito-Regular',
    color: '#000000',
    marginBottom: 10,
  },
  arrange: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  raisedGoalText: {
    fontSize: hp('1.5%'),
    fontFamily: 'Nunito-Regular',
    color: '#9F9F9F',
  },
  raisedValueText: {
    fontSize: hp('2%'),
    fontFamily: 'Nunito-SemiBold',
    color: '#1D94A8',
  },
  goalValueText: {
    fontSize: hp('2%'),
    fontFamily: 'Nunito-SemiBold',
    color: '#000000',
  },
});
