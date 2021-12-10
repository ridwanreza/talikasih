import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SelectDropdown from 'react-native-select-dropdown';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import {launchImageLibrary} from 'react-native-image-picker';
import Feather from 'react-native-vector-icons/Feather';
import Footer from '../components/FooterCreateCampaign';
import Auth from '../components/Auth';
import {connect} from 'react-redux';

const dataCategory = [
  {id_category: 1, name: 'Disability'},
  {id_category: 2, name: 'Medical'},
  {id_category: 3, name: 'Education'},
  {id_category: 4, name: 'Religious'},
  {id_category: 5, name: 'Humanity'},
  {id_category: 6, name: 'Environment'},
  {id_category: 7, name: 'Disaster'},
  {id_category: 8, name: 'Sociopreneur'},
];

const CreateCampaign = props => {
  const [img, setImg] = useState();
  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const [goal, setGoal] = useState();
  const [pickDate, setPickDate] = useState();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [story, setStory] = useState();
  const [rawImage, setRawImage] = useState();
  const [categoryId, setCategoryId] = useState();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = datetime => {
    hideDatePicker();
    setPickDate(moment(datetime).format('YYYY/MM/DD'));
  };

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

  const dataCampaign = {
    image: rawImage,
    title: title,
    goal: goal,
    dueDate: pickDate,
    story: story,
    categoryId: categoryId,
  };

  useEffect(() => {
    setImg();
    setRawImage();
    setTitle();
    setGoal();
    setPickDate();
    setStory();
    setCategory();
    setCategoryId();
  }, [props.dataCampaign]);

  if (props.token === null) {
    return <Auth navigation={props.navigation} />;
  } else {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {!img ? (
            <View style={styles.posterContainer}>
              <TouchableOpacity onPress={() => pickImage()}>
                <Feather name="plus-circle" style={styles.button} />
              </TouchableOpacity>
              <Text style={styles.buttonText}>Add Header Photo</Text>
            </View>
          ) : (
            <View style={styles.posterContainer}>
              <Image source={!img ? null : {uri: img}} style={styles.poster} />
            </View>
          )}
          {img ? (
            <TouchableOpacity
              style={styles.changePosterContainer}
              onPress={() => pickImage()}>
              <Text style={styles.changePosterText}>Change Header Image</Text>
            </TouchableOpacity>
          ) : null}

          <View style={styles.arrange}>
            <Text style={styles.titleInputText}>Title</Text>
            <Text style={styles.requiredMark}>*</Text>
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="e.g. Help us to get clean water"
            placeholderTextColor="#9F9F9F"
            value={title}
            onChangeText={value => setTitle(value)}
          />
          <View style={styles.arrange}>
            <Text style={styles.titleInputText}>Category</Text>
            <Text style={styles.requiredMark}>*</Text>
          </View>
          <SelectDropdown
            data={dataCategory}
            onSelect={(selectedItem, index) => {
              setCategory(selectedItem.name);
              setCategoryId(selectedItem.id_category);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem.name;
            }}
            rowTextForSelection={(item, index) => {
              return item.name;
            }}
            defaultButtonText={'Select campaign category'}
            dropdownIconPosition={'right'}
            buttonStyle={styles.dropDownContainer}
            buttonTextStyle={styles.dropDownText}
            renderDropdownIcon={() => {
              return <Feather name="chevron-down" style={styles.icon} />;
            }}
          />
          <View style={styles.arrange}>
            <Text style={styles.titleInputText}>Goal</Text>
            <Text style={styles.requiredMark}>*</Text>
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="e.g 20,000,000"
            placeholderTextColor="#9F9F9F"
            keyboardType="numeric"
            value={goal}
            onChangeText={value => setGoal(value)}
          />
          <View style={styles.arrange}>
            <Text style={styles.titleInputText}>Due Date</Text>
            <Text style={styles.optional}>(Optional)</Text>
          </View>
          <Pressable onPress={showDatePicker}>
            <TextInput
              style={styles.textInput}
              placeholder="Select due date"
              placeholderTextColor="#9F9F9F"
              value={pickDate}
              editable={false}
            />
          </Pressable>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
          <View style={styles.arrange}>
            <Text style={styles.titleInputText}>Story</Text>
            <Text style={styles.requiredMark}>*</Text>
          </View>
          <TextInput
            style={styles.textArea}
            placeholder="Tell us your story"
            placeholderTextColor="#9F9F9F"
            multiline={true}
            numberOfLines={8}
            value={story}
            onChangeText={value => setStory(value)}
          />
          <Footer
            name={props.loading === true ? 'Loading...' : 'CREATE CAMPAIGN'}
            data={dataCampaign}
            navigation={props.navigation}
          />
        </View>
      </ScrollView>
    );
  }
};

const reduxState = state => ({
  token: state.auth.token,
  dataCampaign: state.taliKasih.dataCampaign,
  loading: state.taliKasih.isLoading,
  error: state.taliKasih.error,
});

export default connect(reduxState, null)(CreateCampaign);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp('3%'),
    paddingHorizontal: wp('5%'),
    backgroundColor: '#FAF8F3',
  },
  posterContainer: {
    width: wp('90%'),
    height: hp('30%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#E1E0E0',
    marginBottom: 15,
    overflow: 'hidden',
  },
  poster: {
    width: wp('90%'),
    height: hp('30%'),
    resizeMode: 'stretch',
  },
  button: {
    fontSize: hp('5%'),
    color: '#9F9F9F',
    marginBottom: 10,
  },
  buttonText: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: hp('2.4%'),
    color: '#9F9F9F',
  },
  changePosterContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  changePosterText: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: hp('2.2%'),
    color: '#1D94A8',
  },
  arrange: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  titleInputText: {
    fontFamily: 'Nunito-Bold',
    fontSize: hp('2.2%'),
    color: '#000000',
  },
  requiredMark: {
    fontFamily: 'Nunito-Bold',
    fontSize: hp('2.2%'),
    color: '#A43F3C',
  },
  optional: {
    fontFamily: 'Nunito-Bold',
    fontSize: hp('2.2%'),
    color: '#9F9F9F',
    marginLeft: 5,
  },
  textInput: {
    height: hp('5.5%'),
    fontFamily: 'Nunito-Regular',
    fontSize: hp('2%'),
    color: '#2D2D2D',
    backgroundColor: '#FCFCFC',
    borderRadius: 8,
    paddingHorizontal: 10,
    elevation: 5,
    marginBottom: 15,
  },
  textArea: {
    fontFamily: 'Nunito-Regular',
    fontSize: hp('2%'),
    color: '#2D2D2D',
    backgroundColor: '#FCFCFC',
    borderRadius: 8,
    paddingHorizontal: 10,
    elevation: 5,
    textAlignVertical: 'top',
    marginBottom: 20,
  },
  dropDownContainer: {
    width: wp('90%'),
    height: hp('5.5%'),
    backgroundColor: '#FCFCFC',
    borderRadius: 8,
    paddingHorizontal: 2,
    elevation: 5,
    marginBottom: 15,
  },
  dropDownText: {
    fontFamily: 'Nunito-Regular',
    fontSize: hp('2%'),
    color: '#9F9F9F',
    textAlign: 'left',
  },
  icon: {
    fontSize: hp('2.8%'),
    color: '#9F9F9F',
    marginRight: 5,
  },
});
