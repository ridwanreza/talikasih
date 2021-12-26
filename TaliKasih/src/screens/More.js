import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux';

const More = props => {
  const [token, setToken] = useState(props.token);
  const [showAbout, setShowAbout] = useState(false);
  const [showContactUs, setShowContactUs] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);

  useEffect(() => {
    setToken(props.token);
  }, [props.token]);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Feather name="info" style={styles.icon} />
          <TouchableOpacity
            onPress={() => {
              setShowAbout(!showAbout);
            }}>
            <Text style={styles.iconText}>About</Text>
          </TouchableOpacity>
        </View>
        {showAbout ? (
          <View style={styles.contentView}>
            <Text style={styles.contentText}>
              Tali kasih is an online application that facilitates donation
              transactions for initiatives, campaigns, and social programs for
              victims of natural disasters and underprivileged residents.
            </Text>
          </View>
        ) : null}
        <View style={styles.content}>
          <Feather name="phone" style={styles.icon} />
          <TouchableOpacity
            onPress={() => {
              setShowContactUs(!showContactUs);
            }}>
            <Text style={styles.iconText}>Contact Us</Text>
          </TouchableOpacity>
        </View>
        {showContactUs ? (
          <View style={styles.contentView}>
            <Text style={styles.contentText}>talikasihofficial@gmail.com</Text>
          </View>
        ) : null}
        <View style={styles.content}>
          <Feather name="message-circle" style={styles.icon} />
          <TouchableOpacity
            onPress={() => {
              setShowFAQ(!showFAQ);
            }}>
            <Text style={styles.iconText}>FAQ</Text>
          </TouchableOpacity>
        </View>
        {showFAQ ? (
          <View style={styles.contentView}>
            <Text style={styles.contentText}>
              {`1. Can Tali Kasih provide direct financial assistance?`}
            </Text>
            <Text
              style={
                styles.contentAnsw
              }>{`Answer : \n\nNo.\nTali Kasih only provides a means to raise funds online through a campaign page.\nThe success of fundraising at Tali Kasih depends on various factors such as the quality of the content, the breadth of the network, and the efforts of the campaigner (the party that raises the funds).\n`}</Text>
            <Text style={styles.contentText}>
              {`2. Is fundraising at Tali Kasih free?`}
            </Text>
            <Text
              style={
                styles.contentAnsw
              }>{`Answer : \n\nNeed to know that:\nTali Kasih does not charge an administration fee when you create a fundraising page.Tali Kasih only charges an administration fee from online donations collected.The amount of donations displayed on the fundraising page is the total of offline donations and online donations before being charged an administration fee.The administration fees charged by Tali Kasih can be categorized into two types, namely Platform fees and Payment Processing fees\n`}</Text>
            <Text style={styles.contentText}>
              {`3. What if the donation I received did not reach the target?`}
            </Text>
            <Text
              style={
                styles.contentAnsw
              }>{`Answer : \n\nAfter verifying your account, you can withdraw your donation at any time even if the target has not been/not reached\n`}</Text>
          </View>
        ) : null}
        {token !== null ? (
          <View style={styles.content}>
            <Feather name="log-out" style={styles.iconLogout} />
            <TouchableOpacity
              disabled={props.logout == true ? true : false}
              onPress={() => props.logout(props.navigation)}>
              <Text style={styles.iconLogoutText}>
                {props.logout == true ? 'Logged out...' : 'Logout'}
              </Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </ScrollView>
    </View>
  );
};

const reduxState = state => ({
  token: state.auth.token,
  logout: state.auth.isLogout,
});

const reduxDispatch = dispatch => ({
  logout: b => dispatch({type: 'LOGOUT', navigation: b}),
});

export default connect(reduxState, reduxDispatch)(More);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('100%'),
    height: hp('8%'),
    backgroundColor: '#FCFCFC',
    borderBottomWidth: 1,
    borderBottomColor: '#E1E0E0',
    paddingHorizontal: wp('6%'),
  },
  icon: {
    fontSize: hp('3%'),
    color: '#000000',
  },
  iconLogout: {
    fontSize: hp('3%'),
    color: '#A43F3C',
  },
  iconText: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: hp('2.2%'),
    color: '#000000',
    marginLeft: 10,
  },
  iconLogoutText: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: hp('2.2%'),
    color: '#A43F3C',
    marginLeft: 10,
  },
  contentText: {
    fontFamily: 'Nunito-Regular',
    fontSize: hp('2.2%'),
    color: '#000000',
  },
  contentView: {
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('2%'),
  },
  contentAnsw: {
    fontFamily: 'Nunito-Regular',
    fontSize: hp('2.2%'),
    color: '#000000',
    marginLeft: 15,
  },
});
