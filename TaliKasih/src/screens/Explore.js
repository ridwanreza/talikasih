import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CardCampaign from '../components/CardCampaign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImgDisability from '../assets/images/disability.png';
import ImgMedical from '../assets/images/medical.png';
import ImgEducation from '../assets/images/education.png';
import ImgReligious from '../assets/images/religious.png';
import ImgHumanity from '../assets/images/humanity.png';
import ImgEnvironment from '../assets/images/environment.png';
import ImgDisaster from '../assets/images/disaster.png';
import ImgSociopreneur from '../assets/images/sociopreneur.png';
import {connect} from 'react-redux';

const dataCategory = [
  {id_category: 1, name: 'Disability', img: ImgDisability},
  {id_category: 2, name: 'Medical', img: ImgMedical},
  {id_category: 3, name: 'Education', img: ImgEducation},
  {id_category: 4, name: 'Religious', img: ImgReligious},
  {id_category: 5, name: 'Humanity', img: ImgHumanity},
  {id_category: 6, name: 'Environment', img: ImgEnvironment},
  {id_category: 7, name: 'Disaster', img: ImgDisaster},
  {id_category: 8, name: 'Sociopreneur', img: ImgSociopreneur},
];

const Explore = props => {
  const [category, setCategory] = useState();
  const [isCategoryFocused, setIsCategoryFocused] = useState();
  const [search, setSearch] = useState();

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
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Search"
              placeholderTextColor="#9F9F9F"
              value={search}
              onChangeText={value => setSearch(value)}
            />
            <TouchableOpacity
              style={styles.searchIconContainer}
              onPress={() => {
                if (search) {
                  setIsCategoryFocused();
                  props.searchCampaign(search);
                }
              }}>
              <Ionicons name="search" size={hp('3.5%')} color="#1D94A8" />
            </TouchableOpacity>
          </View>
          <Text style={styles.titleText}>Filter by category</Text>
          <View style={styles.categoryContainer}>
            {dataCategory.map((item, index) => (
              <View key={index}>
                <TouchableOpacity
                  style={
                    isCategoryFocused == item.name
                      ? styles.categoryCardFocused
                      : styles.categoryCard
                  }
                  onPress={() => {
                    setCategory(item.name);
                    setIsCategoryFocused(item.name);
                    setSearch();
                    props.getCampaignByCategory(item.id_category);
                  }}>
                  <Image source={item.img} style={styles.categoryCardImg} />
                  <Text style={styles.categoryCardText}>{item.name}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>

          {props.dataSearch !== null &&
          props.keyword !== null &&
          props.keyword == search &&
          props.selection == 'search' ? (
            <Text
              style={
                styles.titleCardText
              }>{`Showing ${props.dataSearch.length} Results for "${search}"`}</Text>
          ) : props.dataCamp !== null &&
            props.selection == 'category' &&
            isCategoryFocused ? (
            <View style={styles.filterContainer}>
              <View style={styles.filterCategoryContainer}>
                <Text style={styles.filterCategoryText}>
                  {props.dataCamp[0].category.category}
                </Text>
              </View>
              <Text style={styles.filterTitle}>
                {props.dataCamp[0].category.quotes}
              </Text>
            </View>
          ) : null}

          {props.error === null &&
          props.keyword !== null &&
          props.keyword == search &&
          props.selection == 'search' ? (
            <FlatList
              data={props.dataSearch}
              horizontal={true}
              numColumns={1}
              showsHorizontalScrollIndicator={false}
              renderItem={data => (
                <View>
                  <CardCampaign
                    data={data.item}
                    navigation={props.navigation}
                  />
                </View>
              )}
              keyExtractor={(item, i) => i}
              initialNumToRender={4}
              maxToRenderPerBatch={10}
            />
          ) : props.error == 'Events not found' &&
            props.keyword !== null &&
            props.keyword == search &&
            props.selection == 'search' ? (
            <Text
              style={
                styles.titleCardText
              }>{`Showing ${0} Results for "${search}"`}</Text>
          ) : props.error === null &&
            props.selection == 'category' &&
            isCategoryFocused ? (
            <FlatList
              data={props.dataCamp}
              horizontal={true}
              numColumns={1}
              showsHorizontalScrollIndicator={false}
              renderItem={data => (
                <View>
                  <CardCampaign
                    data={data.item}
                    navigation={props.navigation}
                  />
                </View>
              )}
              keyExtractor={(item, i) => i}
              initialNumToRender={4}
              maxToRenderPerBatch={10}
            />
          ) : null}
        </View>
      </ScrollView>
    </View>
  );
};

const reduxState = state => ({
  dataSearch: state.taliKasih.dataSearch,
  keyword: state.taliKasih.keyword,
  dataCamp: state.taliKasih.dataCampaignByCategory,
  selection: state.taliKasih.selection,
  loading: state.taliKasih.isLoading,
  error: state.taliKasih.error,
});

const reduxDispatch = dispatch => ({
  searchCampaign: a => dispatch({type: 'SEARCH_CAMPAIGN', value: a}),
  getCampaignByCategory: b =>
    dispatch({type: 'GET_CAMPAIGN_BY_CATEGORY', value: b}),
});

export default connect(reduxState, reduxDispatch)(Explore);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15,
    paddingLeft: 15,
    backgroundColor: '#FAF8F3',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 15,
    marginTop: 5,
    marginBottom: 15,
  },
  textInput: {
    width: wp('72%'),
    height: hp('6.5%'),
    fontFamily: 'Nunito-Regular',
    fontSize: hp('2.3%'),
    color: '#000000',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    elevation: 3,
  },
  searchIconContainer: {
    width: wp('15%'),
    height: hp('6.5%'),
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#1D94A8',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontFamily: 'Nunito-Regular',
    fontSize: hp('2.3%'),
    color: '#9F9F9F',
    marginBottom: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingRight: 15,
    marginBottom: 10,
  },
  categoryCard: {
    width: wp('20%'),
    height: hp('10%'),
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#E1E0E0',
    backgroundColor: '#FFFFFF',
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginBottom: 15,
  },
  categoryCardFocused: {
    width: wp('20%'),
    height: hp('10%'),
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#E1E0E0',
    backgroundColor: '#D7EBEE',
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginBottom: 15,
  },
  categoryCardImg: {
    width: wp('10%'),
    height: hp('5.5%'),
    resizeMode: 'contain',
    marginBottom: 2,
  },
  categoryCardText: {
    fontFamily: 'Nunito-Regular',
    fontSize: hp('1.5%'),
    color: '#9F9F9F',
  },
  titleCardText: {
    fontFamily: 'Nunito-Bold',
    fontSize: hp('2.7%'),
    color: '#000000',
    marginBottom: 10,
  },
  errorMsg: {
    fontFamily: 'Nunito-Regular',
    fontSize: hp('2.4%'),
    color: '#1D94A8',
  },
  filterContainer: {
    flex: 1,
    backgroundColor: '#FAF8F3',
  },
  filterCategoryContainer: {
    width: wp('32%'),
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#A43F3C',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginBottom: 10,
  },
  filterCategoryText: {
    fontSize: hp('2%'),
    fontFamily: 'Nunito-Bold',
    color: '#A43F3C',
  },
  filterTitle: {
    fontSize: hp('3%'),
    fontFamily: 'Nunito-Bold',
    color: '#000000',
    marginBottom: 15,
    lineHeight: hp('4%'),
  },
});
