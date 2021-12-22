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
      disabled={props.loading == true ? true : false}
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
          const dataCampaign = new FormData();
          dataCampaign.append('image', props.data.image);
          dataCampaign.append('title', props.data.title);
          dataCampaign.append('goal', props.data.goal);
          dataCampaign.append('dueDate', props.data.dueDate);
          dataCampaign.append('story', props.data.story);
          dataCampaign.append('categoryId', props.data.categoryId);
          if (props.campaignId !== null) {
            props.editCampaign(
              dataCampaign,
              props.campaignId,
              props.navigation,
            );
          } else {
            props.createCampaign(dataCampaign, props.navigation);
          }
        }
      }}>
      <Text style={styles.buttonText}>{props.name}</Text>
    </TouchableOpacity>
  );
};

const reduxState = state => ({
  loading: state.taliKasih.isLoading,
});

const reduxDispatch = dispatch => ({
  createCampaign: (a, b) =>
    dispatch({type: 'CREATE_CAMPAIGN', data: a, navigation: b}),
  editCampaign: (c, d, e) =>
    dispatch({type: 'EDIT_CAMPAIGN', data: c, value: d, navigation: e}),
});

export default connect(reduxState, reduxDispatch)(FooterButton);

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
