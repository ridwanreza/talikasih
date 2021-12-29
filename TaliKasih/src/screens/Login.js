import React, {useState, useEffect} from 'react';
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
import Modal from 'react-native-modal';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {connect} from 'react-redux';

const Login = props => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [hidePass, setHidePass] = useState(true);
  const [newPass, setNewPass] = useState();
  const [confirmNewPass, setConfirmNewPass] = useState();
  const [hideNewPass, setHideNewPass] = useState(true);
  const [hideConfirmNewPass, setHideConfirmNewPass] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const dataLogin = {
    email,
    password,
  };

  const dataForgotPass = {
    email,
  };

  const dataResetPass = {
    password: newPass,
    confirmPassword: confirmNewPass,
  };

  useEffect(() => {
    if (props.forgotToken !== null) {
      toggleModal();
    } else if (props.forgotToken === null) {
      setIsModalVisible(false);
    }
  }, [props.forgotToken]);

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
          <TouchableOpacity
            style={styles.forgotButton}
            disabled={props.forLoading == true ? true : false}
            onPress={() => {
              if (email) {
                props.forgotPass(dataForgotPass);
              } else if (!email) {
                Alert.alert('TaliKasih', 'Please fill in email first!');
              }
            }}>
            <Text style={styles.forgotText}>
              {props.forLoading
                ? 'Requesting reset password...'
                : 'forgot password?'}
            </Text>
          </TouchableOpacity>
          <Modal
            isVisible={isModalVisible}
            testID={'modal'}
            style={styles.viewModal}>
            <View style={styles.viewModalContainer}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalHeaderTitle}>Reset Password</Text>
                <TouchableOpacity title="Hide modal" onPress={toggleModal}>
                  <Ionicons name="close" size={hp('3.5%')} color={'#000000'} />
                </TouchableOpacity>
              </View>
              <View style={styles.modalContent}>
                <View style={styles.passContainer}>
                  <TextInput
                    style={styles.textInputPass}
                    placeholder="New password"
                    placeholderTextColor="#9F9F9F"
                    secureTextEntry={hideNewPass ? true : false}
                    value={newPass}
                    onChangeText={value => setNewPass(value)}
                  />
                  <TouchableOpacity
                    onPress={() => setHideNewPass(!hideNewPass)}>
                    <Ionicons
                      name={hideNewPass ? 'eye-off-outline' : 'eye-outline'}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.passContainer}>
                  <TextInput
                    style={styles.textInputPass}
                    placeholder="Confirm new password"
                    placeholderTextColor="#9F9F9F"
                    secureTextEntry={hideConfirmNewPass ? true : false}
                    value={confirmNewPass}
                    onChangeText={value => setConfirmNewPass(value)}
                  />
                  <TouchableOpacity
                    onPress={() => setHideConfirmNewPass(!hideConfirmNewPass)}>
                    <Ionicons
                      name={
                        hideConfirmNewPass ? 'eye-off-outline' : 'eye-outline'
                      }
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                </View>
                {props.error !== null ? (
                  <View style={{marginBottom: 20}}>
                    <Text style={styles.errorMsg}>{props.error}</Text>
                  </View>
                ) : null}
                <TouchableOpacity
                  style={styles.button}
                  disabled={props.resLoading == true ? true : false}
                  onPress={() => {
                    if (!newPass && !confirmNewPass) {
                      Alert.alert(
                        'TaliKasih',
                        'Please fill the required data!',
                      );
                    } else if (newPass && confirmNewPass) {
                      props.resetPass(dataResetPass, props.forgotToken);
                    }
                  }}>
                  <Text style={styles.buttonText}>
                    {props.resLoading == true ? `RESETTING...` : `RESET`}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          <TouchableOpacity
            style={styles.button}
            disabled={props.isLoading == true ? true : false}
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
              {props.isLoading == true ? `Logging In...` : `LOGIN`}
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
          <TouchableOpacity
            style={styles.buttonGoogle}
            // onPress={() => {
            //   setError();
            //   setUserInfo();
            //   GoogleSignin.configure({
            //     webClientId:
            //       '309200260432-3o9pudoci07ku4kutdko219puomh16vp.apps.googleusercontent.com',
            //     androidClientId:
            //       '309200260432-g4c9a2gc5mf7j4j47evdqrh8kt1kdmva.apps.googleusercontent.com',
            //     offlineAccess: true,
            //   });
            //   GoogleSignin.hasPlayServices()
            //     .then(hasPlayService => {
            //       if (hasPlayService) {
            //         GoogleSignin.signIn()
            //           .then(userInfo => {
            //             console.log(JSON.stringify(userInfo));
            //             setUserInfo(userInfo);
            //           })
            //           .catch(e => {
            //             console.log('ERROR: ' + JSON.stringify(e));
            //             setError(e.message);
            //           });
            //       }
            //     })
            //     .catch(e => {
            //       console.log('ERROR IS: ' + JSON.stringify(e));
            //     });
            // }}
          >
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
  forgotToken: state.auth.forgotToken,
  forLoading: state.auth.forLoading,
  resLoading: state.auth.resLoading,
});

const reduxDispatch = dispatch => ({
  login: (a, b) => dispatch({type: 'LOGIN', data: a, navigation: b}),
  forgotPass: c => dispatch({type: 'FORGOT_PASS_REQUEST', data: c}),
  resetPass: (d, e) =>
    dispatch({type: 'RESET_PASS_REQUEST', data: d, value: e}),
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
    height: hp('10%'),
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
  viewModal: {
    justifyContent: 'center',
    margin: 0,
  },
  viewModalContainer: {
    width: wp('100%'),
    backgroundColor: '#FFFFFF',
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('1.5%'),
    borderRadius: 10,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: hp('3%'),
  },
  modalHeaderTitle: {
    fontSize: hp('2.6%'),
    fontFamily: 'Nunito-Bold',
    color: '#000000',
  },
  modalContent: {
    alignItems: 'center',
    paddingHorizontal: wp('2%'),
    marginBottom: 10,
  },
});
