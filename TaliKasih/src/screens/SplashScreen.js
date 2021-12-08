import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '../assets/images/logo_vertical.png';
import {connect} from 'react-redux';

const SplashScreen = props => {
  useEffect(() => {
    props.getToken();
    setTimeout(() => {
      props.navigation.navigate('Main');
    }, 3000);
  }, []);
  return (
    <LinearGradient
      colors={['#F1EDE4', '#E3ECEA', '#D7EBEE']}
      locations={[0, 0.65, 1.02]}
      style={{width: wp('100%'), height: hp('100%')}}>
      <View style={styles.container}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.logoText}>Find causes you truly care about</Text>
      </View>
    </LinearGradient>
  );
};

const reduxDispatch = dispatch => ({
  getToken: () => dispatch({type: 'GET_TOKEN'}),
});

export default connect(null, reduxDispatch)(SplashScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: wp('40%'),
    height: hp('15%'),
    resizeMode: 'contain',
  },
  logoText: {
    fontSize: hp('1.6%'),
    fontFamily: 'Nunito-Regular',
    color: '#2D2D2D',
  },
});
