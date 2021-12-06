import React from 'react';
import { Form } from 'react-bootstrap';
import {StatusBar, StyleSheet, Text, View, Pressable, Image} from 'react-native';
import {ScrollView, TouchableOpacity, TextInput} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/core';
import Logo from '../assets/images/logo_vertical.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import { style } from 'dom-helpers';
import googleLogo from '../assets/images/google_logo.png'



const SignUp = () => {
  const navigation = useNavigation ();
  const [isOpen, setIsOpen] = React.useState(true);
  const [isOpen2, setIsOpen2] = React.useState(true);
  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor="#F4F4F4" translucent={false}/>
      <ScrollView contentContainerStyle={{flexGrow: 1, height: hp('115%')}}>
      <View style={styles.container}>
          <Image source={Logo} style={styles.logo}/>
          <Text style={styles.logoText}>Find causes you truly care about</Text>
      </View>
      <View style={styles.container2}>
        <TextInput style={styles.textInput} placeholder="Name" />
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
        <View style={styles.textInput}> 
            <TextInput  
                        placeholder="Confirm Password" 
                        secureTextEntry={isOpen2 ? true : false}
                        />
            <TouchableOpacity>
            <Icon onPress={() => setIsOpen2(!isOpen2)}
            name={isOpen2 ? 'eye-slash' : 'eye'} />
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('Login')}>
          <Text style={{color: 'white'}}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.textNewUser}>Already have an account?
                <Text style={styles.textCreateAccount} onPress={ ()=> navigation.navigate('Login')}> Sign In</Text>
        </Text>
        <View style={{flex:1, alignItems: 'center'}} flexDirection= 'row'>
          <View style={styles.loginLine}/>         
        </View>  
        <View style={styles.row}>          
              <Image source={googleLogo} style={styles.GoogleLogo}>
              </Image> 
              <Text style={styles.googleText} onPress={ () => navigation.navigate('Login')}>Continue With Google</Text>                     
        </View>
      </View>      
      </ScrollView>     
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    alignItems: 'center',
    
  },

  container2: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    alignItems: 'center',
    marginTop: hp('-50%'),
  },

  logo: {
    width: wp('50%'),
    height: hp('15%'),
    resizeMode: 'contain',
    marginTop: hp('10%')
  },

  logoText: {     
      fontSize: hp('1.6%'),
      fontFamily: 'Nunito-Regular',
      color: '#2D2D2D',
      textAlign: 'center',
      marginBottom: hp('-10%'),
  },

  textInput: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp('85%'),
    height: hp('7%'),
    borderBottomWidth: 1,
    marginVertical: 12,
    paddingHorizontal: 20,
    borderColor: '#9F9F9F',
  },

  signUpButton : {  
    backgroundColor: '#A43F3C',
    height: hp('7%'),
    width: wp('85%'),
    justifyContent: 'center',
    alignItems: 'center',    
    borderRadius: 3,
    marginTop: hp('5%'),
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

  loginLine: {
    backgroundColor: '#E1E0E0',
    height: 1, 
    flex: 1,
    marginHorizontal: wp ('7%'),   
    marginTop: hp('0%'),
    marginBottom: hp('-3%'),
    shadowColor: '#000000',   
    shadowOpacity: 25,
    shadowRadius: 4,
    elevation: 3,
  },

  row: {
    marginTop: hp('1%'),   
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
