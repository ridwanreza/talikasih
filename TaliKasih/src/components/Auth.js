import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Auth from '../assets/images/Auth.png';

const AuthGuest = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Sign In or Sign Up \nto Continue`}</Text>
      <Image source={Auth} style={styles.authImg} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Sign Up');
        }}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonSignIn}
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthGuest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAF8F3',
  },
  title: {
    fontSize: hp('3%'),
    fontFamily: 'Nunito-Bold',
    color: '#214457',
    textAlign: 'center',
    marginBottom: hp('3%'),
  },
  authImg: {
    width: wp('70%'),
    height: hp('36%'),
    resizeMode: 'contain',
    marginBottom: hp('4%'),
  },
  button: {
    width: wp('85%'),
    height: hp('6.5%'),
    backgroundColor: '#A43F3C',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp('2.4%'),
    elevation: 3,
  },
  buttonSignIn: {
    width: wp('85%'),
    height: hp('6.5%'),
    backgroundColor: '#1D94A8',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp('2.4%'),
    elevation: 3,
  },
  buttonText: {
    fontSize: hp('2.6%'),
    color: '#FFFFFF',
    fontFamily: 'Nunito-Bold',
  },
});
