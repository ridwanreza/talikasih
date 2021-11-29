import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Campaign from '../assets/images/Campaign.png';

const CampaignDetails = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{height: hp('115%')}}>
        <View style={styles.contain}>
          <View>
            <Image source={Campaign} style={styles.image}></Image>
          </View>
          <View>
            <Text style={styles.txt}>
              Aid for necessary items to help our country
            </Text>
          </View>
          <View style={styles.fundraiser}>
            <Text style={styles.idr}>IDR 30.000.000</Text>
            <Text style={styles.goal}>Raised from IDR 50.000.000 goal</Text>
            <View style={styles.textcont}>
              <Text style={styles.txt1}>Yosua Ginting</Text>
              <Text style={styles.txt2}> 1 Weeks ago</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CampaignDetails;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
  },

  image: {
    height: hp('35%'),
    width: wp('100%'),
  },

  txt: {
    fontFamily: 'Nunito-Bold',
    color: 'black',
    fontSize: 28,
    marginHorizontal: 12,
    marginVertical: 10,
  },
  fundraiser: {
    backgroundColor: '#FFFFFF',
  },
  idr: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 27,
    color: '#A43F3C',
  },
  goal: {
    fontFamily: 'Nunito-Regular',
    color: '#000000',
    fontSize: 17,
  },
  textcont: {
    flexDirection: 'column',
  },
});
