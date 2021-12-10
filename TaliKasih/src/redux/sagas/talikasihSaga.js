import {takeLatest, put} from 'redux-saga/effects';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem('TOKEN');
    if (value !== null) {
      return value;
    } else {
      return null;
    }
  } catch (e) {
    console.log(e);
  }
};

function* getCampaign() {
  try {
    const resCampaign = yield axios({
      method: 'GET',
      url: `https://api-talikasih.herokuapp.com/discover/all`,
    });
    if (resCampaign && resCampaign.data) {
      yield put({
        type: 'GET_CAMPAIGN_SUCCESS',
        dataNewest: resCampaign.data.dataNewest,
        dataUrgent: resCampaign.data.dataUrgent,
        dataGainedMomentum: resCampaign.data.gainedMomentum,
        error: null,
      });
    }
  } catch (err) {
    console.log(err);
    yield put({type: 'GET_CAMPAIGN_FAILED', error: err.response.data.errors});
  }
}

function* getCampaignDetail(action) {
  try {
    const resCampaign = yield axios({
      method: 'GET',
      url: `https://api-talikasih.herokuapp.com/discover/details/${action.value}`,
    });
    if (resCampaign && resCampaign.data) {
      yield put({
        type: 'GET_CAMPAIGN_DETAIL_SUCCESS',
        campaignDetail: resCampaign.data.detailCampaign,
        donator: resCampaign.data.donatur,
        comment: resCampaign.data.komen,
        related: resCampaign.data.related,
        remainingTime: resCampaign.data.remainingTime,
        error: null,
      });
    }
  } catch (err) {
    console.log(err);
    yield put({
      type: 'GET_CAMPAIGN_DETAIL_FAILED',
      error: err.response.data.errors,
    });
  }
}

function* getRelatedCampaign(action) {
  try {
    const resCampaign = yield axios({
      method: 'GET',
      url: `https://api-talikasih.herokuapp.com/discover/related/${action.value}`,
    });
    if (resCampaign && resCampaign.data) {
      yield put({
        type: 'GET_RELATED_CAMPAIGN_SUCCESS',
        related: resCampaign.data.data,
        error: null,
      });
    }
  } catch (err) {
    console.log(err);
    yield put({
      type: 'GET_RELATED_CAMPAIGN_FAILED',
      error: err.response.data.errors,
    });
  }
}

function* getMyCampaign() {
  try {
    const token = yield getToken();

    const resCampaign = yield axios({
      method: 'GET',
      url: `https://api-talikasih.herokuapp.com/profile/myCampaign`,
      headers: {
        access_token: token,
      },
    });
    if (resCampaign && resCampaign.data) {
      yield put({
        type: 'GET_MY_CAMPAIGN_SUCCESS',
        data: resCampaign.data.data,
        error: null,
      });
    }
  } catch (err) {
    console.log(err);
    yield put({
      type: 'GET_MY_CAMPAIGN_FAILED',
      error: err.response.data.errors,
    });
  }
}

function* getMyDonation() {
  try {
    const token = yield getToken();

    const resCampaign = yield axios({
      method: 'GET',
      url: `https://api-talikasih.herokuapp.com/profile/myDonate`,
      headers: {
        access_token: token,
      },
    });
    if (resCampaign && resCampaign.data) {
      yield put({
        type: 'GET_MY_DONATION_SUCCESS',
        data: resCampaign.data.data,
        error: null,
      });
    }
  } catch (err) {
    console.log(err);
    yield put({
      type: 'GET_MY_DONATION_FAILED',
      error: err.response.data.errors,
    });
  }
}

function* searchCampaign(action) {
  try {
    const resCampaign = yield axios({
      method: 'GET',
      url: `https://api-talikasih.herokuapp.com/discover/search?search=${action.value}`,
    });
    if (resCampaign && resCampaign.data) {
      yield put({
        type: 'SEARCH_CAMPAIGN_SUCCESS',
        data: resCampaign.data.campaigns,
        error: null,
      });
    }
  } catch (err) {
    console.log(err);
    yield put({
      type: 'SEARCH_CAMPAIGN_FAILED',
      error: err.response.data.errors,
    });
  }
}

function* filterCampaign(action) {
  try {
    const resCampaign = yield axios({
      method: 'GET',
      url: `https://api-talikasih.herokuapp.com/discover/category?kategori=${action.category}&sort=${action.sort}`,
    });
    if (resCampaign && resCampaign.data) {
      yield put({
        type: 'FILTER_CAMPAIGN_SUCCESS',
        data: resCampaign.data.campaigns,
        error: null,
      });
      action.navigation.navigate('Main');
    }
  } catch (err) {
    console.log(err);
    yield put({
      type: 'FILTER_CAMPAIGN_FAILED',
      error: err.response.data.errors,
    });
  }
}

function* setFilter(action) {
  yield put({type: 'FILTER_SUCCESS', data: action.data});
}

function* createCampaign(action) {
  try {
    const token = yield getToken();

    const resCampaign = yield axios({
      method: 'POST',
      url: `https://api-talikasih.herokuapp.com/campaign`,
      headers: {
        access_token: token,
      },
      data: action.data,
    });
    if (resCampaign && resCampaign.data) {
      yield put({
        type: 'CREATE_CAMPAIGN_SUCCESS',
        data: resCampaign.data.data,
        error: null,
      });
      action.navigation.navigate('Main', {screen: 'Donate'});
    }
  } catch (err) {
    console.log(err);
    yield put({
      type: 'CREATE_CAMPAIGN_FAILED',
      error: err.response.data.errors,
    });
  }
}
function* createComment(action) {
  try {
    const token = yield getToken();

    const resCampaign = yield axios({
      method: 'POST',
      url: `https://api-talikasih.herokuapp.com/comment/${action.value}`,
      headers: {
        access_token: token,
      },
      data: action.data,
    });
    if (resCampaign && resCampaign.data) {
      yield put({
        type: 'CREATE_COMMENT_SUCCESS',
        data: resCampaign.data.data,
        error: null,
      });
    }
  } catch (err) {
    console.log(err);
    yield put({
      type: 'CREATE_COMMENT_FAILED',
      error: err.response.data.errors,
    });
  }
}

function* taliKasihSaga() {
  yield takeLatest('GET_CAMPAIGN', getCampaign);
  yield takeLatest('GET_CAMPAIGN_DETAIL', getCampaignDetail);
  yield takeLatest('GET_RELATED_CAMPAIGN', getRelatedCampaign);
  yield takeLatest('GET_MY_CAMPAIGN', getMyCampaign);
  yield takeLatest('GET_MY_DONATION', getMyDonation);
  yield takeLatest('SEARCH_CAMPAIGN', searchCampaign);
  yield takeLatest('FILTER_CAMPAIGN', filterCampaign);
  yield takeLatest('FILTER', setFilter);
  yield takeLatest('CREATE_CAMPAIGN', createCampaign);
  yield takeLatest('CREATE_COMMENT', createComment);
}

export default taliKasihSaga;
