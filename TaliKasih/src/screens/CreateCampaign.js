import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {launchImageLibrary} from 'react-native-image-picker';
import Users from 'react-native-vector-icons/AntDesign';
import {color} from 'react-native-reanimated';

const CreateCampaign = () => {
  const [Img, setImg] = useState();
  const option = {
    title: 'Select Avatar',
    StorageOption: {
      skipBackup: false,
      path: 'images',
    },
  };

  function pickImage() {
    launchImageLibrary(option, response => {
      const source = {
        uri: response.assets[0].uri,
        type: response.assets[0].type,
        name: response.assets[0].fileName,
      };

      console.log(source);
      setImg(response.assets[0].uri);
    });
  }

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{height: hp('150%')}}>
        <View style={styles.mid}>
          <TouchableOpacity style={styles.button} onPress={() => pickImage()}>
            <Users name="pluscircleo" size={40} color={'#214457'} />
            <Text style={styles.buttonText}>Add Header Photo</Text>
          </TouchableOpacity>
          <View style={styles.Inputbox}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontFamily: 'Nunito-Bold', fontSize: 18}}>
                Title
              </Text>
              <Text
                style={{
                  fontFamily: 'Nunito-Black',
                  fontSize: 18,
                  color: '#A43F3C',
                }}>
                *
              </Text>
            </View>
            <TextInput
              style={styles.TextInput}
              placeholder="e.g. Help us to get clean water"
              placeholderTextColor="#999999"
              keyboardType="default"
            />
          </View>

          <View style={styles.Inputbox}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontFamily: 'Nunito-Bold', fontSize: 18}}>
                Category
              </Text>
              <Text
                style={{
                  fontFamily: 'Nunito-Black',
                  fontSize: 18,
                  color: '#A43F3C',
                }}>
                *
              </Text>
            </View>
            <TextInput
              style={styles.TextInput}
              placeholder="Select campaign category"
              placeholderTextColor="#999999"
              keyboardType="default"
            />
          </View>

          <View style={styles.Inputbox}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontFamily: 'Nunito-Bold', fontSize: 18}}>
                Goal
              </Text>
              <Text
                style={{
                  fontFamily: 'Nunito-Black',
                  fontSize: 18,
                  color: '#A43F3C',
                }}>
                *
              </Text>
            </View>
            <TextInput
              style={styles.TextInput}
              placeholder="e.g 20,000,000"
              placeholderTextColor="#999999"
              keyboardType="default"
            />
          </View>

          <View style={styles.Inputbox}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontFamily: 'Nunito-Bold', fontSize: 18}}>
                Due Date
              </Text>
              <Text style={{alignSelf: 'center', marginHorizontal: 10}}>
                (Optional)
              </Text>
            </View>
            <TextInput
              style={styles.TextInput}
              placeholder="Select due date"
              placeholderTextColor="#999999"
              keyboardType="default"
            />
          </View>

          <View style={styles.storybox}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontFamily: 'Nunito-Bold', fontSize: 18}}>
                Story
              </Text>
              <Text
                style={{
                  fontFamily: 'Nunito-Black',
                  fontSize: 18,
                  color: '#A43F3C',
                }}>
                *
              </Text>
            </View>
            <TextInput
              style={styles.TextInputstory}
              placeholder="Tell us your story"
              placeholderTextColor="#999999"
              keyboardType="default"
            />
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          backgroundColor: '#FFFFFF',
          width: '100%',
          height: 100,
        }}>
        <TouchableOpacity style={styles.botbutton}>
          <Text style={styles.botbuttonText}>CREATE CAMPAIGN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateCampaign;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    flex: 1,
  },
  addphoto: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: hp('2%'),
  },
  photo: {
    width: wp('85%'),
    height: hp('35%'),
    borderRadius: 30,
  },
  mid: {
    alignItems: 'center',
    flex: 1,
  },
  button: {
    width: wp('85%'),
    height: hp('40%'),
    backgroundColor: '#ECEEEF',
    borderColor: '#214457',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonText: {
    fontSize: hp('3%'),
    color: '#214457',
    textAlign: 'center',
    fontFamily: 'Nunito-Bold',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  TextInput: {
    width: wp('85%'),
    height: hp('7%'),
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    paddingHorizontal: 16,
    fontSize: 16,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#999999',
  },
  TextInputstory: {
    width: wp('85%'),
    height: hp('30%'),
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    paddingHorizontal: 16,
    fontSize: 16,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#999999',
  },
  // Inputbox: {
  //   flex: 1,
  // },

  dateTimeText: {
    fontSize: 16,
    color: '#999999',
  },
  SelectBox: {
    alignItems: 'flex-start',
    paddingVertical: 10,
  },
  selectBtn: {
    width: wp('85%'),
    height: hp('7%'),
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#F6F6F6',
    borderColor: '#999999',
  },
  selectTextBtn: {
    textAlign: 'left',
    fontSize: 16,
    color: '#999999',
  },
  botbutton: {
    width: wp('90%'),
    height: hp('7%'),
    backgroundColor: '#A43F3C',
    borderRadius: 5,
    marginVertical: 10,
    paddingVertical: 13,
    alignSelf: 'center',
  },
  botbuttonText: {
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'Nunito-Bold',
  },
});
