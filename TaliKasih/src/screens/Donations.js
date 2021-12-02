import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import User from 'react-native-vector-icons/FontAwesome';

const Donations = () => {
  return (
    <View style={styles.update}>
      <Text
        style={{
          fontFamily: 'Nunito-Black',
          fontSize: 20,
        }}>
        Donations (132)
      </Text>

      <View style={styles.userdonate}>
        <View style={styles.donatecard}>
          <View style={styles.usercard}>
            <User name="user-circle" style={styles.usercircle} />
            <View>
              <Text
                style={{
                  fontFamily: 'Nunito-Black',
                  color: '#1D94A8',
                }}>
                Rp.320.000
              </Text>
              <Text style={{fontFamily: 'Nunito-Regular', color: '#000000'}}>
                Justin Junaedi
              </Text>
            </View>
            <Text>12 minutes ago</Text>
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
              <Text
                style={{
                  fontFamily: 'Nunito-Black',
                  color: '#1D94A8',
                }}>
                Rp.320.000
              </Text>
              <Text style={{fontFamily: 'Nunito-Regular', color: '#000000'}}>
                Justin Junaedi
              </Text>
            </View>
            <Text>12 minutes ago</Text>
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
              <Text
                style={{
                  fontFamily: 'Nunito-Black',
                  color: '#1D94A8',
                }}>
                Rp.320.000
              </Text>
              <Text style={{fontFamily: 'Nunito-Regular', color: '#000000'}}>
                Anonymous
              </Text>
            </View>
            <Text>12 minutes ago</Text>
          </View>
        </View>

        <View style={styles.donatecard}>
          <View style={styles.usercard}>
            <User name="user-circle" style={styles.usercircle} />
            <View>
              <Text
                style={{
                  fontFamily: 'Nunito-Black',
                  color: '#1D94A8',
                }}>
                Rp.320.000
              </Text>
              <Text style={{fontFamily: 'Nunito-Regular', color: '#000000'}}>
                Luna Nox
              </Text>
            </View>
            <Text>12 minutes ago</Text>
          </View>
        </View>

        <View style={styles.donatecard}>
          <View style={styles.usercard}>
            <User name="user-circle" style={styles.usercircle} />
            <View>
              <Text
                style={{
                  fontFamily: 'Nunito-Black',
                  color: '#1D94A8',
                }}>
                Rp.320.000
              </Text>
              <Text style={{fontFamily: 'Nunito-Regular', color: '#000000'}}>
                Luna Nox
              </Text>
            </View>
            <Text>12 minutes ago</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.show}>
          <Text style={styles.showolder}>LOAD MORE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Donations;
const styles = StyleSheet.create({
  update: {
    marginHorizontal: 20,
    borderWidth: 0.5,
    borderColor: '#9F9F9F',
    borderRadius: 5,
    padding: 10,
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
