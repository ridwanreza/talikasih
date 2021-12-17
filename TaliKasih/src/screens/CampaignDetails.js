import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Card from '../components/CardCampaignDetail';
import CardUpdates from '../components/CardUpdates';
import CardDonation from '../components/CardDonation';
import CardComment from '../components/CardComment';
import CardCampaign from '../components/CardCampaign';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Footer from '../components/FooterCampaignDetail';
import {connect} from 'react-redux';

const CampaignDetails = props => {
  const [comment, setComment] = useState();
  const [id, setId] = useState();
  const [isModalManageVisible, setIsModalManageVisible] = useState(false);

  const toggleModalManage = () => {
    setIsModalManageVisible(!isModalManageVisible);
  };

  useEffect(() => {
    props.getCampaignDetail(props.route.params.campaignId);
    setId(props.route.params.campaignId);
  }, [props.dataMyComment]);

  const dataComment = {
    comment: comment,
  };

  if (props.loading === true) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            color: '#000000',
            fontSize: hp('2.6%'),
            fontFamily: 'Nunito-Italic',
          }}>
          Loading... Please wait a while...
        </Text>
        <ActivityIndicator size="large" color="#1D94A8" />
      </View>
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: '#FAF8F3'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Image
            source={{uri: props.detail.image}}
            style={styles.campaignPoster}
          />
          <View style={styles.cardContainer}>
            <Text style={styles.title}>{props.detail.title}</Text>
            <Card
              data={props.detail}
              donator={props.detailDonations}
              remainingTime={props.dataRemainingTime}
            />
          </View>
        </View>

        {props.dataUser.id === props.detail.userId ? (
          <TouchableOpacity onPress={toggleModalManage}>
            <Text style={styles.manageText}>Manage Campaign</Text>
          </TouchableOpacity>
        ) : null}

        <Modal
          isVisible={isModalManageVisible}
          testID={'modal'}
          style={styles.viewModal}>
          <View style={styles.viewModalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalHeaderTitle}>Manage Campaign</Text>
              <TouchableOpacity title="Hide modal" onPress={toggleModalManage}>
                <Ionicons name="close" size={hp('3.5%')} color={'#000000'} />
              </TouchableOpacity>
            </View>
            <View style={styles.modalContent}>
              <TouchableOpacity
                onPress={() => {
                  props.setCampaignId(id, props.navigation);
                }}>
                <Text style={styles.modalContentText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.modalContentText}>Close Campaign</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.modalContentDelete}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <View style={styles.storyContainer}>
          <Text style={styles.storyTitle}>The Story</Text>
          <Text style={styles.storyText}>{props.detail.story}</Text>
        </View>
        <View style={styles.card2Container}>
          <Text
            style={
              styles.updatesTitle
            }>{`Updates (${props.detailUpdates.length})`}</Text>
          {props.detailUpdates.map((item, index) => (
            <View key={index}>
              <CardUpdates data={item} />
            </View>
          ))}
        </View>
        <View style={styles.card2Container}>
          <Text
            style={
              styles.cardTitle
            }>{`Donations (${props.detailDonations.length})`}</Text>
          {props.detailDonations.map((item, index) => (
            <View key={index}>
              <CardDonation data={item} />
            </View>
          ))}
        </View>
        <View style={styles.card2Container}>
          <Text
            style={
              styles.cardTitle
            }>{`Comments (${props.detailComments.length})`}</Text>
          <TextInput
            style={styles.comment}
            placeholder="Give them support.."
            placeholderTextColor="#9F9F9F"
            multiline={true}
            numberOfLines={7}
            value={comment}
            onChangeText={value => setComment(value)}
          />
          <TouchableOpacity
            style={styles.postButton}
            onPress={() => {
              if (props.token !== null) {
                props.createComment(dataComment, id);
                setComment('');
              } else if (props.token === null) {
                Alert.alert('TaliKasih', 'Please login or sign up first!');
              }
            }}>
            <Text style={styles.postButtonText}>POST</Text>
          </TouchableOpacity>
          {props.detailComments.map((item, index) => (
            <View key={index}>
              <CardComment data={item} />
            </View>
          ))}
        </View>
        <View style={styles.relatedCampaignContainer}>
          <Text style={styles.relatedCampaignText}>Related Campaign</Text>
          <FlatList
            data={props.dataRelated}
            horizontal={true}
            numColumns={1}
            showsHorizontalScrollIndicator={false}
            renderItem={data => (
              <View>
                <CardCampaign data={data.item} navigation={props.navigation} />
              </View>
            )}
            keyExtractor={(item, i) => i}
            initialNumToRender={4}
            maxToRenderPerBatch={10}
          />
        </View>
      </ScrollView>
      <Footer navigation={props.navigation} token={props.token} id={id} />
    </View>
  );
};

const reduxState = state => ({
  detail: state.taliKasih.dataCampaignDetail,
  detailUpdates: state.taliKasih.dataUpdateProgress,
  detailDonations: state.taliKasih.dataDonator,
  detailComments: state.taliKasih.dataComment,
  dataRelated: state.taliKasih.dataRelated,
  dataRemainingTime: state.taliKasih.dataRemainingTime,
  dataMyComment: state.taliKasih.dataMyComment,
  dataUser: state.auth.dataUser,
  loading: state.taliKasih.isLoading,
  token: state.auth.token,
});

const reduxDispatch = dispatch => ({
  getCampaignDetail: a => dispatch({type: 'GET_CAMPAIGN_DETAIL', value: a}),
  getRelatedCampaign: b => dispatch({type: 'GET_RELATED_CAMPAIGN', value: b}),
  createComment: (c, d) =>
    dispatch({type: 'CREATE_COMMENT', data: c, value: d}),
  setCampaignId: (e, f) =>
    dispatch({type: 'SET_CAMPAIGN_ID', data: e, navigation: f}),
});

export default connect(reduxState, reduxDispatch)(CampaignDetails);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF8F3',
  },
  campaignPoster: {
    width: wp('100%'),
    height: hp('30%'),
    resizeMode: 'stretch',
  },
  cardContainer: {
    paddingTop: hp('3%'),
    paddingBottom: hp('2%'),
    paddingHorizontal: wp('5%'),
  },
  title: {
    fontFamily: 'Nunito-Bold',
    fontSize: hp('3.2%'),
    color: '#000000',
    lineHeight: hp('3.4%'),
    marginBottom: 15,
  },
  storyContainer: {
    width: wp('100%'),
    paddingHorizontal: wp('11%'),
    paddingVertical: hp('2.6%'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4F9F9',
    marginBottom: 20,
  },
  storyTitle: {
    fontFamily: 'Nunito-Bold',
    fontSize: hp('2.4%'),
    color: '#000000',
    marginBottom: 5,
  },
  storyText: {
    fontFamily: 'Nunito-Regular',
    fontSize: hp('2%'),
    color: '#000000',
  },
  card2Container: {
    width: wp('90%'),
    paddingVertical: hp('3%'),
    paddingHorizontal: wp('5%'),
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    borderRadius: 8,
    elevation: 3,
    marginBottom: 20,
  },
  updatesTitle: {
    fontFamily: 'Nunito-Bold',
    fontSize: hp('2.4%'),
    color: '#000000',
  },
  cardTitle: {
    fontFamily: 'Nunito-Bold',
    fontSize: hp('2.4%'),
    color: '#000000',
    marginBottom: 15,
  },
  comment: {
    backgroundColor: '#FFFFFF',
    fontFamily: 'Nunito-Regular',
    fontSize: hp('2.2%'),
    color: '#000000',
    textAlignVertical: 'top',
    paddingHorizontal: wp('3%'),
    borderRadius: 2,
    elevation: 3,
    marginBottom: 10,
  },
  postButton: {
    width: wp('25%'),
    height: hp('6%'),
    backgroundColor: '#A43F3C',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    borderRadius: 4,
    elevation: 4,
    marginBottom: 20,
  },
  postButtonText: {
    fontFamily: 'Nunito-Bold',
    fontSize: hp('2.4%'),
    color: '#FFFFFF',
    textAlign: 'center',
  },
  relatedCampaignContainer: {
    paddingLeft: wp('5%'),
    backgroundColor: '#FAF8F3',
  },
  relatedCampaignText: {
    fontFamily: 'Nunito-Bold',
    fontSize: hp('2.7%'),
    color: '#000000',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
  manageText: {
    fontFamily: 'Nunito-Bold',
    fontSize: hp('2.2%'),
    color: '#000000',
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginBottom: 20,
  },
  viewModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  viewModalContainer: {
    width: wp('100%'),
    backgroundColor: '#FFFFFF',
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('1.5%'),
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: hp('3%'),
  },
  modalHeaderTitle: {
    fontSize: hp('2.6%'),
    fontFamily: 'Nunito-Bold',
    color: '#000000',
  },
  modalContent: {
    paddingHorizontal: wp('2%'),
    marginBottom: 10,
  },
  modalContentText: {
    fontFamily: 'Nunito-Regular',
    fontSize: hp('2.4%'),
    color: '#000000',
    marginBottom: hp('2.4%'),
  },
  modalContentDelete: {
    fontFamily: 'Nunito-Regular',
    fontSize: hp('2.4%'),
    color: '#A43F3C',
  },
});
