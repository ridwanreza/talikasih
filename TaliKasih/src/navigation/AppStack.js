import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LogoHeader from '../assets/images/logo_header.png';
import Main from './AppBottomTabs';
import SplashScreen from '../screens/SplashScreen';
import SignUp from '../screens/SignUp';
import Login from '../screens/Login';
import FilterSort from '../screens/FilterSort';
import Explore from '../screens/Explore';
import EditProfile from '../screens/EditProfile';
import MyDonation from '../screens/MyDonation';
import MyCampaign from '../screens/MyCampaign';
import CampaignDetails from '../screens/CampaignDetails';
import CampaignDonate from '../screens/CampaignDonate';
import FundraiseUpdate from '../screens/FundraiseUpdate';
import {connect} from 'react-redux';

const Stack = createStackNavigator();

const AppStack = props => {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 3000);
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: '#1D94A8',
        headerTitleAlign: 'center',
        headerStyle: {backgroundColor: '#FFFFFF'},
      }}>
      {load ? (
        <Stack.Screen name="Splash Screen" component={SplashScreen} />
      ) : (
        <>
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen
            options={{
              headerShown: true,
              headerTitle: '',
              headerStyle: {backgroundColor: '#F4F4F4'},
            }}
            name="Sign Up"
            component={SignUp}
          />
          <Stack.Screen
            options={{
              headerShown: true,
              headerTitle: '',
              headerStyle: {backgroundColor: '#F1EDE4'},
            }}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{
              headerShown: true,
              headerTitle: 'Filter & Sort',
              headerTitleStyle: {fontFamily: 'Nunito-Bold', color: '#000000'},
            }}
            name="Filter Sort"
            component={FilterSort}
          />
          <Stack.Screen
            options={{
              headerShown: true,
              headerTitle: 'Explore',
              headerTitleStyle: {fontFamily: 'Nunito-Bold', color: '#000000'},
            }}
            name="Explore"
            component={Explore}
          />
          <Stack.Screen
            options={{
              headerShown: true,
              headerTitle: 'Edit Profile',
              headerTitleStyle: {fontFamily: 'Nunito-Bold', color: '#000000'},
            }}
            name="Edit Profile"
            component={EditProfile}
          />
          <Stack.Screen
            options={{
              headerShown: true,
              headerTitle: `My Donations (${props.dataMyDonation.length})`,
              headerTitleStyle: {fontFamily: 'Nunito-Bold', color: '#000000'},
            }}
            name="My Donation"
            component={MyDonation}
          />
          <Stack.Screen
            options={{
              headerShown: true,
              headerTitle: `My Campaign (${props.dataMyCampaign.length})`,
              headerTitleStyle: {fontFamily: 'Nunito-Bold', color: '#000000'},
            }}
            name="My Campaign"
            component={MyCampaign}
          />
          <Stack.Screen
            options={{
              headerShown: true,
              headerLeft: null,
              header: props => {
                return (
                  <View style={styles.headerContainer}>
                    <Image source={LogoHeader} style={styles.logo} />
                    <TouchableOpacity
                      onPress={() => props.navigation.navigate('Explore')}>
                      <Ionicons
                        name="search"
                        size={hp('3.5%')}
                        color="#1D94A8"
                      />
                    </TouchableOpacity>
                  </View>
                );
              },
            }}
            name="CampaignDetails"
            component={CampaignDetails}
          />
          <Stack.Screen
            options={{
              headerShown: true,
              headerTitle: 'Donation',
              headerTitleStyle: {fontFamily: 'Nunito-Bold', color: '#000000'},
            }}
            name="Campaign Donate"
            component={CampaignDonate}
          />
          <Stack.Screen
            options={{
              headerShown: true,
              headerTitle: 'Update Campaign Progress',
              headerTitleStyle: {fontFamily: 'Nunito-Bold', color: '#000000'},
            }}
            name="Fundraise Update"
            component={FundraiseUpdate}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

const reduxState = state => ({
  dataMyCampaign: state.taliKasih.dataMyCampaign,
  dataMyDonation: state.taliKasih.dataMyDonation,
});

export default connect(reduxState, null)(AppStack);

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp('100%'),
    height: hp('9%'),
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: wp('32%'),
    height: hp('5%'),
    resizeMode: 'contain',
  },
  loginText: {
    fontSize: hp('2%'),
    color: '#000000',
    fontFamily: 'Nunito-Bold',
    marginLeft: 8,
  },
});
