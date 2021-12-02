import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {FAB} from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';

const FilterButton = props => {
  return (
    <FAB
      buttonStyle={styles.buttonFilter}
      containerStyle={{elevation: 0}}
      placement="right"
      color="#F4F4F4"
      icon={<Feather name="filter" style={styles.iconFilter} />}
      onPress={() => props.navigation.navigate('Filter Sort')}
    />
  );
};

export default FilterButton;

const styles = StyleSheet.create({
  iconFilter: {
    fontSize: hp('3.5%'),
    color: '#1D94A8',
  },
  buttonFilter: {
    borderRadius: 8,
  },
});
