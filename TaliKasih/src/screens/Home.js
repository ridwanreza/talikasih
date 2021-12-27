import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  ActivityIndicator,
  Linking,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CardCampaign from '../components/CardCampaign';
import FilterButton from '../components/FilterButton';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import CarouselMedical from '../assets/images/Carousel_Medical.png';
import CarouselEnvironment from '../assets/images/Carousel_Environment.png';
import CarouselEducation from '../assets/images/Carousel_Education.png';
import CardCampaignFull from '../components/CardCampaignFull';
import {connect} from 'react-redux';

const dataCarousel = [
  {id: 1, img: CarouselEducation},
  {id: 2, img: CarouselMedical},
  {id: 3, img: CarouselEnvironment},
];

const Home = props => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);

  useEffect(() => {
    props.getCampaign();
    if (props.token !== null) {
      props.getUser();
    }
  }, [props.token]);

  useEffect(() => {
    props.getCampaign();
  }, [props.dataCampaign, props.dataDonate]);

  useEffect(() => {
    const getUrlAsync = async () => {
      // Get the deep link used to open the app
      const initialUrl = await Linking.getInitialURL();
      console.log('initial ', initialUrl);
      if (initialUrl !== null) {
        let id = initialUrl.split('/')[4];
        props.navigation.navigate('CampaignDetails', {campaignId: id});
        console.log('initial id', id);
      }
    };

    Linking.addEventListener('url', e => {
      let id = e.url.split('/')[4];
      props.navigation.navigate('CampaignDetails', {campaignId: id});
      console.log('id', id);
    });

    getUrlAsync();
  }, []);

  const renderItem = ({item, index}) => {
    return <Image source={item.img} style={styles.slideImg} />;
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
  } else if (props.filter === true) {
    return (
      <View style={styles.filterContainer}>
        <View style={styles.filterCategoryContainer}>
          <Text style={styles.filterCategoryText}>
            {props.dataFilter[0].category.category}
          </Text>
        </View>
        <Text style={styles.filterTitle}>
          {props.dataFilter[0].category.quotes}
        </Text>
        <FlatList
          data={props.dataFilter}
          horizontal={false}
          numColumns={1}
          showsVerticalScrollIndicator={false}
          renderItem={data => (
            <View>
              <CardCampaignFull
                data={data.item}
                navigation={props.navigation}
              />
            </View>
          )}
          keyExtractor={(item, i) => i}
          initialNumToRender={4}
          maxToRenderPerBatch={10}
        />
        <FilterButton navigation={props.navigation} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.carousel}>
          <Carousel
            layout="stack"
            ref={isCarousel}
            data={dataCarousel}
            renderItem={renderItem}
            sliderWidth={wp('100%')}
            itemWidth={wp('100%')}
            onSnapToItem={index => setIndex(index)}
            useScrollView={true}
            lockScrollWhileSnapping={true}
            autoplay={true}
            autoplayInterval={8000}
            loop={true}
            loopClonesPerSide={3}
          />
        </View>
        <Pagination
          dotsLength={dataCarousel.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          containerStyle={{marginBottom: -10, marginTop: -10}}
          dotStyle={{
            width: wp('5%'),
            height: hp('1%'),
            borderRadius: 5,
            marginHorizontal: -5,
            backgroundColor: '#A87B14',
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.4}
          tappableDots={true}
        />
        <Text style={styles.titleCardText}>Newest</Text>
        <FlatList
          data={props.dataNewest}
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
        <Text style={styles.titleCardText}>Most Urgent</Text>
        <FlatList
          data={props.dataUrgent}
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
        <Text style={styles.titleCardText}>Gained Momentum</Text>
        <FlatList
          data={props.dataGainedMomentum}
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
      </ScrollView>
      <FilterButton navigation={props.navigation} />
    </View>
  );
};

const reduxState = state => ({
  dataNewest: state.taliKasih.dataNewest,
  dataUrgent: state.taliKasih.dataUrgent,
  dataGainedMomentum: state.taliKasih.dataGainedMomentum,
  dataFilter: state.taliKasih.dataFilter,
  dataCampaign: state.taliKasih.dataCampaign,
  dataDonate: state.taliKasih.dataDonate,
  loading: state.taliKasih.isLoading,
  filter: state.taliKasih.filter,
  token: state.auth.token,
});

const reduxDispatch = dispatch => ({
  getCampaign: () => dispatch({type: 'GET_CAMPAIGN'}),
  getUser: () => dispatch({type: 'GET_USER'}),
});

export default connect(reduxState, reduxDispatch)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingLeft: wp('4%'),
    backgroundColor: '#FAF8F3',
  },
  filterContainer: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: wp('4%'),
    backgroundColor: '#FAF8F3',
  },
  titleCardText: {
    fontFamily: 'Nunito-Bold',
    fontSize: hp('2.7%'),
    color: '#000000',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
  carousel: {
    flexDirection: 'row',
    paddingRight: wp('4%'),
  },
  slideImg: {
    width: wp('92%'),
    height: hp('30%'),
    resizeMode: 'stretch',
    borderRadius: 8,
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
