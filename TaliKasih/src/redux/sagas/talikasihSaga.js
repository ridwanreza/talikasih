import {takeLatest, put} from 'redux-saga/effects';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem('TOKEN');
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log(e);
  }
};

function* getCampaign() {
  try {
    const responseCampaign = yield axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=2d4072f5f157d3f471fe122ba024224f&language=en-US&page=1`,
    );

    yield put({
      type: 'GET_CAMPAIGN_SUCCESS',
      data: responseCampaign.data.results,
    });
  } catch (err) {
    console.log(err);
  }
}

function* getCampaignDetail(action) {
  try {
    const token = yield getToken();

    const responseCampaign = yield axios({
      method: 'GET',
      url: `https://api-see-event-teamb.herokuapp.com/event/${action.value}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: action.data,
    });

    yield put({
      type: 'GET_CAMPAIGN_DETAIL_SUCCESS',
      data: responseCampaign.data.data,
    });
    //console.log(responseEvent.data.data);
  } catch (err) {
    console.log(err);
  }
}

function* getCampaignDetailComment(action) {
  try {
    const token = yield getToken();

    const responseCampaign = yield axios({
      method: 'GET',
      url: `https://api-see-event-teamb.herokuapp.com/event/${action.value}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: action.data,
    });

    yield put({
      type: 'GET_EVENT_CAMPAIGN_COMMENT_SUCCESS',
      data: responseCampaign.data.data.comments,
    });
    //console.log(responseEvent.data.data.comments);
  } catch (err) {
    console.log(err);
  }
}

function* searchCampaign(action) {
  try {
    const token = yield getToken();

    const responseCampaign = yield axios({
      method: 'GET',
      url: `https://api-see-event-teamb.herokuapp.com/event?search=${action.value}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: action.data,
    });
    yield put({
      type: 'SEARCH_CAMPAIGN_SUCCESS',
      data: responseCampaign.data.data,
    });
  } catch (err) {
    console.log(err);
  }
}

function* setRenderEvent(action) {
  yield put({type: 'RENDER_TYPE_SUCCESS', data: action.data});
}

function* taliKasihSaga() {
  yield takeLatest('GET_CAMPAIGN', getCampaign);
  yield takeLatest('GET_CAMPAIGN_DETAIL', getCampaignDetail);
  yield takeLatest('GET_CAMPAIGN_DETAIL_COMMENT', getCampaignDetailComment);
  yield takeLatest('SEARCH_CAMPAIGN', searchCampaign);
  yield takeLatest('RENDER_TYPE', setRenderEvent);
}

export default taliKasihSaga;
