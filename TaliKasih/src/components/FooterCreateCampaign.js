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
          !props.data.image ||
          !props.data.title ||
          !props.data.goal ||
          !props.data.dueDate ||
          !props.data.story ||
          !props.data.categoryId
        ) {
          Alert.alert('TaliKasih', 'Please fill the required data above!');
        } else if (props.data) {
          props.createCampaign(props.data, props.navigation);
        }
      }}>
      <Text style={styles.buttonText}>{props.name}</Text>
    </TouchableOpacity>
  );
};

const reduxDispatch = dispatch => ({
  createCampaign: (a, b) =>
    dispatch({type: 'CREATE_CAMPAIGN', data: a, navigation: b}),
});

export default connect(null, reduxDispatch)(FooterButton);

const styles = StyleSheet.create({
  container: {
    width: wp('90%'),
    height: hp('7.5%'),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#A43F3C',
    borderRadius: 8,
  },
  buttonText: {
    fontFamily: 'Nunito-Bold',
    fontSize: hp('2.5%'),
    color: '#FFFFFF',
  },
});
