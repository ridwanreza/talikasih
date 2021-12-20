import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';
import moment from 'moment';
import Timeline from 'react-native-timeline-flatlist';

// const dataUpdates = [
//   {
//     title: `TODAY`,
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nunc pellentesque enim ultrices nunc. Pretium massa, vel viverra id mi sed sit. In faucibus leo etiam cras elit malesuada augue. Sagittis quisque non, nullam facilisis. ',
//   },
//   {
//     title: `YESTERDAY`,
//     description: `20000000 \nWithdrawal Purpose \nLorem ipsum dolor sit amet, consectetur adipiscing elit. `,
//   },
//   {
//     title: `3 Oktober 2020`,
//     description: `20000000 \nWithdrawal Purpose \nLorem ipsum dolor sit amet, consectetur adipiscing elit. `,
//   },
//   {
//     title: `30 September 2020`,
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nunc pellentesque enim ultrices nunc. Pretium massa, vel viverra id mi sed sit. ',
//   },
// ];

const CardUpdates = props => {
  const [isWithdrawal, setIsWithdrawal] = useState(
    props.data.amount !== null ? true : false,
  );

  return (
    <View style={styles.container}>
      {/* <Timeline
        data={dataUpdates}
        circleColor="#1D94A8"
        lineColor="#1D94A8"
        style={{marginLeft: wp(-15)}}
        titleStyle={{marginTop: hp(-2)}}
        descriptionStyle={{
          backgroundColor: '#FFFFFF',
          elevation: 1,
          padding: 10,
          borderRadius: 4,
        }}
      /> */}
      <View style={styles.timelineArrange}>
        <Entypo name="dot-single" style={styles.dot} />
        <Text style={styles.date}>
          {props.data.updateTime}
          {/* {moment(props.data.createdAt).calendar().search('Yesterday') > -1
            ? moment(props.data.createdAt).calendar().substring(0, 9)
            : moment(props.data.createdAt).calendar().search('Today') > -1
            ? moment(props.data.createdAt).calendar().substring(0, 5)
            : moment(props.data.createdAt).format('DD MMMM YYYY')} */}
        </Text>
        {isWithdrawal ? (
          <Text style={styles.withdrawalText}>Withdrawal</Text>
        ) : (
          <Text style={styles.recepientText}> - Recepient update</Text>
        )}
      </View>
      <View style={styles.timelineContainer}>
        {isWithdrawal ? (
          <View style={styles.contentContainerWd}>
            <Text style={styles.wdAmount}>{`Rp. ${props.data.amount}`}</Text>
            <Text style={styles.wdPurposeText}>Withdrawal Purpose</Text>
            <Text style={styles.wdStory}>{props.data.update}</Text>
          </View>
        ) : (
          <View style={styles.contentContainer}>
            <Text style={styles.story}>{props.data.update}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default CardUpdates;

const styles = StyleSheet.create({
  container: {
    width: wp('88%'),
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('2%'),
  },
  timelineArrange: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    fontFamily: 'Nunito-Bold',
    fontSize: hp('7%'),
    color: '#1D94A8',
  },
  date: {
    fontFamily: 'Nunito-Bold',
    fontSize: hp('2%'),
    color: '#000000',
  },
  recepientText: {
    fontFamily: 'Nunito-Regular',
    fontSize: hp('2%'),
    color: '#9F9F9F',
  },
  withdrawalText: {
    fontFamily: 'Nunito-Bold',
    fontSize: hp('2%'),
    color: '#A87B14',
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#A87B14',
    paddingHorizontal: wp('1.5%'),
    marginLeft: 8,
  },
  timelineContainer: {
    borderLeftWidth: 2,
    borderLeftColor: '#1D94A8',
    marginLeft: wp('6%'),
    paddingLeft: wp('6%'),
  },
  contentContainerWd: {
    width: wp('70%'),
    backgroundColor: '#F1EDE4',
    borderRadius: 4,
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('2%'),
    elevation: 3,
  },
  contentContainer: {
    width: wp('70%'),
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('2%'),
    elevation: 3,
  },
  wdAmount: {
    fontFamily: 'Nunito-Bold',
    fontSize: hp('2.4%'),
    color: '#000000',
  },
  wdPurposeText: {
    fontFamily: 'Nunito-Regular',
    fontSize: hp('2%'),
    color: '#9F9F9F',
  },
  wdStory: {
    fontFamily: 'Nunito-Regular',
    fontSize: hp('2.2%'),
    color: '#000000',
  },
  story: {
    fontFamily: 'Nunito-Regular',
    fontSize: hp('2.2%'),
    color: '#000000',
  },
});
