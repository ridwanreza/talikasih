import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Logo from '../assets/images/logo_vertical.png';
import Google from '../assets/images/Google.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';

const Login = props => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [hidePass, setHidePass] = useState(true);

  const dataLogin = {
    email,
    password,
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <Image source={Logo} style={styles.logo} />
          <Text style={styles.logoText}>Find causes you truly care about</Text>
        </View>
        <View style={styles.contentContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            placeholderTextColor="#9F9F9F"
            value={email}
            onChangeText={value => setEmail(value)}
          />
          <View style={styles.passContainer}>
            <TextInput
              style={styles.textInputPass}
              placeholder="Password"
              placeholderTextColor="#9F9F9F"
              secureTextEntry={hidePass ? true : false}
              value={password}
              onChangeText={value => setPassword(value)}
            />
            <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
              <Ionicons
                name={hidePass ? 'eye-off-outline' : 'eye-outline'}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
          {props.error !== null ? (
            <View style={{marginBottom: 20}}>
              <Text style={styles.errorMsg}>{props.error}</Text>
            </View>
          ) : null}
          <TouchableOpacity style={styles.forgotButton}>
            <Text style={styles.forgotText}>forgot password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              if (!email || !password) {
                Alert.alert(
                  'TaliKasih',
                  'Please fill the required data above!',
                );
              } else if (email && password) {
                props.login(dataLogin, props.navigation);
              }
            }}>
            <Text style={styles.buttonText}>
              {props.isLoading == true ? `Loading...` : `LOGIN`}
            </Text>
          </TouchableOpacity>
          <View style={styles.accountContainer}>
            <TouchableOpacity>
              <Text style={styles.userText}>New user?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Sign Up')}>
              <Text style={styles.accountText}>Create an account</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity style={styles.buttonGoogle}>
            <Image source={Google} style={styles.googleIcon} />
            <Text style={styles.googleText}>Continue with Google</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const reduxState = state => ({
  isLoading: state.auth.isLoading,
  error: state.auth.error,
});

const reduxDispatch = dispatch => ({
  login: (a, b) => dispatch({type: 'LOGIN', data: a, navigation: b}),
});

export default connect(reduxState, reduxDispatch)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F1EDE4',
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
  headerContainer: {
    backgroundColor: '#F1EDE4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    height: hp('60%'),
    paddingVertical: hp('5%'),
    paddingHorizontal: wp('8%'),
    backgroundColor: '#F1EDE4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerContainer: {
    width: wp('84%'),
    backgroundColor: '#F1EDE4',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E1E0E0',
    paddingVertical: hp('2%'),
  },
  textInput: {
    width: wp('84%'),
    height: hp('6.5%'),
    fontFamily: 'Nunito-Regular',
    fontSize: hp('2.2%'),
    color: '#2D2D2D',
    backgroundColor: '#FCFCFC',
    borderRadius: 4,
    paddingHorizontal: 15,
    elevation: 5,
    marginBottom: 20,
  },
  textInputPass: {
    width: wp('70%'),
    height: hp('6.5%'),
    fontFamily: 'Nunito-Regular',
    fontSize: hp('2.2%'),
    color: '#2D2D2D',
  },
  icon: {
    fontSize: hp('3%'),
    color: '#9F9F9F',
  },
  passContainer: {
    width: wp('84%'),
    height: hp('6.5%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FCFCFC',
    borderRadius: 4,
    paddingHorizontal: 12,
    elevation: 5,
    marginBottom: 20,
  },
  errorMsg: {
    fontFamily: 'Nunito-Regular',
    fontSize: hp('2%'),
    color: 'red',
  },
  forgotButton: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotText: {
    fontFamily: 'Nunito-Regular',
    fontSize: hp('2.2%'),
    color: '#000000',
    textDecorationLine: 'underline',
  },
  button: {
    width: wp('84%'),
    height: hp('6.5%'),
    backgroundColor: '#A43F3C',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    elevation: 5,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: hp('2.6%'),
    fontFamily: 'Nunito-Bold',
    color: '#FFFFFF',
  },
  accountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userText: {
    fontSize: hp('2.2%'),
    fontFamily: 'Nunito-Regular',
    color: '#000000',
    textDecorationLine: 'underline',
  },
  accountText: {
    fontSize: hp('2.2%'),
    fontFamily: 'Nunito-Regular',
    color: '#1D94A8',
    textDecorationLine: 'underline',
    textDecorationColor: '#1D94A8',
    marginLeft: 5,
  },
  buttonGoogle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleText: {
    fontSize: hp('2.6%'),
    fontFamily: 'Nunito-Regular',
    color: '#2D2D2D',
    marginLeft: 10,
  },
  googleIcon: {
    height: hp('6%'),
    width: wp('6%'),
    resizeMode: 'contain',
  },
});
