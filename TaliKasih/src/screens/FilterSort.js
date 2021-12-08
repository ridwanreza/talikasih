import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FooterFilterSort from '../components/FooterFilterSort';
import Entypo from 'react-native-vector-icons/Entypo';
import ImgDisability from '../assets/images/disability.png';
import ImgMedical from '../assets/images/medical.png';
import ImgEducation from '../assets/images/education.png';
import ImgReligious from '../assets/images/religious.png';
import ImgHumanity from '../assets/images/humanity.png';
import ImgEnvironment from '../assets/images/environment.png';
import ImgDisaster from '../assets/images/disaster.png';
import ImgSociopreneur from '../assets/images/sociopreneur.png';

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

const dataSort = [
  {id_sort: 1, name: 'Newest'},
  {id_sort: 2, name: 'Most urgent'},
  {id_sort: 3, name: 'Popular'},
  {id_sort: 4, name: 'Less Donation'},
];

const FilterSort = props => {
  const [category, setCategory] = useState();
  const [sort, setSort] = useState();
  const [isCategoryFocused, setIsCategoryFocused] = useState();
  const [isSortFocused, setIsSortFocused] = useState();

  const dataFilterSort = {
    category,
    sort,
  };

  return (
    <View style={{flex: 1, backgroundColor: '#FAF8F3'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.titleText}>Filter by category</Text>
          <View style={styles.categoryContainer}>
            {dataCategory.map((item, index) => (
              <View key={index}>
                <TouchableOpacity
                  style={
                    isCategoryFocused == item.id_category
                      ? styles.categoryCardFocused
                      : styles.categoryCard
                  }
                  onPress={() => {
                    setCategory(item.id_category);
                    setIsCategoryFocused(item.id_category);
                  }}>
                  <Image source={item.img} style={styles.categoryCardImg} />
                  <Text style={styles.categoryCardText}>{item.name}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
          <Text style={styles.titleText}>Sort by</Text>
          {dataSort.map((item, index) => (
            <View key={index}>
              <TouchableOpacity
                style={
                  isSortFocused == item.name
                    ? styles.sortCardFocused
                    : styles.sortCard
                }
                onPress={() => {
                  setSort(item.name);
                  setIsSortFocused(item.name);
                }}>
                <Text style={styles.sortCardText}>{item.name}</Text>
                <Entypo
                  name={isSortFocused == item.name ? 'check' : null}
                  style={styles.sortCardChecked}
                />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
      <FooterFilterSort data={dataFilterSort} navigation={props.navigation} />
    </View>
  );
};

export default FilterSort;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#FAF8F3',
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
    marginBottom: 15,
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
  sortCard: {
    width: wp('91.5%'),
    height: hp('7%'),
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: '#E1E0E0',
    borderRadius: 5,
    backgroundColor: '#FAF8F3',
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sortCardFocused: {
    width: wp('91.5%'),
    height: hp('7%'),
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: '#E1E0E0',
    borderRadius: 5,
    backgroundColor: '#D7EBEE',
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sortCardText: {
    fontFamily: 'Nunito-Regular',
    fontSize: hp('2.5%'),
    color: '#000000',
  },
  sortCardChecked: {
    fontSize: hp('2.5%'),
    color: '#1D94A8',
  },
});
