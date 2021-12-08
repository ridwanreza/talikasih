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
          !props.data.name ||
          !props.data.email ||
          !props.data.image ||
          !props.data.bankName ||
          !props.data.bankAccount
        ) {
          Alert.alert('TaliKasih', 'Please fill the required data above!');
        } else if (props.data) {
          props.updateUser(props.data, props.navigation);
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
