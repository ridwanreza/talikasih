import React, {useEffect} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CardMyDonation from '../components/CardMyDonation';
import FooterMyDonation from '../components/FooterMyDonation';
import {connect} from 'react-redux';

const MyDonation = props => {
  useEffect(() => {
    props.getMyDonation();
  }, [props.dataDonate]);

  return (
    <View style={{flex: 1, backgroundColor: '#FAF8F3'}}>
      <View style={styles.container}>
        <FlatList
          data={props.dataMyDonation}
          horizontal={false}
          numColumns={1}
          showsVerticalScrollIndicator={false}
          renderItem={data => (
            <View>
              <CardMyDonation data={data.item} navigation={props.navigation} />
            </View>
          )}
          keyExtractor={(item, i) => i}
          initialNumToRender={4}
          maxToRenderPerBatch={10}
        />
      </View>
      <FooterMyDonation navigation={props.navigation} />
    </View>
  );
};

const reduxState = state => ({
  dataDonate: state.taliKasih.dataDonate,
  dataMyDonation: state.taliKasih.dataMyDonation,
});

const reduxDispatch = dispatch => ({
  getMyDonation: () => dispatch({type: 'GET_MY_DONATION'}),
});

export default connect(reduxState, reduxDispatch)(MyDonation);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAF8F3',
  },
});
