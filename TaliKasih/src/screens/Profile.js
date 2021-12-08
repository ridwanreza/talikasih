import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import defaultProfile from '../assets/images/defaultProfile.png';
import {connect} from 'react-redux';

const Profile = props => {
  useEffect(() => {
    if (props.token !== null) {
      props.getUser();
      props.getMyCampaign();
      props.getMyDonation();
    } else if (props.token === null) {
      props.navigation.navigate('Login');
    }
  }, [props.token]);

  if (props.token === null) {
    return (
      <View>
        <Text>Please sign up or sign in first</Text>
      </View>
    );
  } else if (props.userLoad === true || props.loading === true) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            color: '#000000',
            fontSize: hp('2.6%'),
            fontFamily: 'Nunito-Italic',
          }}>
          Loading... Please wait a while...
        </Text>
        <ActivityIndicator size="large" color="#1D94A8" />
      </View>
    );
  } else {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Image
            source={
              props.dataUser.image
                ? {uri: props.dataUser.image.replace(/\s+/g, '')}
                : defaultProfile
            }
            style={styles.avatar}
          />
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Edit Profile')}>
            <Text style={styles.editProfileText}>Edit Profile</Text>
          </TouchableOpacity>
          <Text style={styles.titleInputText}>Name</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Your Name"
            editable={false}
            value={props.dataUser.name}
          />
          <Text style={styles.titleInputText}>Email</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Your Email"
            editable={false}
            value={props.dataUser.email}
          />
          <Text style={styles.titleInputText}>Bank Info</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Your Bank Info"
            editable={false}
            value={`${props.dataUser.bankName} - ${props.dataUser.bankAccount}`}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => props.navigation.navigate('My Donation')}>
            <Text
              style={
                styles.buttonText
              }>{`My Donations (${props.dataMyDonation.length})`}</Text>
            <Ionicons name="arrow-forward" style={styles.buttonIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => props.navigation.navigate('My Campaign')}>
            <Text
              style={
                styles.buttonText
              }>{`My Campaign (${props.dataMyCampaign.length})`}</Text>
            <Ionicons name="arrow-forward" style={styles.buttonIcon} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
};

const reduxState = state => ({
  dataUser: state.auth.dataUser,
  userLoad: state.auth.isLoading,
  token: state.auth.token,
  dataMyCampaign: state.taliKasih.dataMyCampaign,
  dataMyDonation: state.taliKasih.dataMyDonation,
  loading: state.taliKasih.isLoading,
});

const reduxDispatch = dispatch => ({
  getUser: () => dispatch({type: 'GET_USER'}),
  getMyCampaign: () => dispatch({type: 'GET_MY_CAMPAIGN'}),
  getMyDonation: () => dispatch({type: 'GET_MY_DONATION'}),
});

export default connect(reduxState, reduxDispatch)(Profile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp('3%'),
    paddingHorizontal: wp('5%'),
    backgroundColor: '#FAF8F3',
  },
  titleInputText: {
    fontFamily: 'Nunito-Bold',
    fontSize: hp('2.2%'),
    color: '#9F9F9F',
    marginBottom: 5,
  },
  textInput: {
    height: hp('5.5%'),
    fontFamily: 'Nunito-Regular',
    fontSize: hp('2%'),
    color: '#2D2D2D',
    backgroundColor: '#FCFCFC',
    borderRadius: 8,
    paddingHorizontal: 10,
    elevation: 5,
    marginBottom: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: hp('8%'),
    borderBottomWidth: 0.5,
    borderBottomColor: '#9F9F9F',
  },
  buttonText: {
    fontFamily: 'Nunito-Bold',
    fontSize: hp('2.2%'),
    color: '#000000',
  },
  buttonIcon: {
    fontFamily: 'Nunito-Bold',
    fontSize: hp('2.6%'),
    color: '#000000',
  },
  editProfileText: {
    fontFamily: 'Nunito-Bold',
    fontSize: hp('2.2%'),
    color: '#1D94A8',
    textDecorationLine: 'underline',
    alignSelf: 'center',
    marginBottom: 15,
  },
  avatar: {
    width: wp('50%'),
    height: hp('22%'),
    resizeMode: 'stretch',
    borderRadius: 4,
    alignSelf: 'center',
    marginBottom: 5,
  },
});
