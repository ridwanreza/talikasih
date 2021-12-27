import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Share,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux';

const FooterCampaignDetail = props => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        title: `${props.title}`,
        message: `${props.url}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
          // props.share(props.id);
        } else {
          // shared
          props.share(props.id);
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
        console.log('dismissed');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.shareContainer} onPress={onShare}>
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

const reduxDispatch = dispatch => ({
  share: a => dispatch({type: 'SHARE_CAMPAIGN', value: a}),
});

export default connect(reduxState, reduxDispatch)(FooterCampaignDetail);

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
