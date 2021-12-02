import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Campaign from '../assets/images/Campaign.png';
import User from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import Ion from 'react-native-vector-icons/Feather';
import Donations from './Donations';
import Comments from './Comments';

const CampaignDetails = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{height: hp('580%')}}>
        <View style={styles.contain}>
          <View>
            <Image source={Campaign} style={styles.image}></Image>
          </View>
          <View>
            <Text style={styles.txt}>
              Aid for necessary items to help our country
            </Text>
          </View>
          <View style={styles.fundraiser}>
            <View style={styles.fundraiser1}>
              <View>
                <Text style={styles.idr}>IDR 30.000.000</Text>
                <Text style={styles.goal}>Raised from IDR 50.000.000 goal</Text>
              </View>
              <View style={styles.headcont}>
                <User name="user-circle" style={styles.imgcircle} />
                <View style={styles.textcont}>
                  <Text style={styles.txt1}>Luna</Text>
                  <Text style={styles.txt2}>Fundraiser</Text>
                </View>
              </View>
            </View>
            <View style={styles.square}>
              <View style={styles.square1}>
                <Text style={styles.sqtext1}>132</Text>
                <Text style={styles.sqtext2}>Donations</Text>
              </View>
              <View style={styles.square1}>
                <Text style={styles.sqtext1}>232</Text>
                <Text style={styles.sqtext2}>Share</Text>
              </View>
              <View style={styles.square1}>
                <Text style={styles.sqtext1}>12</Text>
                <Text style={styles.sqtext2}>Days Left</Text>
              </View>
            </View>
          </View>
          <View style={styles.story}>
            <Text style={styles.title}>The Story</Text>
            <Text style={styles.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nunc
              pellentesque enim ultrices nunc. Pretium massa, vel viverra id mi
              sed sit. In faucibus leo etiam cras elit malesuada augue. Sagittis
              quisque non, nullam facilisis. Tempus cras nibh vitae vitae. Risus
              gravida arcu non a rhoncus suscipit a eu ultrices. Vestibulum, ut
              cursus pellentesque turpis ipsum arcu congue. Sit arcu, non
              gravida praesent turpis varius. Phasellus morbi donec pulvinar
              nisi ac augue at duis dolor. Sed ut hendrerit neque nunc accumsan
              ac massa. Nullam scelerisque Vestibulum, ut cursus pellentesque
              turpis ipsum arcu congue. Sit arcu, non gravida praesent turpis
              varius. Phasellus morbi donec pulvinar nisi ac augue at duis
              dolor. Sed ut hendrerit neque nunc accumsan ac massa. Nullam
            </Text>
            <TouchableOpacity style={styles.read}>
              <Text style={styles.readmore}>Read More</Text>
              <Icon name="down" style={styles.down} />
            </TouchableOpacity>
          </View>

          <View style={styles.update}>
            <Text
              style={{
                fontFamily: 'Nunito-Black',
                fontSize: 20,
              }}>
              Update (16)
            </Text>
            <View style={styles.recepient}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.titleup}>Today</Text>
                <Text style={styles.titleup1}>- Recepient update</Text>
              </View>
              <View style={styles.rccard}>
                <Text style={{marginVertical: 5, marginHorizontal: 14}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  nunc pellentesque enim ultrices nunc. Pretium massa, vel
                  viverra id mi sed sit. In faucibus leo etiam cras elit
                  malesuada augue. Sagittis quisque non, nullam facilisis.{' '}
                </Text>
              </View>
            </View>

            <View style={styles.recepient}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.titleup}>Today</Text>
                <Text style={styles.titleup1}>- Recepient update</Text>
              </View>
              <View style={styles.rccard}>
                <Text style={{marginVertical: 5, marginHorizontal: 14}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  nunc pellentesque enim ultrices nunc. Pretium massa, vel
                  viverra id mi sed sit. In faucibus leo etiam cras elit
                  malesuada augue. Sagittis quisque non, nullam facilisis.{' '}
                </Text>
              </View>
            </View>

            <View style={styles.withdraw}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontFamily: 'Nunito-Black', fontSize: 20}}>
                  Yesterday
                </Text>
                <Text style={styles.wdtxt}>Withdrawal</Text>
              </View>
              <View style={styles.wdcard}>
                <Text
                  style={{
                    fontFamily: 'Nunito-Black',
                    fontSize: 20,
                    margin: 13,
                  }}>
                  Rp.20.000.000
                </Text>
                <View />
                <Text style={{color: '#9F9F9F', marginHorizontal: 13}}>
                  Withdrawal purpose
                </Text>
                <Text style={{marginHorizontal: 15, fontSize: 15}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
              </View>
            </View>

            <View style={styles.withdraw}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontFamily: 'Nunito-Black', fontSize: 20}}>
                  3 Oktober 2020
                </Text>
                <Text style={styles.wdtxt}>Withdrawal</Text>
              </View>
              <View style={styles.wdcard}>
                <Text
                  style={{
                    fontFamily: 'Nunito-Black',
                    fontSize: 20,
                    margin: 13,
                  }}>
                  Rp.20.000.000
                </Text>
                <View />
                <Text style={{color: '#9F9F9F', marginHorizontal: 13}}>
                  Withdrawal purpose
                </Text>
                <Text style={{marginHorizontal: 15, fontSize: 15}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
              </View>
            </View>

            <View style={styles.recepient}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.titleup}>30 September 2020</Text>
                <Text style={styles.titleup1}>- Recepient update</Text>
              </View>
              <View style={styles.rccard}>
                <Text style={{marginVertical: 5, marginHorizontal: 14}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  nunc pellentesque enim ultrices nunc. Pretium massa, vel
                  viverra id mi sed sit. In faucibus leo etiam cras elit
                  malesuada augue. Sagittis quisque non, nullam facilisis.{' '}
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.show}>
              <Text style={styles.showolder}>SHOW OLDER</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginVertical: hp('7')}}>
          <Donations />
        </View>
        <View>
          <Comments />
        </View>
      </ScrollView>
      <View
        style={{
          width: wp('100%'),
          height: hp('7'),
          flexDirection: 'row',
        }}>
        <TouchableOpacity style={styles.botbutton1}>
          <Ion name="upload" size={30} color={'#1D94A8'} />
          <Text style={styles.botbuttonText1}>SHARE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botbutton2}>
          <Text style={styles.botbuttonText2}>UPDATE PROGRESS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CampaignDetails;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  image: {
    height: hp('35%'),
    width: wp('100%'),
  },
  txt: {
    fontFamily: 'Nunito-Bold',
    color: 'black',
    fontSize: 28,
    marginHorizontal: 12,
    marginVertical: 10,
  },
  fundraiser: {
    backgroundColor: '#FFFFFF',
    width: wp('95'),
    alignSelf: 'center',
    borderRadius: 5,
  },
  fundraiser1: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
  idr: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 27,
    color: '#A43F3C',
  },
  goal: {
    fontFamily: 'Nunito-Regular',
    color: '#000000',
    fontSize: 17,
  },
  textcont: {
    flexDirection: 'column',
    marginHorizontal: 10,
  },
  headcont: {
    flexDirection: 'row',
    marginVertical: hp('2'),
  },
  imgcircle: {
    fontSize: hp('6%'),
    color: `black`,
  },
  txt1: {
    fontFamily: 'Nunito-Regular',
    color: '#000000',
    fontSize: 17,
  },
  txt2: {
    fontFamily: 'Nunito-Regular',
  },
  square: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  square1: {
    height: hp('12'),
    width: wp('25'),
    backgroundColor: '#F4F4F4',
    marginHorizontal: 10,
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: hp('2'),
  },
  sqtext1: {
    alignSelf: 'center',
    fontFamily: 'Nunito-Black',
    fontSize: 20,
    color: '#1D94A8',
  },
  sqtext2: {
    alignSelf: 'center',
    fontFamily: 'Nunito-Regular',
  },
  story: {
    marginVertical: hp('5'),
    alignSelf: 'center',
    width: wp('90'),
  },
  title: {
    fontFamily: 'Nunito-Black',
    fontSize: 20,
    color: '#000000',
    marginVertical: 10,
    alignSelf: 'center',
  },
  paragraph: {
    fontFamily: 'Nunito-Regular',
    color: '#000000',
    fontSize: 18,
    marginHorizontal: 10,
  },
  read: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
    alignSelf: 'center',
  },
  readmore: {
    color: '#A87B14',
    fontFamily: 'Nunito-Black',
    fontSize: 20,
    marginHorizontal: 5,
    textDecorationLine: 'underline',
  },
  down: {
    color: '#A87B14',
    fontSize: 25,
  },
  update: {
    marginHorizontal: 20,
    borderWidth: 0.5,
    borderColor: '#9F9F9F',
    borderRadius: 5,
    padding: 10,
  },
  recepient: {
    marginVertical: 10,
    alignSelf: 'center',
  },
  titleup: {
    fontFamily: 'Nunito-Black',
    fontSize: 18,
  },
  titleup1: {
    alignSelf: 'center',
    marginHorizontal: 5,
    color: '#9F9F9F',
    fontSize: 13,
  },
  rccard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 0.5,
    borderRadius: 5,
    height: hp('15'),
    width: wp('80'),
  },
  withdraw: {
    marginVertical: 10,
    alignSelf: 'center',
  },
  wdtxt: {
    color: '#A87B14',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#A87B14',
    alignSelf: 'center',
    paddingHorizontal: 5,
    fontFamily: 'Nunito-Regular',
    marginHorizontal: 10,
    fontSize: 13,
  },
  wdcard: {
    backgroundColor: '#E5E5E5',
    height: hp('15'),
    width: wp('80'),
    borderRadius: 5,
  },
  show: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 20,
    alignSelf: 'center',
  },
  showolder: {
    color: '#1D94A8',
    fontFamily: 'Nunito-Regular',
    fontSize: 15,
    marginHorizontal: 5,
    borderWidth: 1.5,
    paddingHorizontal: 19,
    paddingVertical: 5,
    borderRadius: 5,
    borderColor: '#1D94A8',
  },
  userdonate: {},
  donatecard: {
    borderWidth: 0.5,
    borderRadius: 5,
  },
  usercard: {
    flexDirection: 'row',
  },
  usercircle: {
    color: '#000000',
    fontSize: hp('6'),
    marginHorizontal: 10,
  },
  botbutton1: {
    width: wp('40'),
    backgroundColor: '#FFFFFF',
    paddingVertical: 13,
    alignSelf: 'center',
    borderColor: '#214457',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  botbutton2: {
    width: wp('60'),
    backgroundColor: '#A43F3C',
    paddingVertical: 13,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  botbuttonText1: {
    fontSize: hp('2.5'),
    color: '#1D94A8',
    textAlign: 'center',
    fontFamily: 'Nunito-Bold',
    paddingHorizontal: 10,
  },
  botbuttonText2: {
    fontSize: hp('2.5'),
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'Nunito-Bold',
    paddingHorizontal: 10,
  },
});
