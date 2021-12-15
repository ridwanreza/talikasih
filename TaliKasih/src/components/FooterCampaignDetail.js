import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux';

const FooterCampaignDetail = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.shareContainer}>
        <Feather name="share" style={styles.shareIcon} />
        <Text style={styles.shareText}>SHARE</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          if (props.token === null) {
            Alert.alert('TaliKasih', 'Please login or sign up first!');
          } else if (props.token !== null) {
            {
              props.userId === props.fundRaiseId
                ? props.navigation.navigate('Fundraise Update', {
                    campaignId: props.id,
                  })
                : props.navigation.navigate('Campaign Donate', {
                    campaignId: props.id,
                  });
            }
          }
        }}>
        <Text style={styles.buttonText}>
          {props.userId === props.fundRaiseId ? 'UPDATE PROGRESS' : 'DONATE'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const reduxState = state => ({
  userId: state.auth.dataUser.id,
  fundRaiseId: state.taliKasih.dataCampaignDetail.userId,
});

export default connect(reduxState, null)(FooterCampaignDetail);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  buttonContainer: {
    width: wp('55%'),
    height: hp('7.5%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A43F3C',
  },
  shareContainer: {
    width: wp('45%'),
    height: hp('7.5%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  buttonText: {
    fontFamily: 'Nunito-Bold',
    fontSize: hp('2.5%'),
    color: '#FFFFFF',
  },
  shareText: {
    fontFamily: 'Nunito-Bold',
    fontSize: hp('2.5%'),
    color: '#1D94A8',
    marginLeft: 10,
  },
  shareIcon: {
    fontFamily: 'Nunito-Bold',
    fontSize: hp('4%'),
    color: '#1D94A8',
  },
});
