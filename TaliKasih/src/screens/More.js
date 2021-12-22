import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux';

const More = props => {
  const [token, setToken] = useState(props.token);

  useEffect(() => {
    setToken(props.token);
  }, [props.token]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Feather name="info" style={styles.icon} />
        <TouchableOpacity>
          <Text style={styles.iconText}>About</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Feather name="phone" style={styles.icon} />
        <TouchableOpacity>
          <Text style={styles.iconText}>Contact Us</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Feather name="message-circle" style={styles.icon} />
        <TouchableOpacity>
          <Text style={styles.iconText}>FAQ</Text>
        </TouchableOpacity>
      </View>
      {token !== null ? (
        <View style={styles.content}>
          <Feather name="log-out" style={styles.iconLogout} />
          <TouchableOpacity
            disabled={props.loading == true ? true : false}
            onPress={() => props.logout(props.navigation)}>
            <Text style={styles.iconLogoutText}>
              {props.loading == true ? 'Logged out...' : 'Logout'}
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

const reduxState = state => ({
  token: state.auth.token,
  loading: state.auth.isLoading,
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
});
