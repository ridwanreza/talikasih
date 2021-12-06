import React from 'react';
import {StatusBar, StyleSheet, Text, View, Image} from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import Logo from '../assets/images/logo_vertical.png';
import googleLogo from '../assets/images/google_logo.png';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Row } from 'react-bootstrap';
import { color } from 'react-native-reanimated';
import { END } from '@redux-saga/core';
import { useNavigation } from '@react-navigation/core';
import { height } from 'dom-helpers';
import Icon from 'react-native-vector-icons/FontAwesome';



const Login = () => {
  const navigation = useNavigation();
  const [isOpen, setIsOpen] = React.useState(true);
  

  return (
  <View>
    
    <ScrollView contentContainerStyle={{flexGrow: 1, height: hp('100%')}}>
    <View style={styles.container}>
    
      <StatusBar barStyle="dark-content" backgroundColor="#F1EDE4" translucent={false}/>              
        <View style={styles.container}>
          <Image source={Logo} style={styles.logo}/>
          <Text style={styles.logoText}>Find causes you truly care about</Text>
        </View>
        <View style={styles.container2}>
          <TextInput style={styles.textInput} placeholder="Email" />
          <View style={styles.textInput}>  
            <TextInput  
                        placeholder="Password" 
                        secureTextEntry={isOpen ? true : false}
                        />
            <TouchableOpacity>
            <Icon onPress={() => setIsOpen(!isOpen)}
            name={isOpen ? 'eye-slash' : 'eye'} />
            </TouchableOpacity>
          </View>                 
          <Text style={styles.textForgotPassword} onPress={() => navigation.navigate('Sign Up')}>forgot password?</Text>         
          <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Sign Up')}>
            <Text style={{color: 'white'}}>Login</Text>
          </TouchableOpacity>  
          <Text style={styles.textNewUser}>New user?
                <Text style={styles.textCreateAccount} onPress={ ()=> navigation.navigate('Sign Up')}> Create an account</Text>
          </Text>
          <View flexDirection= 'row'>
          <View style={styles.loginLine}/>
          
          </View>  
          <View style={styles.row}>          
              <Image source={googleLogo} style={styles.GoogleLogo}>
              </Image> 
              <Text style={styles.googleText} onPress={ () => navigation.navigate('Sign Up')}>Continue With Google</Text>                     
          </View>
        </View>
      </View>  
      </ScrollView> 
  </View>
    
  );
};

export default Login;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1EDE4',
    alignItems: 'center',
    
  },

  container2: {
    flex: 1,
    backgroundColor: '#F1EDE4',
    // alignItems: 'center',
    marginTop: hp('-29%')
    
  },

  logo: {
    width: wp('50%'),
    height: hp('15%'),
    resizeMode: 'contain',   
    marginTop: hp('7%')
  },
  logoText: {
    flexDirection: 'row',
    fontSize: hp('1.6%'),
    fontFamily: 'Nunito-Regular',
    color: '#2D2D2D',
    textAlign: 'center', 
  },
  textInput: {   
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp('85%'),
    height: hp('7%'),
    borderBottomWidth: 1,
    marginVertical: 15,
    paddingHorizontal: 20,
    borderColor: '#9F9F9F',
  },

  textForgotPassword: {
    color: 'black',
    textDecorationLine: 'underline',
    fontFamily: 'Nunito-Regular',
    textAlign: 'right',
    marginTop: hp('-2%'),
    marginBottom: hp('4%')
  },
  textNewUser: {
    color: 'black',
    textDecorationLine: 'underline',
    fontFamily: 'Nunito-Regular',
    textAlign: 'center',
    marginVertical: hp('5%')
  },
  textCreateAccount: {
    color: '#1D94A8',
    textDecorationLine: 'underline',
    fontFamily: 'Nunito-Regular',
  },
  loginButton: {
    backgroundColor: '#A43F3C',
    height: hp('7%'),
    width: wp('85%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  loginLine: {
    backgroundColor: '#E1E0E0',
    height: 1, 
    flex: 1, 
    width: wp('100%'), 
    alignSelf: 'center',
    marginTop: hp('7%'),
    marginBottom: hp('-3%'),
    shadowColor: '#000000',   
    shadowOpacity: 25,
    shadowRadius: 4,
    elevation: 3,
  },

  row: {
    marginTop: hp('6%'),
    marginBottom: hp('3%'),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    
  },
  GoogleLogo: {
    height: hp('4%'),
    width: wp('4%'),
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  googleText: {
    marginHorizontal: 30,
    fontFamily: 'Nunito-Regular',
    color: '#2D2D2D',
    fontSize: hp('2.5%'),
  },
  
});
