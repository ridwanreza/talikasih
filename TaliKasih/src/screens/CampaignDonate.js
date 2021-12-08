import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Footer from '../components/FooterCampaignDonate';
import Clipboard from '@react-native-clipboard/clipboard';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CampaignDonate = props => {
  const [amount, setAmount] = useState();
  const [name, setName] = useState();
  const [message, setMessage] = useState();
  const [isChecked, setIsChecked] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [accNum, setAccNum] = useState('1234 5678 90');

  const dataDonate = {
    amount,
    name,
    message,
  };

  return (
    <View style={{flex: 1, backgroundColor: '#FAF8F3'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.arrange}>
            <Text style={styles.titleInputText}>Amount</Text>
            <Text style={styles.requiredMark}>*</Text>
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="e.g. 20,000,000"
            placeholderTextColor="#9F9F9F"
            keyboardType="numeric"
            editable={isSelected ? false : true}
            value={amount}
            onChangeText={value => setAmount(value)}
          />
          <View style={styles.arrange}>
            <Text style={styles.titleInputText}>Name</Text>
            <Text style={styles.requiredMark}>*</Text>
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="your name"
            placeholderTextColor="#9F9F9F"
            editable={isChecked || isSelected ? false : true}
            value={name}
            onChangeText={value => setName(value)}
          />
          <View style={styles.arrange}>
            <Pressable
              onPress={() => {
                setIsChecked(!isChecked);
                setName('anonymous');
              }}>
              <MCIcons
                name={
                  isChecked
                    ? 'checkbox-marked-outline'
                    : 'checkbox-blank-outline'
                }
                style={styles.iconCheckBox}
              />
            </Pressable>
            <Text style={styles.anonymous}>Set as anonymous</Text>
          </View>
          <View style={styles.arrange}>
            <Text style={styles.titleInputText}>Message</Text>
            <Text style={styles.requiredMark}>*</Text>
          </View>
          <TextInput
            style={styles.textArea}
            placeholder="Give them support."
            placeholderTextColor="#9F9F9F"
            editable={isSelected ? false : true}
            value={message}
            numberOfLines={6}
            multiline={true}
            onChangeText={value => setMessage(value)}
          />
          <View style={styles.arrange}>
            <Text style={styles.titleInputText}>Select Payment</Text>
            <Text style={styles.requiredMark}>*</Text>
          </View>
          <TouchableOpacity
            style={
              isSelected
                ? styles.paymentSelectedContainer
                : styles.paymentContainer
            }
            onPress={() => {
              if (!amount || !name || !message) {
                Alert.alert(
                  'TaliKasih',
                  'Please fill the required data above!',
                );
              } else if (amount && name && message) {
                setIsSelected(!isSelected);
              }
            }}>
            <MCIcons name="bank" style={styles.iconBank} />
            <Text style={styles.iconText}>Bank Transfer</Text>
          </TouchableOpacity>
          {isSelected ? (
            <View style={styles.transferInfoContainer}>
              <Text style={styles.transferText}>Transfer to</Text>
              <View style={styles.arrangeTransfer}>
                <View>
                  <Text style={styles.transferInfo}>Account Number</Text>
                  <Text style={styles.transferInfoValue}>{accNum}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    Clipboard.setString(accNum);
                    Alert.alert(
                      'TaliKasih',
                      'Copied to clipboard successfully.',
                    );
                  }}>
                  <Text style={styles.copyText}>COPY</Text>
                </TouchableOpacity>
              </View>
              <View style={{marginBottom: 15}}>
                <Text style={styles.transferInfo}>Account Holder Name</Text>
                <Text style={styles.transferInfoValue}>TaliKasih</Text>
              </View>
              <View style={styles.arrangeTransfer}>
                <View>
                  <Text style={styles.transferInfo}>Total Amount</Text>
                  <Text
                    style={styles.transferInfoValue}>{`Rp. ${amount}`}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    Clipboard.setString(amount);
                    Alert.alert(
                      'TaliKasih',
                      'Copied to clipboard successfully.',
                    );
                  }}>
                  <Text style={styles.copyText}>COPY</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : null}
        </View>
      </ScrollView>
      <Footer
        name={'DONATE'}
        data={dataDonate}
        selected={isSelected}
        navigation={props.navigation}
      />
    </View>
  );
};

export default CampaignDonate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: '#FAF8F3',
  },
  arrange: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  titleInputText: {
    fontFamily: 'Nunito-Bold',
    fontSize: hp('2.5%'),
    color: '#000000',
  },
  requiredMark: {
    fontFamily: 'Nunito-Bold',
    fontSize: hp('2.5%'),
    color: '#A43F3C',
  },
  anonymous: {
    fontFamily: 'Nunito-Regular',
    fontSize: hp('2.5%'),
    color: '#000000',
    marginLeft: 8,
  },
  iconCheckBox: {
    fontSize: hp('2.8%'),
    color: '#9F9F9F',
    backgroundColor: '#F4F4F4',
  },
  textInput: {
    height: hp('6.5%'),
    fontFamily: 'Nunito-Regular',
    fontSize: hp('2.3%'),
    backgroundColor: '#FCFCFC',
    borderRadius: 8,
    paddingHorizontal: 10,
    elevation: 5,
    marginBottom: 8,
  },
  textArea: {
    fontFamily: 'Nunito-Regular',
    fontSize: hp('2.3%'),
    backgroundColor: '#FCFCFC',
    borderRadius: 8,
    paddingHorizontal: 10,
    elevation: 5,
    textAlignVertical: 'top',
    marginBottom: 8,
  },
  paymentContainer: {
    width: wp('46%'),
    height: hp('12%'),
    borderRadius: 8,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  paymentSelectedContainer: {
    width: wp('46%'),
    height: hp('12%'),
    borderRadius: 8,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D7EBEE',
  },
  iconBank: {
    fontSize: hp('6%'),
    color: '#000000',
  },
  iconText: {
    fontSize: hp('2%'),
    color: '#000000',
    marginTop: 6,
  },
  transferInfoContainer: {
    backgroundColor: '#F4F4F4',
    marginTop: 20,
    borderRadius: 8,
    padding: 20,
  },
  transferText: {
    fontSize: hp('2.6%'),
    fontFamily: 'Nunito-Bold',
    color: '#1D94A8',
    marginBottom: 15,
  },
  arrangeTransfer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  transferInfo: {
    fontSize: hp('2.2%'),
    fontFamily: 'Nunito-Regular',
    color: '#9F9F9F',
  },
  transferInfoValue: {
    fontSize: hp('2.2%'),
    fontFamily: 'Nunito-Regular',
    color: '#000000',
  },
  copyText: {
    fontSize: hp('2%'),
    fontFamily: 'Nunito-Regular',
    color: '#2D2D2D',
  },
});
