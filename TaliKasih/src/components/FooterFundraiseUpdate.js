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
        if (props.selected == true) {
          if (!props.data.update) {
            Alert.alert('TaliKasih', 'Please fill the story!');
          } else if (props.data.update) {
            props.updateCampaignProgress(
              props.data,
              props.navigation,
              props.campaignId,
            );
          }
        } else if (props.selected == false) {
          if (!props.data.amount || !props.data.update) {
            Alert.alert(
              'TaliKasih',
              'Please fill the amount and withdrawal purpose!',
            );
          } else if (props.data.amount && props.data.update) {
            props.updateCampaignProgress(
              props.data,
              props.navigation,
              props.campaignId,
            );
          }
        }
      }}>
      <Text style={styles.buttonText}>
        {props.loading ? 'UPDATING...' : 'UPDATE'}
      </Text>
    </TouchableOpacity>
  );
};

const reduxState = state => ({
  loading: state.taliKasih.isLoading,
});

const reduxDispatch = dispatch => ({
  updateCampaignProgress: (a, b, c) =>
    dispatch({
      type: 'UPDATE_CAMPAIGN_PROGRESS',
      data: a,
      navigation: b,
      value: c,
    }),
});

export default connect(reduxState, reduxDispatch)(FooterButton);

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
