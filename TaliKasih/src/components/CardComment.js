import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CardComment = props => {
  if (!props.data.user) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.arrange}>
        <Image source={{uri: props.data.user.image}} style={styles.avatar} />
        <View style={{marginLeft: 15}}>
          <Text style={styles.commentator}>{props.data.user.name}</Text>
          <Text style={styles.time}>{props.data.commentTime}</Text>
        </View>
      </View>
      <Text style={styles.story}>{props.data.comment}</Text>
    </View>
  );
};

export default CardComment;

const styles = StyleSheet.create({
  container: {
    width: wp('80%'),
    backgroundColor: '#FFFFFF',
    borderTopWidth: 0.2,
    borderTopColor: '#9F9F9F',
    alignSelf: 'center',
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('4%'),
    marginBottom: 15,
  },
  arrange: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },

  time: {
    fontFamily: 'Nunito-Regular',
    fontSize: hp('2%'),
    color: '#9F9F9F',
  },
  commentator: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: hp('2.2%'),
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
