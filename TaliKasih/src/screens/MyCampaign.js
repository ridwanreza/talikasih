import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CardCampaignFull from '../components/CardCampaignFull';
import FooterMyCampaign from '../components/FooterMyCampaign';
import {connect} from 'react-redux';

const MyCampaign = props => {
  return (
    <View style={{flex: 1, backgroundColor: '#FAF8F3'}}>
      <View style={styles.container}>
        <FlatList
          data={props.dataCampaign}
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
      </View>
      <FooterMyCampaign />
    </View>
  );
};

const reduxState = state => ({
  dataCampaign: state.taliKasih.dataCampaign,
});

const reduxDispatch = dispatch => ({
  getCampaign: () => dispatch({type: 'GET_CAMPAIGN'}),
});

export default connect(reduxState, null)(MyCampaign);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAF8F3',
  },
});
