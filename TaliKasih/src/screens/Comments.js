import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import User from 'react-native-vector-icons/FontAwesome';

const Comments = () => {
  const [text, onChangeText] = useState('');
  return (
    <View style={styles.update}>
      <Text
        style={{
          fontFamily: 'Nunito-Black',
          fontSize: 20,
        }}>
        Comments (11)
      </Text>

      <View style={styles.userdonate}>
        <View style={styles.inputbox}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Give them support..."
            placeholderTextColor="#999999"
            multiline={true}></TextInput>
        </View>
        <View
          style={{
            alignSelf: 'flex-end',
            justifyContent: 'flex-end',
            marginHorizontal: 10,
          }}>
          <TouchableOpacity style={styles.postbutton}>
            <Text style={styles.postbuttonText}>P O S T</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.donatecard}>
          <View style={styles.usercard}>
            <User name="user-circle" style={styles.usercircle} />
            <View>
              <Text style={{fontFamily: 'Nunito-Black', color: '#000000'}}>
                Reine Dea
              </Text>
              <Text>12 minutes ago</Text>
            </View>
          </View>
          <View style={{marginHorizontal: 12, marginBottom: 12}}>
            <Text>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              nunc pellentesque enim ultrices nunc. Pretium massa, vel viverra
              id mi sed sit.“
            </Text>
          </View>
        </View>

        <View style={styles.donatecard}>
          <View style={styles.usercard}>
            <User name="user-circle" style={styles.usercircle} />
            <View>
              <Text style={{fontFamily: 'Nunito-Black', color: '#000000'}}>
                Reine Dea
              </Text>
              <Text>12 minutes ago</Text>
            </View>
          </View>
          <View style={{marginHorizontal: 12, marginBottom: 12}}>
            <Text>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              nunc pellentesque enim ultrices nunc. Pretium massa, vel viverra
              id mi sed sit.“
            </Text>
          </View>
        </View>

        <View style={styles.donatecard}>
          <View style={styles.usercard}>
            <User name="user-circle" style={styles.usercircle} />
            <View>
              <Text style={{fontFamily: 'Nunito-Black', color: '#000000'}}>
                Reine Dea
              </Text>
              <Text>12 minutes ago</Text>
            </View>
          </View>
          <View style={{marginHorizontal: 12, marginBottom: 12}}>
            <Text>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              nunc pellentesque enim ultrices nunc. Pretium massa, vel viverra
              id mi sed sit.“
            </Text>
          </View>
        </View>

        <View style={styles.donatecard}>
          <View style={styles.usercard}>
            <User name="user-circle" style={styles.usercircle} />
            <View>
              <Text style={{fontFamily: 'Nunito-Black', color: '#000000'}}>
                Reine Dea
              </Text>
              <Text>12 minutes ago</Text>
            </View>
          </View>
          <View style={{marginHorizontal: 12, marginBottom: 12}}>
            <Text>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              nunc pellentesque enim ultrices nunc. Pretium massa, vel viverra
              id mi sed sit.“
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.show}>
        <Text style={styles.showolder}>SHOW MORE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Comments;
const styles = StyleSheet.create({
  update: {
    marginHorizontal: 20,
    borderWidth: 0.5,
    borderColor: '#9F9F9F',
    borderRadius: 5,
    padding: 10,
  },
  input: {
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    fontSize: 12,
  },
  inputbox: {
    backgroundColor: '#F1EDE433',
    width: '100%',
    height: 125,
    borderRadius: 10,
    marginVertical: 10,
  },
  donatecard: {
    borderWidth: 0.5,
    borderRadius: 5,
    marginVertical: 13,
    borderColor: '#9F9F9F',
  },
  usercard: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  usercircle: {
    color: '#000000',
    fontSize: hp('6'),
    marginHorizontal: 10,
  },
  postbutton: {
    width: wp('30%'),
    height: hp('7%'),
    backgroundColor: '#A43F3C',
    borderRadius: 10,
    paddingVertical: 13,
  },
  postbuttonText: {
    fontSize: hp('2.5'),
    color: '#FFFFFF',
    fontFamily: 'Nunito-Black',
    textAlign: 'center',
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
});
