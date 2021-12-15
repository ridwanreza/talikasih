import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';

const FooterFilterSort = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          if (!props.data.category && !props.data.sort) {
            props.setFilter(false);
            props.navigation.navigate('Main');
          } else if (!props.data.category || !props.data.sort) {
            Alert.alert('TaliKasih', 'Please select category and sort by');
          } else {
            props.setFilter(true);
            props.filterCampaign(
              props.data.category,
              props.data.sort,
              props.navigation,
            );
          }
        }}>
        <Text style={styles.buttonText}>
          {props.loading ? 'FILTERING...' : 'FILTER'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const reduxState = state => ({
  loading: state.taliKasih.isLoading,
});

const reduxDispatch = dispatch => ({
  filterCampaign: (a, b, c) =>
    dispatch({type: 'FILTER_CAMPAIGN', category: a, sort: b, navigation: c}),
  setFilter: a => dispatch({type: 'FILTER', data: a}),
});

export default connect(reduxState, reduxDispatch)(FooterFilterSort);

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
