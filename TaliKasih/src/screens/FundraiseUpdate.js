import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import Footer from '../components/FooterFundraiseUpdate';

const FundraiseUpdate = props => {
  const [isRSelected, setIsRSelected] = useState(true);
  const [isFSelected, setIsFSelected] = useState(false);
  const [story, setStory] = useState();
  const [amount, setAmount] = useState();
  const [wdPurpose, setWdPurpose] = useState();
  const [campaignId, setCampaignId] = useState(props.route.params.campaignId);
  const [error, setError] = useState();

  const dataRecipient = {
    update: story,
  };

  const dataWithdrawal = {
    update: wdPurpose,
    amount: amount,
  };

  useEffect(() => {
    setError(props.error);
  }, [props.error]);

  return (
    <View style={{flex: 1, backgroundColor: '#FAF8F3'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.arrange}>
            <TouchableOpacity
              onPress={() => {
                setIsRSelected(true);
                setIsFSelected(false);
              }}>
              <FontAwesome
                name={isRSelected ? 'dot-circle-o' : 'circle-o'}
                style={
                  isRSelected
                    ? styles.radioButtonIconFocused
                    : styles.radioButtonIcon
                }
              />
            </TouchableOpacity>
            <Text style={styles.radioButtonText}>Recipient update</Text>
          </View>
          <View style={styles.arrange}>
            <TouchableOpacity
              onPress={() => {
                setIsFSelected(true);
                setIsRSelected(false);
              }}>
              <FontAwesome
                name={isFSelected ? 'dot-circle-o' : 'circle-o'}
                style={
                  isFSelected
                    ? styles.radioButtonIconFocused
                    : styles.radioButtonIcon
                }
              />
            </TouchableOpacity>
            <Text style={styles.radioButtonText}>Fund withdrawal</Text>
          </View>

          {isRSelected ? (
            <View style={styles.selectedContainer}>
              <View style={styles.arrange}>
                <Text style={styles.titleInputText}>Update</Text>
                <Text style={styles.requiredMark}>*</Text>
              </View>
              <TextInput
                style={styles.textArea}
                placeholder="Tell your story..."
                placeholderTextColor="#9F9F9F"
                value={story}
                multiline={true}
                numberOfLines={10}
                onChangeText={value => setStory(value)}
              />
            </View>
          ) : (
            <View style={styles.selectedContainer}>
              <View style={styles.arrange}>
                <Text style={styles.titleInputText}>Amount</Text>
                <Text style={styles.requiredMark}>*</Text>
              </View>
              <TextInput
                style={styles.textInput}
                placeholder="e.g. 20,000,000"
                placeholderTextColor="#9F9F9F"
                keyboardType="numeric"
                value={amount}
                onChangeText={value => setAmount(value)}
              />
              <View style={styles.arrange}>
                <Text style={styles.titleInputText}>Withdrawal Purpose</Text>
                <Text style={styles.requiredMark}>*</Text>
              </View>
              <TextInput
                style={styles.textArea}
                placeholder="Tell your story..."
                placeholderTextColor="#9F9F9F"
                value={wdPurpose}
                multiline={true}
                numberOfLines={10}
                onChangeText={value => setWdPurpose(value)}
              />
            </View>
          )}
          {error !== null ? <Text style={styles.errorMsg}>{error}</Text> : null}
        </View>
      </ScrollView>
      <Footer
        data={isRSelected ? dataRecipient : dataWithdrawal}
        selected={isRSelected}
        campaignId={campaignId}
        navigation={props.navigation}
      />
    </View>
  );
};

const reduxState = state => ({
  error: state.taliKasih.error,
});

export default connect(reduxState, null)(FundraiseUpdate);

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
    marginBottom: 12,
  },
  radioButtonIcon: {
    fontSize: hp('2.8%'),
    color: '#9F9F9F',
    backgroundColor: '#F4F4F4',
  },
  radioButtonIconFocused: {
    fontSize: hp('2.8%'),
    color: '#1D94A8',
    backgroundColor: '#F4F4F4',
  },
  radioButtonText: {
    fontFamily: 'Nunito-Bold',
    fontSize: hp('2.5%'),
    color: '#000000',
    marginLeft: 8,
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
  textArea: {
    fontFamily: 'Nunito-Regular',
    fontSize: hp('2.3%'),
    backgroundColor: '#FCFCFC',
    borderRadius: 8,
    paddingHorizontal: 10,
    elevation: 5,
    textAlignVertical: 'top',
    marginBottom: 15,
  },
  textInput: {
    height: hp('6.5%'),
    fontFamily: 'Nunito-Regular',
    fontSize: hp('2.3%'),
    backgroundColor: '#FCFCFC',
    borderRadius: 8,
    paddingHorizontal: 10,
    elevation: 5,
    marginBottom: 15,
  },
  selectedContainer: {
    marginTop: 10,
  },
  errorMsg: {
    fontFamily: 'Nunito-Regular',
    fontSize: hp('2%'),
    color: 'red',
  },
});
