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

const SignUp = props => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [hidePass, setHidePass] = useState(true);
  const [hideConfirmPass, setHideConfirmPass] = useState(true);

  const dataRegister = {
    name,
    email,
    password,
    confirmPassword,
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
            placeholder="Name"
            placeholderTextColor="#9F9F9F"
            autoComplete="name"
            value={name}
            onChangeText={value => setName(value)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            placeholderTextColor="#9F9F9F"
            autoComplete="email"
            value={email}
            onChangeText={value => setEmail(value)}
          />
          <View style={styles.passContainer}>
            <TextInput
              style={styles.textInputPass}
              placeholder="Password"
              placeholderTextColor="#9F9F9F"
              autoComplete="password"
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
          <View style={styles.passContainer}>
            <TextInput
              style={styles.textInputPass}
              placeholder="Confirm Password"
              placeholderTextColor="#9F9F9F"
              autoComplete="password"
              secureTextEntry={hideConfirmPass ? true : false}
              value={confirmPassword}
              onChangeText={value => setConfirmPassword(value)}
            />
            <TouchableOpacity
              onPress={() => setHideConfirmPass(!hideConfirmPass)}>
              <Ionicons
                name={hideConfirmPass ? 'eye-off-outline' : 'eye-outline'}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
          {props.error !== null ? (
            <View style={{marginBottom: 20}}>
              {props.error.map((item, index) => (
                <Text key={index} style={styles.errorMsg}>
                  {item}
                </Text>
              ))}
            </View>
          ) : null}
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              if (!name || !email || !password || !confirmPassword) {
                Alert.alert(
                  'TaliKasih',
                  'Please fill the required data above!',
                );
              } else if (name && email && password && confirmPassword) {
                if (password !== confirmPassword) {
                  Alert.alert(
                    'TaliKasih',
                    'Please check the password whether the same as confirm password',
                  );
                } else {
                  props.register(dataRegister, props.navigation);
                }
              }
            }}>
            <Text style={styles.buttonText}>
              {props.isLoading === true ? `Loading...` : `SIGN UP`}
            </Text>
          </TouchableOpacity>
          <View style={styles.accountContainer}>
            <TouchableOpacity>
              <Text style={styles.userText}>Already have an account?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text style={styles.accountText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity style={styles.buttonGoogle}>
            <Image source={Google} style={styles.googleIcon} />
            <Text style={styles.googleText}>Sign Up with Google</Text>
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
  register: (a, b) => dispatch({type: 'REGISTER', data: a, navigation: b}),
});

export default connect(reduxState, reduxDispatch)(SignUp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4F4F4',
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
    backgroundColor: '#F4F4F4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    paddingVertical: hp('5%'),
    paddingHorizontal: wp('8%'),
    backgroundColor: '#F4F4F4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerContainer: {
    width: wp('84%'),
    backgroundColor: '#F4F4F4',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E1E0E0',
    paddingVertical: hp('1.5%'),
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
