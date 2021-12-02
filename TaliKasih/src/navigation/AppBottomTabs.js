import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home';
import FundraiseUpdate from '../screens/FundraiseUpdate';
import CreateCampaign from '../screens/CreateCampaign';
import Profile from '../screens/Profile';
import More from '../screens/More';
import LogoHeader from '../assets/images/logo_header.png';

const Tab = createBottomTabNavigator();

const AppBottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: true,
        headerTintColor: '#000000',
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: true,
        tabBarInactiveTintColor: '#999999',
        tabBarActiveTintColor: '#1D94A8',
        tabBarInactiveBackgroundColor: '#FFFFFF',
        tabBarActiveBackgroundColor: '#ECEEEF',
        tabBarLabelStyle: {fontSize: hp('1.6%'), fontFamily: 'Nunito-Regular'},
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name == 'Donate') {
            iconName = focused ? 'star' : 'star-outline';
            size = focused ? hp('4.5%') : hp('4%');
          } else if (route.name == 'Create Campaign') {
            iconName = focused ? 'plus-box' : 'plus-box-outline';
            size = focused ? hp('4.5%') : hp('4%');
          } else if (route.name == 'My Account') {
            iconName = focused ? 'account' : 'account-outline';
            size = focused ? hp('4.5%') : hp('4%');
          } else if (route.name == 'More') {
            iconName = focused ? 'dots-horizontal' : 'dots-horizontal';
            size = focused ? hp('4.5%') : hp('4%');
          }
          return <MCIcons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen
        options={{
          header: props => {
            return (
              <View style={styles.headerContainer}>
                <Image source={LogoHeader} style={styles.logo} />
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate('Explore')}>
                    <Ionicons name="search" size={hp('3.5%')} color="#1D94A8" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate('Login')}>
                    <Text style={styles.loginText}>Login</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          },
        }}
        name="Donate"
        component={Home}
      />
      <Tab.Screen
        options={{
          header: props => {
            return (
              <View style={styles.headerContainer}>
                <Image source={LogoHeader} style={styles.logo} />
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('Explore')}>
                  <Ionicons name="search" size={hp('3.5%')} color="#1D94A8" />
                </TouchableOpacity>
              </View>
            );
          },
        }}
        name="Create Campaign"
        component={CreateCampaign}
      />
      <Tab.Screen
        options={{
          header: props => {
            return (
              <View style={styles.headerContainer}>
                <Image source={LogoHeader} style={styles.logo} />
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('Explore')}>
                  <Ionicons name="search" size={hp('3.5%')} color="#1D94A8" />
                </TouchableOpacity>
              </View>
            );
          },
        }}
        name="My Account"
        component={Profile}
      />
      <Tab.Screen
        options={{
          header: props => {
            return (
              <View style={styles.headerContainer}>
                <Image source={LogoHeader} style={styles.logo} />
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate('Explore')}>
                    <Ionicons name="search" size={hp('3.5%')} color="#1D94A8" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate('Login')}>
                    <Text style={styles.loginText}>Login</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          },
        }}
        name="More"
        component={More}
      />
    </Tab.Navigator>
  );
};

export default AppBottomTabs;

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
