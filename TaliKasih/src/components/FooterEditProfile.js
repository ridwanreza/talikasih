import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';

const FooterButton = props => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        if (
          props.isResetPass == false &&
          (!props.data.name ||
            !props.data.email ||
            !props.data.image ||
            !props.data.bankName ||
            !props.data.bankAccount)
        ) {
          Alert.alert('TaliKasih', 'Please fill the required data above!');
        } else if (
          props.isResetPass == true &&
          (!props.data.password || !props.data.confirmPassword)
        ) {
          Alert.alert('TaliKasih', 'Please fill the required data above!');
        } else if (props.isResetPass == false && props.data) {
          const dataProfile = new FormData();
          dataProfile.append('name', props.data.name);
          dataProfile.append('email', props.data.email);
          dataProfile.append('image', props.data.image);
          dataProfile.append('bankName', props.data.bankName);
          dataProfile.append('bankAccount', props.data.bankAccount);
          props.updateUser(dataProfile, props.navigation);
        } else if (props.isResetPass == true && props.data) {
          const dataProfile = new FormData();
          dataProfile.append('name', props.data.name);
          dataProfile.append('email', props.data.email);
          dataProfile.append('image', props.data.image);
          dataProfile.append('bankName', props.data.bankName);
          dataProfile.append('bankAccount', props.data.bankAccount);
          dataProfile.append('password', props.data.password);
          dataProfile.append('confirmPassword', props.data.confirmPassword);
          props.updateUser(dataProfile, props.navigation);
        }
      }}>
      <Text style={styles.buttonText}>{props.name}</Text>
    </TouchableOpacity>
  );
};

const reduxDispatch = dispatch => ({
  updateUser: (a, b) => dispatch({type: 'UPDATE_USER', data: a, navigation: b}),
});

export default connect(null, reduxDispatch)(FooterButton);

const styles = StyleSheet.create({
  container: {
    width: wp('100%'),
    height: hp('7.5%'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A43F3C',
  },
  buttonText: {
    fontFamily: 'Nunito-Bold',
    fontSize: hp('2.5%'),
    color: '#FFFFFF',
  },
});
