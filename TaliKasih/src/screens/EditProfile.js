import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {launchImageLibrary} from 'react-native-image-picker';
import Footer from '../components/FooterEditProfile';
import {connect} from 'react-redux';

const EditProfile = props => {
  const [name, setName] = useState(props.dataUser.name);
  const [email, setEmail] = useState(props.dataUser.email);
  const [newPass, setNewPass] = useState();
  const [confirmNewPass, setConfirmNewPass] = useState();
  const [bankName, setBankName] = useState(props.dataUser.bankName);
  const [bankAccNumber, setBankAccNumber] = useState(
    `${props.dataUser.bankAccount}`,
  );
  const [img, setImg] = useState(props.dataUser.image.replace(/\s+/g, ''));
  const [resetPass, setResetPass] = useState(resetPass);
  const [rawImage, setRawImage] = useState();

  const option = {
    title: 'Select Poster',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  function pickImage() {
    launchImageLibrary(option, response => {
      if (!response.didCancel) {
        const source = {
          uri: response.assets[0].uri,
          type: response.assets[0].type,
          name: response.assets[0].fileName,
        };
        console.log(source);
        setImg(source.uri);
        setRawImage(source);
      } else {
        console.log(response);
      }
    });
  }

  const dataProfileFull = {
    name: name,
    email: email,
    password: newPass,
    confirmPassword: confirmNewPass,
    image: rawImage,
    bankName: bankName,
    bankAccount: bankAccNumber,
  };

  const dataProfile = {
    name: name,
    email: email,
    image: rawImage,
    bankName: bankName,
    bankAccount: bankAccNumber,
  };

  console.log(rawImage);
  console.log(props.error);

  return (
    <View style={{flex: 1, backgroundColor: '#FAF8F3'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Image source={img ? {uri: img} : null} style={styles.avatar} />
          <TouchableOpacity onPress={() => pickImage()}>
            <Text style={styles.editProfileText}>Change Profile Image</Text>
          </TouchableOpacity>
          <View style={styles.arrange}>
            <Text style={styles.titleInputText}>Name</Text>
            <Text style={styles.requiredMark}>*</Text>
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="Your Name"
            value={name}
            onChangeText={value => setName(value)}
          />
          <View style={styles.arrange}>
            <Text style={styles.titleInputText}>Email</Text>
            <Text style={styles.requiredMark}>*</Text>
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="Your Email"
            value={email}
            onChangeText={value => setEmail(value)}
          />
          {resetPass ? (
            <View>
              <View style={styles.arrange}>
                <Text style={styles.titleInputText}>New Password</Text>
                <Text style={styles.requiredMark}>*</Text>
              </View>
              <TextInput
                style={styles.textInput}
                placeholder="New Password"
                value={newPass}
                secureTextEntry={true}
                onChangeText={value => setNewPass(value)}
              />
              <View style={styles.arrange}>
                <Text style={styles.titleInputText}>Confirm New Password</Text>
                <Text style={styles.requiredMark}>*</Text>
              </View>
              <TextInput
                style={styles.textInput}
                placeholder="Confirm New Password"
                value={confirmNewPass}
                secureTextEntry={true}
                onChangeText={value => setConfirmNewPass(value)}
              />
            </View>
          ) : (
            <TouchableOpacity onPress={() => setResetPass(!resetPass)}>
              <Text style={styles.resetText}>Reset password</Text>
            </TouchableOpacity>
          )}
          <Text style={styles.bankTitle}>
            We need your bank account for campaign purpose
          </Text>
          <View style={styles.arrange}>
            <Text style={styles.titleInputText}>Bank Name</Text>
            <Text style={styles.requiredMark}>*</Text>
          </View>
          <TextInput
            style={styles.textInput2}
            placeholder="Your Bank Name"
            value={`${bankName}`}
            onChangeText={value => setBankName(value)}
          />
          <View style={styles.arrange}>
            <Text style={styles.titleInputText}>Bank Account Number</Text>
            <Text style={styles.requiredMark}>*</Text>
          </View>
          <TextInput
            style={styles.textInput2}
            placeholder="Your Bank Account Number"
            keyboardType="numeric"
            value={`${bankAccNumber}`}
            onChangeText={value => setBankAccNumber(value)}
          />
        </View>
      </ScrollView>
      <Footer
        name={props.loading === true ? 'Loading...' : 'SAVE CHANGES'}
        data={resetPass ? dataProfileFull : dataProfile}
        navigation={props.navigation}
      />
    </View>
  );
};

const reduxState = state => ({
  dataUser: state.auth.dataUser,
  error: state.auth.error,
  loading: state.auth.isLoading,
});

export default connect(reduxState, null)(EditProfile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp('3%'),
    paddingHorizontal: wp('5%'),
    backgroundColor: '#FAF8F3',
  },
  arrange: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  requiredMark: {
    fontFamily: 'Nunito-Bold',
    fontSize: hp('2.4%'),
    color: '#A43F3C',
  },
  titleInputText: {
    fontFamily: 'Nunito-Bold',
    fontSize: hp('2.2%'),
    color: '#000000',
  },
  textInput: {
    height: hp('5.5%'),
    fontFamily: 'Nunito-Regular',
    fontSize: hp('2%'),
    color: '#2D2D2D',
    backgroundColor: '#FCFCFC',
    borderRadius: 4,
    borderBottomWidth: 0.5,
    borderBottomColor: '#1D94A8',
    paddingHorizontal: 10,
    marginBottom: 10,
    elevation: 3,
  },
  textInput2: {
    height: hp('5.5%'),
    fontFamily: 'Nunito-Regular',
    fontSize: hp('2%'),
    color: '#2D2D2D',
    backgroundColor: '#FCFCFC',
    borderRadius: 4,
    borderBottomWidth: 0.5,
    borderBottomColor: '#9F9F9F',
    paddingHorizontal: 10,
    marginBottom: 10,
    elevation: 3,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: hp('8%'),
    borderBottomWidth: 0.5,
    borderBottomColor: '#9F9F9F',
  },
  buttonText: {
    fontFamily: 'Nunito-Bold',
    fontSize: hp('2.2%'),
    color: '#000000',
  },
  buttonIcon: {
    fontFamily: 'Nunito-Bold',
    fontSize: hp('2.6%'),
    color: '#000000',
  },
  editProfileText: {
    fontFamily: 'Nunito-Bold',
    fontSize: hp('2.2%'),
    color: '#1D94A8',
    textDecorationLine: 'underline',
    alignSelf: 'center',
    marginBottom: 15,
  },
  avatar: {
    width: wp('50%'),
    height: hp('22%'),
    resizeMode: 'stretch',
    borderRadius: 4,
    alignSelf: 'center',
    marginBottom: 5,
  },
  bankTitle: {
    fontFamily: 'Nunito-Bold',
    fontSize: hp('2.2%'),
    color: '#A87B14',
    marginTop: 15,
    marginBottom: 10,
  },
  resetText: {
    fontFamily: 'Nunito-Bold',
    fontSize: hp('2.2%'),
    color: '#000000',
    textDecorationLine: 'underline',
    alignSelf: 'flex-end',
  },
});
