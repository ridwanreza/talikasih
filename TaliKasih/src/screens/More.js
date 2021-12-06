import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { heightPercentageToDP as wp,
widthPercentageToDP as hp } from 'react-native-responsive-screen';

import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/core';
import { Row } from 'react-bootstrap';
import { color } from 'react-native-reanimated';



const More = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerAbout}>
        <Icon style={styles.aboutLogo} size={20} name='information-circle-outline'/>
        <Text style={styles.about}>About</Text>
      </View>
      <View style={styles.containerContactUs}>
        <Icon style={styles.contactUsLogo} size={20} name='call-outline'/>
        <Text style={styles.contactUs}>Contact Us</Text>
      </View>
      <View style={styles.containerFaq}>
        <Icon style={styles.faqLogo} size={20} name='chatbubble-outline'/>
        <Text style={styles.faq}>FAQ</Text>
      </View>
      <View style={styles.containerLogout}>
        <Icon style={styles.logoutLogo} size={20} name='exit-outline'/>
        <Text style={styles.logout}>Logout</Text>
      </View>
    </View>
  );
};

export default More;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    width: wp('100%'),
    backgroundColor: '#FFFFFF',

  },

  containerAbout: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
    flexDirection: 'row',
    alignItems: 'center',
    
  },

  aboutLogo: {
    marginVertical: hp('5%'),
    height: hp('5%'),
    marginLeft: wp('3%'),
    marginHorizontal: wp('1%'),
    color: '#2D2D2D'
  },

  about: {
    marginVertical: hp('5%'),
    height: hp('5%'),
    color: 'black'
  },

  containerContactUs: {
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
    flexDirection: 'row',
    alignItems: 'center'
  },

  contactUsLogo: {
    marginVertical: hp('5%'),
    height: hp('5%'),
    marginLeft: wp('3%'),
    marginHorizontal: wp('1%'),
    color: '#2D2D2D'
  },

  contactUs: {
    marginVertical: hp('5%'),
    height: hp('5%'),
    color: 'black'
  },

  containerFaq: {
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
    flexDirection: 'row',
    alignItems: 'center',
  },

  faqLogo: {
    marginVertical: hp('5%'),
    height: hp('5%'),
    marginLeft: wp('3%'),
    marginHorizontal: wp('1%'),
    color: '#2D2D2D'
  },

  faq: {
    marginVertical: hp('5%'),
    height: hp('5%'),
    color: 'black'
  },

  containerLogout: {
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
    flexDirection: 'row',
    alignItems: 'center',
  },

  logoutLogo:{
    marginVertical: hp('5%'),
    height: hp('5%'),
    marginLeft: wp('3%'),
    marginHorizontal: wp('1%'),
    color: '#A43F3C'
  },

  logout: {
    marginVertical: hp('5%'),
    height: hp('5%'),
    color: '#A43F3C'
  },
});
